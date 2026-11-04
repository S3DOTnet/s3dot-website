import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type TableProps = {
  headers: string[];
  rows: string[][];
};

export function TextBlock({ text }: { text: string }) {
  return (
    <div className="space-y-5">
      {text.split("\n\n").map((paragraph, index) => {
        const isHeading =
          /^(第\d+章|第\d+条|第\d+条の\d+|別紙\d|附則|\d+\. )/.test(paragraph);

        return isHeading ? (
          <h2
            key={index}
            className="whitespace-pre-wrap pt-7 text-lg font-bold leading-[1.9] text-white md:text-xl"
          >
            {paragraph}
          </h2>
        ) : (
          <p
            key={index}
            className="whitespace-pre-wrap text-[0.93rem] leading-[2.05] text-[rgba(178,195,210,0.94)] md:text-[0.98rem]"
          >
            {paragraph}
          </p>
        );
      })}
    </div>
  );
}

export function LegalTable({ headers, rows }: TableProps) {
  return (
    <div className="my-8 overflow-x-auto rounded-lg border border-[rgba(0,200,255,0.16)]">
      <table className="min-w-full border-collapse text-left text-[0.84rem] leading-[1.8] text-[rgba(178,195,210,0.94)]">
        <thead className="bg-[rgba(0,200,255,0.07)] text-white">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="min-w-[9rem] whitespace-pre-wrap border-b border-r border-[rgba(0,200,255,0.16)] px-4 py-3 font-semibold last:border-r-0"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="odd:bg-[rgba(255,255,255,0.012)]">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="min-w-[9rem] whitespace-pre-wrap border-b border-r border-[rgba(30,45,61,0.72)] px-4 py-3 align-top last:border-r-0"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function LegalDocument({
  title,
  notice,
  children,
  counterpartHref,
  counterpartLabel,
}: {
  title: string;
  notice: string;
  children: React.ReactNode;
  counterpartHref: string;
  counterpartLabel: string;
}) {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-s3-bg pb-12 pt-32 md:pb-16 md:pt-44">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(0,200,255,0.06) 0%, transparent 65%)",
            }}
          />
          <div className="absolute inset-0 hero-grid" style={{ opacity: 0.06 }} />
          <div className="relative mx-auto max-w-[960px] px-6 text-center">
            <h1
              className="font-bold text-white"
              style={{ fontSize: "clamp(1.7rem,5vw,3rem)" }}
            >
              {title}
            </h1>
            <p className="mx-auto mt-6 max-w-[760px] text-[0.9rem] leading-[1.9] text-[rgba(143,164,184,0.92)]">
              {notice}
            </p>
          </div>
        </section>

        <section className="bg-s3-surface py-14 md:py-20">
          <article className="mx-auto max-w-[960px] px-6">
            {children}

            <nav
              aria-label="S3 NIGHT OS 法務ページ"
              className="mt-16 flex flex-col gap-4 border-t border-[rgba(0,200,255,0.16)] pt-8 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-7"
            >
              <Link
                href={counterpartHref}
                className="text-s3-blue transition-colors hover:text-white"
              >
                {counterpartLabel}
              </Link>
              <a
                href="mailto:contact@s3dot.net"
                className="text-s3-blue transition-colors hover:text-white"
              >
                お問い合わせ：contact@s3dot.net
              </a>
            </nav>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
