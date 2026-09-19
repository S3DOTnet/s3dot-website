"use client";

/* ─────────────────────────────────────────────
   新デザイン共通パーツ（装飾・ボタン・見出しラベル・スクロール表示）
   スタイルは globals.css の .nx-* を参照
───────────────────────────────────────────── */
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import type { ReactNode, CSSProperties, HTMLAttributes, Ref } from "react";

export const LINE_URL = "https://line.me/R/ti/p/@377ryvgd";

/* ── スクロールで現れる要素 ──
   SSR/JS未起動時は「表示」が既定。JS起動後、画面外にある要素だけを一度隠し、
   画面に入ったら表示する（IntersectionObserver + scroll イベントの二重保険）。
   Framer Motion の initial={{opacity:0}} と違い、ハイドレーションが失敗しても内容が消えない。 */
type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: "div" | "article" | "li" | "dl" | "p" | "a" | "h2";
  delay?: number;
  href?: string;
  target?: string;
  rel?: string;
  ref?: Ref<HTMLElement>;
  children?: ReactNode;
};
export function Reveal({ as = "div", delay = 0, className = "", style, children, ref: outerRef, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  /* 呼び出し側の ref（例: フォーム位置補正）にも同じ要素を渡す */
  const setRef = (el: HTMLElement | null) => {
    ref.current = el;
    if (typeof outerRef === "function") outerRef(el);
    else if (outerRef) outerRef.current = el;
  };

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    /* 初期表示領域にある要素は隠さない（ちらつき防止） */
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.classList.add("nx-hidden");
    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      el.classList.remove("nx-hidden");
      cleanup();
    };
    const io = new IntersectionObserver(
      (entries) => { if (entries.some((e) => e.isIntersecting)) show(); },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );
    /* 監視が動かない環境向けの保険: スクロール時に位置を直接確認 */
    const check = () => { if (el.getBoundingClientRect().top < window.innerHeight * 0.95) show(); };
    const cleanup = () => {
      io.disconnect();
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
    io.observe(el);
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return cleanup;
  }, []);

  /* タグ名は限定した文字列なので JSX の可変タグとして描画する（型は div として扱う） */
  const Tag = as as "div";
  return (
    <Tag
      ref={setRef}
      className={`nx-reveal ${className}`}
      style={{ ...style, transitionDelay: delay ? `${delay}s` : undefined }}
      {...(rest as HTMLAttributes<HTMLDivElement>)}
    >
      {children}
    </Tag>
  );
}

/* ── 矢印アイコン ── */
export function Arrow({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
      <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
    </svg>
  );
}

/* ── LINE アイコン ── */
export function LineIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

/* ── セクションラベル（番号 + 英語名） ── */
export function SectionTag({ num, label }: { num: string; label: string }) {
  return (
    <div className="nx-tag">
      <span className="nx-dot nx-pulse" />
      <span className="n">{num}</span>
      <span>{label}</span>
      <span className="l" />
    </div>
  );
}

/* ── 四隅のカギ型マーク ── */
export function Corners() {
  return (
    <>
      <i className="nx-c c1" aria-hidden="true" />
      <i className="nx-c c2" aria-hidden="true" />
      <i className="nx-c c3" aria-hidden="true" />
      <i className="nx-c c4" aria-hidden="true" />
    </>
  );
}

/* ── ボタン（内部リンクは next/link、外部は <a>） ── */
type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "line";
  className?: string;
  onClick?: () => void;
};
export function Btn({ href, children, variant = "primary", className = "", onClick }: BtnProps) {
  const cls = `nx-btn ${variant === "primary" ? "nx-btn-p" : variant === "line" ? "nx-btn-line" : "nx-btn-g"} ${className}`;
  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  if (external) {
    return (
      <a href={href} className={cls} onClick={onClick} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {variant === "line" && <LineIcon />}
        <span className="flex-1">{children}</span>
        <Arrow />
      </a>
    );
  }
  return (
    <Link href={href} className={cls} onClick={onClick}>
      <span className="flex-1">{children}</span>
      <Arrow />
    </Link>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="nx-tlink">
      {children}
      <Arrow size={16} />
    </Link>
  );
}

