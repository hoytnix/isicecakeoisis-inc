import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 3000;

const RAW_LLMS_TXT = `# ISICECAKEOISIS INC. // Official Machine-Legible Manifest (/llms.txt)
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


async function startServer() {
  const app = express();
  app.use(express.json());

  // Direct /llms.txt machine-legible route
  app.get('/llms.txt', (_req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.send(RAW_LLMS_TXT);
  });

  // Investor inquiry submission endpoint
  app.post('/api/investor-inquiry', (req, res) => {
    const { name, email, scope, notes } = req.body;
    console.log(`[Investor Inquiry Received] ${name} (${email}) - Scope: ${scope}`);
    res.json({
      status: 'success',
      message: 'Inquiry received and routed securely to TehWiz Productions.'
    });
  });

  // Initialize Gemini AI SDK
  const apiKey = process.env.GEMINI_API_KEY;
  const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

  // API Routes
  app.post('/api/generate-greeting', async (req, res) => {
    try {
      const { persona = 'Friendly AI', customName = 'World' } = req.body;
      
      if (!ai) {
        // Fallback if no API key
        return res.json({
          greeting: `Hello, ${customName}! Welcome to the cosmic universe of creation. (Configure GEMINI_API_KEY for AI-powered generation)`,
          persona,
          vibe: 'Cosmic & Warm'
        });
      }

      const prompt = `Generate a unique, creative, and gorgeous "Hello World" style greeting for "${customName}" written from the persona of "${persona}". 
      Make it uplifting, poetic, or clever, fitting the persona. Keep it under 3 sentences. 
      Also provide a short 2-word aesthetic vibe description.
      Format your response strictly as JSON with keys: "greeting" and "vibe".`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json'
        }
      });

      const text = response.text;
      if (!text) {
        throw new Error('No response from Gemini AI');
      }

      const data = JSON.parse(text);
      res.json({
        greeting: data.greeting || `Hello, ${customName}!`,
        persona,
        vibe: data.vibe || 'Cosmic'
      });
    } catch (error: any) {
      console.error('Error generating greeting:', error);
      res.status(500).json({ error: error.message || 'Failed to generate greeting' });
    }
  });

  app.post('/api/multilingual', async (req, res) => {
    try {
      const { targetLanguages = ['Spanish', 'Japanese', 'French', 'German', 'Hindi', 'Arabic', 'Swahili', 'Mandarin'] } = req.body;

      if (!ai) {
        return res.json({
          translations: targetLanguages.map((lang: string) => ({
            language: lang,
            translation: `Hello World (${lang})`,
            pronunciation: 'Pronunciation placeholder'
          }))
        });
      }

      const prompt = `Provide the translation of "Hello World" in the following languages: ${targetLanguages.join(', ')}.
      Format your response strictly as a JSON array of objects with keys: "language", "translation", and "pronunciation".`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json'
        }
      });

      const text = response.text;
      if (!text) throw new Error('No response');

      const translations = JSON.parse(text);
      res.json({ translations });
    } catch (error: any) {
      console.error('Error translating:', error);
      res.status(500).json({ error: error.message || 'Translation failed' });
    }
  });

  // Setup Vite or static serving
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
