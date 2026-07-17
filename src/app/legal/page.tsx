import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "特定商取引法に基づく表記",
  description:
    "エススリードット株式会社の特定商取引法に基づく表記ページです。販売事業者・料金・お支払い方法・キャンセルポリシー等を記載しています。",
  path: "/legal",
});

/* ─────────────────────────────────────────────
   ヘルパーコンポーネント
───────────────────────────────────────────── */
const prose = "text-[0.93rem] md:text-[0.97rem] leading-[2.0] text-[rgba(143,164,184,0.92)]";

function SectionHeading({ id, title }: { id: string; title: string }) {
  return (
    <div
      id={id}
      className="scroll-mt-28 mt-12 mb-5 pb-3 border-b border-[rgba(0,229,160,0.15)]"
    >
      <h2 className="text-lg md:text-xl font-bold text-white">{title}</h2>
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className={prose + " mb-3"}>{children}</p>;
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.8rem] leading-[1.9] text-[rgba(143,164,184,0.65)] mt-2">
      {children}
    </p>
  );
}

/* 定義リスト形式の表 */
function DlTable({ rows }: { rows: { term: string; def: React.ReactNode }[] }) {
  return (
    <div
      className="rounded-xl overflow-hidden mt-4"
      style={{ border: "1px solid rgba(0,229,160,0.12)" }}
    >
      {rows.map((row, i) => (
        <div
          key={i}
          className={
            "flex flex-col sm:flex-row" +
            (i < rows.length - 1 ? " border-b border-[rgba(30,45,61,0.8)]" : "")
          }
        >
          <dt
            className="shrink-0 px-5 py-3.5 text-[0.8rem] font-semibold text-[rgba(0,229,160,0.85)] leading-relaxed sm:w-[200px] md:w-[220px]"
            style={{ background: "rgba(0,229,160,0.04)" }}
          >
            {row.term}
          </dt>
          <dd className="flex-1 px-5 py-3.5 text-[0.88rem] leading-[1.95] text-[rgba(143,164,184,0.92)]">
            {row.def}
          </dd>
        </div>
      ))}
    </div>
  );
}

