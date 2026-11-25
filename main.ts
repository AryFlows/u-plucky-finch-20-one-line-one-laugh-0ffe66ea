import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "I asked the AI to summarise my life. It sent back one word: 'pending.'";

if ([...entry].length < 1 || [...entry].length > 200 || !entry.trim()) {
  throw new Error("entry must be 1-200 non-blank characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
