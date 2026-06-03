# 🚀 Put the site live (2 minutes, one-time)

The `site/` folder (her **FoundDirect** agency site + the live demos: Smile House, hotel, restaurant) is ready to publish. Pick ONE host.

## Option A — GitHub Pages (free, simplest)
1. On GitHub open the repo → **Settings** → **Pages**.
2. **Build and deployment → Source:** choose **GitHub Actions**.
3. Go to the **Actions** tab → run **"Deploy site to GitHub Pages"** (or just push any change to `site/`). The included workflow (`.github/workflows/deploy-pages.yml`) publishes the folder.
4. ~1 minute later it's live at:
   **https://winningatlife0001-design.github.io/maps-goy-biz/**
   - Smile House demo → `…/maps-goy-biz/smile-house/`
   - Hotel demo → `…/hotel/` · Restaurant → `…/restaurant/`

> The first workflow run may show ❌ until you flip the Source toggle in step 2 — that's expected. After that, every push auto-deploys.

## Option B — Cloudflare Pages (free, best for a custom domain)
1. [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** → pick this repo.
2. Branch: `claude/bold-franklin-ImYNK` · Build command: *(leave empty)* · **Build output directory: `site`**.
3. **Deploy** → you get a free `https://<name>.pages.dev` URL. Auto-redeploys on every push.

## Custom domain (later)
Buy a `.com` (~฿400/yr, e.g. `founddirect.co`). In Cloudflare Pages → Custom domains → add it (or in GitHub Pages settings). Then her site is at her own brand domain.

## Per-client sites
Same idea: each client's site is its own `site`/folder or its own Cloudflare Pages project, pointed at the client's domain. Cloudflare Pages = free hosting for *all* her clients.
