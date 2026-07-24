# Christopher Geyer Portfolio

Personal portfolio site for Christopher Geyer, Senior Full-Stack AI Engineer based in Noble, Oklahoma. The site presents experience across product engineering, applied AI, backend and data systems, cloud infrastructure, Linux operations, security, and observability.

## Technology Stack

- Framework: Next.js 16 with the App Router
- Language: TypeScript
- Styling: Tailwind CSS v4
- Theming: next-themes with light and dark modes
- Icons and fonts: Font Awesome and Google Fonts
- AI chatbot: OpenAI Responses API through a server-only route
- Hosting: Node/Vercel deployment with an optional GitHub Pages static export

## Local Development

Copy `.env.example` to `.env.local`, add `OPENAI_API_KEY`, and run:

```powershell
npm install
npm run dev
```

Open `http://localhost:3000` and use the floating chatbot button in the lower-right corner.

Both development and production builds use Webpack because the project is configured to avoid Turbopack compatibility issues in the target environment.

## Project Structure

```text
app/
  api/chat/route.ts Server-only chatbot endpoint
  layout.tsx        Root layout, metadata, fonts, providers, and chatbot
  page.tsx          Single-page section composition
  globals.css       Tailwind entry, theme tokens, and animations
components/
  chatbot/          Floating portfolio assistant interface
  sections/         Hero, about, experience, projects, certifications, skills, education, and contact
  shared files      Theme, reveal, heading, skill, and navigation utilities
lib/
  chatbot-knowledge.ts  Builds chatbot context from portfolio data
  data.ts               Primary content source for the portfolio
public/
  assets/           Profile images, project screenshots, badges, and documents
scripts/
  build-static.mjs  Creates a GitHub Pages build without the server route
```

## Updating Content

Most portfolio content is maintained in `lib/data.ts`. The chatbot reads the same data, so content updates do not need to be duplicated in a separate prompt.

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
- Portfolio-aware AI assistant with suggested questions
- Full-screen project galleries with keyboard navigation
- Filterable project casework
- Animated profile presentation
- Scroll-aware navigation
- Responsive skills, experience, education, and contact sections
- Optional static export support for GitHub Pages

## Chatbot Configuration

The browser calls `app/api/chat/route.ts`; the OpenAI key remains server-side. Configure:

```env
OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-5.6-luna
```

The route validates message length and shape, applies a basic per-IP rate limit, and limits answers to information published in `lib/data.ts`.

## Deployment

### Vercel or another Next.js host

Add the environment variables above and run `npm run build`. The website and `/api/chat` endpoint deploy together.

### GitHub Pages

GitHub Pages cannot execute the server route. Deploy the API separately, set `NEXT_PUBLIC_CHAT_API_URL` to that endpoint during the frontend build, and set `CHAT_ALLOWED_ORIGINS` on the API deployment to the exact portfolio origin.

For a project site such as `https://<user>.github.io/portfolio/`, build with `BASE_PATH=/portfolio`, `NEXT_PUBLIC_BASE_PATH=/portfolio`, and the external API URL:

```powershell
$env:BASE_PATH="/portfolio"
$env:NEXT_PUBLIC_BASE_PATH="/portfolio"
$env:NEXT_PUBLIC_CHAT_API_URL="https://your-api-domain.example.com/api/chat"
npm run build:static
```

`npm run build:static` temporarily excludes the POST route while Next.js generates the static `out/` directory, then restores it automatically.
