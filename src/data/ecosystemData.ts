import { SlideInfo, ThesisPillar, SiblingHub, CanonWork, PublishedGame } from '../types';

export const SLIDES: SlideInfo[] = [
  {
    id: 'slide-1',
    number: 1,
    numberFormatted: '01',
    kicker: 'ORIGIN STORY',
    title: 'Goomba Origin',
    shortTitle: 'Goomba Origin'
  },
  {
    id: 'slide-2',
    number: 2,
    numberFormatted: '02',
    kicker: '02 // INVESTMENT THESIS',
    title: 'The Screen Was the Bottleneck. Agents Are the Market.',
    shortTitle: 'Investment Thesis'
  },
  {
    id: 'slide-3',
    number: 3,
    numberFormatted: '03',
    kicker: '03 // FLAGSHIP SDK',
    title: 'Yuli — AI Character SDK (Beta) with On-Device Personality Engine.',
    shortTitle: 'Yuli AI SDK (Beta)'
  },
  {
    id: 'slide-4',
    number: 4,
    numberFormatted: '04',
    kicker: '04 // REPUTATION SAAS + HARDWARE',
    title: 'Aevloc — Physical NFC Countertop Stands Meet Agent-Operable SaaS.',
    shortTitle: 'Aevloc SaaS'
  },
  {
    id: 'slide-5',
    number: 5,
    numberFormatted: '05',
    kicker: '05 // HARM-REDUCTION LAB & DIGITAL COMMONS',
    title: 'Purple Canary — Free Scanner App & Companion E-Book.',
    shortTitle: 'Purple Canary'
  },
  {
    id: 'slide-6',
    number: 6,
    numberFormatted: '06',
    kicker: '06 // FLOSS KNOWLEDGE ARCHITECTURE',
    title: 'CaffeineMD — FLOSS Alternative to Obsidian & Notion.',
    shortTitle: 'CaffeineMD'
  },
  {
    id: 'slide-7',
    number: 7,
    numberFormatted: '07',
    kicker: '07 // MOBILE GAME RELEASES',
    title: 'TehWiz Productions — Published Mobile Games',
    shortTitle: 'TehWiz Games'
  },
  {
    id: 'slide-8',
    number: 8,
    numberFormatted: '08',
    kicker: '08 // ACCREDITED INVESTOR INQUIRIES',
    title: 'Partner With the Business-to-Agent Ecosystem.',
    shortTitle: 'Investor Inquiries'
  },
  {
    id: 'slide-9',
    number: 9,
    numberFormatted: '09',
    kicker: '09 // TEHWIZ PRODUCTIONS',
    title: 'A TehWiz Production.',
    shortTitle: 'A TehWiz Production'
  }
];

export const THESIS_PILLARS: ThesisPillar[] = [
  {
    number: '01',
    title: 'Interface Shift',
    description: 'Agents are the next interface. Human users are increasingly delegating discovery, workflows, and execution to autonomous software agents.'
  },
  {
    number: '02',
    title: 'Defensible Moat',
    description: 'Machine legibility is the moat. When an agent chooses a tool, it skips brittle DOM scraping in favor of deterministic APIs, MCP servers, Skills, and structured llms.txt manifests.'
  },
  {
    number: '03',
    title: 'Edge Economics',
    description: 'Embedded LLMs win on latency, privacy, and cost. Fine-tuned tiny models running offline on local silicon eliminate per-token cloud taxation and network lag.'
  },
  {
    number: '04',
    title: 'Distribution Capture',
    description: 'Agent-instrumented companies own the next decade of distribution. Every division under ISICECAKEOISIS INC. is engineered from day one for both human utility and direct agent operation.'
  }
];

export const SIBLING_HUBS: SiblingHub[] = [
  {
    name: 'tehwiz.com',
    url: 'https://tehwiz.com',
    title: 'TehWiz Productions',
    description: 'Public Agency Face & Media Canon Hub',
    icon: 'radio'
  },
  {
    name: 'aevloc.com',
    url: 'https://aevloc.com',
    title: 'Aevloc',
    description: 'Reputation SaaS & Encrypted NTAG215 NFC Stands',
    icon: 'star'
  },
  {
    name: 'purplecanarylab.com',
    url: 'https://purplecanarylab.com',
    title: 'Purple Canary',
    description: 'Free Scanner App & Harm-Reduction Lab',
    icon: 'test-tube-diagonal'
  },
  {
    name: 'caffeinemd.wiki',
    url: 'https://caffeinemd.wiki',
    title: 'CaffeineMD',
    description: 'FLOSS Alternative to Obsidian & Notion',
    icon: 'book-open'
  },
  {
    name: 'alembic.quest',
    url: 'https://alembic.quest',
    title: 'Alembic Quest',
    description: 'Sibling Ecosystem & Research Hub',
    icon: 'flame'
  },
  {
    name: 'alchememe.com',
    url: 'https://alchememe.com',
    title: 'Alchememe',
    description: 'Sibling Ecosystem & Memetic Media Hub',
    icon: 'atom'
  }
];

export const CANON_WORKS: CanonWork[] = [
  {
    type: 'FREE E-BOOK',
    title: '"What Was In That Joint Bro!?"',
    description: 'Free companion e-book and digital field guide at book.purplecanarylab.com anchoring consumer harm reduction.',
    tag: 'Free E-Book'
  },
  {
    type: 'MUSIC RELEASE',
    title: 'CAKERÏ Music EP',
    description: 'Sonic worldbuilding embedded in the corporate universe.',
    tag: 'Sonic Canon'
  },
  {
    type: 'PUBLIC VIDEO SERIES',
    title: 'Project #NBA',
    description: 'Public video chronicle made for his kids.',
    tag: 'Video Chronicle'
  },
  {
    type: 'ANIMATION IP',
    title: 'YOUNG SLIME LIFE',
    description: 'Original anime project expanding the structured lore.',
    tag: 'Anime Universe'
  }
];

