"use client";

interface Props {
  href:    string;
  label:   string;
  desc?:   string;
  accent:  string;
}

export default function SitemapCard({ href, label, desc, accent }: Props) {
  return (
    <a
      href={href}
      className="group flex flex-col gap-1 p-4 rounded-xl transition-all duration-200 hover:border-opacity-30"
      style={{
        background:  "rgba(255,255,255,0.015)",
        border:      "1px solid rgba(30,45,61,0.7)",
        transition:  "background 0.2s, border-color 0.2s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background   = "rgba(0,200,255,0.04)";
        el.style.borderColor  = accent + "33";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background   = "rgba(255,255,255,0.015)";
        el.style.borderColor  = "rgba(30,45,61,0.7)";
      }}
    >
      <span
        className="font-semibold flex items-center gap-2 group-hover:opacity-90 transition-opacity"
        style={{ fontSize: "0.88rem", color: accent }}
      >
        {label}
        <svg
          className="w-3 h-3 opacity-60 transition-transform duration-200 group-hover:translate-x-0.5"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M4 2l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {desc && (
        <span
          className="leading-[1.8]"
          style={{ fontSize: "0.78rem", color: "rgba(143,164,184,0.7)" }}
        >
          {desc}
        </span>
      )}
      <span
        className="text-[0.72rem] font-mono"
        style={{ color: "rgba(74,96,112,0.6)" }}
      >
        {href.startsWith("/") ? "https://www.s3dot.com" + href : href}
      </span>
    </a>
  );
}
