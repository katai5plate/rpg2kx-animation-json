const fs = require("fs");
const { parse, dirname } = require("path");
const jsonGenerator = require("./jsonGenerator");
const files = [
  ...fs
    .readdirSync("./2000")
    .filter((x) => /2kxanm$/.test(x))
    .map((x) => "./2000/" + x),
  ...fs
    .readdirSync("./2003s")
    .filter((x) => /2kxanm$/.test(x))
    .map((x) => "./2003s/" + x),
];

files.forEach((file, i, { length }) => {
  fs.writeFileSync(
    dirname(file) + "/" + parse(file).name + ".json",
    JSON.stringify(jsonGenerator(file), null, 2)
  );
  console.log(i, "/", length - 1, file);
});
