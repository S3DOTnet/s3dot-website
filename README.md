# S3DOT ウェブサイト

エススリードット株式会社のコーポレートサイトです。AI導入・業務改善・業務自動化・AIシステム開発に関するサービス紹介、料金、事例、問い合わせフォームなどを提供します。

## 技術構成

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- shadcn / Base UI + framer-motion + lucide-react
- 問い合わせフォーム: [Resend](https://resend.com)
- アクセス解析: Google Analytics 4 (`@next/third-parties`)

> **注意**: このプロジェクトはNext.jsの最新版を利用しており、標準的な学習知識と異なる破壊的変更を含む場合があります。実装前に `AGENTS.md` を確認してください。

## セットアップ

```bash
npm install
cp .env.local.example .env.local
```

`.env.local` に以下を設定してください(詳細は `.env.local.example` のコメント参照)。

- `NEXT_PUBLIC_SITE_URL`: 本番サイトURL
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: GA4測定ID(任意)
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: Search Console所有権確認コード(任意)
- `RESEND_API_KEY`: Resend APIキー(問い合わせフォーム送信に必要)
- `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL`: 問い合わせメールの宛先・送信元

## 開発

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) で確認できます。

## 主なスクリプト

| コマンド | 内容 |
| --- | --- |
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | 本番ビルド |
| `npm run start` | 本番サーバー起動 |
| `npm run lint` | ESLint実行 |

## ディレクトリ構成(抜粋)

```
src/
  app/
    page.tsx            # トップページ(各セクションを積み上げ)
    layout.tsx           # メタデータ・OGP・GA4
    sitemap.ts / robots.ts
    api/contact/route.ts # 問い合わせフォーム送信API
    case/ contact/ faq/ price/ service/ legal/ privacy/ terms/ sitemap/
  components/
    layout/               # Header, Footer
    sections/              # トップページの各セクション
    seo/JsonLd.tsx         # 構造化データ
    ui/                    # 共通UIコンポーネント(TransparentLogo等)
public/
  images/logo.png          # 公式ロゴ
```

## AI開発ルール

このリポジトリでClaude Codeを使う際のルールは `CLAUDE.md` / `AGENTS.md` および `.claude/skills/` を参照してください。

## デプロイ

[Vercel](https://vercel.com) へのデプロイを想定しています。GitHubへのpushは事前に必ず承認を得てから行ってください。
