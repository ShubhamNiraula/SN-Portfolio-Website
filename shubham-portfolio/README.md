# Shubham Niraula — Portfolio

A responsive, dark editorial portfolio built with **Next.js 15 App Router**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide**. The layout takes inspiration from clean studio portfolios: oversized typography, numbered sections, strong spacing, subtle borders, and restrained motion.

## Requirements

- Node.js 20 LTS recommended (18.18 or newer)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Project structure

```text
src/
├── app/
│   ├── layout.tsx              # Root layout and SEO metadata
│   ├── page.tsx                # Page composition only
│   └── globals.css             # Global tokens, responsive styles, Tailwind layers
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Responsive navigation and mobile menu
│   │   └── Footer.tsx          # Site footer
│   │
│   ├── sections/
│   │   ├── Hero.tsx            # Intro, portrait and highlights
│   │   ├── About.tsx           # About section
│   │   ├── Experience.tsx      # Work history
│   │   ├── Education.tsx       # Education and recognition
│   │   ├── Projects.tsx        # Selected project work
│   │   ├── Skills.tsx          # Skills and languages
│   │   └── Contact.tsx         # Contact call-to-action
│   │
│   └── ui/
│       ├── SectionHeading.tsx  # Shared numbered section heading
│       └── SkillCard.tsx       # Reusable animated skill row
│
├── data/
│   └── portfolio.ts            # All editable portfolio content
│
public/
└── profile-placeholder.svg    # Temporary portrait placeholder
```

## Where to edit content

All text and profile details live in `src/data/portfolio.ts`. Update that file to change the name, role, introduction, experience, education, project details, skills, language levels, email, and public social links.

Before publishing:

1. Replace `public/profile-placeholder.svg` with your portrait (for example, `public/profile.jpg`) and update `profile.image` in `src/data/portfolio.ts`.
2. Add a professional email to `profile.email` in `src/data/portfolio.ts`. The contact link activates automatically when an email is supplied.
3. Add only public social-profile URLs to `profile.socialLinks`.
4. Add a public-safe CV as `public/cv.pdf` only if you want to provide a CV download. Review the PDF first and remove any private contact or residential information.
5. Verify all dates, titles, qualifications, language levels, and project claims before publishing.

The uploaded archive did not contain `profile.jpg` or `cv.pdf`, so neither is linked by this starter.

## Useful commands

```bash
npm run dev       # Start local development server
npm run build     # Create a production build
npm run start     # Serve the production build
npm run typecheck # Run TypeScript checks
```

## Production checklist

- [ ] Replace the placeholder portrait.
- [ ] Add and verify public contact details.
- [ ] Verify all portfolio facts and project descriptions.
- [ ] Add a public-safe CV if needed.
- [ ] Run `npm run typecheck` and `npm run build`.
- [ ] Test the navigation and layout on mobile and desktop.

## Hosting on GitHub Pages (shubhamniraula.com.np)

This project is set up as a static site (`output: "export"` in `next.config.mjs`).
Every push to the `main` branch runs `.github/workflows/deploy.yml`, which builds the
site and publishes the `out/` folder to GitHub Pages.

- `public/CNAME` tells GitHub Pages to serve the site at `shubhamniraula.com.np`.
- In the repository: Settings → Pages → Source: **GitHub Actions**.
- At your domain registrar, point the domain at GitHub Pages (A records
  185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153, and a
  `www` CNAME to `<your-username>.github.io`).