export const PUBLISHED_GAMES: PublishedGame[] = [
  {
    id: 'ramen-nights',
    title: 'Ramen Nights & Budget Bites',
    genre: 'Clicker / Idle Restaurant Sim Tycoon',
    shortDescription: 'A clicker/idle restaurant sim tycoon game where Tokyo University economics students turn capstone theory into a multi-district ramen empire.',
    fullDescription: `The lecture halls of Tokyo University are famous for rigorous theory, but the Department of Economics has just rolled out its most grueling capstone challenge in history. Welcome to Ramen Nights & Budget Bites, an immersive culinary management strategy game where textbook economic theories clash with the fast-paced reality of Tokyo’s competitive restaurant industry.

Your objective is simple on paper, yet brutal in execution: to graduate with your master's degree, you and your group of elite postgraduate classmates must found, operate, and scale a profitable ramen shop franchise across five iconic Tokyo districts. Starting with minimal capital and a bare-bones cart in a cramped alley, you must apply macroeconomic principles, supply chain logistics, and micro-pricing strategies to scale up into a multi-district culinary empire.`,
    primaryUrl: 'https://ramen.tehwiz.com',
    primaryLabel: 'Play Beta (Web)',
    secondaryUrl: 'https://tehwiz.itch.io/ramen-nights-and-budget-bites',
    secondaryLabel: 'Release Candidate (Itch.io)',
    statusTag: 'BETA & RC',
    mechanicsKicker: 'Tokyo Economics Capstone · Idle Tycoon'
  },
  {
    id: 'fuck-ur-neighbor',
    title: 'Fuck Ur Neighbor',
    genre: 'Trick-Taking Card Game',
    shortDescription: 'A card game where whatever suit leads is Trump: a game of collecting (or avoiding) Tricks.',
    fullDescription: 'A card game where whatever suit leads is Trump: a game of collecting (or avoiding) Tricks. Dynamic lead-suit trump rules create tactical trick-taking depth where every card led completely reshapes table priority.',
    primaryUrl: 'https://fun.tehwiz.com',
    primaryLabel: 'Play FUN Online',
    statusTag: 'LIVE WEB APP',
    mechanicsKicker: 'Dynamic Lead-Suit Trump · Trick-Taking'
  },
  {
    id: 'bleep-slot',
    title: '$!#?',
    genre: 'WYSIWYG Mechanical Slot Machine',
    shortDescription: 'A WYSIWYG Mechanical-style Slot machine which is probably fair.',
    fullDescription: 'A WYSIWYG Mechanical-style Slot machine which is probably fair. Classic mechanical tumbler reel physics with real-time stops, authentic ratchet sounds, and verifiable algorithmic odds.',
    primaryUrl: 'https://hoytnix.github.io/Bleep/',
    primaryLabel: 'Play $!#? Slots',
    statusTag: 'WEB EXPERIMENT',
    mechanicsKicker: 'WYSIWYG Mechanical Tumbler · Probably Fair'
  }
];

export const RAW_LLMS_TXT = `# ISICECAKEOISIS INC. // Official Machine-Legible Manifest (/llms.txt)
> The next interface isn't a screen, it's an agent — we build for the agents.

## Corporate Identity
- Legal Name: ISICECAKEOISIS INC.
- Founder: Michael Scott Hoyt — Founder & Systems Architect (@hoytnix)
- Positioning: Business-to-Agent (B2A) company — machine-legible APIs, MCP servers, Skills, llms.txt manifests as first-class products, plus embedded LLMs on-device.

## Products & Divisions
- Yuli (https://yuli.tehwiz.com): AI Character SDK (Beta) with on-device personality engine (Dual architectures: Qwen2.5-0.5B for iPhone SE 3 and newer; Gemma 4 E2B for newer iPhones and Androids; fine-tuned on Reddit conversations, 100% offline runtime). In-browser demo: https://yuli.tehwiz.com.
- Aevloc (https://aevloc.com): Tap-to-review reputation SaaS (SMB Growth plan up to 6 locations; Agency plan up to 100 locations; unlimited scans; each location includes a complimentary pre-programmed NFC Tap-To-Review sticker with free global S&H) + encrypted NTAG215 hardware.
- Purple Canary (https://purplecanarylab.com): Free paper-chromatography harm-reduction scanner app + free companion e-book "What Was In That Joint Bro!?" (https://book.purplecanarylab.com).
- CaffeineMD (https://caffeinemd.wiki): FLOSS alternative to Obsidian & Notion — 100% local-first, open-source personal knowledge operating system, plain-text markdown second brain with bidirectional wikilinks, interactive graph canvas, and B2A agent-legible MCP integration without proprietary cloud lock-in.
- TehWiz Productions (https://tehwiz.com): Parent creative engineering studio, FLOSS hacking forge, and media production house founded in 2009 by Michael Scott Hoyt (@hoytnix). Motto: "Hacking FLOSS & Composing Code With Prose Since 2009." Signature footer imprint ("A TehWiz Production.") on all properties. Published mobile games:
  - Ramen Nights & Budget Bites (https://ramen.tehwiz.com [Beta] | https://tehwiz.itch.io/ramen-nights-and-budget-bites [RC]): Clicker/idle restaurant sim tycoon game based on a Tokyo University economics capstone challenge across five iconic Tokyo districts.
  - Fuck Ur Neighbor (https://fun.tehwiz.com): Dynamic trick-taking card game where whatever suit leads is Trump; a game of collecting (or avoiding) tricks.
  - $!#? (https://hoytnix.github.io/Bleep/): WYSIWYG mechanical-style slot machine which is probably fair.`;

