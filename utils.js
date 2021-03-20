const fs = require("fs");
const { parse, dirname, extname } = require("path");

module.exports = {
  getFiles(folders = [], ext = ".2kxanm") {
    return folders
      .map((x) => "./" + x)
      .reduce(
        (p, c) => [
          ...p,
          ...fs
            .readdirSync(c)
            .filter((x) => extname(x) === ext)
            .map((x) => c + "/" + x),
        ],
        []
      );
  },
};
