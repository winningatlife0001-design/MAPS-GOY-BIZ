# Workflow 4 — Find & Audit "Bad Website" Hotels 🔍

The companion to `leadgen-apify.md`. That one finds businesses with **no** website. This one finds the ones that **have a website but it's junk** — often a *better* lead, because the owner already believes in having a site (they'll pay to fix it) and you can show them exactly what's wrong.

Repeatable for any town. Tell Claude: *"Run the bad-site audit for [town]."*

---

## Step 1 — Scrape accommodation that HAS a website
Same Apify actor (`compass/crawler-google-places`), but flip the filter to `withWebsite`:

```json
{
  "searchStringsArray": ["hotel", "resort", "guest house", "hostel", "villa"],
  "locationQuery": "Koh Samui, Thailand",
  "maxCrawledPlacesPerSearch": 80,
  "language": "en",
  "countryCode": "th",
  "website": "withWebsite",
  "skipClosedPlaces": true
}
```
This returns each place **plus its `website` URL**. ~$0.004/place (~150 THB per 1,000).

## Step 2 — Classify the URL (instant, no fetching)
A huge share of "junk" is obvious from the URL alone. Bucket each `website`:

| Bucket | Detect by URL contains… | Verdict |
|---|---|---|
| **Social-only** | `facebook.`, `instagram.`, `linktr.ee`, `lin.ee`, `line.me`, `sites.google.com`, `.business.site`, `.wixsite.com`, `blogspot.` | 🔴 "Website" is just a social/link page → **prime lead** |
| **OTA-only** | `agoda.`, `booking.com`, `airbnb.`, `hostelworld.`, `expedia.`, `tripadvisor.` | 🔴 "Website" is just an OTA listing → **prime lead** |
| **Chain brand** | `accor`, `ibis`, `mercure`, `marriott`, `hilton`, `wyndham`, `avani`, `anantara`, `centara`… | ⚪ Skip — managed chain, not a lead |
| **Real domain** | everything else | 🟡 Needs a content audit (Step 3) |

> `data/leads/_audit_classify.py` (the script we use) does this and writes a ranked CSV with an `issues` column. Note: Google often stores the URL as `http://` even when the site upgrades to HTTPS — don't claim "no HTTPS" from the URL alone; confirm in Step 3.

## Step 3 — Open & audit the real domains
⚠️ **This sandbox can't fetch external sites directly** (network policy returns 403 to `curl`/WebFetch). **Route through Apify's browser**, which has egress:
- Tool: `apify/rag-web-browser` with the hotel's URL, `outputFormats: ["markdown"]`.
- Then read `metadata.title`, `metadata.description`, `metadata.languageCode`, `crawl.httpStatusCode`, `metadata.redirectedUrl`, and the `markdown`.
- *(Alternatively, on your own laptop, the **Claude for Chrome** extension can eyeball any site live.)*

**Junk signals to score:**
| Signal | How it shows up |
|---|---|
| 💀 **Dead / placeholder / parked** | title like *"Secured Home of…", "Index of /", "Account Suspended"*; body says *"upload index.html"* |
| 🔒 **No HTTPS** | `redirectedUrl` stays `http://` (not upgraded) |
| 📱 **Not mobile-friendly** | no responsive layout / fixed-width old template |
| 🗓️ **Outdated** | old copyright year; static `.html` pages; 2010s template |
| 🌐 **Broken language switcher** | language links all point to `#` |
| 🏷️ **Copy-paste branding** | logo/alt text shows *another* hotel's name |
| 🛏️ **No direct booking** | no booking engine/rates → still 100% OTA-dependent |
| 💬 **No LINE / English-only** | misses Thai + Chinese guests |
| 🐢 **Slow / heavy** | huge unoptimised images |

**Verdict per site:** 🟢 GOOD (leave it / upsell SEO+languages) · 🟠 MEDIOCRE (modernise) · 🔴 JUNK (rebuild). Be honest — calling a good site "junk" destroys trust.

## Step 4 — Prioritise
Hottest = **🔴 JUNK/dead + many reviews + has phone.** A busy hotel with a blank/broken site is the easiest "yes" you'll ever get.

## Step 5 — Turn each audit into the outreach hook
The audit *is* the pitch (see `templates/outreach/`):
- Dead site → *"You have [N] reviews but your website is a blank page — let me build you a real one."*
- Broken languages / wrong logo → *"Your site shows another hotel's name and the language buttons don't work — foreign guests notice."*
- No booking → *"Beautiful site, but guests can't book directly — every booking still pays Agoda."*

---

## Real example — Koh Samui (3 June 2026)
Of 325 with-website hotels: **24** were Facebook-only, **~34** OTA/brand-only, **267** real domains. Live audits found a perfect spread:
- **Smile House** (911 reviews) → domain shows a **blank hosting placeholder** = 🔴 rebuild.
- **Samui VertiColor / Chaweng Cove** → dated 2015 template, **broken language menu**, another hotel's name in the logo = 🟠 modernise.
- **The Villager** (3,246 reviews) → nice Wix photos but **no booking, English-only** = 🟠.
- **Samui Paradise** → modern, maintained, booking works = 🟢 (honest: not a lead).

**Cost of the whole sweep:** ~$1.50 scrape + a few cents per site audited. The bottleneck is contacting them, never finding them.
