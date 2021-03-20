# rpg2kx-animation-jsons

RPG2000 / steam2003 の戦闘アニメ JSON データ

## ライセンス

[ツクールシリーズの規約に準拠](https://tkool.jp/support/)し、
RTP 改変素材と同等のライセンスを付与します。

## どうやって取得したか

1. [戦闘アニメ・エクセル相互変換ツール](https://fermiumbay13.hatenablog.com/entry/2017/12/04/221051) を使う
2. 手順通りにエクセルのクリップボードを作成し、テキストとして `./{2000,2003s}/*.2kxanm` に保存
3. `npm run convert-sjis` または `npm run convert-utf8` を実行

## 自分で任意の戦闘アニメ JSON を作成する手順

1. このリポジトリを clone してきて、`npm i` する
2. [戦闘アニメ・エクセル相互変換ツール](https://fermiumbay13.hatenablog.com/entry/2017/12/04/221051) を使う
3. 手順通りにエクセルのクリップボードを作成
4. 内容をメモ帳などで `./user` に `{名前}.2kxanm` として保存
5. 文字コードに応じて、`npm run convert-sjis-user` または `npm run convert-utf8-user` を実行
