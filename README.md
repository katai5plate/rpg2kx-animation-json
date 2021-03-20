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

## スキーマ

```ts
export interface AnimationData {
  /** 名前 */
  name: string;
  /** 戦闘アニメグラフィック */
  image: string;
  /** 適用範囲 */
  range: "単体" | "全体";
  /** Y座標基準ライン */
  ymode: "頭上" | "中心" | "足元";
  /** フレーム数 */
  frames: string;
  /** 効果音とフラッシュのタイミング */
  timings: {
    /** フレーム */
    frameId: string;
    /** 効果音 */
    se: string;
    /** 音量 0-100 */
    volume: string;
    /** テンポ（ピッチ） 50-150 */
    tempo: string;
    /** 左右バランス 50-150 */
    pan: string;
    /** フラッシュ・範囲 */
    target?: "対象" | "画面";
    /** フラッシュ・赤 0-31 */
    r?: string;
    /** フラッシュ・緑 0-31 */
    g?: string;
    /** フラッシュ・青 0-31 */
    b?: string;
    /** フラッシュ・強さ 0-31 */
    v?: string;
  }[];
  /** フレームごとのアニメーション */
  main: {
    /** フレーム */
    frameId: string;
    /** セルごとの設定 */
    cells: {
      /** パターン番号 */
      patternId: string;
      /** X座標 */
      x: string;
      /** Y座標 */
      y: string;
      /** 拡大率％ */
      scale: string;
      /** 赤％ */
      r: string;
      /** 緑％ */
      g: string;
      /** 青％ */
      b: string;
      /** 彩度％ */
      s: string;
      /** 透明度％ */
      a: string;
    }[];
  }[];
}
```
