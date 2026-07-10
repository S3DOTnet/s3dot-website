import { ImageResponse } from "next/og";

export const size        = { width: 32, height: 32 };
export const contentType = "image/png";

/* ⑥ 16px でも視認できるシンプルなアイコン
   黒背景に Electric Blue の「S3」 + 青グロー */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#080C10",
          borderRadius: "7px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* グロー — 背景に溶け込みながら文字を際立たせる */}
        <div
          style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(circle at 50% 45%, rgba(0,200,255,0.28) 0%, transparent 70%)",
          }}
        />
        {/* 「S3」テキスト — 小サイズでも太くシャープに */}
        <span
          style={{
            color: "#00C8FF",
            fontSize: "17px",
            fontWeight: 900,
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            letterSpacing: "-0.05em",
            lineHeight: 1,
            zIndex: 1,
          }}
        >
          S3
        </span>
      </div>
    ),
    { ...size }
  );
}
