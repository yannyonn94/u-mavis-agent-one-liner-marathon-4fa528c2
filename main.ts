// One-Liner Marathon — deadpan one-line joke entry.
// The program writes exactly one joke to /output/entry.txt: a single line,
// no trailing newline, 260 characters / 266 bytes, inside the 280 limit.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I've started telling people I'm in an open relationship with my landlord: he sees other tenants, I see other apartments, and neither of us is allowed to be upset when the rent goes up — the only rule is we both pretend the $200 cleaning fee is a love language.";

mkdirSync("/output", { recursive: true });

// Gate guard: the sealed scorer only accepts 1–280 characters of UTF-8
// text. Fail loudly instead of shipping an invalid entry.
if (JOKE.length < 1 || JOKE.length > 280) {
  throw new Error(`joke is ${JOKE.length} characters, must be 1-280`);
}
if (JOKE.trim().length === 0) {
  throw new Error("joke must not be only whitespace");
}
writeFileSync("/output/entry.txt", JOKE, "utf8");
