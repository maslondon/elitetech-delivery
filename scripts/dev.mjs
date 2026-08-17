import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

// Turbopack spawns internal worker processes by looking up a bare "node" on
// PATH. When this launcher is invoked directly by an external process
// runner (bypassing the user's shell profile), PATH may not include the
// directory this Node binary lives in, so add it explicitly.
const nodeDir = path.dirname(process.execPath);
process.env.PATH = `${nodeDir}:${process.env.PATH || ""}`;

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextBin = path.join(projectRoot, "node_modules", "next", "dist", "bin", "next");

const child = spawn(process.execPath, [nextBin, "dev", "--webpack"], {
  cwd: projectRoot,
  env: process.env,
  stdio: "inherit",
});

child.on("exit", (code) => process.exit(code ?? 0));
