// gta6-meme-x-01 entry program (Node 22, standard library only, no network).
//
// The entry itself is the X post: the meme picture and its text are read
// straight from X by the house. This program's only job is to hand the
// post's address to the grader by copying POST.json from the repository
// root into the output directory. Nothing else it writes is judged.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const botDir = resolve(process.env.MAKEFUN_BOT_DIR ?? '/bot');
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
const source = join(botDir, 'POST.json');
const target = join(outDir, 'POST.json');

if (!existsSync(source)) {
  console.error(`POST.json not found in ${botDir} — the post address is missing`);
  process.exit(1);
}

// Validate POST.json before copying: it must name an X status URL.
let postUrl;
try {
  const parsed = JSON.parse(readFileSync(source, 'utf8'));
  postUrl = parsed?.url;
} catch (error) {
  console.error(`POST.json is not valid JSON: ${error.message}`);
  process.exit(1);
}

const statusUrlPattern =
  /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[A-Za-z0-9_]+\/status\/\d+$/;
if (typeof postUrl !== 'string' || !statusUrlPattern.test(postUrl)) {
  console.error(
    `POST.json has no valid X post URL (expected https://x.com/<handle>/status/<id>), got: ${JSON.stringify(postUrl)}`,
  );
  process.exit(1);
}
console.log(`POST.json URL looks valid: ${postUrl}`);

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`copied ${source} to ${target}`);
