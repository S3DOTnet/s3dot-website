import Link from "next/link";
import TransparentLogo from "@/components/ui/TransparentLogo";

export const metadata = {
  title: "404 ページが見つかりません",  /* template が "%s | S3DOT" を付加 */
};

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: "#080C10" }}
    >
      {/* グリッド背景 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,45,61,0.22) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(30,45,61,0.22) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Aurora glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%", left: "50%", transform: "translateX(-50%)",
          width: "600px", height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(0,200,255,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Logo */}
        <div className="w-20 h-20 mb-8">
          <TransparentLogo
            src="/images/logo.png"
            alt="S3DOT"
            className="w-full h-full object-contain"
            style={{
              filter:
                "drop-shadow(0 0 20px rgba(0,200,255,0.5)) drop-shadow(0 0 50px rgba(0,200,255,0.2))",
            }}
          />
        </div>

        {/* 404 */}
        <p
          className="font-mono font-black mb-2"
          style={{
            fontSize: "6rem",
            lineHeight: 1,
            background: "linear-gradient(90deg, #00C8FF 0%, #7B5EFF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </p>

        {/* Message */}
        <h1
          className="font-bold mb-3"
          style={{ fontSize: "1.5rem", color: "#E8EDF2" }}
        >
          ページが見つかりません
        </h1>
        <p
          className="mb-10 max-w-sm"
          style={{ fontSize: "0.9rem", color: "rgba(143,164,184,0.85)", lineHeight: 1.8 }}
        >
          お探しのページは移動または削除された可能性があります。
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white transition-all duration-200 hover:brightness-110 hover:scale-[1.03]"
          style={{
            background: "linear-gradient(90deg, #00C8FF, #7B5EFF)",
            boxShadow: "0 0 24px rgba(0,200,255,0.30), 0 8px 24px rgba(0,0,0,0.3)",
          }}
        >
          ← トップページへ戻る
        </Link>

        {/* Brand */}
        <p
          className="mt-12"
          style={{ fontSize: "0.72rem", color: "rgba(74,96,112,0.8)", letterSpacing: "0.08em" }}
        >
          S3DOT — AIを、もっと身近にする会社
        </p>
      </div>
    </div>
  );
}
