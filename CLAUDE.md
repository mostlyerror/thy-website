# Homes by Thy — Project Reference

**Client:** Thy Nguyen (real estate agent, Houston TX)
**Repo:** `mostlyerror/thy-website` on GitHub
**Live:** homesbythy.com

## Stack

- **Next.js 16** (App Router, TypeScript, React 19) on **Vercel**
- **Sanity CMS** — Studio at thynguyen.sanity.studio (project `h9op30m3`, dataset `production`)
- **Tailwind CSS v4**, Framer Motion, Playfair Display + Inter fonts
- **Web3Forms** for contact form submissions (key hardcoded in ContactForm.tsx, public by design)

## Where things live

| To change... | Go to... |
|---|---|
| Page content (hero text, FAQs, testimonials, listings) | Sanity Studio |
| Site-wide info (email, phone, address, socials, office hours) | Sanity > Site Settings |
| Page routes & layouts | `src/app/` |
| Reusable UI components | `src/components/` |
| Sanity schemas (add/change content types) | `src/sanity/schemaTypes/documents/` |
| GROQ queries (what data pages fetch) | `src/sanity/lib/queries.ts` |
| Env vars (local) | `.env.local` |
| Env vars (prod/preview) | Vercel dashboard or `vercel env` CLI |
| Domain/DNS | Vercel project settings |

## Key env vars

| Var | What |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `h9op30m3` |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `SANITY_API_READ_TOKEN` | Secret — in `.env.local` and Vercel |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Contact form key (public) |

## Commands

| Command | What |
|---|---|
| `npm run dev` | Local dev (auto-port, logs to `logs/dev.log`) |
| `npm run build` | Production build |
| `npx sanity@latest schema deploy` | Push local schema changes to Sanity cloud |

## Pages

`/` home, `/about`, `/buy`, `/sell`, `/locate` (lease), `/portfolio`, `/listings`, `/resources`, `/contact`

## Notes

- Visual editing & live preview are wired up via Sanity Presentation Tool
- Draft mode routes: `/api/draft-mode/enable` and `/api/draft-mode/disable`
- Dev indicator pill shows in bottom-right when connected to non-prod DB
- Always run `npm run build` before pushing to catch type errors
