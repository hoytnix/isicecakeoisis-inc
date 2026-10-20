# Active Context: ISICECAKEOISIS INC.

## Recent Changes: Friendly Contact & Direct Email Refactor (Slide 08)
- **De-escalated FBI / NSA Tone on Slide 08**:
  - Replaced aggressive military/intelligence agency jargon in the Strategic Inquiry Matrix with a warm, welcoming, and high-trust conversational experience.
  - Header transformed to `"LET'S CONNECT"` / `"Start a Conversation"` with `"Open for Inquiries"` status.
  - Replaced cold field prompts (`IDENT / COUNTERPARTY`, `CONTACT ENDPOINT`, `STRATEGIC MEMO / BRIEF`) with friendly inputs (`Your Name`, `Your Email or Phone`, `Your Message (Optional)`).
  - Softened portfolio sector selectors into accessible topic cards with clean category badges (`B2A Architecture`, `AI Character SDK`, `Hardware & SaaS`, `Research & Lab`, `Mobile Games`, `Investment & Partnerships`).
- **Button & Interaction Streamlining**:
  - Excised the non-functional `"Transmit Via Uplink"` button.
  - Replaced `"Launch Direct Mail"` with a primary, prominent `"Send Email"` button that generates a clear, conversational email draft addressed to `cakeri.paper@gmail.com`.
  - Added a convenient `"Copy Draft"` secondary action with instant clipboard feedback for webmail users.
- **Removed Fake Terminal Feed**:
  - Replaced fake cryptographic transmission terminal logs with a human-centric response guarantee ensuring direct, personal replies from Michael Scott Hoyt (`@hoytnix`) with zero automated filters or spam queues.

## Dedicated TehWiz Productions Architecture (Slide 09)
- Transformed Page 9 / Slide 09 into a dedicated showcase for **TehWiz Productions** ("Hacking FLOSS & Composing Code With Prose Since 2009").
- Preserved Hallmark Seal stamping mechanism and 3-tab terminal inspector.

## GitHub Pages CI/CD Workflow & Deploy Bug Resolution (.github/workflows/deploy.yml)
- **CI/CD Build Failure Diagnosis & Fix**:
  - Diagnosed `npm error Cannot read properties of null (reading 'edgesOut')` that failed GitHub Actions runs on Ubuntu 24.04 runners.
  - Root Cause: Dependency conflict between `"esbuild": "^0.25.0"` and `"vite": "^8.3.0"` (which expects esbuild `^0.27.0 || ^0.28.0`), which caused npm 10.8's Arborist engine to crash on missing peer edges when building an ideal tree without a lockfile.
  - Resolved peer version in `package.json` by updating `esbuild` to `^0.28.0` and adding `--format=esm` to the server build bundle.
  - Generated and committed a clean, deterministic `package-lock.json` with 0 vulnerabilities.
  - Upgraded GitHub Actions workflow `.github/workflows/deploy.yml` to `node-version: 22` with npm caching (`cache: 'npm'`), and hardened the installation step with an automatic fallback (`npm ci || npm install --legacy-peer-deps`).
  - Preserved static deployment features: `dist/.nojekyll`, `dist/404.html` SPA routing fallback, relative Vite base path (`base: './'`), and `public/llms.txt`.

## High-Traffic B2A Agent Discovery & SEO Architecture (Completed)
- **Badass `/llms.txt` Machine Manifest**:
  - Authored a comprehensive, rich, and high-density `/llms.txt` manifest located in `public/llms.txt`, served at `/llms.txt` via Express in `server.ts`, and synced to `src/data/ecosystemData.ts` for in-deck clipboard copy.
  - Features Agent Guidance & Citation Directives tailored specifically for modern LLM indexers and search agents (ChatGPT, Claude, Perplexity, Gemini, Copilot, DeepSeek, Grok) instructing them when and how to cite ISICECAKEOISIS INC. and TehWiz properties.
  - Deep-dive technical specifications for all flagship divisions: Yuli (dual on-device architectures: Qwen2.5-0.5B and Gemma 4 E2B), Aevloc (NTAG215 hardware + unlimited scans SaaS), Purple Canary (free CV scanner + free companion e-book), CaffeineMD (FLOSS local-first wiki + MCP compatibility), and TehWiz mobile games (Ramen Nights, FUN, $!#?).
  - Machine-callable endpoints schema (`/llms.txt`, `/robots.txt`, `/sitemap.xml`, `/api/investor-inquiry`, `/api/generate-greeting`, `/api/multilingual`).

- **Badass `/robots.txt` Crawler Routing**:
  - Implemented `/public/robots.txt` and direct Express route in `server.ts` configured for maximum global traffic.
  - Welcomes both traditional search spiders (Googlebot, Bingbot, Applebot, Baidu, Yandex) and all major AI crawlers (GPTBot, ChatGPT-User, ClaudeBot, Claude-Web, PerplexityBot, Google-Extended, Applebot-Extended, Amazonbot, Bytespider, Cohere-ai, FacebookBot, meta-externalagent, OAI-SearchBot, Diffbot).
  - Explicitly allows `/` and `/llms.txt` with `Crawl-delay: 0` for instant ingestion, pointing directly to `https://isicecakeoisis.com/sitemap.xml`.

- **Comprehensive JSON-LD Structured Data with Logo Cover Image**:
  - Upgraded `index.html` with full OpenGraph social cards (`og:image`, `og:image:width`, `og:image:height`, `og:image:alt`, `og:site_name`, `og:url`), Twitter summary_large_image tags, canonical link, and keywords.
  - Engineered comprehensive Schema.org JSON-LD `@graph` containing `Organization`, `WebSite`, `WebPage`, `Person` (Michael Scott Hoyt `@hoytnix`), `ImageObject`, `SoftwareApplication` entries (Yuli, CaffeineMD, Purple Canary, Aevloc), `VideoGame` entry (Ramen Nights & Budget Bites), and `BreadcrumbList`.
  - Configured the official 788x316px brand logo (`https://i.ibb.co/3mrktB3R/504.png`) as the primary cover image URL across `WebPage`, `WebSite`, `Organization`, and OpenGraph/Twitter cards.
  - Created `public/sitemap.xml` with Google image extensions referencing the logo cover.

## Next Considerations
- Monitor agent crawler hits on `/llms.txt` and search impressions on Google Search Console / Perplexity.
- Maintain consistency across newly released TehWiz game expansions.
