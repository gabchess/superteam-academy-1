# CLAUDE.md — Superteam Academy

## What is this?
A production-ready Solana developer learning platform for Superteam Brazil. Gamified, interactive, multilingual. Built for the $4K Superteam Earn bounty.

## Stack
- Next.js 14+ (App Router), TypeScript strict, Tailwind CSS, shadcn/ui
- Sanity CMS (courses/content), Supabase (users/progress), Solana Wallet Adapter
- Monaco Editor for code challenges
- GA4 + PostHog + Sentry for analytics

## Architecture
- 10 pages: Landing, Courses, Course Detail, Lesson, Dashboard, Profile, Leaderboard, Settings, Certificate
- Service interface pattern: LearningProgressService with swappable implementations (local → on-chain)
- Gamification: XP (soulbound tokens), Levels (sqrt(xp/100)), Streaks, 256 Achievements (bitmap)
- On-chain program at github.com/solanabr/superteam-academy (Anchor, already built)

## What to implement vs stub
### Fully implement (Devnet):
- Wallet auth, XP display from token accounts, cNFT credential display, leaderboard from XP balances

### Stub with clean interfaces:
- Lesson completion (backend-signed txns), enrollment, achievement claiming, streak tracking

## Code Style
- TypeScript strict, no `any`
- ESM imports
- shadcn/ui for all UI components (accessible, composable)
- Server Components by default, Client Components only when needed
- All UI strings in i18n dictionaries (en.json, pt-br.json, es.json)

## Don't Do
- Don't use Pages Router (App Router only)
- Don't hardcode strings (use i18n)
- Don't skip accessibility (shadcn/ui handles most)
- Don't add unnecessary dependencies
- Don't use CSS modules (Tailwind only)
- Don't forget dark mode (primary theme)

## Performance
- Lighthouse: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 90+
- Image optimization, code splitting, lazy loading, static generation where possible

## Key Files
- PRD.md — Full product requirements
- ARCHITECTURE.md — System architecture, component structure, data flow, DB schema
- app/ — Next.js pages
- components/ — UI components organized by domain
- lib/services/ — Service interfaces (the swappable layer)
- lib/sanity/ — CMS client + queries
- lib/supabase/ — Database client + queries
- lib/solana/ — Wallet, XP, credentials
- lib/i18n/ — Translations

## PR Target
Submit as PR to github.com/solanabr/superteam-academy following monorepo structure.
