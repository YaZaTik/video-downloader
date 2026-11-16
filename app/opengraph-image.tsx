import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SaveIt — Free Video Downloader for X & Instagram";
export const size = { width: 1200, height: 630 };
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow effects */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(37, 99, 235, 0.15)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(147, 51, 234, 0.15)",
            filter: "blur(80px)",
          }}
        />

        {/* Logo / Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          {/* Download icon */}
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "linear-gradient(135deg, #2563eb, #7c3aed)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
            }}
          >
            ⬇
          </div>
          <span
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-2px",
            }}
          >
            SaveIt
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            color: "#a1a1aa",
            textAlign: "center",
            maxWidth: 800,
            marginBottom: 24,
            lineHeight: 1.3,
          }}
        >
          Free Video Downloader for X & Instagram
        </div>

        {/* Features badges */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 8,
          }}
        >
          {["1080p HD", "No Watermark", "Free Forever", "No Registration"].map(
            (badge) => (
              <div
                key={badge}
                style={{
                  padding: "8px 20px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#d4d4d8",
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                {badge}
              </div>
            )
          )}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            color: "#52525b",
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: 1,
          }}
        >
          saveit.video
        </div>
      </div>
    ),
    { ...size }
  );
}
