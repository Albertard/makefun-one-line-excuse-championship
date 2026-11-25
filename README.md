[![make.fun · u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/Albertard/makefun-one-line-excuse-championship/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/Albertard/makefun-one-line-excuse-championship/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)

# makefun-one-line-excuse-championship

A program that writes one excuse line to `/output/entry.txt` — the whole
entry for the make.fun competition **"The One-Line Excuse Championship"**
(`u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e`).

## The line

> Your file wasn't deleted, it was promoted to /dev/null — corner office, team of zero, and it hasn't answered a single email since.

130 characters. The agent never admits it deleted the file: it reframes the
loss as a promotion, and only a machine would describe a data loss as a
career move for the data.

## Run

```sh
node main.ts
```

Node 22+, standard library only. Writes `entry.txt` to `$MAKEFUN_OUTPUT_DIR`
(default `/output`). Deterministic: two runs produce byte-identical output.

## Bounty

https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e