/* ── セクション見出し（左: 番号+タイトル / 右: 補足+リンク） ── */
export function SectionHead({
  num, label, title, desc, link, titleStyle,
}: { num: string; label: string; title: ReactNode; desc: ReactNode; link?: ReactNode; titleStyle?: CSSProperties }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-6 items-end mb-10 md:mb-16">
      <div className="md:col-span-7 flex flex-col gap-5 md:gap-6">
        <SectionTag num={num} label={label} />
        <h2 className="font-black leading-[1.18] tracking-[-0.04em] text-s3-text" style={{ fontSize: "clamp(2.1rem, 4.6vw, 4rem)", ...titleStyle }}>
          {title}
        </h2>
      </div>
      <div className="md:col-span-5 flex flex-col items-start gap-1.5 md:pt-2">
        <p className="text-sm md:text-[17px] leading-[2] text-s3-muted">{desc}</p>
        {link}
      </div>
    </div>
  );
}

/* ── 計器風リング（SVG 破線円） ── */
export function Ring({ d, dash = "2 10", cls = "", dur = 60, accent = false }: { d: number; dash?: string; cls?: string; dur?: number; accent?: boolean }) {
  const r = d / 2 - 1;
  return (
    <svg
      className={`nx-ring ${accent ? "acc" : ""} ${cls}`}
      width={d} height={d} viewBox={`0 0 ${d} ${d}`}
      style={{ margin: `-${d / 2}px 0 0 -${d / 2}px`, animationDuration: `${dur}s` }}
      aria-hidden="true"
    >
      <circle cx={d / 2} cy={d / 2} r={r} fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray={dash || undefined} />
    </svg>
  );
}

/* ── 周回する光点 ── */
export function Orbit({ d, dur, size = 8 }: { d: number; dur: number; size?: number }) {
  return (
    <div className="nx-orbit nx-spin" style={{ width: d, height: d, margin: `-${d / 2}px 0 0 -${d / 2}px`, animationDuration: `${dur}s` }} aria-hidden="true">
      <span style={{ width: size, height: size, top: -size / 2, marginLeft: -size / 2 }} />
    </div>
  );
}

/* ── ワイヤーフレーム球体（CSS 3D） ── */
export function Globe({ r, meridians = 14, dots = 44 }: { r: number; meridians?: number; dots?: number }) {
  const R = r;
  const ga = Math.PI * (3 - Math.sqrt(5));
  const lats = [-60, -35, -12, 12, 35, 60];
  return (
    <div className="nx-globe-wrap" style={{ width: 2 * R, height: 2 * R, perspective: R * 5 }} aria-hidden="true">
      <div className="nx-globe">
        {Array.from({ length: meridians }, (_, i) => (
          <span key={`m${i}`} className="gm" suppressHydrationWarning style={{ transform: `rotateY(${((i * 180) / meridians).toFixed(2)}deg)` }} />
        ))}
        {lats.map((lat) => {
          const rr = R * Math.cos((lat * Math.PI) / 180);
          const z = R * Math.sin((lat * Math.PI) / 180);
          return (
            <span
              key={`l${lat}`}
              className="gl"
              suppressHydrationWarning
              style={{ left: `${(R - rr).toFixed(2)}px`, top: `${(R - rr).toFixed(2)}px`, width: `${(2 * rr).toFixed(2)}px`, height: `${(2 * rr).toFixed(2)}px`, transform: `rotateX(90deg) translateZ(${z.toFixed(2)}px)` }}
            />
          );
        })}
        <span className="ge" style={{ transform: "rotateX(90deg)" }} />
        {Array.from({ length: dots }, (_, i) => {
          const y = 1 - (i / (dots - 1)) * 2;
          const lat = (Math.asin(y) * 180) / Math.PI;
          const lon = ((ga * i * 180) / Math.PI) % 360;
          const big = i % 7 === 0;
          const s = big ? 7 : 4;
          return (
            <span
              key={`d${i}`}
              className={`gd${big ? " big" : ""}`}
              suppressHydrationWarning
              style={{ left: `${(R - s / 2).toFixed(1)}px`, top: `${(R - s / 2).toFixed(1)}px`, width: `${s}px`, height: `${s}px`, transform: `rotateY(${lon.toFixed(2)}deg) rotateX(${lat.toFixed(2)}deg) translateZ(${R}px)` }}
            />
          );
        })}
      </div>
    </div>
  );
}

