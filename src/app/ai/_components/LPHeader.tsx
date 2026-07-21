"use client";

import { useEffect, useState } from "react";
import TransparentLogo from "@/components/ui/TransparentLogo";
import { SITE_URL } from "@/lib/site-metadata";
import LineCtaButton from "./LineCtaButton";

/* サイト全体のHeaderは使わず、離脱導線(回遊メニュー)を持たないLP専用ヘッダー */
export default function LPHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-s3-border/60" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 h-14 md:h-16 flex items-center justify-between">
        <a href={`${SITE_URL}/`} className="flex items-center gap-2 group" aria-label="S3DOT公式サイト">
          <TransparentLogo src="/images/logo.png" alt="S3DOT" className="w-8 h-8 md:w-9 md:h-9 object-contain" />
          <span className="text-sm md:text-[15px] font-semibold tracking-wider text-s3-text group-hover:text-s3-blue transition-colors">
            S3DOT
          </span>
          <span className="hidden md:inline text-xs text-s3-dim ml-1">公式サイト</span>
        </a>

        <LineCtaButton location="header" size="sm" label="無料AI診断" className="px-3.5 py-2 md:px-5 md:py-2.5 text-xs md:text-sm" />
      </div>
    </header>
  );
}
