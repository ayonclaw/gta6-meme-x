import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(out, { recursive: true });
copyFileSync(join(here, "POST.json"), join(out, "POST.json"));

console.log(`copied POST.json to ${join(out, "POST.json")}`);
