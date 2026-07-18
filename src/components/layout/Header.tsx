"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import TransparentLogo from "@/components/ui/TransparentLogo";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/service", label: "サービス" },
  { href: "/case",    label: "活用イメージ・事例" },
  { href: "/price",   label: "料金" },
  { href: "/faq",     label: "FAQ" },
  { href: "/company", label: "会社情報" },
];

const LINE_URL = "https://line.me/R/ti/p/@377ryvgd";
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
    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

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
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass border-b border-s3-border/60"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <TransparentLogo
              src="/images/logo.png"
              alt="S3DOT"
              className="w-10 h-10 object-contain"
            />
            <span className="text-[15px] font-semibold tracking-wider text-s3-text group-hover:text-s3-blue transition-colors">
              S3DOT
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-s3-muted hover:text-s3-blue transition-colors tracking-wide whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact#contact-form"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded text-sm font-semibold text-white gradient-cta hover:brightness-110 transition-all glow-blue whitespace-nowrap"
            >
              無料相談
            </Link>
            <button
              ref={menuButtonRef}
              onClick={() => setMenuOpen((open) => !open)}
              className="lg:hidden p-3 text-s3-muted hover:text-s3-blue transition-colors"
              aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={menuOpen}
              aria-controls={MOBILE_MENU_ID}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

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
            className="fixed inset-0 z-40 bg-s3-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            <button
              data-menu-close
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-6 p-2 text-s3-muted hover:text-s3-blue"
              aria-label="メニューを閉じる"
            >
              <X size={24} />
            </button>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-semibold text-s3-text hover:text-s3-blue transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              className="mt-4"
            >
              <Link
                href="/contact#contact-form"
                onClick={() => setMenuOpen(false)}
                className="inline-flex px-8 py-3 rounded text-base font-semibold text-white gradient-cta glow-blue"
              >
                無料相談
              </Link>
            </motion.div>
            <motion.a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (navLinks.length + 1) * 0.07 }}
              className="px-8 py-3 rounded text-base font-semibold text-white bg-[#06C755] hover:brightness-110 transition-all"
            >
              公式LINEで相談
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
