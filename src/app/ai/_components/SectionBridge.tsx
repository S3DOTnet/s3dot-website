"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

/* スクロール誘導: 次のセクションへの興味を引く短いブリッジ文言 */
export default function SectionBridge({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="flex flex-col items-center gap-1.5 mt-6 md:mt-8"
    >
      <p className="text-xs md:text-sm font-medium" style={{ color: "rgba(143,164,184,0.75)" }}>
        {text}
      </p>
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={15} className="text-s3-blue" style={{ opacity: 0.6 }} />
      </motion.div>
    </motion.div>
  );
}
