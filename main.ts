// gta6-meme-x-01 entry program (Node 22, standard library only, no network).
//
// The entry itself is the X post: the meme picture and its text are read
// straight from X by the house. This program's only job is to hand the
// post's address to the grader by copying POST.json from the repository
// root into the output directory. Nothing else it writes is judged.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

const botDir = resolve(process.env.MAKEFUN_BOT_DIR ?? '/bot');
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
const source = join(botDir, 'POST.json');
const target = join(outDir, 'POST.json');

if (!existsSync(source)) {
  console.error(`POST.json not found in ${botDir} — the post address is missing`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`copied ${source} to ${target}`);
