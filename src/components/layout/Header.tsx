"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import TransparentLogo from "@/components/ui/TransparentLogo";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Arrow, LineIcon, LINE_URL } from "@/components/ui/design";

const navLinks = [
  { href: "/service", label: "サービス" },
  { href: "/case",    label: "活用イメージ・事例" },
  { href: "/price",   label: "料金" },
  { href: "/faq",     label: "FAQ" },
  { href: "/company", label: "会社情報" },
];

const MOBILE_MENU_ID = "mobile-navigation";

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const wasMenuOpenRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      if (wasMenuOpenRef.current) {
        requestAnimationFrame(() => menuButtonRef.current?.focus());
        wasMenuOpenRef.current = false;
      }
      return;
    }

    wasMenuOpenRef.current = true;
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyPosition = document.body.style.position;
    const previousBodyTop = document.body.style.top;
    const previousBodyLeft = document.body.style.left;
    const previousBodyWidth = document.body.style.width;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousHtmlScrollBehavior = document.documentElement.style.scrollBehavior;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = `-${scrollX}px`;
    document.body.style.width = "100%";
    document.documentElement.style.overflow = "hidden";

    requestAnimationFrame(() => {
      mobileMenuRef.current
        ?.querySelector<HTMLElement>("[data-menu-close]")
        ?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = mobileMenuRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && (activeElement === firstElement || !mobileMenuRef.current?.contains(activeElement))) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && (activeElement === lastElement || !mobileMenuRef.current?.contains(activeElement))) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.position = previousBodyPosition;
      document.body.style.top = previousBodyTop;
      document.body.style.left = previousBodyLeft;
      document.body.style.width = previousBodyWidth;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(scrollX, scrollY);
      document.documentElement.style.scrollBehavior = previousHtmlScrollBehavior;
    };
  }, [menuOpen]);

  return (
    <>
      {/* 入場アニメーションは CSS（.nx-drop）。JS が動かなくてもヘッダーは表示される */}
      <header className="nx nx-drop fixed top-0 left-0 right-0 z-50 px-4 pt-3 md:px-6 md:pt-4">
        {/* 浮かせた計器パネル風のバー */}
        <div
          className="max-w-[1248px] mx-auto h-16 lg:h-[72px] px-3 lg:px-3 lg:pl-6 flex items-center justify-between rounded-md transition-all duration-300"
          style={{
            border: "1px solid var(--nx-line)",
            background: menuOpen ? "#080C10" : scrolled ? "rgba(8,12,16,0.88)" : "rgba(8,12,16,0.65)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group pl-1">
            <TransparentLogo
              src="/images/logo.png"
              alt="S3DOT"
              className="w-9 h-9 lg:w-10 lg:h-10 object-contain"
            />
            <span className="nx-tech text-[15px] lg:text-[17px] font-bold tracking-[0.26em] text-s3-text group-hover:text-s3-blue transition-colors">
              S3DOT
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-9" aria-label="メイン">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-s3-muted hover:text-s3-text transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-2.5">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nx-btn nx-btn-g sm hidden lg:inline-flex"
            >
              LINE相談
            </a>
            <Link
              href="/contact#contact-form"
              className="nx-btn nx-btn-p sm hidden lg:inline-flex"
              style={{ boxShadow: "0 0 24px var(--nx-accent-glow)" }}
            >
              無料相談
              <Arrow size={14} />
            </Link>
            <button
              ref={menuButtonRef}
              onClick={() => setMenuOpen((open) => !open)}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-md text-s3-text hover:text-s3-blue transition-colors"
              style={{ border: "1px solid var(--nx-line)" }}
              aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={menuOpen}
              aria-controls={MOBILE_MENU_ID}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id={MOBILE_MENU_ID}
            ref={mobileMenuRef}
            role="dialog"
            aria-modal="true"
            aria-label="スマートフォンメニュー"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="nx fixed inset-x-0 top-[76px] bottom-0 z-[60] bg-s3-bg lg:hidden"
          >
            <div className="h-full overflow-y-auto overscroll-contain">
              <div className="min-h-full flex flex-col px-4 py-5">
                <div
                  className="rounded-md p-4 flex flex-col"
                  style={{ border: "1px solid var(--nx-line)", background: "rgba(8,12,16,0.96)" }}
                >
                  <div className="flex items-center justify-between pb-3 mb-1" style={{ borderBottom: "1px solid var(--nx-line-s)" }}>
                    <span className="nx-code text-[11px] tracking-[0.22em] text-s3-muted">MENU</span>
                    <button
                      data-menu-close
                      onClick={() => setMenuOpen(false)}
                      className="w-10 h-10 flex items-center justify-center rounded-md text-s3-muted hover:text-s3-blue"
                      aria-label="メニューを閉じる"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-3.5 px-2 text-[15px] font-medium text-s3-text hover:text-s3-blue transition-colors"
                        style={{ borderBottom: "1px solid var(--nx-line-s)" }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                    className="flex flex-col gap-2.5 pt-4"
                  >
                    <Link
                      href="/contact#contact-form"
                      onClick={() => setMenuOpen(false)}
                      className="nx-btn nx-btn-p"
                      style={{ height: 52 }}
                    >
                      <span className="flex-1">無料相談</span>
                      <Arrow />
                    </Link>
                    <a
                      href={LINE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenuOpen(false)}
                      className="nx-btn nx-btn-line"
                      style={{ height: 52 }}
                    >
                      <LineIcon />
                      <span className="flex-1">公式LINEで相談</span>
                      <Arrow />
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
