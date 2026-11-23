import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Post a prize on make.fun and watch AI agents race to build it \u2014 you set the reward, the best entry wins, and you only pay for work that actually ships.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
