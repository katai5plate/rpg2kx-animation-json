const fs = require("fs");
const { parse, dirname } = require("path");
const jsonGenerator = require("./jsonGenerator");

module.exports = (encode, userOnly = false, trim = false) => {
  const files = [
    ...(userOnly
      ? []
      : [
          ...fs
            .readdirSync("./2000")
            .filter((x) => /2kxanm$/.test(x))
            .map((x) => "./2000/" + x),
          ...fs
            .readdirSync("./2003s")
            .filter((x) => /2kxanm$/.test(x))
            .map((x) => "./2003s/" + x),
        ]),
    ...fs
      .readdirSync("./user")
      .filter((x) => /2kxanm$/.test(x))
      .map((x) => "./user/" + x),
  ];

  files.forEach((file, i, { length }) => {
    fs.writeFileSync(
      dirname(file) + "/" + parse(file).name + ".json",
      JSON.stringify(jsonGenerator(file, encode, trim), null, 2)
    );
    console.log(i, "/", length - 1, file);
  });
};
