import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0A0E17 0%, #0A0E17 60%, #121826 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "#00D9B5",
            }}
          />
          <span style={{ fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>
            {siteConfig.name}
          </span>
        </div>

        <div
          style={{
            marginTop: 48,
            display: "flex",
            flexDirection: "column",
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: -1.5,
            maxWidth: 900,
          }}
        >
          <div style={{ display: "flex" }}>Smarter fleet management.</div>
          <div style={{ display: "flex", color: "#2F6FED" }}>
            Complete control.
          </div>
        </div>

        <div
          style={{
            marginTop: 32,
            fontSize: 26,
            color: "#8C94A3",
            maxWidth: 760,
            lineHeight: 1.4,
          }}
        >
          Real-time GPS tracking and complete fleet operations, in one
          connected platform.
        </div>
      </div>
    ),
    { ...size }
  );
}
