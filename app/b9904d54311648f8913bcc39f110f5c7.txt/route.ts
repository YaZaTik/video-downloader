import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse("b9904d54311648f8913bcc39f110f5c7", {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
