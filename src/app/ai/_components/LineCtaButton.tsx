"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { ArrowRight } from "lucide-react";
import LineIcon from "./LineIcon";

export const LINE_URL = "https://line.me/R/ti/p/@377ryvgd";

export const CTA_LONG = "自社の削減可能業務をLINEで無料診断する";
export const CTA_SHORT = "無料AI業務改善診断を受ける";

type Props = {
  location: string;
  label?: string;
  size?: "lg" | "md" | "sm";
  pulse?: boolean;
  className?: string;
};

const sizeStyles = {
  lg: { fontSize: "clamp(0.98rem, 1.6vw, 1.15rem)", padding: "1.15rem 2.75rem" },
  md: { fontSize: "0.95rem", padding: "0.9rem 2rem" },
  sm: { fontSize: "0.85rem", padding: "0.65rem 1.25rem" },
};

export default function LineCtaButton({ location, label = CTA_LONG, size = "lg", pulse = true, className = "" }: Props) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => sendGAEvent("event", "ai_lp_line_cta_click", { location })}
      className={`${pulse ? "animate-cta-pulse" : ""} group inline-flex items-center justify-center gap-2.5 rounded-xl font-bold text-white text-center transition-all duration-200 hover:brightness-110 hover:scale-[1.03] ${className}`}
      style={{
        background: "linear-gradient(90deg, #06C755 0%, #059C46 100%)",
        ...sizeStyles[size],
      }}
    >
      <LineIcon size={size === "sm" ? 15 : 20} />
      <span>{label}</span>
      <ArrowRight size={size === "sm" ? 14 : 17} className="transition-transform group-hover:translate-x-1" />
    </a>
  );
}
