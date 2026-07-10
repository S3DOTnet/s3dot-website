import { ImageResponse } from "next/og";

export const size        = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#080C10",
          borderRadius: "40px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
        }}
      >
        {/* Aurora glow */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,200,255,0.3) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />

        {/* Brand name */}
        <div
          style={{
            color: "#00C8FF",
            fontSize: "56px",
            fontWeight: 800,
            letterSpacing: "0.08em",
            zIndex: 1,
            textShadow: "0 0 20px rgba(0,200,255,0.7)",
          }}
        >
          S3
        </div>

        <div
          style={{
            color: "#8FA4B8",
            fontSize: "22px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            zIndex: 1,
            marginTop: "4px",
          }}
        >
          DOT
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, #00C8FF, #7B5EFF)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
