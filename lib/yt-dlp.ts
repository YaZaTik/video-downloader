import { execFile } from "node:child_process";
import { promisify } from "node:util";
import type { VideoInfo, VideoFormat, Platform } from "@/types";
import { detectPlatform, sanitizeUrl } from "@/lib/validators";

const execFileAsync = promisify(execFile);

// ─── yt-dlp Binary Resolution ──────────────────────────────────────
// Looks for yt-dlp in PATH, or a local ./bin/ directory
function getYtDlpPath(): string {
  return process.env.YTDLP_PATH || "yt-dlp";
}

// ─── Duration Formatter ────────────────────────────────────────────
function formatDuration(seconds: number | null | undefined): string {
  if (!seconds || seconds <= 0) return "0:00";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  return `${m}:${String(s).padStart(2, "0")}`;
}

// ─── File Size Formatter ───────────────────────────────────────────
function formatFileSize(bytes: number | null | undefined): string | undefined {
  if (!bytes || bytes <= 0) return undefined;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// ─── Quality Label Builder ─────────────────────────────────────────
function buildQualityLabel(format: any): string {
  if (format.height) return `${format.height}p`;
  if (format.format_note) return format.format_note;
  if (format.abr) return `Audio ${format.abr}kbps`;
  return format.format_id || "Unknown";
}

// ─── Main Extraction Function ──────────────────────────────────────
export async function extractVideoInfo(rawUrl: string): Promise<VideoInfo> {
  const url = sanitizeUrl(rawUrl);
  const platform = detectPlatform(url);
  if (!platform) {
    throw new Error("INVALID_URL:Unsupported URL. Please enter a valid X (Twitter) or Instagram link.");
  }

  const ytdlp = getYtDlpPath();

  try {
    const { stdout } = await execFileAsync(ytdlp, [
      "--dump-json",
      "--no-warnings",
      "--no-playlist",
      "--no-check-certificates",
      "--socket-timeout", "30",
      url,
    ], {
      timeout: 45_000, // 45 second hard timeout
      maxBuffer: 10 * 1024 * 1024, // 10 MB buffer for large JSON
    });

    const info = JSON.parse(stdout);
    return parseYtDlpOutput(info, platform);
  } catch (err: any) {
    // Classify error types for user-friendly messages
    const message = err.stderr || err.message || String(err);

    if (message.includes("Private") || message.includes("login") || message.includes("authentication")) {
      throw new Error("PRIVATE_CONTENT:This content is from a private account and cannot be downloaded.");
    }
    if (message.includes("not exist") || message.includes("404") || message.includes("removed") || message.includes("unavailable")) {
      throw new Error("NOT_FOUND:This post has been deleted or is no longer available.");
    }
    if (message.includes("429") || message.includes("rate") || message.includes("Too Many")) {
      throw new Error("RATE_LIMITED:Too many requests. Please wait a moment and try again.");
    }
    if (message.includes("ENOENT") || message.includes("not found") || message.includes("not recognized")) {
      throw new Error(
        "EXTRACTION_FAILED:yt-dlp is not installed or not found in PATH. " +
        "Install it with: pip install yt-dlp  (or download from https://github.com/yt-dlp/yt-dlp)"
      );
    }
    if (message.includes("timed out") || message.includes("ETIMEDOUT")) {
      throw new Error("RATE_LIMITED:Request timed out. The server may be busy — please try again.");
    }

    throw new Error(`EXTRACTION_FAILED:Failed to extract video information. ${message.slice(0, 200)}`);
  }
}

// ─── Parse yt-dlp JSON Output ──────────────────────────────────────
function parseYtDlpOutput(info: any, platform: Platform): VideoInfo {
  // Collect video formats (mp4 preferred, with video stream)
  const rawFormats: any[] = info.formats || [];

  const videoFormats: VideoFormat[] = [];
  const seenQualities = new Set<string>();

  // Sort by height descending so highest quality appears first
  const sorted = rawFormats
    .filter((f: any) => {
      // Must have a direct URL
      if (!f.url) return false;
      // Must contain video (height > 0) OR be an audio-only stream
      if (f.vcodec === "none" && f.acodec !== "none") return true; // audio only
      if (f.height && f.height > 0) return true;
      return false;
    })
    .sort((a: any, b: any) => (b.height || 0) - (a.height || 0));

  for (const f of sorted) {
    const isAudio = f.vcodec === "none" && f.acodec !== "none";
    const quality = isAudio ? "Audio" : buildQualityLabel(f);
    const extension = isAudio ? (f.ext === "m4a" ? "m4a" : "mp3") : (f.ext || "mp4");
    const dedupeKey = `${quality}-${extension}`;

    if (seenQualities.has(dedupeKey)) continue;
    seenQualities.add(dedupeKey);

    const sizeStr = formatFileSize(f.filesize || f.filesize_approx);

    videoFormats.push({
      quality,
      url: f.url,
      extension,
      filesize: f.filesize || f.filesize_approx || undefined,
      formatNote: sizeStr ? `${quality} • ${sizeStr}` : quality,
    });
  }

  // If yt-dlp gives a single merged URL but no separate formats
  if (videoFormats.length === 0 && info.url) {
    videoFormats.push({
      quality: "Best",
      url: info.url,
      extension: info.ext || "mp4",
    });
  }

  // Limit to top ~8 formats to keep the UI clean
  const topFormats = videoFormats.slice(0, 8);

  return {
    title: info.title || info.description?.slice(0, 120) || "Untitled",
    thumbnail: info.thumbnail || info.thumbnails?.[0]?.url || "",
    duration: formatDuration(info.duration),
    platform,
    uploader: info.uploader || info.channel || info.uploader_id || undefined,
    formats: topFormats,
  };
}
