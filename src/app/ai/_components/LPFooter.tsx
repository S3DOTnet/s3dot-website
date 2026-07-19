import Link from "next/link";
import TransparentLogo from "@/components/ui/TransparentLogo";

const legalLinks = [
  { label: "会社情報", href: "/company" },
  { label: "お問い合わせ", href: "/contact" },
  { label: "プライバシーポリシー", href: "/privacy" },
  { label: "利用規約", href: "/terms" },
  { label: "特定商取引法に基づく表記", href: "/legal" },
];

export default function LPFooter() {
  return (
    <footer className="bg-s3-bg" style={{ borderTop: "1px solid rgba(30,45,61,0.7)" }}>
      <div className="max-w-[1200px] mx-auto px-6 py-10 md:py-14">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <TransparentLogo src="/images/logo.png" alt="S3DOT" className="w-9 h-9 object-contain" />
              <span className="font-bold tracking-[0.14em] text-s3-text group-hover:text-s3-blue transition-colors" style={{ fontSize: "0.95rem" }}>
                S3DOT
              </span>
            </Link>
            <p style={{ fontSize: "0.78rem", color: "rgba(143,164,184,0.75)" }}>
              エススリードット株式会社 ｜ AI活用パートナー
            </p>
            <Link
              href="/"
              className="text-s3-blue hover:brightness-125 transition-all"
              style={{ fontSize: "0.78rem" }}
            >
              S3DOT公式サイトを見る →
            </Link>
          </div>

          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2.5">
            {legalLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="hover:text-s3-muted transition-colors"
                  style={{ fontSize: "0.76rem", color: "rgba(74,96,112,0.9)" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="mb-6"
          style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(30,45,61,0.9) 20%, rgba(30,45,61,0.9) 80%, transparent)" }}
        />

        <p className="text-center md:text-left" style={{ fontSize: "0.72rem", color: "rgba(74,96,112,0.9)" }}>
          © 2026 エススリードット株式会社 (S3DOT Inc.) All rights reserved.
        </p>
      </div>
    </footer>
  );
}
