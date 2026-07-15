---
name: seo-review
description: S3DOTウェブサイトのSEO・メタデータ・構造化データ・表示速度上の問題を確認し、日本語で報告する。「SEOを確認して」「メタデータをレビューして」等のリクエストで使用する。
---

# SEO Review

## 目的
S3DOTサイトの検索エンジン最適化・アクセシビリティ・表示速度に関わる項目を横断的に点検し、日本語で報告する。ファイルの変更はユーザーの承認なしに行わない。

## 確認対象と主な参照ファイル
1. **title / description**
   - `src/app/layout.tsx` の `metadata`(`title.default`, `title.template`, `description`)
   - 各ページ (`src/app/*/page.tsx`) の個別メタデータ(未設定ならtemplate継承を確認)
2. **OGP / Twitterカード**
   - `src/app/layout.tsx` の `openGraph` / `twitter`
   - `src/app/opengraph-image.tsx` の画像内容・サイズ(1200x630)
3. **見出し構造**
   - 各ページ・セクションコンポーネント (`src/components/sections/*.tsx`) でh1〜h3の階層が正しいか(h1は1ページ1つ等)
4. **画像alt**
   - `TransparentLogo` などの `alt` プロパティ、`<img>` / `next/image` 使用箇所でalt未設定がないか
5. **内部リンク**
   - `src/components/layout/Header.tsx`, `Footer.tsx`, `src/app/sitemap/SitemapCard.tsx` のリンク網羅性・リンク切れ
6. **sitemap / robots**
   - `src/app/sitemap.ts` に存在するURLが実在するか、更新漏れがないか
   - `src/app/robots.ts` の許可/禁止設定が意図通りか
7. **構造化データ**
   - `src/components/seo/JsonLd.tsx` の内容が実際のサービス内容と一致しているか
8. **表示速度**
   - 画像最適化(`next/image` 利用の有無、`TransparentLogo` のCanvas処理コスト)
   - framer-motionアニメーションの過剰使用がないか
   - 不要な `"use client"` 化がないか

## 手順
1. 上記ファイルを実際に読み、現状を確認する
2. 可能であれば `npm run build` のビルド出力(ページサイズ等)も参考にする
3. 問題点をチェックリスト形式で日本語報告する(項目ごとにOK/要改善/確認できず)

## 出力フォーマット
- 各カテゴリ(title/description, OGP, 見出し構造, alt, 内部リンク, sitemap, robots, 構造化データ, 表示速度)ごとに結果を箇条書きで報告する
- 改善提案がある場合は具体的な修正案を添える(ただしユーザーの承認なしにファイルは変更しない)
