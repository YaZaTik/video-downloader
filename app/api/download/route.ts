import { NextRequest, NextResponse } from "next/server";
import { DownloadRequestSchema } from "@/types";
import type { ApiResponse } from "@/types";
import { isValidVideoUrl } from "@/lib/validators";
import { extractVideoInfo } from "@/lib/yt-dlp";

// ─── Simple in-memory rate limiter ─────────────────────────────────
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 10; // max requests
const RATE_WINDOW = 60_000; // per 60 seconds

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

// ─── POST /api/download ────────────────────────────────────────────
export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please wait a minute and try again.", code: "RATE_LIMITED" },
        { status: 429 }
      );
    }

    // Parse and validate body
    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { success: false, error: "Invalid request body. Expected JSON with a 'url' field.", code: "INVALID_URL" },
        { status: 400 }
      );
    }

    const parsed = DownloadRequestSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues[0]?.message || "Invalid URL provided.", code: "INVALID_URL" },
        { status: 400 }
      );
    }

    const { url } = parsed.data;

    // Check URL against allowed platforms
    if (!isValidVideoUrl(url)) {
      return NextResponse.json(
        {
          success: false,
          error: "Unsupported URL. Please paste a public video link from X (Twitter) or Instagram.",
          code: "INVALID_URL",
        },
        { status: 400 }
      );
    }

    // Extract video information using yt-dlp
    const videoInfo = await extractVideoInfo(url);

    if (videoInfo.formats.length === 0) {
      return NextResponse.json(
        { success: false, error: "No downloadable video formats were found for this URL.", code: "EXTRACTION_FAILED" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: videoInfo });
  } catch (err: any) {
    const message = err.message || "An unexpected error occurred.";

    // Parse structured error codes from yt-dlp wrapper
    if (message.includes(":")) {
      const [code, ...rest] = message.split(":");
      const validCodes = ["INVALID_URL", "PRIVATE_CONTENT", "NOT_FOUND", "RATE_LIMITED", "EXTRACTION_FAILED"];
      if (validCodes.includes(code)) {
        const status = code === "RATE_LIMITED" ? 429 : code === "NOT_FOUND" ? 404 : code === "PRIVATE_CONTENT" ? 403 : 422;
        return NextResponse.json({ success: false, error: rest.join(":").trim(), code: code as any }, { status });
      }
    }

    return NextResponse.json(
      { success: false, error: "An internal server error occurred. Please try again later.", code: "SERVER_ERROR" },
      { status: 500 }
    );
  }
}
