# Dhruv — Personal Portfolio

A single-page portfolio/resume website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Vite** — fast build tool and dev server
- **React 19** + **TypeScript** — UI framework
- **Tailwind CSS v4** — utility-first styling
- **Framer Motion** — scroll-triggered animations
- **Lucide React** — icons

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx         # Sticky navbar with scroll spy & theme toggle
│   ├── Hero.tsx           # Landing section with animated geometric background
│   ├── About.tsx          # Bio, photo placeholder, fun fact card
│   ├── Projects.tsx       # Project card grid with hover effects
│   ├── Skills.tsx         # Categorized skill badges
│   ├── Contact.tsx        # Contact form + social links
│   ├── Footer.tsx         # Footer
│   ├── Loader.tsx         # Animated page loader
│   └── AnimatedSection.tsx # Reusable scroll-animation wrapper
├── hooks/
│   ├── useTheme.ts        # Dark/light mode toggle with localStorage
│   └── useScrollSpy.ts    # IntersectionObserver-based section tracking
├── App.tsx
├── main.tsx
└── index.css              # Tailwind imports, custom theme, utilities
```

## Features

- Dark mode by default with light mode toggle
- Smooth scroll navigation with active section highlighting
- Animated geometric background (canvas-based, lightweight)
- Angled/clipped section dividers
- Scroll-triggered entrance animations
- Fully responsive (mobile-first)
- Accessible: semantic HTML, ARIA labels, keyboard-navigable
- Animated page loader on first visit
- Resume download button (add your PDF to `public/resume.pdf`)

## Customization

1. **Content** — Edit placeholder text in each component under `src/components/`
2. **Colors** — Change the accent color in `src/index.css` (`--color-accent`)
3. **Fonts** — Swap fonts in `index.html` (Google Fonts link) and `src/index.css` (`--font-heading`, `--font-body`)
4. **Photo** — Replace the placeholder in `About.tsx` with an `<img>` tag
5. **Resume** — Drop your PDF into `public/resume.pdf`
6. **Social links** — Update URLs in `Contact.tsx`

## Deployment

The `dist/` folder after `npm run build` is fully static and can be deployed to any hosting provider:

- **Vercel** — `npx vercel`
- **Netlify** — drag-and-drop the `dist/` folder
- **GitHub Pages** — use the `gh-pages` npm package

## License

MIT
