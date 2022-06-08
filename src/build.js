import fs from "fs";

import theme from "./theme.js";

fs.writeFile("themes/Darcula Plus.json", JSON.stringify(theme), (error) => {
  if (!error) console.log("Success build");
});
