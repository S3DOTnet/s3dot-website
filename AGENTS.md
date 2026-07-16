<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## S3DOT共通作業ルール

- 依頼対象外の既存コードや設定は変更しない
- GmailおよびGoogle Driveの検索・閲覧・使用は、ユーザーから明示的に依頼された場合に限り、明示的な依頼がない場合はアクセスしない
- 変更前に、目的と変更対象を日本語で簡潔に説明する
- 仕様・デザイン・公開範囲など、途中で判断が必要になった場合は作業を停止してユーザーへ確認する
- 作業完了後は、変更内容と確認結果を日本語で報告する
- コードまたは設定を変更した場合は、`npm run lint` と `npm run build` を実行し、両方の成功を確認する
- 検証成功後は、簡潔な日本語のコミットメッセージでコミットし、現在のリモートブランチへpushする
- ユーザーがコミットまたはpushを行わないよう指定した場合は、その指示を優先する
- lint/buildの失敗、機密情報の混入、意図しない差分を発見した場合は、コミット・pushせずに停止して報告する

## 開発記録

- 日報は `docs/daily/YYYY-MM-DD.md` に保存する
- 日報には、Git履歴などで確認できた事実と、ユーザーから共有された作業内容を区別して記載する
- APIキー、認証トークン、メールアドレスなどの秘密情報・個人情報を記載しない
- 同じ日の日報が存在する場合は新規ファイルを増やさず、既存ファイルを更新する
