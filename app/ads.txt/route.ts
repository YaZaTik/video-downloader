import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

export async function GET() {
  const pubId =
    process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ||
    siteConfig.adSensePublisherId ||
    "pub-7298235222437919";
  // Remove "ca-" prefix if present for standard ads.txt format
  const formattedPubId = pubId.replace(/^ca-/, "");

  const content = [
    `# Google AdSense Publisher verification`,
    `google.com, ${formattedPubId}, DIRECT, f08c47fec0942fa0`,
    ``,
  ].join("\n");

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