/* ── ニューラルネットワーク図（SVG） ── */
export function Neural({ w, h, layers, r = 4, className = "", style }: { w: number; h: number; layers: number[]; r?: number; className?: string; style?: CSSProperties }) {
  const xs = layers.map((_, i) => (w * (i + 0.5)) / layers.length);
  const pts = layers.map((n, li) => Array.from({ length: n }, (_, j) => [Math.round(xs[li]), Math.round((h * (j + 1)) / (n + 1))] as const));
  const lines: ReactNode[] = [];
  let k = 0;
  for (let li = 0; li < layers.length - 1; li++) {
    for (const [x1, y1] of pts[li]) {
      for (const [x2, y2] of pts[li + 1]) {
        k += 1;
        lines.push(
          k % 4 === 0 ? (
            <line key={`f${k}`} className="flow" x1={x1} y1={y1} x2={x2} y2={y2} style={{ animationDelay: `${(k % 7) * -0.4}s` }} />
          ) : (
            <line key={`k${k}`} className="lk" x1={x1} y1={y1} x2={x2} y2={y2} />
          )
        );
      }
    }
  }
  const nodes = pts.flat().map(([x, y], i) => {
    const n = i + 1;
    return (
      <g key={`n${n}`}>
        <circle className="node" cx={x} cy={y} r={r + 2} style={{ animationDelay: `${(n % 5) * -0.7}s` }} />
        <circle className="nd" cx={x} cy={y} r={r} />
      </g>
    );
  });
  return (
    <svg className={`nx-neural ${className}`} viewBox={`0 0 ${w} ${h}`} style={style} aria-hidden="true">
      {lines}
      {nodes}
    </svg>
  );
}

/* ── 3軸で回るコア ── */
export function Gyro({ size }: { size: number }) {
  return (
    <div className="nx-gyro" style={{ width: size, height: size }} aria-hidden="true">
      <div>
        <span className="gy1" /><span className="gy2" /><span className="gy3" /><span className="core" /><span className="halo" />
      </div>
    </div>
  );
}

/* ── 所在地レーダー ── */
export function Radar({ size = 150 }: { size?: number }) {
  return (
    <div className="nx-radar" style={{ width: size, height: size }} aria-hidden="true">
      <span className="r1" /><span className="r2" /><span className="r3" /><span className="rx" /><span className="ry" /><span className="sweep" /><span className="rd nx-pulse" />
    </div>
  );
}

/* ── オーロラ（2つの光のかたまり） ── */
export function Aurora({ a1, a2 }: { a1: CSSProperties; a2: CSSProperties }) {
  return (
    <>
      <div className="nx-aurora a1" style={a1} aria-hidden="true" />
      <div className="nx-aurora a2" style={a2} aria-hidden="true" />
    </>
  );
}

/* ── 奥行きのあるフロアグリッド ── */
export function FloorGrid({ low = false }: { low?: boolean }) {
  return (
    <div className={`nx-floor-wrap${low ? " low" : ""}`} aria-hidden="true">
      <div className="nx-floor" />
      <div className="nx-floor-fade" />
    </div>
  );
}

/* ── セクション右端の縦書きコード（PCのみ） ── */
export function SideLabel({ text }: { text: string }) {
  return (
    <>
      <span
        className="hidden xl:block absolute right-[30px] top-[132px] nx-code text-[10px] tracking-[0.32em] text-s3-muted opacity-70"
        style={{ writingMode: "vertical-rl" }}
        aria-hidden="true"
      >
        {text}
      </span>
      <span className="hidden xl:block absolute right-[34px] top-[100px] w-px h-6" style={{ background: "var(--nx-accent)" }} aria-hidden="true" />
    </>
  );
}
