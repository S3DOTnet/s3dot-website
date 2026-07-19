"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LineIcon from "./LineIcon";

const LINE_URL = "https://line.me/R/ti/p/@377ryvgd";

/* スマホのみ: スクロール後に常時表示するLINE相談バー(離脱を防ぎ、いつでも相談できる導線を確保) */
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
          style={{
            background: "linear-gradient(to top, rgba(8,12,16,0.97) 65%, transparent)",
          }}
        >
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-cta-pulse flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-white text-sm"
            style={{ background: "linear-gradient(90deg, #06C755 0%, #059C46 100%)" }}
          >
            <LineIcon size={17} />
            無料AI活用診断をLINEで受ける
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
