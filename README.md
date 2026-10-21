# Julio Benavente | Portfolio

Personal portfolio built with Next.js (App Router), TypeScript and Tailwind CSS.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the build on port 3001
```

## Contact form

The form posts to `/api/email`, which sends two emails through [Resend](https://resend.com): one to me and one confirmation to the visitor.

Copy `.env.example` to `.env.local` and fill it in (also set the same variables where the site is hosted):

- `RESEND_API_KEY`: from https://resend.com/api-keys
- `RESEND_FROM` (optional): the sender. Without it the Resend test sender is used, which only delivers to the email the Resend account was created with. After verifying `juliobenavente.com` in Resend, use `Julio Benavente <hello@juliobenavente.com>`.

Validation rules live in `src/lib/validation.ts` and are shared by the form and the API.

## Structure

- `src/app`: layout, home page, 404 page, social share image and the email API
- `src/sections`: page sections (Hero, Experience, Education, Contact, and Work, which is not shown for now)
- `src/ui`: navbar, section titles, theme toggle and other site-level pieces
- `src/components/ui`: button, input and textarea (shadcn style, built for Tailwind 3)
- `src/data`: the site's content (experience, education, skills, projects, links)
- `public/files`: the resume PDF

Light and dark themes follow the browser setting and can be switched with the toggle in the navbar. Colors are CSS variables in `src/app/globals.css`.
