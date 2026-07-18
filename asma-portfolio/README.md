# Asma Riaz | Developer Portfolio

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animations-0055FF?logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

A modern, fully responsive developer portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. The site is designed with performance, accessibility, and a smooth user experience in mind, and showcases projects, technical skills, services, education, and professional experience through a clean interface and subtle motion design.

---

## Table of Contents

* [About](#about)
* [Live Demo](#live-demo)
* [Preview](#preview)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)
* [Configuration](#configuration)
* [Project Structure](#project-structure)
* [Resume](#resume)
* [Deployment](#deployment)
* [Accessibility](#accessibility)
* [Performance](#performance)
* [Roadmap](#roadmap)
* [Author](#author)
* [Acknowledgments](#acknowments)
* [License](#license)

---

## About

This is the personal developer portfolio of **Asma Riaz**, a full stack web developer and BS Computer Science student at Lahore College for Women University, Lahore. The site pulls together her project work in React, PHP, and MySQL into a single, polished space for recruiters and collaborators to explore, complete with live demos, source links, and a downloadable resume.

---

## Live Demo

**Website:** https://your-portfolio.vercel.app

> Replace the URL above with your deployed Vercel link once the site is live.

---

## Preview

> Add a screenshot or short GIF of the hero section here once the portfolio is deployed, for example:
>
> `![Portfolio preview](public/preview.png)`

---

## Features

**Design**
* Premium charcoal and burnt orange color palette
* Modern, fully responsive layout across all screen sizes

**Interaction**
* Interactive project showcase with keyboard and swipe navigation
* Animated skill proficiency bars
* Timeline layout for Experience and Education
* Smooth page transitions using Framer Motion
* Custom cursor, disabled on touch devices

**Utility**
* Contact form powered by Web3Forms, no backend required
* Downloadable resume

**Quality**
* Accessible and keyboard friendly interface
* Optimized for performance and SEO

---

## Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | React 19, Vite 8 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Icons | React Icons |
| Contact Form | Web3Forms |

---

## Getting Started

### Prerequisites

* Node.js 18 or higher
* npm (or yarn)

### Installation

Clone the repository:

```bash
git clone https://github.com/asma-riaz/developer-portfolio.git
```

Navigate to the project directory:

```bash
cd developer-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

### Available Scripts

| Command | Description |
|---------|--------------|
| `npm run dev` | Starts the local development server |
| `npm run build` | Builds the app for production |
| `npm run preview` | Serves the production build locally |

---

## Configuration

### Environment Variables

This portfolio uses **Web3Forms** to send contact messages without a backend.

Create a `.env` file in the project root:

| Variable | Description |
|----------|--------------|
| `VITE_WEB3FORMS_KEY` | Your Web3Forms access key |

Get a free access key at **https://web3forms.com**.

When deploying to Vercel, add the same environment variable in the project settings.

### Project Links

Update project demo URLs inside:

```
src/data/projects.js
```

Example:

```js
live: "https://eliteverse.vercel.app"
```

Leave the value empty to hide the Live Demo button for that project.

### Project Videos

Place project demo videos in:

```
public/projects/
```

| Project | Filename |
|---------|----------|
| EliteVerse | eliteverse.mp4 |
| Zesty Bites | zestybites.mp4 |
| Student Management System | student-management-system.mp4 |
| Tic Tac Toe with AI | tic-tac-toe-ai.mp4 |

Recommended:

* MP4 (H.264)
* Under 10 MB
* 20 to 30 seconds

### Hero Image

Place your profile image at:

```
public/hero/asma-riaz.jpg
```

Recommended:

* JPG or WebP
* 4:5 aspect ratio
* Under 500 KB

---

## Project Structure

```text
src
├── components
├── data
│   ├── experience.js
│   ├── projects.js
│   ├── services.js
│   ├── site.js
│   └── skills.js
├── hooks
├── assets
├── index.css
└── main.jsx

public
├── hero
├── projects
├── resume
├── favicon.svg
├── og-image.png
└── robots.txt
```

---

## Resume

Replace:

```
public/resume/Asma-Riaz-Resume.pdf
```

or update the `resumeUrl` value in:

```
src/data/site.js
```

---

## Deployment

This project is ready for deployment on Vercel.

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Add the `VITE_WEB3FORMS_KEY` environment variable.
4. Deploy the project.

No additional configuration is required. Netlify works as an alternative, using `npm run build` as the build command and `dist` as the publish directory.

---

## Accessibility

* Supports `prefers-reduced-motion`
* Fully keyboard accessible
* Visible focus indicators
* Skip to content link
* Screen reader friendly
* Custom cursor disabled on touch devices

---

## Performance

* Optimized production build with Vite
* Responsive assets
* Optimized animations
* Google Fonts loaded with `display=swap`
* Tailwind CSS optimized for production

---

## Roadmap

* [ ] Add a blog or writing section
* [ ] Add light mode toggle
* [ ] Add analytics integration
* [ ] Add case study pages for flagship projects like EliteVerse

---

## Author

**Asma Riaz**
Full Stack Web Developer, BS Computer Science student at Lahore College for Women University

* GitHub: https://github.com/asma-riaz
* LinkedIn: *Add your LinkedIn profile URL*
* Email: *Add your contact email*

---

## Acknowledgments

* [Web3Forms](https://web3forms.com) for the contact form backend
* [React Icons](https://react-icons.github.io/react-icons/) for the icon set
* [Vercel](https://vercel.com) for hosting

---

## License

This project is licensed under the MIT License.
