"use client";

/* ─────────────────────────────────────────────
   HeroOrb — トップページ最上部の球体

   - Canvas（devicePixelRatio 対応）で 1px の精密な線を描く
   - 外殻グリッド（順回転）/ 内核グリッド（逆回転・別速度）/ 3本の軌道と発光点 /
     球面ノードの明滅と接続線（AIネットワーク）/ 中心の呼吸する発光 / 初回のみのスキャン起動
   - SSR では同じ数式から静止 SVG を出力し、JS 未起動・失敗時はそれが表示される
   - prefers-reduced-motion では静止フレームを 1 枚だけ描く
   - 画面外・非表示タブでは描画を止める
───────────────────────────────────────────── */
import { useEffect, useRef, useState } from "react";

type Vec = [number, number, number];

const TILT = -0.32;                 /* 軸の傾き（rad） */
const CYAN = [0, 200, 255] as const;
const VIOLET = [123, 94, 255] as const;
const WHITE = [232, 237, 242] as const;
const rgba = (c: readonly [number, number, number], a: number) => `rgba(${c[0]},${c[1]},${c[2]},${a.toFixed(3)})`;

/* ── 球面ワイヤーの点列（回転前の 3D 座標） ── */
function wireLines(R: number, meridians: number, lats: number, seg: number): Vec[][] {
  const lines: Vec[][] = [];
  for (let m = 0; m < meridians; m++) {
    const phi = (m * Math.PI) / meridians;
    const pts: Vec[] = [];
    for (let s = 0; s <= seg; s++) {
      const t = (s / seg) * Math.PI * 2;
      pts.push([R * Math.sin(t) * Math.cos(phi), R * Math.cos(t), R * Math.sin(t) * Math.sin(phi)]);
    }
    lines.push(pts);
  }
  for (let l = 1; l <= lats; l++) {
    const lat = -Math.PI / 2 + (l * Math.PI) / (lats + 1);
    const r = R * Math.cos(lat), y = R * Math.sin(lat);
    const pts: Vec[] = [];
    for (let s = 0; s <= seg; s++) {
      const t = (s / seg) * Math.PI * 2;
      pts.push([r * Math.cos(t), y, r * Math.sin(t)]);
    }
    lines.push(pts);
  }
  return lines;
}

/* ── フィボナッチ球面ノード ── */
function nodes(R: number, n: number): Vec[] {
  const ga = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: n }, (_, i) => {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const a = ga * i;
    return [R * Math.cos(a) * r, R * y, R * Math.sin(a) * r];
  });
}

/* ── 回転（Y軸で自転 → X軸で傾け）。戻り値は [x, y, z]（z は手前が正） ── */
function rot(p: Vec, ay: number, ax = TILT): Vec {
  const cy = Math.cos(ay), sy = Math.sin(ay);
  const x1 = p[0] * cy + p[2] * sy, z1 = -p[0] * sy + p[2] * cy;
  const cx = Math.cos(ax), sx = Math.sin(ax);
  return [x1, p[1] * cx - z1 * sx, p[1] * sx + z1 * cx];
}

/* 軽い透視: 手前の点をわずかに大きく（奥行き感） */
const persp = (R: number, z: number) => 1 + (z / R) * 0.08;

