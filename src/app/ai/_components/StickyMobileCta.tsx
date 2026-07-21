"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import LineCtaButton from "./LineCtaButton";

const AVOID_IDS = ["ai-diagnosis", "ai-final-cta", "ai-footer"];

/* スマホ(767px以下)のみ: スクロール後に表示するLINE診断バー。
   無料診断・Final CTA・Footerが画面内に入っている間は、
   それぞれの大きなCTAと重ならないよう自動的に隠す。 */
export default function StickyMobileCta() {
  const [scrolledPast, setScrolledPast] = useState(false);
  const [nearOwnCta, setNearOwnCta] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolledPast(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = AVOID_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (targets.length === 0) return;

    const states = new Map<Element, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => states.set(entry.target, entry.isIntersecting));
        setNearOwnCta(Array.from(states.values()).some(Boolean));
      },
      { threshold: 0, rootMargin: "0px" }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const visible = scrolledPast && !nearOwnCta;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.32, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 pt-3"
          style={{
            background: "linear-gradient(to top, rgba(8,12,16,0.97) 65%, transparent)",
            paddingBottom: "max(14px, env(safe-area-inset-bottom))",
          }}
        >
          <LineCtaButton
            location="sticky_mobile"
            label="無料AI業務改善診断を受ける"
            size="md"
            pulse={false}
            className="w-full py-3.5 text-sm"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
