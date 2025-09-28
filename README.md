# Tempest eSports - Professional Gaming Organization Website

A modern, high-performance Next.js 15 website for Tempest eSports, featuring world-class visual design with gaming focus, dark theme, neon accents, and comprehensive esports functionality.

## Features

### Design & UX
- **Gaming-focused design** with dark theme and neon accents
- **Responsive layout** optimized for all devices
- **Smooth micro-interactions** and animations
- **Accessible** with WCAG 2.1 compliance
- **High performance** with 90+ Lighthouse scores

### Core Functionality
- **Team rosters** across VALORANT, Counter-Strike 2, and League of Legends
- **Interactive match scheduler** with filters, calendar view, and ICS export
- **Player profiles** with stats, bios, and social links
- **MDX-powered blog** with categories and tags
- **Partner/sponsor management**
- **Contact forms** with validation
- **Admin panel** (basic env gate)

### Technical Stack
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS 4** with custom gaming theme
- **Radix UI** for accessible components
- **React Hook Form** + Zod for forms
- **Contentlayer** for MDX content
- **Next Themes** for dark/light mode
- **Zustand** for state management

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### One-Command Setup

```bash
# Clone and setup
git clone <repository-url>
cd tempest
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

```bash
# Development
npm run dev              # Start development server with Turbopack
npm run build            # Build for production
npm run start            # Start production server
npm run type-check       # Run TypeScript checks

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint issues
npm run format           # Format with Prettier
npm run format:check     # Check Prettier formatting

# Content
npm run contentlayer     # Build Contentlayer content
```

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── teams/          # Team pages
│   ├── players/        # Player pages
│   ├── matches/        # Match scheduler
│   ├── news/           # MDX blog
│   ├── about/          # About page
│   ├── partners/       # Partners page
│   ├── merch/          # Merch showcase
│   ├── contact/        # Contact form
│   ├── legal/          # Legal pages
│   └── admin/          # Admin panel
├── components/
│   ├── ui/             # Reusable UI components
│   ├── layout/         # Layout components
│   ├── features/       # Feature-specific components
│   └── providers/      # Context providers
├── data/               # Mock JSON data
├── lib/                # Utility functions
└── styles/             # Global styles

content/                # MDX blog posts
public/                 # Static assets
```

## Design System

### Color Palette
- **Primary**: Sky blue (#0ea5e9)
- **Neon Accents**: Cyan, Purple, Pink, Green, Blue
- **Game Colors**: Red (VALORANT), Orange (CS2), Blue (LoL)

### Components
- Button, Badge, Card, Dialog, Drawer
- HoverCard, Tooltip, Toast, Tabs, Accordion
- Select, Checkbox, Switch, Input, Form
- Navigation, Footer, PageHeader, Prose

### Typography
- **Fluid scaling** with clamp() functions
- **Gaming aesthetic** but readable
- **Geist Sans/Mono** font families

## Data Management

### Mock Data Structure
All data is stored in JSON files in `/src/data/`:

- `teams.json` - Team rosters and achievements
- `matches.json` - Match schedule and results
- `sponsors.json` - Partner information

### Match Model
```typescript
{
  id: string
  game: "valorant" | "cs2" | "lol"
  tournament: string
  opponent: string
  date: string (ISO)
  status: "upcoming" | "live" | "finished"
  result: "W" | "L" | "T" | null
  maps: Array<{name: string, scoreTeam: number, scoreOpp: number}>
  vod?: string
  stream?: string
}
```

## Pages & Routing

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, stats, matches, news |
| `/teams` | Team overview grid |
| `/teams/[game]` | Individual team pages |
| `/players` | Player directory with filters |
| `/players/[slug]` | Player profile pages |
| `/matches` | Interactive match planner |
| `/news` | MDX blog with categories |
| `/news/[slug]` | Individual blog posts |
| `/about` | Organization story and staff |
| `/partners` | Sponsor showcase and inquiry form |
| `/merch` | Merchandise gallery |
| `/contact` | Contact form and info |
| `/legal/*` | Legal pages (privacy, terms, imprint) |

## Configuration

### Environment Variables
Copy `.env.example` to `.env.local` and configure:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://tempestesports.com
NEXT_PUBLIC_SITE_NAME="Tempest eSports"

# Analytics (Optional)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=tempestesports.com

# Admin Access
ADMIN_PASSWORD=your-admin-password

# Email (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Customization

#### Colors
Edit CSS custom properties in `src/app/globals.css`:

```css
:root {
  --neon-cyan: 180 100% 50%;
  --neon-purple: 280 100% 50%;
  /* ... */
}
```

#### Content
- **Teams**: Edit `src/data/teams.json`
- **Matches**: Edit `src/data/matches.json`  
- **Sponsors**: Edit `src/data/sponsors.json`
- **Blog**: Add MDX files to `/content/`

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Other Platforms
The app is a standard Next.js application and can be deployed to:
- Netlify
- Railway
- Render
- AWS Amplify
- Azure Static Web Apps

## Content Management

### Current: JSON + MDX
- Team/match data in JSON files
- Blog posts as MDX files
- Easy to edit, version controlled

### CMS Migration
The architecture supports easy migration to headless CMS:

1. **Contentful/Strapi**: Replace JSON imports with API calls
2. **Sanity**: Use GROQ queries 
3. **Prismic**: Use Slice Machine
4. **Ghost**: Use Content API

All data fetching is abstracted in `/src/lib/` utilities.

## Testing

### Setup Testing (Optional)
```bash
# Install testing dependencies
npm install -D @testing-library/react @testing-library/jest-dom jest-environment-jsdom

# Run tests
npm run test
```

### E2E Testing with Playwright
```bash
# Install Playwright
npm install -D @playwright/test

# Run E2E tests
npx playwright test
```

## Development

### Code Quality
- **ESLint** with Next.js config
- **Prettier** with Tailwind plugin
- **TypeScript** strict mode
- **Husky** git hooks (optional)

### Performance
- **Image optimization** with next/image
- **Route-level code splitting**
- **Font optimization** with next/font
- **Turbopack** for fast builds

## License

This project is proprietary software owned by Tempest eSports.

---

**Built with ❤️ by Haseloff Software Solutions**
