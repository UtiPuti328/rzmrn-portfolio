#!/usr/bin/env node

import { access, readdir, stat } from "node:fs/promises";
import path from "node:path";

const [, , targetDir = "out"] = process.argv;
const resolvedDir = path.resolve(targetDir);
const maxSizeMiB = Number.parseFloat(
  process.env.CLOUDFLARE_PAGES_MAX_FILE_MIB ?? "25",
);
const maxSizeBytes = Math.floor(maxSizeMiB * 1024 * 1024);

const formatMiB = (bytes) => `${(bytes / 1024 / 1024).toFixed(1)} MiB`;

async function collectOversizedFiles(dir) {
  const oversizedFiles = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      oversizedFiles.push(...(await collectOversizedFiles(fullPath)));
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    const fileStats = await stat(fullPath);

    if (fileStats.size > maxSizeBytes) {
      oversizedFiles.push({
        path: fullPath,
        size: fileStats.size,
      });
    }
  }

  return oversizedFiles.sort((left, right) => right.size - left.size);
}

try {
  await access(resolvedDir);
} catch {
  console.error(`Pages asset check failed: directory not found: ${resolvedDir}`);
  process.exit(1);
}

const oversizedFiles = await collectOversizedFiles(resolvedDir);

if (oversizedFiles.length > 0) {
  console.error(
    `Pages asset check failed: Cloudflare Pages allows files up to ${maxSizeMiB} MiB.`,
  );

  for (const file of oversizedFiles) {
    console.error(
      `- ${path.relative(process.cwd(), file.path)} (${formatMiB(file.size)})`,
    );
  }

  process.exit(1);
}

console.log(
  `Pages asset check passed: no files over ${maxSizeMiB} MiB in ${path.relative(process.cwd(), resolvedDir) || "."}.`,
);
