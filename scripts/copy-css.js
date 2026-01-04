import fs from "fs";
import path from "path";

const src = path.resolve("src/tokens.css");
const destDir = path.resolve("dist");
const dest = path.join(destDir, "styles.css");

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.copyFileSync(src, dest);

console.log("✓ styles.css copied to dist/");
