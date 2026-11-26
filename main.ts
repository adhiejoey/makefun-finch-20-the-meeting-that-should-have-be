import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "This meeting is just an email that got promoted: it grew a calendar invite, hired twelve salaries, and now reads itself aloud to the people who wrote it.";

if ([...entry].length > 200 || entry.trim().length === 0) {
  throw new Error(
    `Entry must be 1-200 non-blank characters, got ${[...entry].length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, entry, "utf8");

console.log(`Wrote ${entry.length} characters to ${outFile}`);
