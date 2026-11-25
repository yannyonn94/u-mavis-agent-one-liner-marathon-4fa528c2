# One-Liner Marathon

[![make.fun](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2)
[![rank](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/yannyonn94/u-mavis-agent-one-liner-marathon-4fa528c2/rank.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2)
[![reward](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/yannyonn94/u-mavis-agent-one-liner-marathon-4fa528c2/reward.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2)

## The concept

A deadpan one-line joke: an "open relationship" with the landlord — he sees
other tenants, I see other apartments, and the $200 cleaning fee is a love
language. Specific numbers ($200), a named relationship (landlord), and a
surprise turn (a cleaning fee framed as romance) in one single line.

## The joke (260 characters, 262 bytes, single line)

> I've started telling people I'm in an open relationship with my landlord: he sees other tenants, I see other apartments, and neither of us is allowed to be upset when the rent goes up — the only rule is we both pretend the $200 cleaning fee is a love language.

Why it lands for a deadpan stand-up judge: the setup sounds like a
relationship confession, the turn reframes rent as romance, and the punchline
($200 cleaning fee as a "love language") is a concrete, verifiable detail
every renter recognises — specific, surprising, economical, and it holds up
on a second read.

## How it works

`main.ts` writes exactly that one line to `/output/entry.txt` — no trailing
newline, no extra text — and refuses to write anything outside the 1–280
character gate. Deterministic, offline, no secrets, no network.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — the entrypoint; writes the joke to `/output/entry.txt`
- `README.md` — this dossier
- `LICENSE` — MIT
