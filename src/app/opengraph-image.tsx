import { ImageResponse } from "next/og";

export const alt         = "S3DOT｜AIは特別なものじゃない。もう、仕事のスタンダードです。";
export const size        = { width: 1200, height: 630 };
export const contentType = "image/png";

/* ③④ Heroと完全統一 + SNSトリミング対応レイアウト */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080C10",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Helvetica Neue', Arial, 'Hiragino Sans', sans-serif",
        }}
      >
        {/* ── グリッドパターン ── */}
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage:
              "linear-gradient(rgba(30,45,61,0.22) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(30,45,61,0.22) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* ── Aurora：Blue（上） ── */}
        <div
          style={{
            position: "absolute",
            top: "-30%", left: "50%",
            transform: "translateX(-50%)",
            width: "1000px", height: "700px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(0,200,255,0.13) 0%, rgba(0,200,255,0.03) 45%, transparent 70%)",
            filter: "blur(55px)",
          }}
        />

        {/* ── Aurora：Purple（右下） ── */}
        <div
          style={{
            position: "absolute",
            bottom: "-20%", right: "-10%",
            width: "600px", height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(123,94,255,0.10) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />

        {/* ── 下部グラデーションライン ── */}
        <div
          style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #00C8FF 0%, #7B5EFF 100%)",
          }}
        />

        {/* ── コンテンツ（中央集中・SNSトリミング対応） ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            zIndex: 10,
            /* 上下左右に十分なパディングでトリミングされても見える */
            padding: "60px 100px",
            maxWidth: "1000px",
          }}
        >
          {/* ブランドラベル */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "32px",
              padding: "8px 24px",
              borderRadius: "999px",
              border: "1px solid rgba(0,200,255,0.32)",
              background: "rgba(0,200,255,0.09)",
            }}
          >
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00C8FF" }} />
            <span style={{ color: "#00C8FF", fontSize: "17px", fontWeight: 600, letterSpacing: "0.24em" }}>
              S3DOT　AI PARTNER
            </span>
          </div>

          {/* ③ メインコピー 1行目（白） — Heroと同一 */}
          <div
            style={{
              color: "#FFFFFF",
              fontSize: "66px",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              lineHeight: 1.12,
              marginBottom: "6px",
            }}
          >
            AIは特別なものじゃない。
          </div>

          {/* ③ メインコピー 2行目（Electric Blue） */}
          <div
            style={{
              color: "#00C8FF",
              fontSize: "54px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              marginBottom: "28px",
            }}
          >
            もう、仕事のスタンダードです。
          </div>

          {/* ── セパレーター ── */}
          <div
            style={{
              width: "100px",
              height: "1px",
              background: "rgba(0,200,255,0.4)",
              marginBottom: "24px",
            }}
          />

          {/* ③ サブコピー — Heroと同一 */}
          <div
            style={{
              color: "rgba(143,164,184,0.92)",
              fontSize: "26px",
              lineHeight: 1.7,
              letterSpacing: "0.01em",
            }}
          >
            使わない方がコストも時間も、確実に高くつく時代へ。
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
