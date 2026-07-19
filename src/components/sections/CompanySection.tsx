"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Globe, User2, MapPin, Phone, Mail, ExternalLink } from "lucide-react";

type InfoItem = {
  icon: React.ElementType;
  label: string;
  value: string;
  color: string;
  href?: string;
  multiline?: boolean;
  colClass?: string;
};

const info: InfoItem[] = [
  { icon: Building2,    label: "会社名",         value: "エススリードット株式会社",                                                  color: "#00C8FF" },
  { icon: Globe,        label: "英語表記",       value: "S3DOT Inc.",                                                                color: "#7B5EFF" },
  { icon: User2,        label: "代表取締役",     value: "木村健一郎",                                                               color: "#00E5A0" },
  { icon: Phone,        label: "電話番号",       value: "03-6868-4786",      href: "tel:0368684786",                                color: "#7B5EFF" },
  { icon: Mail,         label: "メールアドレス", value: "contact@s3dot.net", href: "mailto:contact@s3dot.net",                      color: "#00E5A0" },
  {
    icon: MapPin,
    label: "所在地",
    value: "〒107-0061 東京都港区北青山一丁目3番1号\nアールキューブ青山3階",
    color: "#00C8FF",
    multiline: true,
    colClass: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: ExternalLink,
    label: "Webサイト",
    value: "www.s3dot.com",
    href: "https://www.s3dot.com",
    color: "#7B5EFF",
    colClass: "md:col-span-2 lg:col-span-1",
  },
];

export default function CompanySection({ hideHeading = false }: { hideHeading?: boolean }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="company"
      className="relative py-16 md:py-28 pb-20 md:pb-32 bg-s3-surface overflow-hidden section-grid noise-overlay"
    >
      {/* 背景グロー */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,200,255,0.04) 0%, transparent 60%)" }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6">

        {/* ── 見出し ── */}
        {!hideHeading && <div ref={ref} className="mb-12 md:mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-4"
          >
            Company
          </motion.p>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            <span className="gradient-text">会社情報</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-s3-muted"
          >
            AIをもっと身近にする会社
          </motion.p>
        </div>}

        {/* ── グリッド ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
          {info.map((item, i) => {
            const Icon       = item.icon;
            const isExternal = item.href?.startsWith("http");

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`card-luxury rounded-xl flex items-start gap-4 p-4 lg:py-5 lg:px-6${item.colClass ? ` ${item.colClass}` : ""}`}
              >
                {/* アイコンバッジ */}
                <div
                  className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5"
                  style={{
                    background: `radial-gradient(circle, ${item.color}1E 0%, ${item.color}08 100%)`,
                    border:     `1px solid ${item.color}28`,
                    boxShadow:  `0 0 10px ${item.color}14`,
                  }}
                >
                  <Icon
                    size={16}
                    style={{ color: item.color, filter: `drop-shadow(0 0 4px ${item.color}88)` }}
                  />
                </div>

                {/* テキスト */}
                <div className="min-w-0 flex-1">
                  <p
                    className="font-semibold uppercase mb-1"
                    style={{ fontSize: "0.64rem", letterSpacing: "0.14em", color: item.color }}
                  >
                    {item.label}
                  </p>

                  {item.href ? (
                    <a
                      href={item.href}
                      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      style={{
                        fontSize:      "0.875rem",
                        color:         "rgba(232,237,242,0.92)",
                        lineHeight:    "1.7",
                        letterSpacing: "0.01em",
                        display:       "block",
                      }}
                      className="hover:text-s3-blue transition-colors duration-200 break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      style={{
                        fontSize:      "0.875rem",
                        color:         "rgba(232,237,242,0.92)",
                        lineHeight:    "1.7",
                        letterSpacing: "0.01em",
                        whiteSpace:    item.multiline ? "pre-line" : undefined,
                      }}
                    >
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
