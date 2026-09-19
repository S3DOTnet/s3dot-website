"use client";

import { useEffect, useRef } from "react";
import { MessageSquare, Mail, ArrowRight } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";
import { Btn, Corners, FloorGrid, Gyro, LineIcon, Reveal, Ring, SectionTag, SideLabel, LINE_URL } from "@/components/ui/design";

const MAIL_HREF = `mailto:contact@s3dot.net?subject=${encodeURIComponent("【S3DOT】無料相談・お問い合わせ")}&body=${encodeURIComponent("お名前：\n会社名・屋号：\n\nご相談内容：\nAI導入・業務改善・ホームページ制作・LINE連携・その他\n\n現在お困りのこと：\n\nご希望の内容：\n相談したい・費用を知りたい・導入を検討している\n\nご希望の連絡方法：\nメール・電話・LINE\n\nその他：")}`;

const options = [
  {
    icon: MessageSquare,
    code: "FORM",
    label: "無料相談（フォーム）",
    desc: "まずはお気軽にどうぞ。",
    cta: "相談フォームへ",
    isLine: false,
    href: "#contact-form",
  },
  {
    icon: Mail,
    code: "MAIL",
    label: "メールで問い合わせ",
    desc: "具体的なご要望があればメールでお送りください。",
    cta: "メールを送る",
    isLine: false,
    href: MAIL_HREF,
  },
  {
    icon: null,
    code: "LINE",
    label: "公式LINEで相談",
    desc: "LINEで気軽にご相談ください。スマホからでも簡単です。",
    cta: "LINEで相談する",
    isLine: true,
    href: LINE_URL,
  },
];

