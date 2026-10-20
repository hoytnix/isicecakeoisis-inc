# Tech Context: ISICECAKEOISIS INC.

## Tech Stack
- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Lucide React icons, Native SVG animations.
- **Backend**: Express.js server (`server.ts`), Vite middleware in development, static distribution in production.
- **Server Routes**:
  - `GET /llms.txt`: Raw machine-legible manifest served as `text/plain; charset=utf-8`.
  - `POST /api/investor-inquiry`: Ingestion endpoint for accredited investor submissions.
  - `POST /api/generate-greeting` & `POST /api/multilingual`: Gemini 2.5 Flash endpoints.

## Dependencies & Fonts
- Fonts loaded via Google Fonts in `index.html`: `Space Grotesk`, `Inter`, `JetBrains Mono`.
- Lucide React components replacing static CDN script tags.
- Schema.org Organization JSON-LD markup configured.
