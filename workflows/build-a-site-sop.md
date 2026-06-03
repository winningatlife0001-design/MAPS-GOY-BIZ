# Workflow 2 — Build a Client Website (start → live) 🛠️

The repeatable recipe to turn a signed client into a finished, live website. Most of this is done by **Claude**; [girlfriend] only gathers info and gets approval. Target: **live in 3–5 days.**

## Step 0 — Intake (½ day, [girlfriend])
Collect with `templates/client-intake/intake-form.md`:
- Business name (Thai + English), address, phone, LINE id, email, Facebook.
- Rooms/types + prices, amenities, check-in/out, cancellation policy.
- Photos (ask for the best 15–30; phone photos are fine — we'll enhance them).
- Target guests (nationalities → which languages), the vibe/colours they like, 1–2 sites they admire.
- Their Google Maps link + any existing website.

## Step 1 — Draft the site (Claude)
1. Copy `templates/website/hotel/index.html` → new client folder.
2. Replace every `CUSTOMIZE` marker: name, phone, LINE id, address, rooms, prices, colours, map `q=`, schema (name/geo/rating/price).
3. Write real **EN + TH (+ ZH/RU as needed)** copy — warm, specific, benefit-led. Keep Thai/Chinese natural (native review before delivery).
4. Set title/meta per page; complete the `Hotel` JSON-LD; add `FAQPage` schema.

## Step 2 — Photos (Claude + Adobe Firefly)
- Clean up client photos with Firefly: remove clutter/background, expand/crop, fix exposure/colour, upscale.
- Generate tasteful supporting imagery only where honest (e.g., a pattern/hero treatment) — **never fake the actual rooms.**
- Export to **WebP**, compress (<200KB hero), set width/height, lazy-load.

## Step 3 — Quality pass (Claude) — the checklist from `docs/03`
- [ ] Mobile-first looks great on a phone; tap targets fine
- [ ] LCP < 2.5s (compress images, no heavy scripts)
- [ ] LINE + WhatsApp + call buttons work; booking form/engine works
- [ ] All languages toggle correctly; **Thai/Chinese copy native-checked**
- [ ] Schema validates; titles/meta set; alt text on every image; contrast OK
- [ ] Prices match what they charge on OTAs (no mismatch)

## Step 4 — Client approval ([girlfriend])
- Send a preview link (Cloudflare Pages preview) via LINE.
- Collect changes **once**, in a single list (avoid drip-feed scope creep — see `docs/09`).
- Get a clear "approved to launch" message in writing.

## Step 5 — Go live (Claude)
1. Register/point the **.com** domain (see `docs/06`); SSL auto-enables on Cloudflare Pages.
2. Deploy to **Cloudflare Pages**; verify on real mobile.
3. Add the live URL to their **Google Business Profile** (kicks off `workflows/gbp-optimization-sop.md`).
4. Submit to Google (request indexing); set up the booking link.

## Step 6 — Handover & start the retainer
- Send a short "your new site is live + here's your Google Maps plan" message.
- Collect final payment **before** transferring any logins.
- Start the **monthly retainer** (PromptPay QR on LINE, 1st of each month).
- Schedule the **month-1 results report** (this is what keeps them paying).

## Reusable assets to grow
- Keep each finished site as a **mini-template** (beach hotel, city guesthouse, restaurant, spa) so the next build is even faster.
- Save before/after screenshots + the client's result → testimonials → referrals.

## Definition of "done" (so scope stays sane)
A build = **1 site, up to N pages/rooms as in the package, up to one round of revisions, in the agreed languages, deployed + Maps linked.** Anything beyond = a paid add-on (extra language ฿3,000, photo pack ฿2,500, promo page ฿1,500). Put this in the proposal (`templates/proposals/`).
