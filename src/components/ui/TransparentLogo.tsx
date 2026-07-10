"use client";

import { useEffect, useState } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function TransparentLogo({ src, alt, className, style }: Props) {
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();

    const process = () => {
      const W = img.naturalWidth;
      const H = img.naturalHeight;
      if (!W || !H) return;

      /* Retina対応: 元画像の解像度でCanvas描画（縮小しない） */
      const canvas = document.createElement("canvas");
      canvas.width  = W;
      canvas.height = H;

      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, W, H);

      const imageData = ctx.getImageData(0, 0, W, H);
      const { data }  = imageData;
      const total     = data.length;

      /* ─────────────────────────────────────────────
         ステップ1: 四隅サンプリングで背景色を自動検出
         ─────────────────────────────────────────── */
      const samplePts: [number, number][] = [
        [2,2],[W-3,2],[2,H-3],[W-3,H-3],
        [W>>1,2],[2,H>>1],[W-3,H>>1],[W>>1,H-3],
        [W>>2,2],[W*3>>2,2],[2,H>>2],[2,H*3>>2],
      ];

      let bgR=0,bgG=0,bgB=0;
      for (const [x,y] of samplePts) {
        const idx = (y * W + x) * 4;
        bgR += data[idx]; bgG += data[idx+1]; bgB += data[idx+2];
      }
      bgR /= samplePts.length;
      bgG /= samplePts.length;
      bgB /= samplePts.length;

      /* ─────────────────────────────────────────────
         ステップ2: BFS（フラッドフィル）で背景を追跡
         四隅から始めて、背景色に近いピクセルを透明化
         ─────────────────────────────────────────── */
      const visited = new Uint8Array(W * H);
      const queue: number[] = [];
      const THRESHOLD = 38; /* 色距離の許容値 */

      const isBackground = (idx: number): boolean => {
        const r = data[idx], g = data[idx+1], b = data[idx+2];
        const dist = Math.sqrt((r-bgR)**2 + (g-bgG)**2 + (b-bgB)**2);
        /* 彩度チェック: 彩度が高いピクセルはロゴ本体として保護 */
        const maxC = Math.max(r,g,b);
        const minC = Math.min(r,g,b);
        const sat  = maxC === 0 ? 0 : (maxC-minC)/maxC;
        return dist < THRESHOLD && sat < 0.30;
      };

      /* 四隅と各辺の端からBFS開始 */
      const enqueue = (x: number, y: number) => {
        if (x<0||x>=W||y<0||y>=H) return;
        const pos = y*W+x;
        if (visited[pos]) return;
        visited[pos] = 1;
        const idx = pos*4;
        if (isBackground(idx)) queue.push(pos);
      };

      /* 4辺の端をシード点として追加 */
      for (let x=0;x<W;x++) { enqueue(x,0); enqueue(x,H-1); }
      for (let y=0;y<H;y++) { enqueue(0,y); enqueue(W-1,y); }

      /* BFS */
      while (queue.length > 0) {
        const pos = queue.shift()!;
        const x = pos % W, y = Math.floor(pos / W);
        const idx = pos * 4;

        /* 透明化（なめらかなエッジのため距離に応じてアルファを調整） */
        const r=data[idx],g=data[idx+1],b=data[idx+2];
        const dist = Math.sqrt((r-bgR)**2+(g-bgG)**2+(b-bgB)**2);
        const fade = Math.max(0, 1 - dist/THRESHOLD);
        data[idx+3] = Math.round(data[idx+3] * (1 - fade));

        /* 隣接4方向を探索 */
        for (const [dx,dy] of [[-1,0],[1,0],[0,-1],[0,1]]) {
          enqueue(x+dx, y+dy);
        }
      }

      /* ─────────────────────────────────────────────
         ステップ3: 残った孤立した背景ピクセルを除去
         (BFFが届かなかった内部の白いピクセル)
         高輝度 + 低彩度のピクセルを追加クリーンアップ
         ─────────────────────────────────────────── */
      for (let i=0; i<total; i+=4) {
        if (data[i+3] === 0) continue; /* 既に透明はスキップ */
        const r=data[i],g=data[i+1],b=data[i+2];
        const dist = Math.sqrt((r-bgR)**2+(g-bgG)**2+(b-bgB)**2);
        const maxC=Math.max(r,g,b), minC=Math.min(r,g,b);
        const sat = maxC===0?0:(maxC-minC)/maxC;
        /* 背景色に近く彩度が低いピクセルを追加除去 */
        if (dist < 45 && sat < 0.25) {
          const fade = Math.max(0, 1 - dist/45);
          data[i+3] = Math.round(data[i+3] * (1 - fade * 0.9));
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setDataUrl(canvas.toDataURL("image/png"));
    };

    img.onload = process;
    img.src = src;
  }, [src]);

  if (!dataUrl) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={dataUrl}
      alt={alt}
      className={className}
      style={{
        imageRendering: "auto",
        WebkitBackfaceVisibility: "hidden",
        transform: "translateZ(0)",
        ...style,
      } as React.CSSProperties}
      draggable={false}
      decoding="async"
    />
  );
}
