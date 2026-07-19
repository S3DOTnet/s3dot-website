"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import TransparentLogo from "@/components/ui/TransparentLogo";
import LineIcon from "./LineIcon";

const LINE_URL = "https://line.me/R/ti/p/@377ryvgd";

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
        <Link href="/" className="flex items-center gap-2 group" aria-label="S3DOT公式サイト">
          <TransparentLogo src="/images/logo.png" alt="S3DOT" className="w-8 h-8 md:w-9 md:h-9 object-contain" />
          <span className="text-sm md:text-[15px] font-semibold tracking-wider text-s3-text group-hover:text-s3-blue transition-colors">
            S3DOT
          </span>
        </Link>

        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 md:gap-2 px-3.5 md:px-5 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-bold text-white transition-all hover:brightness-110 hover:scale-[1.02] whitespace-nowrap"
          style={{
            background: "linear-gradient(90deg, #06C755 0%, #059C46 100%)",
            boxShadow: "0 0 16px rgba(6,199,85,0.28)",
          }}
        >
          <LineIcon size={15} />
          <span className="hidden sm:inline">無料LINE相談</span>
          <span className="sm:hidden">LINE相談</span>
        </a>
      </div>
    </header>
  );
}
