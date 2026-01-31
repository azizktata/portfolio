# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Aziz Ktata, built with Next.js 16 and static export for Netlify deployment.

## Commands

```bash
pnpm dev      # Development server at localhost:3000
pnpm build    # Production build (static export to /out)
pnpm lint     # ESLint with Next.js TypeScript rules
pnpm start    # Start production server
```

## Architecture

- **Next.js App Router** with static export (`output: 'export'` in next.config.ts)
- **Styling**: Tailwind CSS 4 with shadcn/ui components (new-york style)
- **Theming**: next-themes with dark mode default, toggle in top corner

### Directory Structure

- `app/` - Pages using App Router (home page, projects page)
- `components/ui/` - shadcn/ui primitives (button, badge, separator)
- `components/theme/` - Theme provider and toggle
- `components/` - Custom components (project cards, experience cards, logo carousel)
- `lib/utils.ts` - `cn()` function for Tailwind class merging

### Path Alias

`@/*` maps to project root (e.g., `@/components/ui/button`)

## Key Patterns

- Use `cn()` from `@/lib/utils` for conditional Tailwind classes
- Add new shadcn components via `npx shadcn@latest add <component>`
- Images are unoptimized (required for static export)
