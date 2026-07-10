"use client";

import Link from "next/link";
import TransparentLogo from "@/components/ui/TransparentLogo";

const serviceLinks = [
  { label: "AI導入相談",     href: "#service" },
  { label: "業務改善",       href: "#service" },
  { label: "自動化",         href: "#service" },
  { label: "AI制作",         href: "#service" },
  { label: "AIシステム開発", href: "#service" },
];

const companyLinks = [
  { label: "会社情報",    href: "#company" },
  { label: "Our Story",  href: "#story"   },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      className="bg-s3-bg"
      style={{ borderTop: "1px solid rgba(30,45,61,0.7)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-14 md:py-20">

        {/* Brand + Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 mb-10 md:mb-16">

          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <TransparentLogo
                src="/images/logo.png"
                alt="S3DOT"
                className="w-12 h-12 object-contain"
              />
              <span
                className="font-bold tracking-[0.14em] text-s3-text group-hover:text-s3-blue transition-colors duration-200"
                style={{ fontSize: "1rem" }}
              >
                S3DOT
              </span>
            </Link>
            <p
              className="leading-[1.95]"
              style={{ fontSize: "0.82rem", color: "rgba(143,164,184,0.85)" }}
            >
              AIを、もっと身近にする会社。<br />
              エススリードット株式会社
            </p>
            <div style={{ marginTop: "0.875rem", fontSize: "0.78rem", color: "rgba(143,164,184,0.7)", lineHeight: "1.85" }}>
              <p style={{ marginBottom: "0.25rem" }}>
                〒107-0061 東京都港区北青山一丁目3番1号<br />
                アールキューブ青山3階
              </p>
              <a href="tel:0368684786" className="block hover:text-s3-blue transition-colors duration-200">
                03-6868-4786
              </a>
              <a href="mailto:contact@s3dot.net" className="block hover:text-s3-blue transition-colors duration-200">
                contact@s3dot.net
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p
              className="uppercase font-semibold mb-5"
              style={{ fontSize: "0.68rem", letterSpacing: "0.14em", color: "#00C8FF" }}
            >
              Services
            </p>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-s3-muted hover:text-s3-blue transition-colors duration-200"
                    style={{ fontSize: "0.82rem", letterSpacing: "0.01em" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p
              className="uppercase font-semibold mb-5"
              style={{ fontSize: "0.68rem", letterSpacing: "0.14em", color: "#00C8FF" }}
            >
              Company
            </p>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-s3-muted hover:text-s3-blue transition-colors duration-200"
                    style={{ fontSize: "0.82rem", letterSpacing: "0.01em" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mb-8"
          style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(30,45,61,0.9) 20%, rgba(30,45,61,0.9) 80%, transparent)" }}
        />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <p style={{ fontSize: "0.72rem", color: "rgba(74,96,112,0.9)", letterSpacing: "0.02em" }}>
            © 2026 エススリードット株式会社 (S3DOT Inc.) All rights reserved.
          </p>
          <div className="flex items-center gap-7">
            <a
              href="#"
              className="hover:text-s3-muted transition-colors duration-200"
              style={{ fontSize: "0.72rem", color: "rgba(74,96,112,0.9)", letterSpacing: "0.02em" }}
            >
              プライバシーポリシー
            </a>
            <a
              href="#"
              className="hover:text-s3-muted transition-colors duration-200"
              style={{ fontSize: "0.72rem", color: "rgba(74,96,112,0.9)", letterSpacing: "0.02em" }}
            >
              利用規約
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
