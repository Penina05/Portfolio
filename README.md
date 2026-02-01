# Portfolio Website

A personal portfolio and website built with React, Vite, Tailwind CSS, and Framer Motion. Features an elegant, feminine design with smooth animations.

## Features

- **Hero** — Intro with animated entrance
- **About** — Bio, photo placeholder, skills
- **Projects** — Portfolio grid with hover effects
- **Resume** — Experience & education timeline
- **Contact** — Form with validation (connect to Formspree/Netlify for backend)
- **Social Links** — Footer with GitHub, LinkedIn, Twitter, Instagram

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customize

- **Personal info**: Edit `Hero.jsx`, `About.jsx`, and `Footer.jsx` with your name, tagline, bio, and social links
- **Projects**: Update the `projects` array in `Projects.jsx`
- **Resume**: Add `resume.pdf` to the `public` folder and update experience/education in `Resume.jsx`
- **Contact form**: Connect to [Formspree](https://formspree.io) or [Netlify Forms](https://docs.netlify.com/forms/setup/) for real submissions

## Build

```bash
npm run build
```

Output will be in the `dist` folder. Deploy to Vercel, Netlify, or any static host.
