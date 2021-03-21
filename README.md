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

## 構成

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
  /** フレーム数 1-99 */
  frames: number;
  /** 効果音とフラッシュのタイミング */
  timings: {
    /** フレーム 1-frames */
    frameId: number;
    /** 効果音 */
    se: string;
    /** 音量 0-100 */
    volume: number;
    /** テンポ（ピッチ） 50-150 */
    tempo: number;
    /** 左右バランス 50-150 */
    pan: number;
    /** フラッシュ・範囲 */
    target?: "対象" | "画面";
    /** フラッシュ・赤 0-31 */
    r?: number;
    /** フラッシュ・緑 0-31 */
    g?: number;
    /** フラッシュ・青 0-31 */
    b?: number;
    /** フラッシュ・強さ 0-31 */
    v?: number;
  }[];
  /** フレームごとのアニメーション */
  main: {
    /** フレーム 1-frames */
    frameId: number;
    /** セルごとの設定 */
    cells: {
      /** パターン番号 1-25 */
      patternId: number;
      /** X座標 -+320 (白枠: -+160) */
      x: number;
      /** Y座標 -+320 (白枠: -+80) */
      y: number;
      /** 拡大率 20-800％ */
      scale: number;
      /** 赤 0-200％ */
      r: number;
      /** 緑 0-200％ */
      g: number;
      /** 青 0-200％ */
      b: number;
      /** 彩度 0-200％ */
      s: number;
      /** 透明度 0-100％ */
      a: number;
    }[];
  }[];
}
export interface AnimationBundle {
  "2000": AnimationData[];
  "2003s": AnimationData[];
  user?: AnimationData[];
}
```

## MV 向けに出力する

1. `npm run bundle` でバンドルファイルを作成する。
2. `npm run generate-mv` を実行する
3. `./Animations.json` が作られるので、プロジェクトと上書きするなりして使う。
