# S3DOT 問い合わせ獲得率向上のための分析

作成日: 2026-07-19
性質: コード変更を伴わない、読み取り専用の分析・改善提案。実施の要否・優先順位はユーザー判断とする。

対象ファイルは本文中に [ファイル名](パス#Lxx) の形式で記載する。

---

## 1. ファーストビュー([HeroSection.tsx](../src/components/sections/HeroSection.tsx))

### 現状

- ラベル「AI PARTNER · S3DOT」→ 見出し「AIは特別なものじゃない。もう、仕事のスタンダードです。」→ サブコピー「使わない方がコストも時間も、確実に高くつく時代へ。」という構成([HeroSection.tsx:158-236](../src/components/sections/HeroSection.tsx#L158-L236))。
- CTAは「まずは無料で相談する」(プライマリ)と「公式LINEで相談する」(セカンダリ)の2択([HeroSection.tsx:239-277](../src/components/sections/HeroSection.tsx#L239-L277))。
- 背景は黒基調+青紫グラデーション(Aurora)、ゴーストロゴの透かし。会社名・実績・対象業種への直接的な言及はファーストビュー内にはない。

### 評価

- **3秒でAI企業だと伝わるか**: ラベルに「AI PARTNER」と明記され、見出しも「AI」を含むため、AI関連企業であることは3秒以内に伝わる構成。ただし「何をしてくれる会社か」(導入相談・業務改善・自動化など具体名詞)はファーストビューに登場せず、見出しはやや抽象的なメッセージ("特別なものじゃない"、"スタンダード")に寄っている。
- **信頼感**: ビジュアル面(グロー・グラデーション・洗練された余白)は高級感・未来感の演出に成功しているが、ファーストビュー単体には「対象顧客」「実績」「会社の実在性」を示す要素がない。信頼感は主にデザイン品質から来ており、情報的な裏付けは下部セクション(Company等)に依存している。
- **ターゲットへの刺さり方**: FAQ・料金ページ等では「AIに詳しくない中小企業」を明確なターゲットにしているが、ヒーローの文言はやや一般的で、"AI導入を迷っている中小企業の担当者"に直接語りかける言葉(例: 「何から始めればいいか分からなくても」)は含まれていない。ターゲットの不安に触れるのは2番目のセクション(Concept)以降。

### 改善提案

- サブコピーまたはラベル直下に、対象読者が自分ごと化できる一言(例: 「AI導入、何から始めればいいか分からない方へ」)を追加する案を検討する。
- 「中小企業」「業務改善」「自動化」など、サービス内容を想起させる具体的な語をヒーロー内のどこかに1つ配置できないか検討する。
- ファーストビュー内、またはヒーロー直下に「相談実績」「対応可能な業種の幅」など、抽象的な安心材料(数値化できない場合は文言のみ)を短く添える案を検討する(実績を誇張しない範囲で)。

---

## 2. CTA(問い合わせ導線)

### 現状

- **Header**([Header.tsx](../src/components/layout/Header.tsx)): PC版はナビゲーション右側に常時「無料相談」ボタンを表示(`/contact#contact-form`)。スマホ版はハンバーガーメニュー内に「無料相談」と「公式LINEで相談」を配置([Header.tsx:149-154](../src/components/layout/Header.tsx#L149-L154), [Header.tsx:216-235](../src/components/layout/Header.tsx#L216-L235))。
- **Hero**: プライマリ「まずは無料で相談する」、セカンダリ「公式LINEで相談する」([HeroSection.tsx:244-276](../src/components/sections/HeroSection.tsx#L244-L276))。
- **ContactSection**([ContactSection.tsx](../src/components/sections/ContactSection.tsx)): 見出し「これもAIでできますか？」→ CTA2種 → 「無料相談(フォーム)/メールで問い合わせ/公式LINEで相談」の3択カード([ContactSection.tsx:16-44](../src/components/sections/ContactSection.tsx#L16-L44))→ フォーム本体、という4段構成。
- **料金ページ**([price/page.tsx](../src/app/price/page.tsx)): ページ末尾に「まずは無料相談で費用感を確認できます」というCTAブロックあり([price/page.tsx:262-291](../src/app/price/page.tsx#L262-L291))。
- 問い合わせページ初回訪問時のスクロール安定化(`#contact-form`直リンク時のズレ補正)が直近のコミットで対応済み([ContactSection.tsx:52-137](../src/components/sections/ContactSection.tsx#L52-L137))。

### 評価

- **無料相談への誘導**: Header・Hero・ContactSection・料金ページ末尾と、複数箇所で一貫して「無料相談」がプライマリCTAとして配置されており、導線の一貫性は高い。
- **ボタン配置**: プライマリ(無料相談)とセカンダリ(LINE)の色分け・優先度表現(青紫グラデーション vs LINEグリーン)は明確で、設計書の「無料相談を主要CTA、LINEを補助CTA」という方針([docs/architecture/version2-page-design.md](../docs/architecture/version2-page-design.md))に沿っている。
- **問い合わせまでの流れ**: ContactSection内は「見出し→CTA→3択カード→フォーム」の順で情報量が多く、同じページ内に「フォームへのリンク」「メールリンク」「LINEリンク」「フォーム本体」が同時に存在するため、選択肢が多い分、初見ユーザーが次に何をすべきか一瞬迷う可能性がある(4つの経路が並列)。
- サービスページ・FAQページ・活用イメージページ末尾に、料金ページと同様の明示的なCTAブロックがあるかは未確認(サービスページ・FAQページの末尾CTA有無は本分析では未読了)。

### 改善提案

- ContactSection内の「3択カード」と「フォーム本体」が同一ページ内で並立している構成について、フォーム誘導を主動線としたい場合はカード側の視覚的優先度を下げる、または「相談方法を選ぶ」ステップとして明確に分離するレイアウトを検討する。
- サービスページ([service/page.tsx](../src/app/service/page.tsx))・FAQページ([faq/page.tsx](../src/app/faq/page.tsx))など主要ページ末尾に、料金ページと同様の「無料相談」CTAブロックが存在するか確認し、なければ追加を検討する(設計書のP1「各ページからの問い合わせ導線」に該当)。
- フォームの入力項目数(氏名・会社名・メール・電話・業種・相談内容複数選択・現状の課題・要望・同意)が比較的多いため、初回接触のハードルを下げる目的で「まずは1〜2項目だけの簡易フォーム」を検討する余地がないか(現状維持でも問題ないが、離脱率が高い場合の代替案として)。

---

## 3. サービス説明

### 現状

- **ServiceSection**([ServiceSection.tsx](../src/components/sections/ServiceSection.tsx)): 「AI導入相談」「業務改善」「自動化」「AI制作」「AIシステム開発」の5項目をカード形式で提示。各カードに「何をするか」「タグ」を明記([ServiceSection.tsx:13-54](../src/components/sections/ServiceSection.tsx#L13-L54))。
- **ConceptSection**([ConceptSection.tsx](../src/components/sections/ConceptSection.tsx)): 「売らない。一緒に考える」「小さく始めて、確かめる」「定着するまで、伴走する」という3つの価値観を提示([ConceptSection.tsx:7-29](../src/components/sections/ConceptSection.tsx#L7-L29))。
- **ProcessSection**([ProcessSection.tsx](../src/components/sections/ProcessSection.tsx)): 「無料相談→業務分析→ご提案→開発・導入→運用サポート」の5ステップで導入の流れを提示([ProcessSection.tsx:14-62](../src/components/sections/ProcessSection.tsx#L14-L62))。
- **FAQSection**([FAQSection.tsx](../src/components/sections/FAQSection.tsx)): 「AIに詳しくなくても相談できますか」「相談だけでも大丈夫ですか」「AI導入って高くありませんか」「なぜ低コストで提供できるのか」「ChatGPTだけで十分では」など、初めての企業が抱く疑問に個別回答([FAQSection.tsx:8-64](../src/components/sections/FAQSection.tsx#L8-L64))。
- **料金ページ**([price/page.tsx](../src/app/price/page.tsx)): 「無料相談」→「数万円〜」→「数十万円〜」→「要見積もり」の4段階を、含まれる作業内容付きで提示([price/page.tsx:15-76](../src/app/price/page.tsx#L15-L76))。

### 評価

- **初めてAI導入を検討する企業が理解できるか**: FAQ・Process・Conceptの3セクションが揃っており、「専門用語が多く分からない」「相談していい段階か分からない」という不安に対する言語化は手厚い。「AIに詳しくなくても大丈夫」という一文が複数箇所(Hero外、FAQ、Concept)で繰り返され、一貫したメッセージになっている。
- サービス内容(ServiceSection)は5カテゴリに整理されているが、各カードの説明はやや抽象的(例:「今のやり方に、AIをうまく組み込む」)で、業種別の具体イメージは別ページ(活用イメージ・事例ページ)に委ねられている構成。ServiceSectionとPickUpSection(活用イメージ)を両方見て初めて「自社にどう当てはまるか」が分かる設計。
- **料金への不安解消**: FAQで「AI導入って高くありませんか」「なぜ低コストで提供できるのか」に直接回答し、料金ページでも「無料相談は完全無料」「必要なものだけ提案」「小さく始めて大きく育てる」という一貫した論調。段階別の価格目安(数万円〜、数十万円〜、要見積もり)も提示されており、価格帯の見当がつけやすい。「高額なシステムは勧めない」という念押しが複数箇所にあり、不安解消への配慮は厚い。

### 改善提案

- ServiceSectionの各カード説明文に、対応する業種・企業規模の具体例を1語程度添えられないか検討する(活用イメージページへ遷移しなくても、トップページ内である程度の当てはまり感を持てるようにする)。
- 料金ページの「数万円〜」「数十万円〜」という表現について、どのような条件でどちらの価格帯になるかの目安(例: 対象業務の数、ツール種別)をもう一段具体化できないか検討する(設計書のP1「料金に含まれる範囲と見積もり条件の追加」に該当)。

---

## 4. 信頼要素

### 現状

- **CompanySection**([CompanySection.tsx](../src/components/sections/CompanySection.tsx)): 会社名・英語表記・代表者名・電話番号・メールアドレス・所在地・Webサイトをカード形式で表示([CompanySection.tsx:17-39](../src/components/sections/CompanySection.tsx#L17-L39))。
- **JsonLd**([JsonLd.tsx](../src/components/seo/JsonLd.tsx)): Organization/Person/WebSiteの構造化データで、電話・所在地・代表者名等を検索エンジンにも提供。
- **PickUpSection(活用イメージ)**([PickUpSection.tsx](../src/components/sections/PickUpSection.tsx)): 業種別に「×20 制作速度」「24h 自動対応」「月8h → 1h」等の具体的な数値・倍率が「Before → After」ラベル付きで表示されている([PickUpSection.tsx:6-66](../src/components/sections/PickUpSection.tsx#L6-L66))。本文中は「期待できます」「見込めます」と仮定・想定の表現を使っているが、metric欄の数値自体には「想定」「イメージ」等の注記が付いていない。
- 実際の顧客事例(掲載許可を得たもの)は`/case`ページにまだ掲載されておらず、現状は「活用イメージ」のみで構成されている(`docs/architecture/version2-page-design.md`の未確定情報と一致)。
- 設立年月は掲載されていない(CompanySectionの項目に含まれない)。

### 評価

- **会社情報**: 実在性を示す情報(法人名・代表者名・所在地・電話・メール)は一通り揃っており、CLAUDE.md/設計書の確定情報とも一致している。設立年月の欠落は「未確定情報のため掲載していない」状態であり、意図的な省略として整合している。
- **実績**: 現時点で「導入事例」は掲載されておらず、「活用イメージ」(想定例)のみ。これは設計書のルール(掲載許可のない内容は活用イメージと明記する)には沿っているが、初めて訪れる企業からすると「本当に実績があるのかどうか」を確認する材料が少ない状態。
- PickUpSectionの`metric`表示(×20、24hなど)は、本文が「期待できます」と仮定形である一方、視覚的に最も目立つ数字部分には仮定であることを示す注記がない。設計書に定める「実績があるように誤認させる数値を使用しない」という表記ルールとの整合性について、視覚面(バッジの目立ち方)は再確認の余地がある。
- **安心材料**: プライバシーポリシー・利用規約・特定商取引法表記が独立ページとして整備されており、法務面の安心材料は揃っている。一方、第三者評価(導入企業数、認定、メディア掲載実績など)にあたる要素は現状ない(実際にない場合は無理に作る必要はない)。

### 改善提案

- PickUpSectionの`metric`表示部分に、「想定値」「目安」であることを示す小さな注記(例: 「※活用イメージ」)を数値の近くに追加できないか検討する。本文の「期待できます」という表現と、視覚的に目立つ数値バッジの間の印象差を埋める狙い。
- 実際の顧客事例が掲載可能になった段階で、`/case`に「導入事例」セクションを追加し、活用イメージと明確に区別する(設計書のP1タスクとして既出)。
- Google Business Profile・Google Search Console等、既に完了している外部信頼要素([PROJECT_STATUS.md](../PROJECT_STATUS.md)参照)をサイト内(例: フッターや会社情報ページ)からも辿れるようにする価値があるか検討する(例: Googleマップへのリンクなど)。

---

## 5. SEO・集客面

### 現状

- 全ページに固有のtitle/description/canonical/OGP/Twitter Cardが設定済み([site-metadata.ts](../src/lib/site-metadata.ts)の`createPageMetadata`)。
- JSON-LDはOrganization/Person/WebSiteのみで、FAQページのQ&Aコンテンツがあるにもかかわらず`FAQPage`構造化データは未設定。
- `sitemap.ts`・`robots.ts`は独立ページ中心で正しく構成されている。
- ロゴ画像が約2.3MBと大きく、`next/image`ではなく素の`<img>`タグで配信されているため、表示速度(Core Web Vitals)に影響し得る(SEO評価にも間接的に影響)。
- Google Search Console・Google Business Profile・LINE公式アカウントは運用面で設定済み([PROJECT_STATUS.md](../PROJECT_STATUS.md)参照)。
- SEO記事・ブログ機能は未実装([FUTURE_ROADMAP.md](../FUTURE_ROADMAP.md)の中期項目)。

### 改善提案

- FAQページに`FAQPage`構造化データを追加し、検索結果でのリッチリザルト表示を狙う(既存分析`docs/`未保存分と同一指摘、優先度A相当)。
- ロゴ画像の圧縮・`next/image`化による表示速度改善(公式ロゴの見た目・比率は変更しない前提)。
- 中期的に、AI導入・業務改善に関する検索流入を狙ったSEO記事・コラム基盤の追加を検討する(`FUTURE_ROADMAP.md`の中期項目と連動)。
- Google Business Profileと連動する形で、`/company`ページや構造化データに地図・営業時間等の情報を加えられるか検討する。

---

## 総括

問い合わせ獲得の観点では、「無料相談」を軸としたCTAの一貫性、FAQによる価格・専門性への不安解消、料金ページの段階的な目安提示など、設計方針に沿った土台は既にできている。改善余地が大きいのは次の3点。

1. ファーストビュー単体では「誰のためのAI企業か」がやや抽象的で、ターゲットへの刺さり方に伸びしろがある。
2. PickUpSectionの数値バッジが、本文の「想定」トーンに対してやや断定的に見える可能性があり、信頼要素としての表記の一貫性を再確認する価値がある。
3. FAQ構造化データ・ロゴ画像最適化など、SEO・表示速度面の技術的改善が未着手。

いずれも本分析はコード変更を行っていない。実施の要否・優先順位はユーザー判断のうえで決定してください。
