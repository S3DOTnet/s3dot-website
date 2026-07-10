"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import TransparentLogo from "@/components/ui/TransparentLogo";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#concept", label: "Concept" },
  { href: "#service", label: "Service" },
  { href: "#story",   label: "Story"   },
  { href: "#contact", label: "Contact" },
  { href: "#company", label: "Company" },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-s3-muted hover:text-s3-blue transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded text-sm font-semibold text-white gradient-cta hover:brightness-110 transition-all glow-blue"
            >
              お問い合わせ
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-3 text-s3-muted hover:text-s3-blue transition-colors"
              aria-label="メニュー"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-s3-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-6 p-2 text-s3-muted hover:text-s3-blue"
            >
              <X size={24} />
            </button>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="text-2xl font-semibold text-s3-text hover:text-s3-blue transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              className="mt-4 px-8 py-3 rounded text-base font-semibold text-white gradient-cta glow-blue"
            >
              お問い合わせ
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
