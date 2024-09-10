<div align="center">
  <div>
    <img src="https://cdn.habbzy.com/uploads/5vXnvuxt90BppMiT.png" alt="Habbzy Logo" style="image-rendering: pixelated" />
  </div>
  <a href="https://www.npmjs.com/package/@habbzy/origins-api" target="_blank">
    <img src="https://img.shields.io/npm/v/@habbzy/origins-api?style=flat-square" alt="NPM" />
  </a>
  <a href="https://discord.gg/habbzy" target="_blank">
    <img src="https://img.shields.io/discord/1264499728251486261?color=7289DA&label=discord&logo=discord&logoColor=FFFFFF&style=flat-square" alt="Discord" />
  </a>
  <img src="https://img.shields.io/npm/l/@habbzy/origins-api?style=flat-square" alt="GPL-3.0-only" />
  <h3>TypeScript bindings for the Habbo Origins API</h3>
</div>

Why? Well, at [Habbzy](https://habbzy.com) we need to interact with the various public Origins APIs to pull in BattleBall matches, verify Habbo identities and so on. So we're publishing our actively maintained bindings!

- Fully ESM
- Actively maintained
- Zero dependencies
- TypeScript-first

## Installation

```bash
npm install @habbzy/origins-api # npm
yarn add @habbzy/origins-api    # yarn
bun add @habbzy/origins-api     # bun
pnpm add @habbzy/origins-api    # pnpm
```

## Usage

### Habbo Origins Imager

```typescript
import { avatarImageUrl } from '@habbzy/origins-api';

const imageUrl = await avatarImageUrl('Evil', {
  size: 'big',
  direction: 'sw',
  headDirection: 'sw',
  action: 'stand',
  gesture: 'smile',
});
```

**NOTE:** Currently, the `figureString` from the public Origins API is borked and will return weird color/hat data - I've checked with Macklebee and this is on his to-do list to fix.

### Habbo Origins API

```typescript
import { battleballMatch, avatar } from '@habbzy/origins-api';

const evil = await avatar('Evil');
// evil?.motto

const match = await battleballMatch('gm-hhous-2a66d6af519b206c014284436b4beec3');
// match?.info?.gameCreation
```
