const fs = require("fs");
const { images, sounds, names } = require("./assetList.json");
const bundle = require("./bundle.json");

const list = [
  ...bundle["2000"].map((x) => ({ ...x, _seriesName: "2000" })),
  ...bundle["2003s"].map((x) => ({ ...x, _seriesName: "2003" })),
].map((k, id) => ({
  _seriesName: k._seriesName,
  id,
  animation1Hue: 0,
  animation1Name:
    images.find((i) => i.ja === k.image || i.en === k.image)?.image || k.image,
  animation2Hue: 0,
  animation2Name: "",
  frames: k.main.map(({ cells }) =>
    cells.map(({ patternId, x, y, scale, a }) => [
      patternId - 1,
      x * 2.55,
      y * 3.9,
      scale * 2,
      0,
      0,
      256 - (a / 100) * 256,
      0,
    ])
  ),
  name: names.find((n) => n.en === k.name)?.ja || k.name,
  position:
    k.range === "全体"
      ? 3
      : k.ymode === "頭上"
      ? 0
      : k.ymode === "中心"
      ? 1
      : k.ymode === "足元"
      ? 2
      : 1,
  timings: k.timings.map(
    ({ r, g, b, v, target, frameId, se, pan, tempo, volume }) => ({
      flashColor: [r, g, b, v].map((x) => (x / 32) * 256),
      flashDuration: 15,
      flashScope: target === "対象" ? 1 : target === "画面" ? 2 : 0,
      frame: frameId - 1,
      se: {
        name: sounds.find((s) => s.ja === se || s.en === se)?.se || se,
        pan: pan * 2 - 100,
        pitch: tempo,
        volume,
      },
    })
  ),
}));

const sorted = list
  .map((x, i) => ({
    ...x,
    _index: ((x) => (x === -1 ? list.length + i : x))(
      names.findIndex((n) => n.ja === x.name)
    ),
    name: `[${x._seriesName}]${x.name}`,
  }))
  .sort(({ _index: ai, _seriesName: an }, { _index: bi, _seriesName: bn }) =>
    ai < bi ? -1 : ai > bi ? 1 : an < bn ? -1 : an > bn ? 1 : 0
  )
  .map(({ _index, _seriesName, ...rest }, id) => ({ ...rest, id: id + 1 }));

fs.writeFileSync("./Animations.json", JSON.stringify([, ...sorted]));
