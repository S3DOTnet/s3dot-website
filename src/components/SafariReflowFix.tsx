"use client";

import { useEffect } from "react";

/**
 * Safari(WebKit)は、幅の広いデスクトップウィンドウでの初回描画時に
 * clamp()/vwベースのサイズ計算が古いまま固定され、実際にウィンドウが
 * リサイズされるまで再計算されないことがある（WebKitの既知の不具合）。
 * フォント読み込み完了後にレイアウトを強制的に再計算させることで、
 * 手動リサイズなしでも正しいサイズで描画されるようにする。
 * DOM・見た目・他ブラウザの挙動は一切変更しない。
 */
export default function SafariReflowFix() {
  useEffect(() => {
    const forceReflow = () => {
      const { style } = document.documentElement;
      const prev = style.transform;
      style.transform = "translateZ(0)";
      void document.documentElement.offsetHeight;
      style.transform = prev;
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(forceReflow);
    }
    const timer = setTimeout(forceReflow, 300);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