export default function ContactSection({ hideIntro = false }: { hideIntro?: boolean }) {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const hasCorrectedInitialHashScroll = useRef(false);

  /* /contact#contact-form で直接開いたとき、固定ヘッダー分を考慮してフォーム位置へ補正する（既存の挙動を維持） */
  useEffect(() => {
    if (
      !hideIntro ||
      hasCorrectedInitialHashScroll.current ||
      window.location.hash !== "#contact-form"
    ) {
      return;
    }

    let cancelled = false;
    let userInteracted = false;
    let layoutFrame = 0;
    let correctionFrame = 0;
    let restoreFrame = 0;
    let previousScrollBehavior: string | null = null;

    const markUserInteraction = () => {
      userInteracted = true;
      removeInteractionListeners();
    };
    const handleUserKeyDown = (event: KeyboardEvent) => {
      if (
        ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(
          event.key
        )
      ) {
        markUserInteraction();
      }
    };
    const removeInteractionListeners = () => {
      window.removeEventListener("wheel", markUserInteraction);
      window.removeEventListener("touchstart", markUserInteraction);
      window.removeEventListener("keydown", handleUserKeyDown);
    };
    window.addEventListener("wheel", markUserInteraction, { passive: true });
    window.addEventListener("touchstart", markUserInteraction, { passive: true });
    window.addEventListener("keydown", handleUserKeyDown);

    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    void fontsReady.then(() => {
      if (cancelled || userInteracted) return;

      layoutFrame = window.requestAnimationFrame(() => {
        correctionFrame = window.requestAnimationFrame(() => {
          if (cancelled || userInteracted) return;

          const formContainer = formContainerRef.current;
          const target = formContainer?.querySelector<HTMLElement>("#contact-form");
          if (!formContainer || !target) {
            removeInteractionListeners();
            return;
          }

          const headerHeight = document.querySelector("header")?.clientHeight ?? 0;
          const transform = window.getComputedStyle(formContainer).transform;
          const translateY = transform === "none" ? 0 : new DOMMatrixReadOnly(transform).m42;
          const layoutTop = target.getBoundingClientRect().top + window.scrollY - translateY;
          const targetTop = Math.max(0, layoutTop - headerHeight);
          const root = document.documentElement;

          previousScrollBehavior = root.style.scrollBehavior;
          root.style.scrollBehavior = "auto";
          window.scrollTo({ top: targetTop, left: 0, behavior: "auto" });
          hasCorrectedInitialHashScroll.current = true;
          removeInteractionListeners();

          restoreFrame = window.requestAnimationFrame(() => {
            root.style.scrollBehavior = previousScrollBehavior ?? "";
            previousScrollBehavior = null;
          });
        });
      });
    });

    return () => {
      cancelled = true;
      removeInteractionListeners();
      window.cancelAnimationFrame(layoutFrame);
      window.cancelAnimationFrame(correctionFrame);
      window.cancelAnimationFrame(restoreFrame);

      if (previousScrollBehavior !== null) {
        document.documentElement.style.scrollBehavior = previousScrollBehavior;
      }
    };
  }, [hideIntro]);

  return (
    <section id="contact" className="nx nx-grid relative py-20 md:py-32 bg-s3-bg overflow-hidden nx-sec-line">
      {!hideIntro && (
        <>
          <SideLabel text="SEC.08 — CONTACT" />
          {/* 背景: 計器リング + ジャイロコア + フロアグリッド */}
          <div className="hidden md:block absolute left-1/2 top-[-520px] -ml-[500px] w-[1000px] h-[1000px] opacity-50 pointer-events-none" aria-hidden="true">
            <Ring d={1000} dash="1 9" cls="nx-spin" dur={140} accent />
            <Ring d={860} dash="60 14" cls="nx-spinr" dur={160} />
            <i className="absolute left-1/2 top-1/2 w-[900px] h-[900px] -ml-[450px] -mt-[450px] rounded-full" style={{ background: "radial-gradient(circle, var(--nx-accent-soft) 0%, transparent 65%)" }} />
          </div>
          <div className="absolute md:left-1/2 md:top-10 md:-ml-[260px] right-[-60px] top-16 md:right-auto opacity-50 md:opacity-55 pointer-events-none" aria-hidden="true">
            <div className="md:hidden"><Gyro size={260} /></div>
            <div className="hidden md:block"><Gyro size={520} /></div>
          </div>
          <FloorGrid low />
        </>
      )}

      <div className="relative max-w-[1248px] mx-auto px-5 md:px-6 xl:px-12">

        {/* ── ① 見出し + CTA ── */}
        {!hideIntro && (
          <div className="flex flex-col items-start md:items-center md:text-center gap-5 md:gap-8">
            <SectionTag num="08" label="CONTACT" />
            <Reveal
              as="h2"
              className="font-black leading-[1.15] tracking-[-0.05em] text-s3-text"
              style={{ fontSize: "clamp(2.5rem, 6.4vw, 5.75rem)", fontFeatureSettings: '"palt"' }}
            >
              「これもAIで<br />
              <span className="nx-glow" style={{ color: "var(--nx-accent)" }}>できますか？</span>」
            </Reveal>
            <p className="text-sm md:text-[17px] leading-[2] text-s3-muted">
              その一言から始まるご相談が、一番多いです。<br className="hidden md:inline" />
              「AI導入について相談する」「業務改善について相談する」だけでも大丈夫。<br className="hidden md:inline" />
              AIに詳しくなくても、まずはお気軽にご相談ください。
            </p>
            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-center gap-3 md:gap-3.5">
              <div className="w-full md:w-[300px]">
                <Btn href="#contact-form">まずは無料で相談する</Btn>
              </div>
              <div className="w-full md:w-[270px]">
                <Btn href={LINE_URL} variant="line">公式LINEで相談する</Btn>
              </div>
              <span className="nx-code text-xs md:pl-2.5" style={{ color: "var(--nx-ok)" }}>● 相談は無料です。</span>
            </div>
          </div>
        )}

        {/* ── ② 相談方法カード ── */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-2.5 md:gap-5 ${hideIntro ? "" : "mt-10 md:mt-16"}`}>
          {options.map((opt, i) => {
            const Icon = opt.icon;
            return (
              /* native <a> でリンクを保証 */
              <Reveal
                as="a"
                key={opt.label}
                href={opt.href}
                {...(opt.isLine ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                delay={i * 0.08}
                className="nx-panel hover flex flex-row md:flex-col items-center md:items-stretch gap-4 md:gap-3 p-5 md:p-[30px] text-s3-text no-underline"
              >
                <div className="nx-meta shrink-0 md:shrink">
                  {opt.isLine
                    ? <span style={{ color: "#06C755" }}><LineIcon size={26} /></span>
                    : Icon && <Icon size={26} strokeWidth={1.4} style={{ color: "var(--nx-accent)" }} />
                  }
                  <span className="hidden md:inline">{opt.code}</span>
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-1 md:gap-3 md:mt-1.5">
                  <span className="text-base md:text-[21px] font-black">{opt.label}</span>
                  <span className="text-xs md:text-sm leading-[1.7] md:leading-[1.8] text-s3-muted">{opt.desc}</span>
                </div>
                <span
                  className="shrink-0 md:mt-1.5 md:pt-4 flex items-center justify-between gap-2 text-[15px] font-bold"
                  style={{ color: opt.isLine ? "#06C755" : "var(--nx-accent)" }}
                >
                  <span className="hidden md:inline">{opt.cta}</span>
                  <ArrowRight size={18} />
                </span>
              </Reveal>
            );
          })}
        </div>

        {/* ── ③ 無料相談フォーム ── */}
        <Reveal
          ref={formContainerRef}
          delay={0.1}
          className="relative mt-10 md:mt-16 rounded-md"
          style={{ border: "1px solid var(--nx-line)", background: "rgba(8,12,20,0.88)", padding: "clamp(1.75rem, 5vw, 4rem) clamp(1.25rem, 6vw, 5rem)" }}
        >
          <Corners />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3.5 md:gap-10 mb-8 md:mb-11">
            <div className="flex flex-col gap-4 md:gap-5">
              <SectionTag num="09" label="FREE CONSULTATION" />
              <h3 className="font-black tracking-[-0.03em] text-s3-text" style={{ fontSize: "clamp(1.75rem, 3.4vw, 3rem)" }}>無料相談フォーム</h3>
            </div>
            <p className="text-[13px] md:text-[15px] leading-[1.9] text-s3-muted md:text-right">
              内容を確認後、<br className="hidden md:inline" />原則2営業日以内にご連絡いたします。
            </p>
          </div>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
