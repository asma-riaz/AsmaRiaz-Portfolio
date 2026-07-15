# Asma Riaz — Developer Portfolio

A production ready, fully responsive developer portfolio built with React, Vite, Tailwind CSS and Framer Motion.

This version carries a warm, premium redesign: a charcoal and burnt orange palette (`#252422` / `#EB5E28`), a Fraunces and Inter type pairing, a new Services section, animated skill proficiency bars, a timeline layout for Experience and Education, and keyboard and swipe navigation on the Projects carousel.

## Tech stack

- React 19 + Vite 8
- Tailwind CSS 4 (CSS first config, no tailwind.config.js needed)
- Framer Motion for animation
- React Icons for iconography

## Getting started

```bash
npm install
npm run dev
```

The dev server opens at `http://localhost:5173`.

```bash
npm run build     # production build into dist/
npm run preview   # preview the production build locally
```

## Before you deploy, three things to fill in

### 1. Contact form key (required for the form to actually send email)

The contact form uses Web3Forms, a free service that emails form submissions straight to your inbox with no backend to host.

1. Go to `https://web3forms.com` and sign up with `asmariaz2903l@gmail.com`.
2. Copy your Access Key.
3. Create a file named `.env` in the project root (copy `.env.example`) and paste:
   ```
   VITE_WEB3FORMS_KEY=your_access_key_here
   ```
4. Add the same variable in your Vercel project settings under Environment Variables, so it works in production too.

Until this key is set, the form will show a friendly error and point people to your email directly, so nothing breaks.

### 2. Live demo links

Open `src/data/projects.js` and fill in the `live` field for any project you have deployed, for example:

```js
live: 'https://eliteverse.vercel.app',
```

Leave it as an empty string to hide the Live Demo button for that project.

### 3. Project media, screenshots or demo videos

Each project card can show either a screenshot or a short demo video. Right now `EliteVerse` plays a real demo video, and the other three projects are wired to look for a video file that doesn't exist yet, so they fall back to a generated placeholder automatically. Nothing breaks either way.

To add a demo video, drop an `.mp4` file into `public/projects/` using this exact name:

| Project | Expected file |
|---|---|
| EliteVerse | `public/projects/eliteverse.mp4` (already added) |
| ZestyBites | `public/projects/zestybites.mp4` |
| Student Management System | `public/projects/student-management-system.mp4` |
| Tic-Tac-Toe with AI Opponent | `public/projects/tic-tac-toe-ai.mp4` |

As soon as a file with that exact name exists, its card automatically switches from the placeholder to a real video player, no code changes needed. If you rename a project's video, update the matching `video` field in `src/data/projects.js`.

For best results, keep each clip:
- `.mp4` with H.264 video and AAC audio, the format every browser plays natively
- Under about 20 to 30 seconds, and under 10 MB where possible, so the page stays fast
- Filmed or exported close to a 16:10 ratio (about 1000×625px); anything else still works, it's just center-cropped slightly to fill the frame

To use a static screenshot instead of video for any project, add an image to `public/projects/`, open `src/components/ProjectShowcase.jsx`, and swap the placeholder block inside `ProjectPreview` for an `<img src={project.image} alt={project.title} className="h-full w-full object-cover" />`, then add an `image` field to that project in `src/data/projects.js`.

### 4. Hero photo

The right side of the Hero section is wired to look for a photo at `public/hero/asma-riaz.jpg`. Until that file exists, it shows a clean placeholder automatically, nothing breaks.

Drop your photo in with that exact name and it appears immediately, no code changes needed. If you'd rather use a different name or a `.png` / `.webp` file, just update `heroImage` in `src/data/site.js` to match.

For best results:
- A portrait crop, close to 4:5 (for example 1000×1250px)
- `.jpg` or `.webp`, ideally under 500 KB so the page stays fast
- Good, even lighting; the frame sits on a dark background so avoid a very dark or busy backdrop

## Project structure

```
src/
  components/     All UI components, one file per section
  data/           Content lives here, not in the components
    site.js       Name, email, links, intro copy
    skills.js     Skills grouped by category, each with an icon and a proficiency level
    services.js   The six services shown in the Services section
    projects.js   Project details, features, challenges, links
    experience.js Experience, education, certifications
  hooks/          useTypewriter, useActiveSection, usePrefersReducedMotion
  index.css       Tailwind import + design tokens (@theme) + base styles
public/
  resume/         Your downloadable resume PDF
  favicon.svg, og-image.png, robots.txt
```

To update any text on the site, edit the relevant file in `src/data/`, not the components.

## Updating your resume

Replace `public/resume/Asma-Riaz-Resume.pdf` with an updated export whenever your resume changes. The filename can stay the same, or update the path in `src/data/site.js` (`resumeUrl`).

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to `vercel.com`, import the repository, framework preset "Vite" is auto detected.
3. Add the `VITE_WEB3FORMS_KEY` environment variable in the Vercel project settings.
4. Deploy. No configuration changes are needed.

## Accessibility and performance notes

- Respects `prefers-reduced-motion`: animations and the custom cursor are disabled automatically.
- Custom cursor only activates on fine pointer (mouse) devices, never on touch.
- All interactive elements are keyboard reachable with visible focus rings.
- A skip to content link is available for keyboard and screen reader users.
- Fonts are loaded with `preconnect` and `display=swap` to avoid blocking render.
