"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Globe, Calendar, User2, MapPin, Briefcase, Mail, Phone } from "lucide-react";

const info: Array<{
  icon: React.ElementType;
  label: string;
  value: string;
  span: 1 | 2;
  color: string;
  href?: string;
}> = [
  { icon: Building2, label: "会社名",   value: "エススリードット株式会社",                                        span: 2, color: "#00C8FF" },
  { icon: Globe,     label: "英語表記", value: "S3DOT Inc.",                                                      span: 1, color: "#7B5EFF" },
  { icon: Calendar,  label: "設立",     value: "—",                                                               span: 1, color: "#00E5A0" },
  { icon: User2,     label: "代表者",   value: "—",                                                               span: 1, color: "#00C8FF" },
  { icon: MapPin,    label: "所在地",   value: "〒107-0061 東京都港区北青山一丁目3番1号 アールキューブ青山3階",  span: 2, color: "#7B5EFF" },
  { icon: Briefcase, label: "事業内容", value: "AI導入相談 / 業務改善 / 自動化 / AI制作 / AIシステム開発",       span: 2, color: "#00E5A0" },
  { icon: Mail,      label: "メール",   value: "contact@s3dot.net",  href: "mailto:contact@s3dot.net",            span: 1, color: "#00C8FF" },
  { icon: Phone,     label: "電話",     value: "03-6868-4786",       href: "tel:03-6868-4786",                    span: 1, color: "#7B5EFF" },
];

export default function CompanySection() {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="company" className="relative py-16 md:py-28 pb-20 md:pb-32 bg-s3-surface overflow-hidden section-grid noise-overlay">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,200,255,0.04) 0%, transparent 60%)" }} />

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div ref={ref} className="mb-12 md:mb-20 text-center">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-4">Company</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">会社情報</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="text-s3-muted">
            エススリードット株式会社 — AIを、もっと身近にする会社
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {info.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 32, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`card-luxury rounded-xl flex items-start gap-5 ${item.span === 2 ? "sm:col-span-2" : ""}`}
                style={{ padding: "1.5rem 1.75rem" }}
              >
                {/* Icon — 少し大きく */}
                <div
                  className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5"
                  style={{
                    background: `radial-gradient(circle, ${item.color}1E 0%, ${item.color}08 100%)`,
                    border: `1px solid ${item.color}28`,
                    boxShadow: `0 0 12px ${item.color}14`,
                  }}
                >
                  <Icon size={18} style={{ color: item.color, filter: `drop-shadow(0 0 4px ${item.color}88)` }} />
                </div>
                {/* Text */}
                <div className="min-w-0">
                  <p
                    className="font-semibold uppercase mb-1.5"
                    style={{ fontSize: "0.68rem", letterSpacing: "0.14em", color: item.color }}
                  >
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{ fontSize: "0.88rem", color: "rgba(232,237,242,0.92)", lineHeight: "1.75", letterSpacing: "0.01em" }}
                      className="hover:text-s3-blue transition-colors duration-200 break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ fontSize: "0.88rem", color: "rgba(232,237,242,0.92)", lineHeight: "1.75", letterSpacing: "0.01em" }}>
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footerへ自然につなぐため section-divider は省略 */}
    </section>
  );
}
