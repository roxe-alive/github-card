# GitHub Card Generator

Create bold, animated GitHub profile cards with 20+ reusable themes. Each card is an SVG generated on demand via a single API endpoint and a `theme` parameter.

**Domain:** https://roxegetgithub-cards.vercel.app

## Features

- 20+ unique themes with animated backgrounds (grid, waves, radar, portal, particles, etc.)
- One endpoint with `theme`, `username`, `color`, `accent`, and `bg` parameters
- SVG output that works in markdown, README files, and social cards

## Live Examples
<div align="center">

<img src="https://roxegetgithub-cards.vercel.app/api/github-card?username=torvalds&theme=starlight" />

</div>
- https://roxegetgithub-cards.vercel.app/api/github-card?username=octocat&theme=neon-core
- https://roxegetgithub-cards.vercel.app/api/github-card?username=sindresorhus&theme=aurora-mist
- https://roxegetgithub-cards.vercel.app/api/github-card?username=defunkt&theme=hacker-terminal

## API Usage

```
/api/github-card?username=<github-handle>&theme=<theme-id>
```

Optional overrides:

- `color` - main accent color (hex without `#`)
- `accent` - secondary accent color (hex without `#`)
- `bg` - background color (hex without `#`)

Example:

```
https://roxegetgithub-cards.vercel.app/api/github-card?username=octocat&theme=neon-core&color=22d3ee&accent=2563eb&bg=000000
```

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the homepage and browse templates.

## Add a Card to Your README

```md
![GitHub Card](https://roxegetgithub-cards.vercel.app/api/github-card?username=octocat&theme=neon-core)
```