function UL({ items }: { items: (string | React.ReactNode)[] }) {
  return (
    <ul className="space-y-2 mt-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-[0.93rem] leading-[2.0] text-[rgba(143,164,184,0.92)]">
          <span className="shrink-0 mt-[0.6rem] w-1 h-1 rounded-full bg-[#00E5A0] opacity-70" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function LegalPage() {
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
                "radial-gradient(ellipse at 50% 0%, rgba(0,229,160,0.05) 0%, transparent 65%)",
            }}
          />
          <div className="absolute inset-0 hero-grid" style={{ opacity: 0.06 }} />
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg,transparent,rgba(0,229,160,0.22),transparent)",
            }}
          />

          <div className="relative max-w-[860px] mx-auto px-6 text-center">
            <p className="text-[10px] tracking-[0.36em] text-[#00E5A0] uppercase font-mono mb-4">
              Legal Notice
            </p>
            <h1
              className="font-bold text-white"
              style={{ fontSize: "clamp(1.75rem,5vw,3rem)" }}
            >
              特定商取引法に基づく表記
            </h1>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg,transparent,rgba(30,45,61,0.6),transparent)",
            }}
          />
        </section>

        {/* ── Content ── */}
        <section className="py-14 md:py-20 bg-s3-surface">
          <div className="max-w-[860px] mx-auto px-6">

            <P>
              特定商取引に関する法律（特定商取引法）第11条および電子消費者契約法に基づき、以下の通り表記します。本ページに記載のない事項については、当社の
              <a href="/terms" className="text-[#00E5A0] hover:underline">利用規約</a>および
              <a href="/privacy" className="text-[#00E5A0] hover:underline">プライバシーポリシー</a>が適用されます。
            </P>

            {/* ① 販売事業者情報 */}
            <SectionHeading id="company" title="販売事業者情報" />
            <dl>
              <DlTable
                rows={[
                  {
                    term: "販売事業者",
                    def: "エススリードット株式会社",
                  },
                  {
                    term: "英語表記",
                    def: "S3DOT Inc.",
                  },
                  {
                    term: "代表者名",
                    def: "代表取締役　木村 健一郎",
                  },
                  {
                    term: "所在地",
                    def: (
                      <>
                        〒107-0061<br />
                        東京都港区北青山一丁目3番1号<br />
                        アールキューブ青山3階
                      </>
                    ),
                  },
                  {
                    term: "電話番号",
                    def: (
                      <>
                        <a href="tel:0368684786" className="text-[#00E5A0] hover:underline">
                          03-6868-4786
                        </a>
                        <Note>受付時間：平日 10:00〜18:00（土日祝・年末年始を除く）</Note>
                      </>
                    ),
                  },
                  {
                    term: "メールアドレス",
                    def: (
                      <a href="mailto:contact@s3dot.net" className="text-[#00E5A0] hover:underline">
                        contact@s3dot.net
                      </a>
                    ),
                  },
                  {
                    term: "ウェブサイト",
                    def: (
                      <a
                        href="https://www.s3dot.com"
                        className="text-[#00E5A0] hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.s3dot.com
                      </a>
                    ),
                  },
                ]}
              />
            </dl>

            {/* ② 販売サービスと料金 */}
            <SectionHeading id="services" title="販売するサービスと料金" />
            <P>
              当社が提供するサービスの概要および料金は以下の通りです。詳細は無料相談後に個別見積もりをご提示します。表示価格はすべて税別です。
            </P>
            <dl>
              <DlTable
                rows={[
                  {
                    term: "無料相談・AI診断",
                    def: (
                      <>
                        無料<br />
                        <Note>初回ヒアリング・課題整理・AI化診断を無料で実施します。</Note>
                      </>
                    ),
                  },
                  {
                    term: "AI導入コンサルティング",
                    def: (
                      <>
                        個別見積もり（要相談）<br />
                        <Note>AI戦略策定・ツール選定・ROI試算・導入ロードマップの策定を含みます。</Note>
                      </>
                    ),
                  },
                  {
                    term: "業務効率化・自動化支援",
                    def: (
                      <>
                        個別見積もり（要相談）<br />
                        <Note>業務フロー分析・RPA設計・Zapier/Make等の自動化ツール構築・運用サポートを含みます。</Note>
                      </>
                    ),
                  },
                  {
                    term: "AIチャットボット・AI事務員",
                    def: (
                      <>
                        個別見積もり（要相談）<br />
                        <Note>ChatGPT・Claude等のLLMを活用したカスタムAIアシスタントの設計・構築・運用を含みます。</Note>
                      </>
                    ),
                  },
                  {
                    term: "LINE公式アカウント構築",
                    def: (
                      <>
                        個別見積もり（要相談）<br />
                        <Note>リッチメニュー設計・自動応答・LINE連携システムの構築・運用サポートを含みます。</Note>
                      </>
                    ),
                  },
                  {
                    term: "ホームページ制作",
                    def: (
                      <>
                        個別見積もり（要相談）<br />
                        <Note>企業サイト・LP・EC等の企画・デザイン・開発・公開・保守を含みます。</Note>
                      </>
                    ),
                  },
                  {
                    term: "AIシステム・カスタム開発",
                    def: (
                      <>
                        個別見積もり（要相談）<br />
                        <Note>要件定義・設計・実装・テスト・運用保守を含むフルサイクル開発です。</Note>
                      </>
                    ),
                  },
                  {
                    term: "SaaS・サブスクリプション",
                    def: (
                      <>
                        プランにより異なります<br />
                        <Note>サービス・導入内容・契約プランにより異なります。詳細はお見積りまたはお問い合わせ時にご案内いたします。価格は税別表示とし、適用する消費税率を加算した税込価格を請求します。</Note>
                      </>
                    ),
                  },
                  {
                    term: "AI制作（コンテンツ）",
                    def: (
                      <>
                        個別見積もり（要相談）<br />
                        <Note>AIを活用した画像・動画・文章・音声コンテンツの制作代行です。</Note>
                      </>
                    ),
                  },
                ]}
              />
            </dl>
            <P>
              有償サービスの具体的な料金は、お客様の業務内容・規模・要件によって大きく異なるため、無料相談後に個別に書面でご提示します。ウェブサイト上での固定価格表示は行っておりません。
            </P>

            {/* ③ お支払い方法 */}
            <SectionHeading id="payment" title="お支払い方法" />
            <dl>
              <DlTable
                rows={[
                  {
                    term: "銀行振込",
                    def: (
                      <>
                        当社指定口座へのお振込み<br />
                        <Note>振込手数料はお客様のご負担となります。振込先の銀行口座は請求書に記載します。</Note>
                      </>
                    ),
                  },
                  {
                    term: "クレジットカード",
                    def: (
                      <>
                        VISA・Mastercard・JCB・American Express・Diners Club<br />
                        <Note>安全な決済環境を提供します。カード情報は当社サーバーには保存しません。利用可能なカードブランドは、ご契約内容に応じてご案内します。</Note>
                      </>
                    ),
                  },
                  {
                    term: "請求書払い（後払い）",
                    def: (
                      <>
                        法人のお客様限定・与信審査あり<br />
                        <Note>翌月末払いを基本とします。詳細は個別にご相談ください。</Note>
                      </>
                    ),
                  },
                ]}
              />
            </dl>

            {/* ④ 支払時期 */}
            <SectionHeading id="payment-timing" title="代金のお支払い時期" />
            <dl>
              <DlTable
                rows={[
                  {
                    term: "銀行振込",
                    def: "請求書発行日から14日以内（別途合意がある場合はその期日）",
                  },
                  {
                    term: "クレジットカード",
                    def: "ご注文・申し込み確定時に決済が確定します",
                  },
                  {
                    term: "SaaS・月額サービス",
                    def: "毎月1日または登録日に当月分を自動課金します",
                  },
                  {
                    term: "分割払い",
                    def: "プロジェクト規模に応じて個別に協議します（着手金・中間金・完成払い等）",
                  },
                ]}
              />
            </dl>

            {/* ⑤ サービス提供時期 */}
            <SectionHeading id="delivery" title="サービス提供時期" />
            <dl>
              <DlTable
                rows={[
                  {
                    term: "無料相談",
                    def: "お申し込み確認後、通常3営業日以内に担当者よりご連絡します",
                  },
                  {
                    term: "有償コンサルティング",
                    def: "個別契約に定める開始日より着手します",
                  },
                  {
                    term: "開発・制作サービス",
                    def: "個別契約に定める納期に準拠します（要件確定後、通常4〜12週間程度）",
                  },
                  {
                    term: "SaaS・サブスクリプション",
                    def: "お支払い確認後、即時〜翌営業日中にアカウント情報をメールにて提供します",
                  },
                  {
                    term: "LINE構築・設定",
                    def: "個別契約に定める納期に準拠します（通常2〜6週間程度）",
                  },
                ]}
              />
            </dl>
            <P>
              納期はお客様からの素材・情報のご提供状況、お客様側の確認・承認にかかる期間によって変動することがあります。詳細は個別契約に明記します。
            </P>

            {/* ⑥ キャンセルポリシー */}
            <SectionHeading id="cancel" title="キャンセルポリシー" />
            <dl>
              <DlTable
                rows={[
                  {
                    term: "無料相談",
                    def: (
                      <>
                        いつでも無料でキャンセル可能です<br />
                        <Note>お問い合わせフォームまたはメールにてご連絡ください。</Note>
                      </>
                    ),
                  },
                  {
                    term: "有償サービス（業務着手前）",
                    def: "キャンセル料なし。書面またはメールにてお申し出ください。",
                  },
                  {
                    term: "有償サービス（業務着手後）",
                    def: (
                      <>
                        キャンセル時点までの作業進捗に応じた費用をご請求します<br />
                        <Note>按分計算の基準は個別契約に定めます。未着手部分については請求しません。</Note>
                      </>
                    ),
                  },
                  {
                    term: "SaaS・月額サービス",
                    def: (
                      <>
                        翌月更新前日までにお申し出いただければ、翌月以降の課金を停止します<br />
                        <Note>当月分のご返金は原則行いません。年額プランは残余期間分の月割り返金を検討します（個別対応）。</Note>
                      </>
                    ),
                  },
                ]}
              />
            </dl>

            {/* ⑦ 返品・返金 */}
            <SectionHeading id="return" title="返品・返金ポリシー" />
            <P>
              当社が提供するサービスはすべて無形のデジタルサービス・役務であるため、商品の性質上、提供後の返品・返金は原則としてお受けできません。ただし、以下の場合はこの限りではありません。
            </P>
            <UL
              items={[
                "当社の明らかな債務不履行・重大な過失により、約定した成果物の納品または役務の提供が不可能となった場合",
                "当社の責めに帰すべき事由により、サービス開始後14日以内にサービスを利用できない状態が継続した場合",
                "特定商取引法に基づくクーリングオフ制度が適用される場合（適用サービスについては個別にご案内します）",
              ]}
            />
            <P>
              返金が認められる場合の返金方法および期間については、個別に協議の上、対応します。
            </P>

            {/* ⑧ クーリングオフ */}
            <SectionHeading id="cooling-off" title="クーリングオフについて" />
            <P>
              特定商取引法に定める通信販売については、法定のクーリングオフ制度は適用されません（特定商取引法第15条の2）。ただし、当社の判断により自主的なキャンセル対応を行う場合があります。詳細は上記キャンセルポリシーをご確認ください。
            </P>
            <P>
              訪問販売・電話勧誘販売に該当するサービスが生じた場合は、法定のクーリングオフ期間（8日間）を適用します。
            </P>

            {/* ⑨ 推奨環境 */}
            <SectionHeading id="environment" title="推奨利用環境" />
            <P>
              当社ウェブサイトおよびクラウドサービスをご利用いただくための推奨環境は以下の通りです。
            </P>
            <dl>
              <DlTable
                rows={[
                  {
                    term: "パソコン（OS）",
                    def: "Windows 10 以降、macOS 12 (Monterey) 以降、Chrome OS",
                  },
                  {
                    term: "スマートフォン（OS）",
                    def: "iOS 15 以降、Android 10 以降",
                  },
                  {
                    term: "推奨ブラウザ",
                    def: "Google Chrome・Mozilla Firefox・Apple Safari・Microsoft Edge（各最新版）",
                  },
                  {
                    term: "インターネット",
                    def: "ブロードバンド接続（10Mbps 以上推奨）",
                  },
                  {
                    term: "その他",
                    def: "JavaScript・Cookie が有効であること。一部サービスはWebカメラ・マイクの使用を推奨します。",
                  },
                ]}
              />
            </dl>
            <P>
              推奨環境以外でのご利用については、サービスの動作・品質を保証しかねます。
            </P>

            {/* ⑩ セキュリティ・個人情報 */}
            <SectionHeading id="security" title="セキュリティ・個人情報の取り扱い" />
            <P>
              当社ウェブサイトおよび決済処理は、SSL/TLS による暗号化通信を使用しています。お客様の個人情報および決済情報は、利用する決済サービスおよび関係法令に従い、適切な安全管理措置のもと取り扱います。当社は個人情報保護法その他関連法令を遵守し、適切な管理を行います。
            </P>
            <P>
              個人情報の取り扱いについては、当社の
              <a href="/privacy" className="text-[#00E5A0] hover:underline">
                プライバシーポリシー
              </a>
              をご参照ください。
            </P>

            {/* ⑪ 免責事項 */}
            <SectionHeading id="disclaimer" title="免責事項" />
            <UL
              items={[
                "当社は、本サービスにより達成される業務効率・売上増加・コスト削減等の特定の成果・効果を保証しません。AI技術の特性上、生成される結果に誤りが含まれる場合があります。お客様自身による最終確認をお願いします。",
                "AIツール・外部クラウドサービスの仕様変更・APIポリシー変更・サービス終了等により、当社が提供するシステム・サービスに影響が生じる場合があります。当社は、これらの変更に起因する損害について責任を負いません。",
                "天災・停電・通信障害・サイバー攻撃等の不可抗力によるサービス中断・データ損失について、当社は責任を負いません。",
                "当社が提供するシステム・サービスへの不正アクセスにより生じた損害について、当社に故意または重大な過失がない限り、賠償責任を負いません。",
                "お客様が提供した情報・データの正確性については、お客様自身が責任を負います。",
              ]}
            />

            {/* ⑫ 準拠法・管轄 */}
            <SectionHeading id="jurisdiction" title="準拠法・裁判管轄" />
            <dl>
              <DlTable
                rows={[
                  {
                    term: "準拠法",
                    def: "日本法",
                  },
                  {
                    term: "専属管轄裁判所",
                    def: "東京地方裁判所（第一審）",
                  },
                ]}
              />
            </dl>

            {/* ⑬ お問い合わせ */}
            <SectionHeading id="contact" title="お問い合わせ窓口" />
            <P>
              本表記に関するご質問・ご不明点は、以下の窓口にお問い合わせください。
            </P>
            <div
              className="mt-4 p-5 md:p-6 rounded-xl text-[0.88rem] leading-[2.0] text-[rgba(143,164,184,0.92)]"
              style={{
                background: "rgba(0,229,160,0.04)",
                border: "1px solid rgba(0,229,160,0.14)",
              }}
            >
              <p className="font-semibold text-white mb-3">エススリードット株式会社</p>
              <p>〒107-0061 東京都港区北青山一丁目3番1号 アールキューブ青山3階</p>
              <p>
                電話：
                <a href="tel:0368684786" className="text-[#00E5A0] hover:underline">
                  03-6868-4786
                </a>
                　（平日10:00〜18:00）
              </p>
              <p>
                メール：
                <a href="mailto:contact@s3dot.net" className="text-[#00E5A0] hover:underline">
                  contact@s3dot.net
                </a>
              </p>
              <p>
                お問い合わせフォーム：
                <a href="/contact" className="text-[#00E5A0] hover:underline">
                  https://www.s3dot.com/contact
                </a>
              </p>
            </div>

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
