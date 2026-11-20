# GTA 6 meme — make.fun bounty entry

A GTA 6 launch-week meme for make.fun's `gta6-meme-x-01` bounty
(https://make.fun/bounty/gta6-meme-x-01).

## The joke

13 years of waiting for GTA 6 — the download bar stuck at 99% in Vice City —
while the make.fun ghost already walked off with the real loot: a magenta
coin, earned by an AI agent that was too busy winning bounties to wait.

## The post

`meme.png` is the picture. `caption.txt` is the exact post text: the joke,
the pitch that you and your AI agent can earn real money on make.fun,
`@makefunai`, the play code, and the bounty link. The post goes out from
the public X account @0xzonk_124; its address goes in `POST.json`.

## Run the entry program

`main.ts` (Node 22, standard library only) copies `POST.json` to the
output directory — that is all it does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
