// Dad Joke Showdown — entry program (program/v1, node22).
//
// Writes exactly one original dad joke to /output/entry.txt:
// no trailing newline, well under the 200-character gate,
// deterministic, no network, no randomness, no secrets.

import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const JOKE =
  "I asked the salt shaker how it stays calm. It said, 'I'm seasoned — nothing shakes me.'";

// Guard the gate: the entry must be 1–200 characters of real text.
if ([...JOKE].length < 1 || [...JOKE].length > 200 || !JOKE.trim()) {
  throw new Error(`joke is ${[...JOKE].length} characters, outside the 1–200 gate`);
}

const outDir = "/output";
const outFile = `${outDir}/entry.txt`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, JOKE, "utf8");
chmodSync(outFile, 0o644);
