# Context: Aziz Ktata Portfolio

## Project Overview

Personal portfolio website for Aziz Ktata, a Full Stack Developer based in Tunisia. Built with Next.js 16 and deployed to Netlify with static export.

## Technical Stack

- **Framework**: Next.js 16 (App Router, static export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + tw-animate-css
- **UI Components**: shadcn/ui (button, badge, separator)
- **Theme**: next-themes (dark mode default)
- **Icons**: lucide-react, react-icons (SiGithub, SiLinkedin, etc.)
- **Package Manager**: pnpm

## Key Files

- `app/page.tsx` - Main homepage with hero, about, tech stack, experience, and featured projects
- `app/projects/page.tsx` - Full projects gallery (13 projects)
- `app/layout.tsx` - Root layout with theme provider and navbar
- `app/globals.css` - Tailwind 4 CSS with light/dark theme variables

## Pages

### Homepage (`app/page.tsx`)
- Hero section: Name "Aziz Ktata", title "Full stack developer"
- About section with bio paragraphs
- Tech stack with categorized badges (Frontend, Backend, DevOps)
- Experience section with 3 positions (Asis.tn, Sofrecom, Tunisie Telecom)
- Featured projects (4 projects with links to /projects)

### Projects Page (`app/projects/page.tsx`)
- Full project gallery with 13 projects
- Project cards with details including: title, subtitle, description, tech stack, GitHub link, live demo
- Projects include: Kibar Oulama University, TheLandlord, Timesheet, Ramtec, Marine Keys, Dolphin Equipements, mBio7, Groupe Agence, Truvisory, GafVoyages, SkyFlow, EpiGreenVision, Parcauto

## Components

- `CardProject` - Project card for homepage (horizontal layout)
- `CardProjectV2` - Enhanced project card for projects page with mobile/desktop views
- `CardExperiance` - Experience card with timeline, position, description bullets, tech badges
- `TechStack` - Categorized tech stack display (Frontend/Backend/DevOps)
- `ThemeToggle` - Dark/light mode toggle button (top-right corner)
- `ThemeProvider` - next-themes wrapper
- `BottomNavbar` - Fixed navigation with home, projects, and social links (LinkedIn, GitHub, Email)

## Theme

- Dark mode default (`defaultTheme="dark"`)
- Light/dark toggle available
- Primary color: hsl(213, 73, 16) light / hsl(205, 67, 56) dark
- Background: White (light) / #0F172A (dark)
- Uses backdrop blur effects and smooth transitions

## Dependencies

- `@netlify/plugin-nextjs` - Netlify deployment
- `@next/third-parties` - Google Analytics
- `@radix-ui/react-*` - UI primitives
- `class-variance-authority`, `clsx`, `tailwind-merge` - Utility functions
- `@uidotdev/usehooks` - React hooks

## Configuration Files

- `package.json` - Dependencies and scripts (dev, build, start, lint)
- `next.config.ts` - Static export configuration
- `tsconfig.json` - TypeScript config with `@` path alias
- `tailwind.config.ts` - Tailwind 4 configuration
- `postcss.config.mjs` - PostCSS with Tailwind

## Commands

```
pnpm dev      # Development server at localhost:3000
pnpm build    # Production build (static export to /out)
pnpm start    # Start production server
pnpm lint     # ESLint with Next.js TypeScript rules
```