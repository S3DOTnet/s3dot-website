"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LineIcon from "./LineIcon";

const LINE_URL = "https://line.me/R/ti/p/@377ryvgd";

type Props = { text: string; sub?: string };

/* ページ中間に挟む短い相談導線バナー(離脱を防ぎ、常にCTAへ戻れるようにする) */
export default function MidCtaBanner({ text, sub }: Props) {
  return (
    <section className="relative py-6 md:py-8 bg-s3-bg overflow-hidden">
      <div className="relative max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl px-6 py-6 md:px-10 md:py-7 flex flex-col md:flex-row items-center justify-between gap-5"
          style={{
            background: "linear-gradient(115deg, rgba(0,200,255,0.10), rgba(123,94,255,0.10))",
            border: "1px solid rgba(0,200,255,0.24)",
          }}
        >
          <div className="text-center md:text-left">
            <p className="text-white font-bold" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.5 }}>
              {text}
            </p>
            {sub && (
              <p className="mt-1 text-s3-muted" style={{ fontSize: "0.82rem" }}>
                {sub}
              </p>
            )}
          </div>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-cta-pulse shrink-0 inline-flex items-center justify-center gap-2 rounded-xl font-bold text-white w-full md:w-auto py-3.5 px-7 transition-all duration-200 hover:brightness-110 hover:scale-[1.03]"
            style={{ background: "linear-gradient(90deg, #06C755 0%, #059C46 100%)", fontSize: "0.9rem" }}
          >
            <LineIcon size={16} />
            無料AI活用診断
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
