import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const mediaUrl = searchParams.get("url");
    const rawFilename = searchParams.get("filename") || "video.mp4";

    if (!mediaUrl) {
      return NextResponse.json(
        { success: false, error: "Missing required 'url' query parameter" },
        { status: 400 }
      );
    }

    // Validate URL protocol
    let parsedUrl: URL;
    try {
      parsedUrl = new URL(mediaUrl);
      if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
        return NextResponse.json(
          { success: false, error: "Invalid URL protocol" },
          { status: 400 }
        );
      }
    } catch {
      return NextResponse.json(
        { success: false, error: "Malformed URL" },
        { status: 400 }
      );
    }

    // Sanitize filename to avoid header injection and bad characters
    const safeFilename = rawFilename
      .replace(/["\r\n\/\\]/g, "_")
      .trim() || "video.mp4";

    // Set appropriate headers for the upstream request
    const requestHeaders: Record<string, string> = {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
      Accept: "*/*",
    };

    if (parsedUrl.hostname.includes("twimg.com")) {
      requestHeaders["Referer"] = "https://x.com/";
    } else if (
      parsedUrl.hostname.includes("cdninstagram.com") ||
      parsedUrl.hostname.includes("fbcdn.net")
    ) {
      requestHeaders["Referer"] = "https://www.instagram.com/";
    }

    const upstreamResponse = await fetch(parsedUrl.toString(), {
      headers: requestHeaders,
    });

    if (!upstreamResponse.ok || !upstreamResponse.body) {
      return NextResponse.json(
        {
          success: false,
          error: `Failed to fetch video stream from source (Status: ${upstreamResponse.status})`,
        },
        { status: upstreamResponse.status || 502 }
      );
    }

    // Prepare response headers with Content-Disposition: attachment
    const responseHeaders = new Headers();
    responseHeaders.set(
      "Content-Disposition",
      `attachment; filename="${safeFilename}"; filename*=UTF-8''${encodeURIComponent(safeFilename)}`
    );

    const contentType =
      upstreamResponse.headers.get("content-type") || "application/octet-stream";
    responseHeaders.set("Content-Type", contentType);

    const contentLength = upstreamResponse.headers.get("content-length");
    if (contentLength) {
      responseHeaders.set("Content-Length", contentLength);
    }

    responseHeaders.set("Cache-Control", "private, no-cache, no-store, must-revalidate");

    return new NextResponse(upstreamResponse.body as unknown as BodyInit, {
      status: 200,
      headers: responseHeaders,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to process download stream",
      },
      { status: 500 }
    );
  }
}
