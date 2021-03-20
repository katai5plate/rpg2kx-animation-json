const fs = require("fs");
const { parse, dirname } = require("path");
const jsonGenerator = require("./jsonGenerator");
const { getFiles } = require("./utils");

module.exports = (encode, userOnly = false, trim = false) => {
  getFiles(userOnly ? ["user"] : ["2000", "2003s", "user"], ".2kxanm").forEach(
    (file, i, { length }) => {
      fs.writeFileSync(
        dirname(file) + "/" + parse(file).name + ".json",
        JSON.stringify(jsonGenerator(file, encode, trim), null, 2)
      );
      console.log(i, "/", length - 1, file);
    }
  );
};
