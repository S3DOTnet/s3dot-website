import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "料金｜AI導入支援・業務自動化",
  description:
    "S3DOTのAI導入支援、業務自動化、オーダーメイド開発に関する料金の考え方をご案内します。内容に応じて個別にお見積もりします。",
  path: "/price",
});

export default function PriceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
