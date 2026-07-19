# Christopher Geyer Portfolio

Personal portfolio site for Christopher Geyer, Senior Full-Stack AI Engineer based in Noble, Oklahoma. The site presents experience across product engineering, applied AI, backend and data systems, cloud infrastructure, Linux operations, security, and observability.

## Technology Stack

- Framework: Next.js 16 with the App Router
- Language: TypeScript
- Styling: Tailwind CSS v4
- Theming: next-themes with light and dark modes
- Icons and fonts: Font Awesome and Google Fonts
- Hosting: Static export compatible with GitHub Pages

## Local Development

```powershell
npm install
npm run dev
npm run build
```

Both development and production builds use Webpack because the project is configured to avoid Turbopack compatibility issues in the target environment.

## Project Structure

```text
app/
  layout.tsx        Root layout, metadata, fonts, icons, and providers
  page.tsx          Single-page section composition
  globals.css       Tailwind entry, theme tokens, and animations
components/
  sections/         Hero, about, experience, projects, certifications, skills, education, and contact
  shared files      Theme, reveal, heading, skill, and navigation utilities
lib/
  data.ts           Primary content source for the portfolio
public/
  assets/           Profile images, project screenshots, badges, and documents
```

## Updating Content

Most portfolio content is maintained in `lib/data.ts`.

- Profile and contact information: `profile`
- Hero content: `hero`
- Career narrative: `about`
- Skills: `skills`
- Work history: `experience`
- Education: `education`
- Certification badges: `certificationBadges`
- Project casework: `projects`

Section-specific headings and supporting copy are stored in the corresponding files under `components/sections`.

## Key Features

- Responsive light and dark themes
- Full-screen project galleries with keyboard navigation
- Filterable project casework
- Animated profile presentation
- Scroll-aware navigation
- Responsive skills, experience, education, and contact sections
- Static export support for GitHub Pages

## Deployment

`next.config.ts` uses static export, unoptimized images, and trailing slashes.

For a GitHub Pages project site such as `https://<user>.github.io/portfolio/`, build with both `BASE_PATH=/portfolio` and `NEXT_PUBLIC_BASE_PATH=/portfolio`. Leave these variables unset for local development or a root domain.
