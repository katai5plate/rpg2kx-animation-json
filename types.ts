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
    /** 左右バランス 0-100 */
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
  [folderName: string]: AnimationData[];
}

export interface MVAnimation {
  id: number;
  // 画像
  animation1Hue: number;
  animation1Name: string;
  animation2Hue: number;
  animation2Name: string;
  // メインアニメ
  frames: [
    number, // パターン番号 0-200
    number, // X -+408
    number, // Y -+312
    number, // 拡大率 10-9999%
    number, // 回転角度 -+360
    number, // 左右反転 0/1
    number, // 不透明度 0-255
    number // 合成方法 0-3
  ][][];
  name: string;
  position: number; // 0-3 頭上/中心/足元/画面
  timings: {
    flashColor: [
      number, // r 0-255
      number, // g 0-255
      number, // b 0-255
      number // v 0-255
    ];
    flashDuration: number; // 1-200
    flashScope: number; // 0-3 なし/対象/画面/対象消去
    frame: number; // 0-frames.length
    se: {
      name: string;
      pan: number; // -100-100
      pitch: number; // 50-150
      volume: number; // 0-100
    };
  }[];
}
