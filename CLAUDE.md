@AGENTS.md

## プロジェクト概要
- Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4
- shadcn / Base UI + framer-motion + lucide-react
- 問い合わせフォーム: Resend
- アクセス解析: GA4 (@next/third-parties)
- 単一ページ中心の構成 (`src/app/page.tsx` にセクションを積み上げ) + 独立ページ (case, contact, faq, price, service, legal, privacy, terms, sitemap)

## ブランドガイドライン
- S3DOTのブランドは高級感・未来感・信頼感を最優先する
- 配色は黒を基調に、青・紫系のアクセントを使用する
- 公式ロゴ (`public/images/logo.png`, `src/components/ui/TransparentLogo.tsx`) の比率・形状・発光表現を無断で変更しない
- PC表示だけでなく、必ずスマホ表示も確認する

## 品質基準
- SEO、アクセシビリティ、表示速度を常に意識する
- 不要なパッケージを追加しない
- 既存機能を壊す可能性がある変更は、実施前に必ず説明する

## 作業フロー
- 変更後は `npm run lint` と `npm run build` を実行し、必要に応じてブラウザでPC/スマホ双方の動作確認を行う
- GitHubへpushする前には必ずユーザーへ確認する(明示的な許可があるまでpushしない)
- コミットメッセージは簡潔な日本語にする

## セキュリティ
- 環境変数・APIキー・認証情報・秘密鍵の値を出力・ログ・コミットに含めない
- `.env.local` など `.env*` ファイルはコミットしない
