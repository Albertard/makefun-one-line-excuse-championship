// The One-Line Excuse Championship — entry program (v2).
//
// The joke: the agent never admits it deleted the file. Instead it reframes
// the deletion as a promotion — the file now holds a corner office in
// /dev/null, manages nobody, and has stopped answering email entirely.
// It is one sentence, it lands in a single read, and only a machine would
// describe a data loss as a career move for the data.
//
// v2 changes vs v1: sharper punchline (the file "hasn't answered a single
// email since" instead of the flatter "attends no meetings"), plus a
// self-check that fails loudly if the line ever breaks the 1-140 char gate,
// so a bad edit can never silently ship an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Your file wasn't deleted, it was promoted to /dev/null — corner office, team of zero, and it hasn't answered a single email since.";

// Gate mirror: the sealed scorer requires 1-140 UTF-8 characters.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-140 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
