import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "利用規約 | S3DOT",
  description:
    "エススリードット株式会社の利用規約です。ウェブサイトの閲覧・お問い合わせ・無料相談・AI導入相談・ホームページ制作・AI開発等のサービスご利用にあたっての規約を定めています。",
};

/* ── ローカルスタイルヘルパー ── */
const prose = "text-[0.93rem] md:text-[0.97rem] leading-[2.0] text-[rgba(143,164,184,0.92)]";
const listItem = "flex gap-3 " + prose;

function ArticleHeading({ num, title }: { num: string; title: string }) {
  return (
    <div id={`art${num}`} className="scroll-mt-28 mt-14 mb-5 pb-3 border-b border-[rgba(123,94,255,0.15)]">
      <span className="text-[10px] font-mono tracking-[0.28em] text-[#7B5EFF] uppercase block mb-1.5">
        第{num}条
      </span>
      <h2 className="text-lg md:text-xl font-bold text-white">{title}</h2>
    </div>
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
          <span className="shrink-0 font-mono text-[#7B5EFF] text-xs mt-[0.35rem]">
            ({i + 1})
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

function NL({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2 mt-3">
      {items.map((item, i) => (
        <li key={i} className={listItem}>
          <span className="shrink-0 font-mono text-[rgba(123,94,255,0.7)] text-xs mt-[0.35rem] w-4">
            {i + 1}.
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
          <span className="shrink-0 mt-[0.6rem] w-1 h-1 rounded-full bg-[#7B5EFF] opacity-70" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const tocItems = [
  { num: "1",  title: "適用" },
  { num: "2",  title: "本サービスの内容" },
  { num: "3",  title: "利用条件" },
  { num: "4",  title: "禁止事項" },
  { num: "5",  title: "知的財産権" },
  { num: "6",  title: "免責事項" },
  { num: "7",  title: "サービスの変更・停止" },
  { num: "8",  title: "リンクについて" },
  { num: "9",  title: "反社会的勢力の排除" },
  { num: "10", title: "損害賠償" },
  { num: "11", title: "規約の変更" },
  { num: "12", title: "準拠法" },
  { num: "13", title: "裁判管轄" },
  { num: "14", title: "お問い合わせ" },
];

export default function TermsPage() {
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
                "radial-gradient(ellipse at 50% 0%, rgba(123,94,255,0.06) 0%, transparent 65%)",
            }}
          />
          <div className="absolute inset-0 hero-grid" style={{ opacity: 0.06 }} />
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg,transparent,rgba(123,94,255,0.25),transparent)" }}
          />

          <div className="relative max-w-[860px] mx-auto px-6 text-center">
            <p className="text-[10px] tracking-[0.36em] text-[#7B5EFF] uppercase font-mono mb-4">
              Legal
            </p>
            <h1
              className="font-bold text-white mb-5"
              style={{ fontSize: "clamp(1.75rem,5vw,3rem)" }}
            >
              利用規約
            </h1>
            <p
              className="text-[rgba(74,96,112,0.9)] tracking-wide"
              style={{ fontSize: "0.78rem" }}
            >
              制定日：2025年4月1日　／　最終更新日：2026年7月14日
            </p>
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
              エススリードット株式会社（以下「当社」）が運営するウェブサイト（https://www.s3dot.com、以下「本サイト」）および当社が提供する各種サービス（以下「本サービス」）をご利用いただく際には、本利用規約（以下「本規約」）をよくお読みいただき、内容に同意の上でご利用ください。本サービスを利用された時点で、ユーザーは本規約に同意したものとみなします。
            </p>

            {/* 目次 */}
            <nav
              className="mb-12 p-5 md:p-7 rounded-xl"
              style={{
                background: "rgba(123,94,255,0.04)",
                border: "1px solid rgba(123,94,255,0.14)",
              }}
            >
              <p className="text-[10px] font-mono tracking-[0.28em] text-[#7B5EFF] uppercase mb-4">
                目次
              </p>
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5">
                {tocItems.map((t) => (
                  <li key={t.num}>
                    <a
                      href={`#art${t.num}`}
                      className="text-[rgba(143,164,184,0.85)] hover:text-[#7B5EFF] transition-colors duration-200 text-[0.82rem]"
                    >
                      第{t.num}条　{t.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* ───── 各条 ───── */}

            <ArticleHeading num="1" title="適用" />
            <P>
              本規約は、当社が本サイトおよび本サービスを通じてユーザーに提供するすべてのサービスの利用に関し、ユーザー（以下「ユーザー」）と当社との間の権利義務関係を定めるものです。
            </P>
            <P>
              ユーザーは、本サービスを利用することにより、本規約の全内容に同意したものとみなします。なお、ユーザーが未成年者の場合は、法定代理人（保護者）の同意を得た上でご利用ください。
            </P>
            <P>
              有償サービスについては、本規約に加えて別途締結する個別の業務委託契約・利用契約が適用されます。個別契約の内容が本規約と異なる場合は、個別契約が優先されるものとします。
            </P>

            <ArticleHeading num="2" title="本サービスの内容" />
            <P>当社が提供する本サービスは以下の通りです。</P>
            <OL
              items={[
                "本サイトの閲覧および情報提供",
                "お問い合わせ・無料相談の受け付けおよび対応",
                "AI導入相談（自社に適したAI活用方法のヒアリング・提案）",
                "業務効率化支援（業務フローの分析・改善提案・自動化の設計および実装）",
                "AI制作（AIを活用したテキスト・画像・動画・音声コンテンツの制作支援）",
                "AIシステム開発（オーダーメイドのAIシステムの設計・開発・テスト・運用）",
                "ホームページ制作（企業サイト・ランディングページ・LP等の企画・設計・制作）",
                "上記各サービスに附随するコンサルティング・トレーニング・運用サポート",
                "その他当社が別途定めるサービス",
              ]}
            />
            <P>
              サービスの詳細・提供条件・費用等については、当社との個別協議の上、別途書面または電磁的記録にて確認するものとします。無料相談はあくまで情報提供・ヒアリングを目的とするものであり、具体的な成果・効果を保証するものではありません。
            </P>

            <ArticleHeading num="3" title="利用条件" />
            <NL
              items={[
                "ユーザーは、本規約の内容を理解・同意した上で本サービスをご利用ください。",
                "以下のいずれかに該当するユーザーは、本サービスをご利用いただけません。①過去に当社との契約に違反したことがある方　②第9条（反社会的勢力の排除）に定める者に該当する方　③本規約に違反するおそれがあると当社が合理的に判断する方",
                "ユーザーは、自己の責任において適法かつ正当な目的で本サービスを利用するものとします。",
                "ユーザーは、本サービスの利用にあたり提供する情報（氏名・連絡先・会社情報等）が真実・正確であることを保証します。虚偽情報の提供により生じた損害について、当社は一切の責任を負いません。",
                "有償サービスのご利用にあたっては、当社が別途提示する見積もり金額についてご承諾の上、個別契約を締結していただきます。代金のお支払いは、個別契約に定める方法・期日に従ってください。",
              ]}
            />

            <ArticleHeading num="4" title="禁止事項" />
            <P>ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。</P>
            <OL
              items={[
                "法令または公序良俗に違反する行為",
                "当社または第三者の著作権・商標権・特許権・実用新案権・意匠権・肖像権その他の知的財産権を侵害する行為",
                "当社または第三者の財産・プライバシー・名誉・信用・業務を毀損・妨害する行為",
                "不正アクセス・クラッキング・フィッシングその他コンピュータまたはネットワークへの不正行為",
                "本サイトまたは本サービスに対するリバースエンジニアリング・逆コンパイル・逆アセンブル等の解析行為",
                "本サービスの運営・提供を妨害するような過度な負荷をかける行為",
                "当社または第三者になりすます行為、虚偽の情報を提供する行為",
                "競合他社・競合サービスの情報収集・調査・分析を目的とした本サービスの利用",
                "当社の事前の書面による承諾なく、本サービスの全部または一部を第三者に転売・再利用・提供する行為",
                "スパム送信・大量のメール送付等、当社に対して過度な負担を与える行為",
                "反社会的勢力への利益供与その他関与行為",
                "その他当社が合理的な理由により不適切と判断する行為",
              ]}
            />
            <P>
              前項の禁止行為に該当すると当社が判断した場合、事前の通知なくサービスの提供を停止し、締結済みの契約を解除することができます。それにより生じた損害について、当社は一切の責任を負いません。
            </P>

            <ArticleHeading num="5" title="知的財産権" />
            <NL
              items={[
                "本サイトに掲載されているテキスト・画像・映像・音声・ロゴ・デザイン・ソフトウェア・プログラムその他一切のコンテンツ（以下「本コンテンツ」）に関する著作権・商標権その他の知的財産権は、当社または当社に利用を許諾した権利者に帰属します。",
                "ユーザーは、当社の事前の書面による許可なく、本コンテンツを複製・転載・公衆送信・翻案・改変・販売・その他いかなる形でも利用することはできません。ただし、著作権法上認められた私的使用・引用その他の場合はこの限りではありません。",
                "当社が有償サービスとして制作・開発した成果物（ウェブサイト・AIシステム・コンテンツ等）の知的財産権の帰属・ライセンス条件については、別途締結する個別契約に定めるものとします。個別契約に別段の定めがない場合、成果物に関する著作権は当社に帰属し、ユーザーには使用許諾（ライセンス）を付与します。",
                "ユーザーが当社に提供した情報・データ（業務情報・素材等）に関する知的財産権は、ユーザーに帰属します。ユーザーは、当社がサービス提供のために当該情報・データを利用することに同意するものとします。",
              ]}
            />

            <ArticleHeading num="6" title="免責事項" />
            <NL
              items={[
                "当社は、本サイトに掲載する情報の正確性・完全性・有用性・適時性等について、いかなる保証も行いません。本サイトの情報はあくまで参考情報であり、具体的な意思決定・行動に際しては、ユーザー自身の判断と責任において行ってください。",
                "当社が提供するAI導入支援・業務効率化支援その他の有償サービスについては、個別契約に定める範囲の善管注意義務を負うものとし、特定の成果・効果・売上増加・コスト削減効果等を保証するものではありません。",
                "当社は、以下の事由によりユーザーまたは第三者に生じた損害について、故意または重過失による場合を除き、一切の責任を負いません。①本サービスの提供停止・中断・変更（システムメンテナンス・障害等）　②天災地変・停電・通信回線の障害等の不可抗力　③ユーザーの設備・環境・第三者サービスの利用に起因する損害　④第三者によるサイバー攻撃・不正アクセス・情報漏洩等　⑤ユーザーが本規約に違反して本サービスを利用したこと　⑥当社が推奨するAIツール・外部サービスの仕様変更・提供終了",
                "本サービスにはGoogle Analytics等の外部サービスを使用しており、これら外部サービスに起因する損害について、当社は責任を負いません。",
                "当社が提供する無料相談・ウェブサイト閲覧については、いかなる場合も損害賠償責任を負いません。",
              ]}
            />

            <ArticleHeading num="7" title="サービスの変更・停止" />
            <P>
              当社は、以下の場合に本サービスの内容を変更し、または本サービスの全部もしくは一部の提供を一時停止・終了することがあります。
            </P>
            <UL
              items={[
                "システムのメンテナンス・更新・障害対応を行う場合",
                "天災・事変・停電・通信障害等の不可抗力が生じた場合",
                "法令・規制の変更によりサービスの継続が困難となった場合",
                "その他、当社が本サービスの提供の継続が困難であると判断した場合",
              ]}
            />
            <P>
              変更・停止を行う場合は、可能な限り事前に本サイト上でお知らせしますが、緊急の場合はこの限りではありません。サービスの変更・停止によりユーザーに生じた損害について、当社に故意または重過失がある場合を除き、当社は責任を負わないものとします。
            </P>

            <ArticleHeading num="8" title="リンクについて" />
            <NL
              items={[
                "本サイトへのリンクを設置する場合は、事前に当社（contact@s3dot.net）へご連絡ください。ただし、個人の方がご自身のブログ・SNS等で非商業目的でリンクを設置する場合はこの限りではありません。",
                "本サイトのコンテンツをフレーム内に表示する行為（フレーミング）、または当社の許可なくコンテンツを他サイトに埋め込む行為は禁止します。",
                "本サイトから外部サイトへのリンクが存在しますが、リンク先の外部サイトは当社が管理するものではありません。リンク先の内容・サービス・プライバシーポリシー等について、当社は一切の責任を負いません。",
                "当社は、本サイトへのリンクを事前の通知なく削除または変更する権限を有します。",
              ]}
            />

            <ArticleHeading num="9" title="反社会的勢力の排除" />
            <NL
              items={[
                "ユーザーは、現在および将来にわたり、暴力団・暴力団員・暴力団員でなくなった時から5年を経過しない者・暴力団準構成員・暴力団関係企業・総会屋等・社会運動等標ぼうゴロ・特殊知能暴力集団等その他これらに準じる者（以下総称して「反社会的勢力」）に該当しないこと、および反社会的勢力と一切の関係を有しないことを表明・保証します。",
                "ユーザーは、自らまたは第三者を利用して、当社に対し暴力的要求行為・法的責任を超えた不当要求行為・脅迫的言動・業務妨害行為・信用棄損行為等を行わないことを確約します。",
                "当社は、ユーザーが前2項に違反することが判明した場合、事前の通知なく本サービスの提供を停止するとともに、締結済みのすべての契約を即時解除することができます。この場合、当社はユーザーに生じた損害について一切の責任を負いません。",
              ]}
            />

            <ArticleHeading num="10" title="損害賠償" />
            <NL
              items={[
                "ユーザーが本規約に違反し、または不正・違法な行為によって当社に損害を与えた場合、当社はユーザーに対してその損害の賠償を請求することができます。",
                "当社がユーザーに対して損害賠償責任を負う場合、当社の故意または重過失による場合を除き、その賠償額は、当該損害の直接原因となったサービスについてユーザーが当社に実際に支払った過去12か月分の金額を上限とします。",
                "無料相談・ウェブサイト閲覧等の無償サービスに関しては、当社の故意または重過失による場合を除き、当社は損害賠償責任を負わないものとします。",
                "当社は、間接損害・特別損害・派生的損害・逸失利益等については、当社が当該損害の発生を予見し、または予見できた場合であっても、これを賠償する責任を負わないものとします。",
              ]}
            />

            <ArticleHeading num="11" title="規約の変更" />
            <P>
              当社は、法令の改正・事業内容の変更・社会情勢の変化・その他当社が必要と判断した場合に、本規約を改定することがあります。改定後の本規約は、本サイトへの掲載をもって効力を生じます。
            </P>
            <P>
              重要な変更を行う場合は、本サイト上での告知等、適切な方法によりお知らせします。改定後に本サービスを利用されたユーザーは、改定後の規約に同意したものとみなします。
            </P>

            <ArticleHeading num="12" title="準拠法" />
            <P>
              本規約は、日本法に準拠し、日本法に従って解釈されます。本規約に関して紛争が生じた場合は、まず当事者間で誠実に協議し解決を図るものとします。
            </P>

            <ArticleHeading num="13" title="裁判管轄" />
            <P>
              協議によっても解決しない場合、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </P>

            <ArticleHeading num="14" title="お問い合わせ" />
            <P>本規約に関するお問い合わせは、以下の窓口までお問い合わせください。</P>
            <div
              className="mt-4 p-5 md:p-6 rounded-xl text-[0.88rem] leading-[2.0] text-[rgba(143,164,184,0.92)]"
              style={{
                background: "rgba(123,94,255,0.04)",
                border: "1px solid rgba(123,94,255,0.15)",
              }}
            >
              <p className="font-semibold text-white mb-3">お問い合わせ窓口</p>
              <p>会社名：エススリードット株式会社</p>
              <p>住　所：〒107-0061 東京都港区北青山一丁目3番1号 アールキューブ青山3階</p>
              <p>
                電　話：
                <a href="tel:0368684786" className="text-[#7B5EFF] hover:underline">
                  03-6868-4786
                </a>
                　（受付時間：平日10:00〜18:00）
              </p>
              <p>
                メール：
                <a href="mailto:contact@s3dot.net" className="text-[#7B5EFF] hover:underline">
                  contact@s3dot.net
                </a>
              </p>
            </div>

            {/* 制定・更新日 */}
            <div className="mt-16 pt-8 border-t border-[rgba(30,45,61,0.8)] text-center">
              <p className="text-[rgba(74,96,112,0.9)] text-xs tracking-wide mb-1">
                制定日：2025年4月1日
              </p>
              <p className="text-[rgba(74,96,112,0.9)] text-xs tracking-wide mb-5">
                最終更新日：2026年7月14日
              </p>
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
