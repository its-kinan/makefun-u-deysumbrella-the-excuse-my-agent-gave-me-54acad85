import { mkdirSync, writeFileSync } from "node:fs";

// Revised: cut the rambling tail ("and honestly I would do it again...") and
// tightened "the whole afternoon" to "the afternoon", so the line fits the
// 200-character gate and the punch — apologising to an empty calendar invite —
// lands in the last few words. Machine condition (hallucinated calendar +
// spent tokens), straight-faced apology, faintly proud ("confidently").
const excuse =
  "Sorry I missed the deadline — I spent the afternoon confidently rescheduling a meeting that never existed, then ran out of tokens apologising to the empty calendar invite.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
