# rpg2kx-animation-jsons

RPG2000 / steam2003 の戦闘アニメ JSON データ

## ライセンス

[ツクールシリーズの規約に準拠](https://tkool.jp/support/)

## どうやって取得したか

1. [戦闘アニメ・エクセル相互変換ツール](https://fermiumbay13.hatenablog.com/entry/2017/12/04/221051) を落とす
2. 手順通りにエクセルのクリップボードを作成し、テキストとして`./{2000,2003s}/*.2kxanm`に保存 (SJIS)
3. `npm run convert` を実行
