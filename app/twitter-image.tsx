import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SaveIt — Free Video Downloader for X & Instagram";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #09090b 0%, #0f0f14 50%, #09090b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 60,
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: -60,
            left: -60,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(37, 99, 235, 0.18)",
            filter: "blur(70px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            right: -60,
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "rgba(147, 51, 234, 0.18)",
            filter: "blur(70px)",
          }}
        />

        {/* Left: icon + brand */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 24,
              background: "linear-gradient(135deg, #2563eb, #7c3aed)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
            }}
          >
            ⬇
          </div>
          <span
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-2px",
            }}
          >
            SaveIt
          </span>
          <span style={{ color: "#52525b", fontSize: 20 }}>saveit.video</span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: 2,
            height: 200,
            background: "rgba(255,255,255,0.1)",
          }}
        />

        {/* Right: description */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            maxWidth: 480,
          }}
        >
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.3,
            }}
          >
            Free Video Downloader
          </div>
          <div style={{ fontSize: 22, color: "#a1a1aa" }}>
            Download videos from X & Instagram in 1080p Full HD — no watermark, no registration.
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {["HD 1080p", "Free", "No Watermark"].map((b) => (
              <div
                key={b}
                style={{
                  padding: "6px 16px",
                  borderRadius: 999,
                  background: "rgba(37,99,235,0.2)",
                  border: "1px solid rgba(37,99,235,0.4)",
                  color: "#93c5fd",
                  fontSize: 16,
                }}
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
