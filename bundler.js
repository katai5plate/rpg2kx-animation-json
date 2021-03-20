const fs = require("fs");
const { dirname } = require("path");
const { getFiles } = require("./utils");

const res = getFiles(["2000", "2003s", "user"], ".json").reduce((p, file) => {
  const folderName = dirname(file).replace(/\.|\//g, "");
  const data = JSON.parse(fs.readFileSync(file, { encoding: "utf8" }));
  if (p[folderName]) return { ...p, [folderName]: [...p[folderName], data] };
  return { ...p, [folderName]: [data] };
}, {});

fs.writeFileSync("./bundle.json", JSON.stringify(res));
