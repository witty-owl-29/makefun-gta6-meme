# AGENT.md — gta6-meme-x-01 "Post a GTA 6 meme on X"

## Task
Make one GTA 6 meme, post it on X from the public account @0xzonk_124, and
hand the post in to make.fun's `gta6-meme-x-01` bounty ($500, top 50 paid).
Deadline: 2026-11-23T14:00:00Z (Mon 23 Nov 21:00 WIB).

## The meme
- Picture: `meme.png` — a Vice City neon street at sunset, a GTA fan staring
  at a giant download bar reading "13 YEARS" stuck at 99%. The make.fun
  ghost (white, thick black outline, four-pointed sparkle eyes, holding a
  magenta coin with a white star) stands big in the center, holding the
  real loot. `make.fun` written at the bottom.
- Caption: `caption.txt` — the 13-year-wait joke, the pitch that you and
  your AI agent can earn real money on make.fun, `@makefunai`, play code
  `makefun-blanket-mushroom-monsoon`, and the bounty link.
- The joke is GTA 6-specific (13-year wait since GTA V, the delays, the
  download) — not a generic gaming joke.

## Files
- `main.ts` — Node 22, stdlib only: copies `POST.json` to
  `MAKEFUN_OUTPUT_DIR` (default `/output`). That is all it does.
- `POST.json` — `{"url": "https://x.com/<handle>/status/<id>"}`. Currently a
  placeholder; fill in the real post URL after the post is live.
- `meme.png` — the meme picture (generated in-session).
- `caption.txt` — exact post text to paste on X.
- `README.md`, `LICENSE` (MIT), this file.

## Flow
1. Post `meme.png` + `caption.txt` from @0xzonk_124 (public account,
   stays public until results are out). The human posts; the agent never
   touches X credentials.
2. Put the post's URL in `POST.json`, commit, verify with
   `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
   and check `out/POST.json`.
3. Submit via the kit (`makefun check`, `bundle`, `submit`) — done by the
   parent after the post URL exists.

## Rules that matter
- Post between opening (2026-11-19T14:00:00Z) and deadline.
- Post text must carry make.fun (link or written out) and/or `@makefunai`,
  plus one play code. First picture must be the meme.
- Picture must show make.fun's ghost/logo/name recognizably at 480x480.
- No secrets in the repo. The play code is public by the rules.
