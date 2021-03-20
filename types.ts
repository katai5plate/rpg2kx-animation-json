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
