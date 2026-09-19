"use client";

import Link from "next/link";
import TransparentLogo from "@/components/ui/TransparentLogo";
import { LINE_URL } from "@/components/ui/design";

const serviceLinks = [
  { label: "サービス",           href: "/service" },
  { label: "活用イメージ・事例", href: "/case" },
  { label: "料金",               href: "/price" },
  { label: "よくある質問",       href: "/faq" },
  { label: "無料AI業務改善診断", href: "/ai" },
];

const companyLinks = [
  { label: "会社情報",       href: "/company" },
  { label: "無料相談",       href: "/contact#contact-form" },
];

const legalLinks = [
  { label: "会社情報",               href: "/company" },
  { label: "お問い合わせ",           href: "/contact" },
  { label: "プライバシーポリシー",   href: "/privacy"  },
  { label: "利用規約",               href: "/terms"    },
  { label: "特定商取引法に基づく表記", href: "/legal"  },
  { label: "サイトマップ",           href: "/sitemap"  },
];

function LinkColumn({ title, links, children }: { title: string; links: { label: string; href: string }[]; children?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3.5">
      <p className="nx-code text-[11px] tracking-[0.22em]" style={{ color: "var(--nx-accent)" }}>{title}</p>
      {links.map((l) => (
        <Link key={l.label} href={l.href} className="text-[13px] md:text-sm text-s3-muted hover:text-s3-text transition-colors duration-200">
          {l.label}
        </Link>
      ))}
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="nx relative overflow-hidden pt-12 md:pt-[72px]"
      style={{ borderTop: "1px solid var(--nx-line)", background: "rgba(2,3,6,0.92)" }}
    >
      <div className="max-w-[1248px] mx-auto px-5 md:px-6 xl:px-12">

        {/* Brand + Links */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-5 flex flex-col items-start gap-3.5 text-[13px] md:text-sm leading-[1.9] text-s3-muted">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <TransparentLogo
                src="/images/logo.png"
                alt="S3DOT"
                className="w-10 h-10 object-contain"
              />
              <span className="nx-tech text-[17px] font-bold tracking-[0.26em] text-s3-text group-hover:text-s3-blue transition-colors duration-200">
                S3DOT
              </span>
            </Link>
            <p className="mt-2 font-bold text-s3-text">AIを、もっと身近にする会社。</p>
            <p>
              エススリードット株式会社<br />
              〒107-0061 東京都港区北青山一丁目3番1号<br />
              アールキューブ青山3階
            </p>
            <p className="flex flex-wrap gap-x-5 gap-y-1">
              <a href="tel:0368684786" className="hover:text-s3-text transition-colors duration-200">03-6868-4786</a>
              <a href="mailto:contact@s3dot.net" className="hover:text-s3-text transition-colors duration-200">contact@s3dot.net</a>
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <LinkColumn title="SERVICES" links={serviceLinks} />
          </div>
          <div className="md:col-span-3">
            <LinkColumn title="COMPANY" links={companyLinks}>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] md:text-sm text-s3-muted hover:text-s3-text transition-colors duration-200"
              >
                公式LINEで相談
              </a>
            </LinkColumn>
          </div>
        </div>

        {/* Legal + Copyright */}
        <div
          className="mt-8 md:mt-14 pt-5 md:pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-s3-muted"
          style={{ borderTop: "1px solid var(--nx-line)" }}
        >
          <nav aria-label="規約" className="flex flex-wrap gap-x-5 md:gap-x-7 gap-y-2">
            {legalLinks.map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-s3-text transition-colors duration-200">
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="nx-code text-[10px] md:text-xs leading-relaxed">
            © 2026 エススリードット株式会社 (S3DOT Inc.) All rights reserved.
          </p>
        </div>

        {/* 透かしロゴタイプ */}
        <p
          className="nx-tech font-bold text-center leading-none select-none mt-6 md:mt-10 -mb-[0.24em]"
          style={{
            fontSize: "clamp(5rem, 19vw, 17rem)",
            letterSpacing: "0.04em",
            color: "transparent",
            WebkitTextStroke: "1px var(--nx-accent-line)",
          }}
          aria-hidden="true"
        >
          S3DOT
        </p>
      </div>
    </footer>
  );
}
