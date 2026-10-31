import { NextResponse } from "next/server";

export async function GET() {
  const xml = `<?xml version="1.0"?>
<users>
\t<user>C5B8CCF063D86850778DB66387A53E61</user>
</users>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
