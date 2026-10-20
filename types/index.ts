import { z } from "zod";

// ─── Platform Detection ────────────────────────────────────────────
export type Platform = "twitter" | "instagram";

// ─── Video Format ──────────────────────────────────────────────────
export interface VideoFormat {
  quality: string;
  url: string;
  extension: string;
  filesize?: number;
  formatNote?: string;
}

// ─── API Response ──────────────────────────────────────────────────
export interface VideoInfo {
  title: string;
  thumbnail: string;
  duration: string;
  platform: Platform;
  uploader?: string;
  formats: VideoFormat[];
}

export interface ApiSuccessResponse {
  success: true;
  data: VideoInfo;
}

export interface ApiErrorResponse {
  success: false;
  error: string;
  code?: "INVALID_URL" | "PRIVATE_CONTENT" | "NOT_FOUND" | "RATE_LIMITED" | "EXTRACTION_FAILED" | "SERVER_ERROR";
}

export type ApiResponse = ApiSuccessResponse | ApiErrorResponse;

// ─── Zod Schemas ───────────────────────────────────────────────────
export const DownloadRequestSchema = z.object({
  url: z.string().url("Please enter a valid URL"),
});

export type DownloadRequest = z.infer<typeof DownloadRequestSchema>;

// ─── UI State ──────────────────────────────────────────────────────
export type AppState = "idle" | "loading" | "success" | "error";
