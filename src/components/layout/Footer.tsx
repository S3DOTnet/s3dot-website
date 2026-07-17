"use client";

import Link from "next/link";
import TransparentLogo from "@/components/ui/TransparentLogo";

const serviceLinks = [
  { label: "サービス",           href: "/service" },
  { label: "活用イメージ・事例", href: "/case" },
  { label: "料金",               href: "/price" },
  { label: "よくある質問",       href: "/faq" },
];

const companyLinks = [
  { label: "会社情報",       href: "/company" },
  { label: "無料相談",       href: "/contact#contact-form" },
  { label: "一般お問い合わせ", href: "/contact" },
];

const LINE_URL = "https://line.me/R/ti/p/@377ryvgd";

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
                  <Link
                    href={l.href}
                    className="text-s3-muted hover:text-s3-blue transition-colors duration-200"
                    style={{ fontSize: "0.82rem", letterSpacing: "0.01em" }}
                  >
                    {l.label}
                  </Link>
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
                  <Link
                    href={l.href}
                    className="text-s3-muted hover:text-s3-blue transition-colors duration-200"
                    style={{ fontSize: "0.82rem", letterSpacing: "0.01em" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-s3-muted hover:text-s3-blue transition-colors duration-200"
                  style={{ fontSize: "0.82rem", letterSpacing: "0.01em" }}
                >
                  公式LINEで相談
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mb-8"
          style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(30,45,61,0.9) 20%, rgba(30,45,61,0.9) 80%, transparent)" }}
        />

        {/* Legal links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 mb-6">
          {[
            { label: "会社情報",               href: "/company" },
            { label: "お問い合わせ",           href: "/contact" },
            { label: "プライバシーポリシー",   href: "/privacy"  },
            { label: "利用規約",               href: "/terms"    },
            { label: "特定商取引法に基づく表記", href: "/legal"  },
            { label: "サイトマップ",           href: "/sitemap"  },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="hover:text-s3-muted transition-colors duration-200"
              style={{ fontSize: "0.72rem", color: "rgba(74,96,112,0.9)", letterSpacing: "0.02em" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center md:text-left">
          <p style={{ fontSize: "0.72rem", color: "rgba(74,96,112,0.9)", letterSpacing: "0.02em" }}>
            © 2026 エススリードット株式会社 (S3DOT Inc.) All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
