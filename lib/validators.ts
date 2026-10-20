import type { Platform } from "@/types";

// ─── URL Patterns ──────────────────────────────────────────────────

const TWITTER_PATTERNS = [
  /^https?:\/\/(www\.)?(twitter\.com|x\.com)\/\w+\/status\/\d+/i,
  /^https?:\/\/(www\.)?(twitter\.com|x\.com)\/i\/status\/\d+/i,
  /^https?:\/\/(www\.)?(twitter\.com|x\.com)\/\w+\/video\/\d+/i,
];

const INSTAGRAM_PATTERNS = [
  /^https?:\/\/(www\.)?instagram\.com\/(p|reel|reels|tv)\/[\w-]+/i,
  /^https?:\/\/(www\.)?instagram\.com\/stories\/[\w.]+\/\d+/i,
];

// ─── Validators ────────────────────────────────────────────────────

export function detectPlatform(url: string): Platform | null {
  const trimmed = url.trim();
  if (TWITTER_PATTERNS.some((re) => re.test(trimmed))) return "twitter";
  if (INSTAGRAM_PATTERNS.some((re) => re.test(trimmed))) return "instagram";
  return null;
}

export function isValidVideoUrl(url: string): boolean {
  return detectPlatform(url) !== null;
}

/**
 * Sanitize a URL — strip trailing whitespace and fragment identifiers
 * that may interfere with yt-dlp parsing.
 */
export function sanitizeUrl(url: string): string {
  let cleaned = url.trim();
  // Strip tracking query parameters but keep the base URL intact
  try {
    const parsed = new URL(cleaned);
    // Remove common tracking params
    const trackingParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "igshid", "igsh", "ref"];
    trackingParams.forEach((p) => parsed.searchParams.delete(p));
    cleaned = parsed.toString();
  } catch {
    // If URL parsing fails, return as-is
  }
  return cleaned;
}

/**
 * Returns a human-readable platform name for display.
 */
export function platformDisplayName(platform: Platform): string {
  switch (platform) {
    case "twitter":
      return "X (Twitter)";
    case "instagram":
      return "Instagram";
  }
}
