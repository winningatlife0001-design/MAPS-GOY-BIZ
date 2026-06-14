// Local visual QA for the FoundDirect demo sites — free, instant, no Apify.
//
// Renders every page with a real headless Chromium (Playwright) straight from
// the local files, at desktop + mobile widths and in EN/ไทย/中文, and writes
// full-page PNGs to qa-out/ for review.
//
// Notes for this environment:
//  - Outbound network is restricted. Google Fonts (fonts.gstatic.com) IS
//    reachable, so typography renders correctly. The Google-hosted business
//    photos (lh3.googleusercontent.com) are NOT reachable locally, so image
//    boxes render empty here — that is expected. Verify imagery on the LIVE
//    site (GitHub Pages) instead; this script is for layout / type / responsive
//    / multilingual QA.
//  - Pages are loaded via file:// (the standalone demos inline their CSS/JS),
//    so no local web server is needed.
//  - The Playwright browser CDN is blocked, but a browser is pre-installed at
//    /opt/pw-browsers. We point Playwright at it directly.
//
// Usage:  node scripts/qa-screenshots.mjs            # full sweep
//         node scripts/qa-screenshots.mjs clinic     # one page, desktop+mobile+TH+ZH

import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = `file://${ROOT}/site`;
const OUT = `${ROOT}/qa-out`;
mkdirSync(OUT, { recursive: true });

// Pre-installed Chromium (the download CDN is blocked in this environment).
const EXECUTABLE = process.env.PW_CHROME
  || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

const ALL = ['clinic', 'restaurant', 'tour', 'hotel', 'smile-house', 'chill-hotel', 'spa', '', 'botanica'];
const only = process.argv[2];
const pages = only ? [only === 'hub' ? '' : only] : ALL;

const url = (slug, qs = 'flat') => `${SITE}/${slug ? slug + '/' : ''}index.html?${qs}`;

const browser = await chromium.launch({
  executablePath: EXECUTABLE,
  headless: true,
  args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
});

async function shot(target, width, out) {
  const ctx = await browser.newContext({ viewport: { width, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(target, { waitUntil: 'load', timeout: 20000 })
    .catch((e) => console.log('  nav warn', out, e.message.slice(0, 50)));
  await page.waitForTimeout(1800);
  await page.screenshot({ path: out, fullPage: true });
  await ctx.close();
}

for (const slug of pages) {
  const name = slug || 'hub';
  await shot(url(slug), 1440, `${OUT}/desk-${name}.png`);
  await shot(url(slug), 390, `${OUT}/mob-${name}.png`);
  // language variants (the standalone demos read ?lang; hub/botanica default EN)
  if (slug && slug !== 'botanica') {
    await shot(url(slug, 'flat&lang=th'), 1180, `${OUT}/th-${name}.png`);
    await shot(url(slug, 'flat&lang=zh'), 1180, `${OUT}/zh-${name}.png`);
  }
  console.log('captured', name);
}

await browser.close();
console.log(`done -> ${OUT}`);
