import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "プライバシーポリシー",
  description:
    "エススリードット株式会社のプライバシーポリシーです。個人情報の取得・利用目的・管理・第三者提供・Cookie等について説明しています。",
  path: "/privacy",
});

/* ── ローカルスタイルヘルパー ── */
const prose = "text-[0.93rem] md:text-[0.97rem] leading-[2.0] text-[rgba(143,164,184,0.92)]";
const listItem = "flex gap-3 " + prose;

function ArticleHeading({ num, title }: { num: string; title: string }) {
  return (
    <div id={`art${num}`} className="scroll-mt-28 mt-14 mb-5 pb-3 border-b border-[rgba(0,200,255,0.12)]">
      <span className="text-[10px] font-mono tracking-[0.28em] text-[#00C8FF] uppercase block mb-1.5">
        第{num}条
      </span>
      <h2 className="text-lg md:text-xl font-bold text-white">{title}</h2>
    </div>
  );
}

function Sub({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-semibold text-[rgba(232,237,242,0.85)] mt-6 mb-2">{children}</h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className={prose + " mb-3"}>{children}</p>;
}

function OL({ items }: { items: (string | React.ReactNode)[] }) {
  return (
    <ol className="space-y-2 mt-3">
      {items.map((item, i) => (
        <li key={i} className={listItem}>
          <span className="shrink-0 font-mono text-[#00C8FF] text-xs mt-[0.35rem]">
            ({i + 1})
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

function UL({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mt-3">
      {items.map((item, i) => (
        <li key={i} className={listItem}>
          <span className="shrink-0 mt-[0.6rem] w-1 h-1 rounded-full bg-[#00C8FF] opacity-70" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const tocItems = [
  { num: "1",  title: "基本方針" },
  { num: "2",  title: "取得する個人情報" },
  { num: "3",  title: "個人情報の利用目的" },
  { num: "4",  title: "個人情報の適切な管理" },
  { num: "5",  title: "第三者提供について" },
  { num: "6",  title: "業務委託について" },
  { num: "7",  title: "Cookieについて" },
  { num: "8",  title: "アクセス解析について" },
  { num: "9",  title: "安全管理措置" },
  { num: "10", title: "保有個人データの開示等" },
  { num: "11", title: "お問い合わせ窓口" },
  { num: "12", title: "法令遵守" },
  { num: "13", title: "継続的改善" },
  { num: "14", title: "プライバシーポリシーの改定" },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-12 md:pt-44 md:pb-16 bg-s3-bg overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(0,200,255,0.06) 0%, transparent 65%)",
            }}
          />
          <div className="absolute inset-0 hero-grid" style={{ opacity: 0.06 }} />
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg,transparent,rgba(0,200,255,0.22),transparent)" }}
          />

          <div className="relative max-w-[860px] mx-auto px-6 text-center">
            <p className="text-[10px] tracking-[0.36em] text-[#00C8FF] uppercase font-mono mb-4">
              Legal
            </p>
            <h1
              className="font-bold text-white"
              style={{ fontSize: "clamp(1.75rem,5vw,3rem)" }}
            >
              プライバシーポリシー
            </h1>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg,transparent,rgba(30,45,61,0.6),transparent)" }}
          />
        </section>

        {/* ── Content ── */}
        <section className="py-14 md:py-20 bg-s3-surface">
          <div className="max-w-[860px] mx-auto px-6">

            {/* リード文 */}
            <p className={prose + " mb-10"}>
              エススリードット株式会社（以下「当社」）は、個人情報保護の重要性を深く認識し、当社が提供するAI導入支援・業務効率化・ホームページ制作等の各種サービス（以下「本サービス」）において取り扱う個人情報について、個人情報の保護に関する法律（以下「個人情報保護法」）および関連する法令・ガイドライン等を遵守するとともに、以下のプライバシーポリシー（以下「本ポリシー」）に従って適切に取り扱います。
            </p>

            {/* 目次 */}
            <nav
              className="mb-12 p-5 md:p-7 rounded-xl"
              style={{
                background: "rgba(0,200,255,0.04)",
                border: "1px solid rgba(0,200,255,0.12)",
              }}
            >
              <p className="text-[10px] font-mono tracking-[0.28em] text-[#00C8FF] uppercase mb-4">
                目次
              </p>
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5">
                {tocItems.map((t) => (
                  <li key={t.num}>
                    <a
                      href={`#art${t.num}`}
                      className="text-[rgba(143,164,184,0.85)] hover:text-[#00C8FF] transition-colors duration-200 text-[0.82rem]"
                    >
                      第{t.num}条　{t.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* ───── 各条 ───── */}

            <ArticleHeading num="1" title="基本方針" />
            <P>
              当社は、個人情報の適正な取り扱いが企業としての社会的責任であると認識し、役員および従業員が一体となって個人情報保護に取り組みます。
            </P>
            <P>
              本ポリシーは、本サービスを通じて取得するすべての個人情報に適用されます。当社は、個人情報保護法その他関連法令を遵守し、お客様の個人情報を適切かつ安全に管理します。また、本ポリシーの内容を継続的に見直し、改善してまいります。
            </P>

            <ArticleHeading num="2" title="取得する個人情報" />
            <P>当社は、以下の方法によって個人情報を取得します。</P>

            <Sub>1. お問い合わせ・無料相談フォーム</Sub>
            <P>
              当社ウェブサイト（https://www.s3dot.com）のお問い合わせ・無料相談フォームを通じて、氏名・会社名（屋号）・メールアドレス・電話番号・所属部署・役職・ご相談内容等の情報を取得します。
            </P>

            <Sub>2. 公式LINEアカウントを通じたご連絡</Sub>
            <P>
              当社の公式LINEアカウントを通じてご連絡をいただく際に、LINEユーザー名・プロフィール画像（公開設定のもの）および送付いただいたメッセージ内容等を取得します。
            </P>

            <Sub>3. メールによるお問い合わせ</Sub>
            <P>
              当社メールアドレス（contact@s3dot.net）宛に送付されたメールから、送信者のメールアドレス・氏名その他本文に含まれる個人情報を取得します。
            </P>

            <Sub>4. 電話によるお問い合わせ</Sub>
            <P>
              当社電話番号（03-6868-4786）宛にお電話をいただく際に、お客様からお聞かせいただいた氏名・連絡先・ご相談内容等の情報を取得することがあります。
            </P>

            <Sub>5. 契約・業務遂行に伴う情報取得</Sub>
            <P>
              サービスの提供にあたり、契約締結・業務遂行・代金決済のプロセスにおいて、担当者様の氏名・連絡先・会社情報・業務内容・納品物に関する情報等を取得します。
            </P>

            <Sub>6. ウェブサイトアクセスに伴う情報</Sub>
            <P>
              当社ウェブサイトへのアクセス時に、IPアドレス・ブラウザの種類・オペレーティングシステム・閲覧ページ・参照元URL・滞在時間・Cookie情報等を自動的に取得する場合があります（第7条・第8条参照）。
            </P>

            <ArticleHeading num="3" title="個人情報の利用目的" />
            <P>当社が取得した個人情報は、以下の目的のために利用します。</P>
            <OL
              items={[
                "お問い合わせ・ご相談への回答および対応",
                "無料相談・商談のご案内、日程調整および関連業務の遂行",
                "当社サービス（AI導入相談・業務効率化支援・AI制作・AIシステム開発・ホームページ制作等）の提供",
                "契約の締結・管理・履行",
                "請求書の発行、代金の回収その他の経理・会計処理",
                "サービス品質の向上、新サービスの企画・開発",
                "当社からのメールマガジン・事例紹介・ウェビナー案内等のご連絡（ご同意いただいた場合）",
                "法令に基づく開示・報告等の義務の履行",
                "その他、上記各号に附随または関連する目的",
              ]}
            />
            <P>
              上記の利用目的を超えて個人情報を利用する場合は、あらかじめご本人の同意を取得した上で行います。
            </P>

            <ArticleHeading num="4" title="個人情報の適切な管理" />
            <P>
              当社は、取得した個人情報を正確かつ最新の状態に保つよう努めます。個人情報への不正アクセス・紛失・漏洩・改ざん・破壊等を防止するため、適切な技術的・組織的安全管理措置を実施します（第9条参照）。
            </P>
            <P>
              個人情報を取り扱う権限は、業務上必要な最小限の範囲に限定し、役員および従業員に対して個人情報保護に関する教育・研修を定期的に実施します。また、個人情報の取り扱いに関する内部規程を整備し、適切な運用を行います。
            </P>
            <P>
              当社が保有する個人情報は、利用目的の達成に必要な期間を超えた場合、または法令上の保存期間が経過した場合に、適切な方法により消去または廃棄します。
            </P>

            <ArticleHeading num="5" title="第三者提供について" />
            <P>
              当社は、以下の場合を除き、ご本人の事前の同意を得ることなく取得した個人情報を第三者に提供しません。
            </P>
            <OL
              items={[
                "ご本人の事前の同意がある場合",
                "法令に基づく開示の要請がある場合（捜査機関・裁判所・規制当局等の適法な照会等を含む）",
                "人の生命・身体または財産の保護のために必要があり、かつご本人の同意を取得することが困難な場合",
                "公衆衛生の向上または児童の健全な育成の推進のために特に必要があり、かつご本人の同意を取得することが困難な場合",
                "国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要があり、かつご本人の同意を取得することにより当該事務の遂行に支障を及ぼすおそれがある場合",
              ]}
            />

            <ArticleHeading num="6" title="業務委託について" />
            <P>
              当社は、利用目的の達成に必要な範囲において、個人情報の取り扱いを含む業務の一部を外部の事業者（クラウドサービス事業者・システム会社・会計事務所・弁護士等の専門家等）に委託することがあります。
            </P>
            <P>
              業務委託先の選定にあたっては、個人情報の保護に関する取り組みを適切に評価し、業務委託契約において個人情報の適切な取り扱いを義務づけます。また、委託先における個人情報の取り扱いについて、必要かつ適切な監督を行います。
            </P>

            <ArticleHeading num="7" title="Cookieについて" />
            <P>
              当社ウェブサイトでは、お客様の利便性向上および当社サービスの改善を目的として、Cookie（クッキー）を使用することがあります。Cookieとは、ウェブサイトがお客様のブラウザに送信・保存する小さなテキストファイルです。Cookie自体にはお客様を特定できる個人情報は含まれていません。
            </P>
            <P>
              当社が使用するCookieには、以下の用途が含まれます。
            </P>
            <UL
              items={[
                "ウェブサイトの正常な動作の確保（セッション管理等）",
                "お客様の利用傾向・閲覧履歴の分析によるサービス改善",
                "アクセス解析ツールへのデータ提供（第8条参照）",
              ]}
            />
            <P>
              お客様はブラウザの設定を変更することでCookieの受け取りを拒否することが可能ですが、その場合はウェブサイトの一部機能が正常に動作しない場合があります。
            </P>

            <ArticleHeading num="8" title="アクセス解析について" />
            <P>
              当社ウェブサイトでは、ウェブサイトの利用状況の分析および改善を目的として、Google LLC が提供するGoogle アナリティクス等のアクセス解析ツールを使用する場合があります。これらのツールはCookieを用いて、個人を特定することなく閲覧情報（ページビュー・滞在時間・流入経路等）を収集します。
            </P>
            <P>
              収集された情報は、Google LLC のプライバシーポリシー（https://policies.google.com/privacy）に従って管理されます。当社はこのデータをウェブサイト改善の目的にのみ利用し、第三者への提供はしません。
            </P>
            <P>
              Google アナリティクスによるデータ収集を望まれない場合は、Google アナリティクス オプトアウト アドオン（https://tools.google.com/dlpage/gaoptout）のご利用をお勧めします。
            </P>

            <ArticleHeading num="9" title="安全管理措置" />
            <P>
              当社は、保有する個人情報の漏洩・滅失・毀損を防止するため、以下の安全管理措置を実施しています。
            </P>

            <Sub>■ 組織的安全管理措置</Sub>
            <UL
              items={[
                "個人情報保護に関する責任者の設置",
                "個人情報の取り扱いに関する内部規程の整備・運用",
                "個人情報へのアクセス権限の設定・管理および定期的な見直し",
                "個人情報の取り扱い状況の定期的な監査",
              ]}
            />

            <Sub>■ 人的安全管理措置</Sub>
            <UL
              items={[
                "役員・従業員に対する個人情報保護教育・研修の定期実施",
                "秘密保持に関する誓約書・契約の締結",
                "退職後も含む秘密保持義務の周知徹底",
              ]}
            />

            <Sub>■ 物理的安全管理措置</Sub>
            <UL
              items={[
                "個人情報を含む書類・媒体の施錠保管",
                "不要となった個人情報の適切な廃棄（シュレッダー処理・データ消去等）",
                "個人情報を取り扱う区域への入退室管理",
              ]}
            />

            <Sub>■ 技術的安全管理措置</Sub>
            <UL
              items={[
                "個人情報を取り扱うシステムへのアクセス制御（ID・パスワード管理等）",
                "通信回線における暗号化（SSL/TLS）の使用",
                "不正アクセス・マルウェア等に対するセキュリティ対策の実施",
                "ソフトウェアおよびセキュリティパッチの適切な管理・更新",
              ]}
            />

            <ArticleHeading num="10" title="保有個人データの開示等" />
            <P>
              当社が保有する個人情報について、ご本人またはその代理人から以下の請求を受けた場合、個人情報保護法の定めに従い、合理的な期間内に対応します。
            </P>
            <UL
              items={[
                "保有個人データの利用目的の通知",
                "保有個人データの開示",
                "保有個人データの内容の訂正・追加・削除",
                "保有個人データの利用の停止・消去",
                "保有個人データの第三者提供の停止",
                "第三者提供記録の開示",
              ]}
            />
            <P>
              ご請求の際は、本人確認書類をご提示いただいた上で対応いたします。手数料として1件あたり1,000円（税別）を申し受ける場合があります。ご請求は、下記第11条のお問い合わせ窓口まで書面またはメールにてお申し出ください。
            </P>
            <P>
              なお、個人情報保護法その他の法令に基づき、開示等をお断りまたは一部制限させていただく場合があります。その場合は、その旨および理由を通知します。
            </P>

            <ArticleHeading num="11" title="お問い合わせ窓口" />
            <P>
              個人情報の取り扱いに関するご意見・ご質問・苦情・開示等のご請求につきましては、下記の窓口にお問い合わせください。
            </P>
            <div
              className="mt-4 p-5 md:p-6 rounded-xl text-[0.88rem] leading-[2.0] text-[rgba(143,164,184,0.92)]"
              style={{
                background: "rgba(0,200,255,0.04)",
                border: "1px solid rgba(0,200,255,0.12)",
              }}
            >
              <p className="font-semibold text-white mb-3">個人情報保護担当窓口</p>
              <p>会社名：エススリードット株式会社</p>
              <p>住　所：〒107-0061 東京都港区北青山一丁目3番1号 アールキューブ青山3階</p>
              <p>
                電　話：
                <a href="tel:0368684786" className="text-[#00C8FF] hover:underline">
                  03-6868-4786
                </a>
                　（受付時間：平日10:00〜18:00）
              </p>
              <p>
                メール：
                <a href="mailto:contact@s3dot.net" className="text-[#00C8FF] hover:underline">
                  contact@s3dot.net
                </a>
              </p>
            </div>
            <P>
              なお、個人情報に関するお申し出や苦情は、個人情報保護委員会（https://www.ppc.go.jp/）にも申し出ることができます。
            </P>

            <ArticleHeading num="12" title="法令遵守" />
            <P>
              当社は、個人情報の取り扱いに関し、個人情報保護法・不正競争防止法・電気通信事業法その他の関連法令、個人情報保護委員会のガイドライン、および当社が属する業界の自主基準・ガイドライン等を遵守します。
            </P>
            <P>
              法令・ガイドラインの改正や社会情勢の変化があった場合は、速やかに必要な対応を行います。
            </P>

            <ArticleHeading num="13" title="継続的改善" />
            <P>
              当社は、個人情報の保護・管理に関する取り組みを継続的に見直し、改善します。定期的な内部監査および自己点検を実施し、問題点・課題が発見された場合は速やかに是正措置を講じます。
            </P>

            <ArticleHeading num="14" title="プライバシーポリシーの改定" />
            <P>
              当社は、法令の改正・事業内容の変更・社会情勢の変化等に応じ、本ポリシーを改定することがあります。改定後の内容は、本ウェブサイト（https://www.s3dot.com/privacy）への掲載をもってお知らせします。
            </P>
            <P>
              重要な変更を行う場合は、本ウェブサイト上で適切な方法によりお知らせします。改定後に本サービスをご利用いただいた場合は、改定後のポリシーに同意いただいたものとみなします。
            </P>

            <div className="mt-16 pt-8 border-t border-[rgba(30,45,61,0.8)] text-center">
              <p className="text-[rgba(143,164,184,0.6)] text-xs">
                エススリードット株式会社
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
