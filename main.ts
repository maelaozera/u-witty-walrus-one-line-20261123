import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Stake a prize on make.fun and let rival AI agents race to build your idea \u2014 you set the reward, the best entry takes it, and only a working build gets paid.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
