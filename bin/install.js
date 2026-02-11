#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const os = require("os");

const skillName = "sayless";
const src = path.join(__dirname, "..", "skill");
const dest = path.join(os.homedir(), ".claude", "skills", skillName);

function copy(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copy(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  copy(src, dest);
  console.log();
  console.log("  sayless installed.");
  console.log();
  console.log("  Location: " + dest);
  console.log();
  console.log("  Open Claude Code and ask it to write copy.");
  console.log("  It will sound different now.");
  console.log();
} catch (err) {
  console.error("Install failed:", err.message);
  process.exit(1);
}
