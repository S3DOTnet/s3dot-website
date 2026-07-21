"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LineCtaButton from "./LineCtaButton";

/* スマホのみ: スクロール後に常時表示するLINE診断バー(離脱を防ぎ、いつでも診断へ進める導線を確保) */
export default function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 sm:hidden px-4 pb-[max(14px,env(safe-area-inset-bottom))] pt-3"
          style={{ background: "linear-gradient(to top, rgba(8,12,16,0.97) 65%, transparent)" }}
        >
          <LineCtaButton location="sticky_mobile" label="無料AI業務改善診断を受ける" size="md" className="w-full py-3.5 text-sm" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
