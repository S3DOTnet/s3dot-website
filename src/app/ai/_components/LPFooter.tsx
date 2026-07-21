import TransparentLogo from "@/components/ui/TransparentLogo";
import { SITE_URL } from "@/lib/site-metadata";

export default function LPFooter() {
  return (
    <footer className="bg-s3-bg" style={{ borderTop: "1px solid rgba(30,45,61,0.7)" }}>
      <div className="max-w-[1200px] mx-auto px-6 py-10 md:py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-6">
          <div className="flex flex-col items-center md:items-start gap-2.5">
            <a href={`${SITE_URL}/`} className="inline-flex items-center gap-2.5 group">
              <TransparentLogo src="/images/logo.png" alt="S3DOT" className="w-9 h-9 object-contain" />
              <span className="font-bold tracking-[0.14em] text-s3-text group-hover:text-s3-blue transition-colors" style={{ fontSize: "0.95rem" }}>
                S3DOT
              </span>
            </a>
            <p style={{ fontSize: "0.78rem", color: "rgba(143,164,184,0.75)" }}>
              エススリードット株式会社 (S3DOT Inc.)
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <a
              href={`${SITE_URL}/`}
              className="hover:text-s3-blue transition-colors"
              style={{ fontSize: "0.78rem", color: "rgba(143,164,184,0.85)" }}
            >
              公式サイト
            </a>
            <a
              href={`${SITE_URL}/privacy`}
              className="hover:text-s3-blue transition-colors"
              style={{ fontSize: "0.78rem", color: "rgba(143,164,184,0.85)" }}
            >
              プライバシーポリシー
            </a>
          </div>
        </div>

        <div
          className="mb-5"
          style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(30,45,61,0.9) 20%, rgba(30,45,61,0.9) 80%, transparent)" }}
        />

        <p className="text-center md:text-left" style={{ fontSize: "0.72rem", color: "rgba(74,96,112,0.9)" }}>
          © 2026 エススリードット株式会社 (S3DOT Inc.) All rights reserved.
        </p>
      </div>
    </footer>
  );
}
