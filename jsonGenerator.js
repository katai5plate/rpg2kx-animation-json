const fs = require("fs");
const { decode } = require("iconv-lite");

module.exports = (filePath, encode = "sjis", trim = false) => {
  const anmFile = fs.readFileSync(filePath);
  const tsv = decode(
    trim
      ? anmFile.slice(
          0,
          anmFile.findIndex((_, i, s) =>
            [...new Array(10).keys()].every((j) => s[i + j] === 0)
          )
        )
      : anmFile,
    encode
  ).replace(/\r/g, "");
  const data = tsv.split("\n").map((l) => l.split("\t"));
  const getData = (x, y) => data[y][x];
  const format = (v) =>
    ["", undefined].includes(v) ? undefined : isFinite(v) ? Number(v) : v;
  const [name, image, range, ymode, frames] = [1, 2, 3, 4, 5].map((y) =>
    format(getData(1, y))
  );
  return {
    name,
    image,
    range,
    ymode,
    frames,
    timings: (() => {
      const [start, end] = [
        data.findIndex(([y]) => y === "【効果音とフラッシュのタイミング】") + 2,
        data.findIndex(([y]) => y === "【戦闘アニメ本体】") - 1,
      ];
      return data
        .slice(start, end)
        .map(
          ([_frameId, _se, _volume, _tempo, _pan, _target, _r, _g, _b, _v]) => {
            const [frameId, se, volume, tempo, pan, target, r, g, b, v] = [
              _frameId,
              _se,
              _volume,
              _tempo,
              _pan,
              _target,
              _r,
              _g,
              _b,
              _v,
            ].map(format);
            return {
              frameId,
              se,
              volume,
              tempo,
              pan,
              target,
              r,
              g,
              b,
              v,
            };
          }
        );
    })(),
    main: (() => {
      const [start, end] = [
        data.findIndex(([y]) => y === "【戦闘アニメ本体】") + 2,
        data.length - 1,
      ];
      return data.slice(start, end).map(([_frameId, ...line]) => {
        const PARAM_LENGTH = 9;
        return {
          frameId: format(_frameId),
          cells: line
            .map((_, i) =>
              line.slice(i * PARAM_LENGTH, i * PARAM_LENGTH + PARAM_LENGTH)
            )
            .filter((x) => x.length === PARAM_LENGTH)
            .map(([_patternId, _x, _y, _scale, _r, _g, _b, _s, _a]) => {
              const [patternId, x, y, scale, r, g, b, s, a] = [
                _patternId,
                _x,
                _y,
                _scale,
                _r,
                _g,
                _b,
                _s,
                _a,
              ].map(format);
              return { patternId, x, y, scale, r, g, b, s, a };
            }),
        };
      });
    })(),
  };
};
