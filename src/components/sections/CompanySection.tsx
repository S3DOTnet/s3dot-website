"use client";

import { Corners, Radar, Reveal, SectionTag, SideLabel, TextLink } from "@/components/ui/design";

type InfoItem = {
  label: string;
  value: string;
  href?: string;
};

const info: InfoItem[] = [
  { label: "会社名",         value: "エススリードット株式会社" },
  { label: "英語表記",       value: "S3DOT Inc." },
  { label: "代表取締役",     value: "木村健一郎" },
  { label: "電話番号",       value: "03-6868-4786",      href: "tel:0368684786" },
  { label: "メールアドレス", value: "contact@s3dot.net", href: "mailto:contact@s3dot.net" },
  { label: "所在地",         value: "〒107-0061 東京都港区北青山一丁目3番1号 アールキューブ青山3階" },
  { label: "Webサイト",      value: "www.s3dot.com",     href: "https://www.s3dot.com" },
];

/* 所在地（北青山）の座標 + レーダー表示 */
function GeoCard({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative w-full flex items-center gap-5 px-5 py-[18px] nx-panel">
      <Corners />
      <Radar size={compact ? 110 : 150} />
      <div className="flex flex-col gap-1.5 nx-code text-[10px] md:text-[11px] tracking-[0.08em] leading-[1.7] text-s3-muted">
        <b className="text-[13px] font-bold tracking-normal text-s3-text" style={{ fontFamily: "var(--font-jp)" }}>東京・北青山</b>
        <span>LAT 35.6725 N</span>
        <span>LNG 139.7236 E</span>
        <span style={{ color: "var(--nx-accent)" }}>● アールキューブ青山 3F</span>
      </div>
    </div>
  );
}

export default function CompanySection({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section id="company" className="nx nx-grid relative py-20 md:py-28 bg-s3-bg overflow-hidden nx-sec-line">
      {!hideHeading && <SideLabel text="SEC.10 — COMPANY" />}
      <div className={`relative max-w-[1248px] mx-auto px-5 md:px-6 xl:px-12 grid grid-cols-1 gap-7 items-start ${hideHeading ? "lg:grid-cols-12" : "lg:grid-cols-12 lg:gap-6"}`}>

        {/* ── 左: 見出し + レーダー ── */}
        <div className={`flex flex-col items-start gap-5 md:gap-6 ${hideHeading ? "lg:col-span-4" : "lg:col-span-4"}`}>
          {!hideHeading && (
            <>
              <SectionTag num="10" label="COMPANY" />
              <h2 className="font-black tracking-[-0.04em] text-s3-text" style={{ fontSize: "clamp(2.1rem, 4vw, 3.25rem)" }}>会社情報</h2>
              <p className="text-base md:text-lg font-bold text-s3-muted">AIをもっと身近にする会社</p>
              <TextLink href="/company">会社情報を詳しく見る</TextLink>
            </>
          )}
          <GeoCard compact={hideHeading} />
        </div>

        {/* ── 右: 会社情報リスト ── */}
        <Reveal
          as="dl"
          className="lg:col-start-6 lg:col-span-7"
          style={{ borderTop: "1px solid var(--nx-line)" }}
        >
          {info.map((item) => {
            const isExternal = item.href?.startsWith("http");
            return (
              <div key={item.label} className="flex flex-col md:flex-row gap-1 md:gap-6 py-3 md:py-[18px] text-sm md:text-[15px]" style={{ borderBottom: "1px solid var(--nx-line)" }}>
                <dt className="md:w-[150px] shrink-0 nx-code text-[10px] md:text-xs tracking-[0.1em] text-s3-muted md:pt-[3px]">{item.label}</dt>
                <dd className="text-s3-text break-words">
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="hover:text-s3-blue transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