/* ── 静止 SVG（SSR 用。Canvas と同じ数式で、前面と背面を別パスに描く） ── */
function StaticOrb({ size, R }: { size: number; R: number }) {
  const c = size / 2;
  const lines = wireLines(R, 16, 9, 72).map((pts) => {
    let df = "", db = "";
    let prevFront: boolean | null = null;
    for (const p of pts) {
      const [x, y, z] = rot(p, 0.6);
      const k = persp(R, z);
      const X = (c + x * k).toFixed(1), Y = (c - y * k).toFixed(1);
      const front = z >= 0;
      if (front) df += (prevFront === true ? " L" : " M") + X + " " + Y;
      else db += (prevFront === false ? " L" : " M") + X + " " + Y;
      prevFront = front;
    }
    return { df: df.trim(), db: db.trim() };
  });
  const nd = nodes(R * 0.995, 36).map((p) => rot(p, 0.6)).filter((p) => p[2] > -R * 0.2);
  return (
    <svg className="nx-orb-svg" viewBox={`0 0 ${size} ${size}`} width={size} height={size} aria-hidden="true">
      <defs>
        <radialGradient id="nx-orb-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgb(0,200,255)" stopOpacity="0.22" />
          <stop offset="55%" stopColor="rgb(0,200,255)" stopOpacity="0.05" />
          <stop offset="100%" stopColor="rgb(0,200,255)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx={c} cy={c} r={R * 0.9} fill="url(#nx-orb-core)" />
      <g fill="none" stroke={rgba(CYAN, 0.16)} strokeWidth="1">
        {lines.map((l, i) => <path key={`b${i}`} d={l.db} />)}
      </g>
      <g fill="none" stroke={rgba(CYAN, 0.5)} strokeWidth="1">
        {lines.map((l, i) => <path key={`f${i}`} d={l.df} />)}
      </g>
      <circle cx={c} cy={c} r={R} fill="none" stroke={rgba(CYAN, 0.55)} strokeWidth="1" />
      {nd.map((p, i) => {
        const k = persp(R, p[2]);
        return <circle key={i} cx={(c + p[0] * k).toFixed(1)} cy={(c - p[1] * k).toFixed(1)} r={i % 6 === 0 ? 2.4 : 1.4} fill={i % 6 === 0 ? rgba(CYAN, 0.95) : rgba(WHITE, 0.75)} />;
      })}
    </svg>
  );
}

/* ── 軌道の定義（半径倍率, X傾き, Z傾き, 周期[s], 逆回転） ── */
const ORBITS = [
  { k: 1.26, ax: 1.25, az: 0.35, period: 16, rev: false, dash: [2, 7] as [number, number] },
  { k: 1.4, ax: 1.05, az: -0.55, period: 24, rev: true, dash: [14, 10] as [number, number] },
  { k: 1.14, ax: -1.15, az: 0.15, period: 11, rev: false, dash: [1, 5] as [number, number] },
];

type Props = { size: number; r: number; mobile?: boolean; className?: string };

export default function HeroOrb({ size, r: R, mobile = false, className = "" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seg = mobile ? 48 : 72;
    const outer = wireLines(R, 16, 9, seg);
    const inner = wireLines(R * 0.46, 8, 4, mobile ? 28 : 40);
    const nodeCount = mobile ? 26 : 36;
    const nds = nodes(R * 0.995, nodeCount);
    const nodePhase = nds.map((_, i) => (i * 2.399) % (Math.PI * 2));
    /* 接続候補: 3D 距離が近い組（時間で入れ替わる） */
    const links: [number, number, number][] = [];
    for (let i = 0; i < nds.length; i++) for (let j = i + 1; j < nds.length; j++) {
      const d = Math.hypot(nds[i][0] - nds[j][0], nds[i][1] - nds[j][1], nds[i][2] - nds[j][2]);
      if (d < R * 0.95) links.push([i, j, (i * 7 + j * 13) % 17]);
    }
    const LINK_PERIOD = 9; /* 秒: 各接続が現れて消える周期 */

    let dpr = 1, w = 0, h = 0, c = 0;
    const setup = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 3);
      w = canvas.clientWidth; h = canvas.clientHeight; c = w / 2;
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setup();

    const start = performance.now();
    let raf = 0, running = false, visible = true, inView = true;

    const strokeLines = (lines: Vec[][], ay: number, ax: number, colFront: string, colBack: string, boot: number, scanY: number) => {
      /* 前面と背面を別パスに分けて奥行きを出す */
      for (const pass of [0, 1] as const) {
        ctx.beginPath();
        for (const pts of lines) {
          let pen = false;
          for (const p of pts) {
            const [x, y, z] = rot(p, ay, ax);
            const k = persp(R, z);
            const X = c + x * k, Y = c - y * k;
            const front = z >= 0;
            const show = (pass === 1) === front && (boot >= 1 || Y < scanY);
            if (show) { if (pen) ctx.lineTo(X, Y); else ctx.moveTo(X, Y); pen = true; }
            else pen = false;
          }
        }
        ctx.strokeStyle = pass === 1 ? colFront : colBack;
        ctx.stroke();
      }
    };

    const glowDot = (x: number, y: number, rad: number, col: readonly [number, number, number], a: number, halo: number) => {
      if (halo > 0) {
        const g = ctx.createRadialGradient(x, y, 0, x, y, halo);
        g.addColorStop(0, rgba(col, a * 0.55)); g.addColorStop(1, rgba(col, 0));
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, halo, 0, Math.PI * 2); ctx.fill();
      }
      ctx.fillStyle = rgba(col, a); ctx.beginPath(); ctx.arc(x, y, rad, 0, Math.PI * 2); ctx.fill();
    };

    const draw = (now: number) => {
      const t = reduce ? 4 : (now - start) / 1000;
      const boot = Math.min(1, t / 1.8);                    /* 起動スキャン 0→1 */
      const scanY = -R * 0.15 + (c + R * 1.45 + R * 0.15) * boot;
      const ayOuter = 0.6 + t * 0.075;                       /* 外殻: 約84秒で1周 */
      const ayInner = 1.2 - t * 0.19;                        /* 内核: 逆回転・速め */
      const breath = 0.5 + 0.5 * Math.sin(t * 1.15);

      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      ctx.lineCap = "round";

      /* 中心の発光（呼吸） */
      const coreR = R * (0.72 + breath * 0.1);
      const cg = ctx.createRadialGradient(c, c, 0, c, c, coreR);
      cg.addColorStop(0, rgba(CYAN, 0.16 + breath * 0.07));
      cg.addColorStop(0.55, rgba(CYAN, 0.04));
      cg.addColorStop(1, rgba(CYAN, 0));
      ctx.fillStyle = cg; ctx.beginPath(); ctx.arc(c, c, coreR, 0, Math.PI * 2); ctx.fill();

      /* 軌道（背面側の点を先に） */
      const orbitDots: { X: number; Y: number; z: number; a: number }[] = [];
      ORBITS.forEach((o, oi) => {
        const rr = R * o.k;
        ctx.beginPath();
        for (let s = 0; s <= 120; s++) {
          const th = (s / 120) * Math.PI * 2;
          const p: Vec = [rr * Math.cos(th), 0, rr * Math.sin(th)];
          const q = rot(rot(p, o.az, 0), 0, o.ax);
          const X = c + q[0], Y = c - q[1];
          if (s === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
        }
        ctx.setLineDash(o.dash);
        ctx.strokeStyle = rgba(CYAN, (oi === 1 ? 0.16 : 0.24) * boot);
        ctx.stroke();
        ctx.setLineDash([]);
        const th = ((t / o.period) % 1) * Math.PI * 2 * (o.rev ? -1 : 1) + oi * 2.1;
        const p: Vec = [rr * Math.cos(th), 0, rr * Math.sin(th)];
        const q = rot(rot(p, o.az, 0), 0, o.ax);
        orbitDots.push({ X: c + q[0], Y: c - q[1], z: q[2], a: boot });
      });
      orbitDots.filter((d) => d.z < 0).forEach((d) => glowDot(d.X, d.Y, 2.2, CYAN, 0.55 * d.a, 0));

      /* 内核（逆回転・紫を少し） */
      strokeLines(inner, ayInner, TILT * 0.6, rgba(VIOLET, 0.42), rgba(VIOLET, 0.12), boot, scanY);

      /* 外殻グリッド */
      strokeLines(outer, ayOuter, TILT, rgba(CYAN, 0.5), rgba(CYAN, 0.13), boot, scanY);

      /* 輪郭 */
      ctx.beginPath(); ctx.arc(c, c, R, 0, Math.PI * 2);
      ctx.strokeStyle = rgba(CYAN, 0.55 * boot); ctx.stroke();

      /* ノードと接続線（AIネットワーク） */
      const proj = nds.map((p) => { const q = rot(p, ayOuter); const k = persp(R, q[2]); return { X: c + q[0] * k, Y: c - q[1] * k, z: q[2] }; });
      const bright = nds.map((_, i) => 0.35 + 0.65 * Math.max(0, Math.sin(t * 0.9 + nodePhase[i])));
      links.forEach(([i, j, ofs]) => {
        const phase = ((t + ofs * (LINK_PERIOD / 17)) % LINK_PERIOD) / LINK_PERIOD;
        const life = phase < 0.18 ? phase / 0.18 : phase > 0.75 ? Math.max(0, (1 - phase) / 0.25) : 1;
        if (life <= 0.02) return;
        const a = proj[i], b = proj[j];
        if (a.z < -R * 0.15 && b.z < -R * 0.15) return;
        const depth = Math.max(0.15, (a.z + b.z) / (2 * R) * 0.5 + 0.5);
        if (!(boot >= 1 || Math.max(a.Y, b.Y) < scanY)) return;
        ctx.beginPath(); ctx.moveTo(a.X, a.Y); ctx.lineTo(b.X, b.Y);
        ctx.strokeStyle = rgba(CYAN, 0.42 * life * depth); ctx.stroke();
        /* 線上を流れる光 */
        if (!mobile || ofs % 3 === 0) {
          const u = ((t * 0.45 + ofs * 0.37) % 1);
          glowDot(a.X + (b.X - a.X) * u, a.Y + (b.Y - a.Y) * u, 1.3, WHITE, 0.8 * life * depth, 0);
        }
      });
      proj.forEach((p, i) => {
        if (p.z < -R * 0.35) return;
        if (!(boot >= 1 || p.Y < scanY)) return;
        const depth = p.z / R * 0.5 + 0.5;
        const big = i % 6 === 0;
        const a = (big ? 0.95 : 0.7) * bright[i] * (0.35 + 0.65 * depth);
        glowDot(p.X, p.Y, big ? 2.4 : 1.4, big ? CYAN : WHITE, a, big && p.z > 0 && !mobile ? 9 : 0);
      });

      /* 軌道の点（手前側） */
      orbitDots.filter((d) => d.z >= 0).forEach((d) => glowDot(d.X, d.Y, 2.6, CYAN, 0.95 * d.a, mobile ? 0 : 12));

      /* 起動スキャン帯（初回のみ） */
      if (boot < 1) {
        const g = ctx.createLinearGradient(0, scanY - 26, 0, scanY + 6);
        g.addColorStop(0, rgba(CYAN, 0)); g.addColorStop(0.8, rgba(CYAN, 0.16)); g.addColorStop(1, rgba(CYAN, 0));
        ctx.fillStyle = g; ctx.fillRect(c - R * 1.45, scanY - 26, R * 2.9, 32);
        ctx.beginPath(); ctx.moveTo(c - R * 1.45, scanY); ctx.lineTo(c + R * 1.45, scanY);
        ctx.strokeStyle = rgba(CYAN, 0.6); ctx.stroke();
      }
    };

    const loop = (now: number) => {
      raf = 0;
      if (!running) return;
      draw(now);
      raf = requestAnimationFrame(loop);
    };
    const update = () => {
      const should = !reduce && visible && inView;
      if (should && !running) { running = true; raf = requestAnimationFrame(loop); }
      if (!should && running) { running = false; if (raf) cancelAnimationFrame(raf); raf = 0; }
    };

    draw(performance.now());
    setLive(true);
    update();

    const io = new IntersectionObserver((es) => { inView = es.some((e) => e.isIntersecting); update(); }, { threshold: 0.02 });
    io.observe(canvas);
    const onVis = () => { visible = document.visibilityState === "visible"; update(); };
    document.addEventListener("visibilitychange", onVis);
    const ro = new ResizeObserver(() => { setup(); if (!running) draw(performance.now()); });
    ro.observe(canvas);

    return () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      io.disconnect(); ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [R, mobile]);

  return (
    <div className={`nx-orb ${live ? "is-live" : ""} ${className}`} style={{ width: size, height: size }} aria-hidden="true">
      <StaticOrb size={size} R={R} />
      <canvas ref={canvasRef} className="nx-orb-canvas" style={{ width: size, height: size }} />
    </div>
  );
}
