import fs from "fs";

const colorRegex = new RegExp(`"#[0-9a-z]{1,8}"`, "g");
const defineColors = (file, fileName) => {
  const colors = JSON.stringify(file).toLowerCase().match(colorRegex);

  const colorsWithoutQuotes = colors
    .join(",")
    .replace(new RegExp(`"`, "g"), ``)
    .split(",");

  let colorsByQuantity = {};
  let colorsByQuantitySorted = {};

  colorsWithoutQuotes.forEach((color) => {
    colorsByQuantity[color] = colorsByQuantity[color]
      ? colorsByQuantity[color] + 1
      : 1;
  });

  Object.entries(colorsByQuantity)
    .sort((a, b) => b[1] - a[1])
    .forEach(([key, value]) => (colorsByQuantitySorted[key] = value));

  fs.writeFileSync(
    `./src/colors/extracted/${fileName}`,
    JSON.stringify(colorsByQuantitySorted)
  );
};

let promises = [];

const fileNames = fs.readdirSync("./src/colors/raw");
fileNames.forEach((file) => {
  promises.push(import(`./colors/raw/${file}`));
});

const files = await Promise.all(promises);

files.forEach((file, index) => defineColors(file, fileNames[index]));
