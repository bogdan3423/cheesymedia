# Cheesy Media Landing Page

Premium, conversion-focused marketing agency landing page for **Cheesy Media** (Cluj-Napoca, Romania), built with:

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui-style component architecture
- Lucide icons
- Framer Motion (subtle entrance animation)

## Project Structure

- `app/` — Next.js routes, global styles, metadata
- `components/ui/` — reusable UI primitives (Button, Card, Badge, Accordion, Dialog, Sheet, etc.)
- `components/landing/` — page sections and content data
- `lib/utils.ts` — `cn()` utility for class composition

## Design System

Core tokens are defined in `app/globals.css`:

- **Color tokens**: purple brand base, cheese-yellow accent, warm neutrals
- **Typography**: Plus Jakarta Sans (headings), Inter (body)
- **Spacing rhythm**: CSS variable scale (`--space-*`)
- **Component rhythm**: moderate radii, restrained shadows, subtle borders

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run build
```

## Notes

- The page is fully responsive and section-based for easy extension.
- Content is currently realistic placeholder copy and can be swapped quickly via `components/landing/data.ts`.

# cheesymedia
