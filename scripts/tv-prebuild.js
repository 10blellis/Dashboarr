#!/usr/bin/env node
const { spawnSync } = require("child_process");

process.env.EXPO_TV = "1";

const npx = process.platform === "win32" ? "npx.cmd" : "npx";
const result = spawnSync(
  npx,
  ["expo", "prebuild", "--platform", "android", "--clean"],
  {
    stdio: "inherit",
    env: process.env,
  },
);

process.exit(result.status ?? 1);
