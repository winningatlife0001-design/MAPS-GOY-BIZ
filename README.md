# MAPS-GOY-BIZ 🗺️🏝️

**A complete business-in-a-box: build websites + fix Google Maps for small Thai hotels & businesses that have none (or bad ones) — charge a one-time build fee + a monthly fee.**

Designed so **one Thai operator sells & owns the client relationships, and AI (Claude) does the production work.** Low cost, high margin, real demand.

> 👉 **New here? Open [`docs/00-START-HERE.md`](docs/00-START-HERE.md) first.** Then read `01` (opportunity) and `07` (legal). Then open [`templates/website/hotel/index.html`](templates/website/hotel/index.html) in a browser to *see the product*.

---

## The business in one picture

```
  FIND                BUILD                 RANK                 EARN
  ────                ─────                 ────                 ────
  Scrape Google   →   Claude builds a   →   Claude optimises  →  One-time build fee
  Maps for hotels     fast bilingual        their Google         (฿15k–40k)
  with NO website     direct-booking        Business Profile  +  Monthly retainer
  (~฿150 / 1,000)     site (3–5 days)       (the sticky part)    (฿1.5k–7.9k / mo)
        │                                                              │
        └──────────  she sells & relates · AI produces  ◄─────────────┘
```

Why it works: small Thai hotels lose **15–25% to OTA commission** on ~**85–92%** of their bookings because they have no real website. Move a few bookings to "direct" and we've paid for ourselves. Our delivery cost is near zero (AI + free hosting). There's even a **200% government tax deduction** on digital spend until **Dec 2027** to sweeten every pitch.

---

## What's inside

| Folder | What it is |
|---|---|
| [`docs/`](docs/) | The knowledge base — read `00`→`10` in order |
| [`workflows/`](workflows/) | The "how to do the work" recipes (find leads, build a site, fix Google Maps) |
| [`templates/`](templates/) | A real demo hotel website + ready-to-send outreach (EN/TH) + proposal + intake form |
| [`data/leads/`](data/leads/) | Where private lead lists live (git-ignored for privacy/PDPA) |
| [`docs/SOURCES.md`](docs/SOURCES.md) | Every key fact, cited |

### The docs
- **00 — [Start Here](docs/00-START-HERE.md)** · the whole thing in 2 minutes
- **01 — [Market & Opportunity](docs/01-market-and-opportunity.md)** · size of the prize + the 2027 tax-deduction angle
- **03 — [The Product: Websites](docs/03-the-product-websites.md)** · what a converting hotel site needs
- **04 — [Google Maps / Local SEO](docs/04-google-maps-local-seo.md)** · our highest-margin, stickiest service
- **05 — [Pricing & Packages](docs/05-pricing-and-packages.md)** · exactly what to charge (THB)
- **06 — [Operations: Hosting & Payments](docs/06-operations-hosting-payments.md)** · deliver cheaply + get paid
- **07 — [⚠️ Legal, Tax & the Foreigner Question](docs/07-legal-tax-foreigner.md)** · **read this**
- **08 — [Selling to Thai Owners](docs/08-sales-and-outreach-thailand.md)** · LINE-first, relationship-first
- **09 — [Competition & Risks](docs/09-competition-and-risks.md)** · who's out there + what kills this
- **10 — [30/60/90-Day Plan](docs/10-30-60-90-plan.md)** · zero → ~10 paying clients

### The workflows
- [Find clients (the lead machine)](workflows/leadgen-apify.md) — Apify Google Maps, `website: withoutWebsite`
- [Build a client website](workflows/build-a-site-sop.md) — start → live in days
- [Google Maps optimization SOP](workflows/gbp-optimization-sop.md) — the monthly checklist

---

## Tools wired into this project
- **Apify Google Maps Scraper** → finds hotels with no website + their contacts (~$0.003/place)
- **Claude (me)** → builds the sites, writes the copy (EN/TH/中文), runs the workflows
- **Adobe Firefly** → cleans up / enhances hotel photos for the sites
- **Cloudflare Pages** → free, fast hosting for every client site
- **PromptPay / Stripe / Xendit** → collecting build fees + monthly retainers

---

## Quick start (literally say this to Claude)
> *"Claude, find hotels with no website in **Ao Nang** and give me a ranked lead list."*
> *"Claude, build a website for this hotel: [paste their info]."*
> *"Claude, what should I message this owner?"* → uses `templates/outreach/`

---

## ⚠️ Legal, in one line
This must be **genuinely owned & run by a Thai national**; a foreigner must **not** do the operational work (paid or unpaid) — using AI tools is fine, but read [`docs/07`](docs/07-legal-tax-foreigner.md) and get a 1-hour Thai-lawyer check before scaling. *(General info, not legal advice.)*

---

*Built from 9 parallel research agents (market, lead-gen, product, Google Maps, pricing, operations, legal, sales, competition), all cross-checked and cited in [`docs/SOURCES.md`](docs/SOURCES.md).*
