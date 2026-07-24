import { existsSync, renameSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

const apiDirectory = resolve("app/api");
const parkedApiDirectory = resolve(".chat-api-static-build");
const command = process.platform === "win32" ? "npx.cmd" : "npx";

if (!existsSync(apiDirectory)) {
  console.error("Expected app/api to exist before the static build.");
  process.exit(1);
}

if (existsSync(parkedApiDirectory)) {
  console.error(
    "A previous static build did not restore app/api. Move .chat-api-static-build back to app/api and retry.",
  );
  process.exit(1);
}

let result;

try {
  // Next.js static export cannot contain a POST route handler. Temporarily park
  // the API directory while generating the GitHub Pages build, then restore it.
  renameSync(apiDirectory, parkedApiDirectory);

  result = spawnSync(command, ["next", "build", "--webpack"], {
    stdio: "inherit",
    env: {
      ...process.env,
      STATIC_EXPORT: "true",
    },
  });
} finally {
  if (existsSync(parkedApiDirectory)) {
    renameSync(parkedApiDirectory, apiDirectory);
  }
}

if (result?.error) {
  console.error(result.error);
  process.exit(1);
}

process.exit(result?.status ?? 1);
