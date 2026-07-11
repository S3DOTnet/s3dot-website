"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import TransparentLogo from "@/components/ui/TransparentLogo";

/* ── AIネットワーク + パーティクル Canvas ── */
function StoryCanvas({ isActive }: { isActive: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!isActive) return;
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number;
    const S = 360; // canvas size
    canvas.width = canvas.height = S * 2; // 2x for retina
    canvas.style.width = canvas.style.height = `${S}px`;
    ctx.scale(2, 2);
    const cx = S / 2, cy = S / 2;

    /* 軌道ノード */
    const RINGS = [
      { r: 80,  n: 5,  speed: 0.004,  color: "#00C8FF", size: 2.2 },
      { r: 120, n: 7,  speed: -0.003, color: "#7B5EFF", size: 1.6 },
      { r: 155, n: 10, speed: 0.002,  color: "#00E5A0", size: 1.2 },
    ];
    let angle = 0;

    /* パーティクル */
    type P = { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; color: string };
    const COLORS = ["#00C8FF", "#7B5EFF", "#00E5A0"];
    const makeP = (): P => {
      const a = Math.random() * Math.PI * 2;
      const r = 155 + Math.random() * 30;
      return { x: cx + Math.cos(a)*r, y: cy + Math.sin(a)*r, vx: (cx-(cx+Math.cos(a)*r))*0.003, vy: (cy-(cy+Math.sin(a)*r))*0.003, life: 0, maxLife: 80+Math.random()*60, color: COLORS[Math.floor(Math.random()*3)] };
    };
    const particles: P[] = Array.from({ length: 18 }, makeP);

    const draw = () => {
      ctx.clearRect(0, 0, S, S);
      angle += 0.003;

      /* 軌道リング */
      for (const ring of RINGS) {
        ctx.beginPath();
        ctx.arc(cx, cy, ring.r, 0, Math.PI*2);
        ctx.strokeStyle = `${ring.color}18`;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        /* ノード */
        for (let n = 0; n < ring.n; n++) {
          const a = angle * ring.speed * 1000 / ring.speed + (n/ring.n)*Math.PI*2;
          // 各ノードは独立した角速度で回転
          const na = angle * Math.sign(ring.speed) + (n/ring.n)*Math.PI*2;
          const nx = cx + Math.cos(na*Math.abs(ring.speed)*200 + n*1.3) * ring.r;
          const ny = cy + Math.sin(na*Math.abs(ring.speed)*200 + n*1.3) * ring.r;
          // ノードから中心への接続線
          ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(nx,ny);
          ctx.strokeStyle = `${ring.color}10`; ctx.lineWidth = 0.4; ctx.stroke();
          // ノード本体
          ctx.beginPath(); ctx.arc(nx, ny, ring.size, 0, Math.PI*2);
          const pulse = 0.6 + Math.sin(angle*3 + n) * 0.3;
          ctx.fillStyle = `${ring.color}${Math.round(pulse*255).toString(16).padStart(2,'0')}`; ctx.fill();
        }
      }

      /* パーティクル（中心へ流れる） */
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy; p.life++;
        const prog = p.life / p.maxLife;
        const o = prog < 0.2 ? prog*5*0.6 : (1-prog)*0.6;
        ctx.beginPath(); ctx.arc(p.x,p.y,1.2,0,Math.PI*2);
        ctx.fillStyle = `${p.color}${Math.round(o*255).toString(16).padStart(2,'0')}`; ctx.fill();
        if (p.life >= p.maxLife) Object.assign(p, makeP());
      }

      /* 中心グロー */
      const g = ctx.createRadialGradient(cx,cy,0,cx,cy,55);
      g.addColorStop(0,"rgba(0,200,255,0.07)"); g.addColorStop(1,"transparent");
      ctx.fillStyle = g; ctx.fillRect(0,0,S,S);

      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full" style={{ opacity: 0.85 }} />;

}

const paragraphs = [
  "「AIは大企業のもの」「IT企業のもの」という時代は、もう終わっています。\nでも、多くの会社の現場では、まだAIは「遠いもの」のままです。",
  "S3DOTは、そのギャップを埋めるために生まれました。\n難しい技術の話は私たちに任せてください。あなたは「やりたいこと」だけ話してくれればいい。",
  "私たちがこだわるのは、「導入すること」ではなく「使われ続けること」。\n現場で本当に役立ち、会社の文化になるまで、S3DOTは隣にいます。",
];

export default function OurStorySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" className="relative py-16 md:py-24 bg-s3-bg overflow-hidden section-grid noise-overlay">
      {/* Decorative orbs — desktop only (filter:blur は iOS で高コスト) */}
      <div
        className="hidden sm:block absolute left-1/4 top-1/3 pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(123,94,255,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="hidden sm:block absolute right-1/4 bottom-1/3 pointer-events-none"
        style={{
          width: 300,
          height: 300,
          background: "radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-[0.3em] text-s3-blue uppercase font-mono mb-6"
            >
              Our Story
            </motion.p>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold leading-tight mb-8"
            >
              <span className="text-s3-text">AIを、</span>
              <br />
              <span className="gradient-text">
                <span className="inline-block">誰もが使える</span>
                <span className="inline-block">道具にしたい。</span>
              </span>
            </motion.h2>

            <div className="space-y-6">
              {paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                  className="text-s3-muted leading-[1.9] text-[15px]"
                >
                  {p.split("\n").map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < p.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </motion.p>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 text-xl font-semibold gradient-text"
            >
              <span className="inline-block">AIは難しくない。</span>
              <span className="inline-block">難しく考えすぎているだけ。</span>
            </motion.p>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Glass card with animated logo */}
            <div
              className="relative w-full max-w-sm aspect-square rounded-2xl flex items-center justify-center overflow-hidden"
              style={{ background:"rgba(8,12,16,0.7)", border:"1px solid rgba(0,200,255,0.14)", boxShadow:"0 0 0 1px rgba(0,200,255,0.06), 0 24px 80px rgba(0,0,0,0.5), 0 0 60px rgba(0,200,255,0.08)" }}
            >
              {/* AIネットワークCanvas — inView後のみ起動してバッテリーを節約 */}
              <StoryCanvas isActive={inView} />

              {/* Logo — 最前面 */}
              <div className="relative z-10 w-36 h-36 animate-float">
                <TransparentLogo
                  src="/images/logo.png"
                  alt="S3DOT"
                  className="w-full h-full object-contain"
                  style={{ filter: "drop-shadow(0 0 32px rgba(0,200,255,0.7)) drop-shadow(0 0 70px rgba(0,200,255,0.35))" }}
                />
              </div>

              {/* Corner accents */}
              {["top-0 left-0 border-t border-l","top-0 right-0 border-t border-r","bottom-0 left-0 border-b border-l","bottom-0 right-0 border-b border-r"].map((cls, i) => (
                <div key={i} className={`absolute w-5 h-5 ${cls} border-s3-blue/40`} />
              ))}
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2.5 text-xs font-mono"
            >
              <span className="text-s3-blue">AI</span>
              <span className="text-s3-muted ml-1">PARTNER</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2.5 text-xs font-mono"
            >
              <span className="text-s3-green">✓</span>
              <span className="text-s3-muted ml-1.5">伴走型サポート</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="section-divider mt-16 md:mt-32" />
    </section>
  );
}
