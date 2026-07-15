---
name: check-changes
description: S3DOTウェブサイトでgit差分を確認し、変更内容・リスク・未確認事項を日本語で報告する。「変更を確認して」「差分をレビューして」「何が変わった？」等のリクエストで使用する。
---

# Check Changes — 変更差分レビュー

## 目的
コミット前・push前に、現在の作業ツリーの変更を人間が理解しやすい形で日本語要約する。このSkillはレビューと報告のみを行い、コミットやpushは行わない(それらは safe-publish Skillを使用する)。

## 手順
1. `git status` で変更ファイル一覧(未追跡ファイル含む)を確認する
2. `git diff` と `git diff --staged` で実際の差分内容を確認する
3. `git log --oneline -10` で直近のコミット履歴と比較し、意図から外れた変更が混ざっていないか確認する
4. 変更ファイルが以下に該当する場合は特に注意して確認する
   - `.env*` ファイルや、APIキー・秘密鍵らしき文字列
   - `public/images/logo.png` や `src/components/ui/TransparentLogo.tsx` — ロゴの比率・形状・発光表現の無断変更がないか
   - `src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/components/seo/JsonLd.tsx` などSEOに関わるファイル
   - `package.json` / `package-lock.json` — 新規パッケージ追加の要否・妥当性

## 報告フォーマット(日本語)
- **変更概要**: 何が・なぜ変わったか(推測できる範囲で)
- **変更ファイル一覧**: カテゴリ分け(機能追加/修正/スタイル/設定/その他)
- **リスク**: 既存機能への影響、ブランドガイドライン逸脱、SEO/パフォーマンスへの影響
- **未確認事項**: 動作確認が済んでいない箇所、ユーザーへの確認が必要な判断
