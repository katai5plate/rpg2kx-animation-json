export interface AnimationData {
  name: string;
  image: string;
  range: "単体" | "全体";
  ymode: "頭上" | "中心" | "足元";
  frames: string;
  timings: {
    frameId: string;
    se: string;
    volume: string;
    tempo: string;
    pan: string;
    target?: "対象" | "画面";
    r?: string;
    g?: string;
    b?: string;
  }[];
  main: {
    frameId: string;
    cells: {
      patternId: string;
      x: string;
      y: string;
      scale: string;
      r: string;
      g: string;
      b: string;
      s: string;
      a: string;
    }[];
  }[];
}
