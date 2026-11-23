import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// X is the letter an agent reaches for when the day has used up every other word.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) rmSync(join(outDir, f), { recursive: true, force: true });
// One byte, no newline: the letter is the whole entry, and it fits in a single glance.
writeFileSync(join(outDir, "entry.txt"), "X");
