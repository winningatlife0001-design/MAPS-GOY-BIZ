# Workflow 1 — Finding Clients (the lead machine) 🎯

**Goal:** produce a list of real Thai hotels/businesses that have **no website** (or a weak Google presence), **with their phone + email**, so [girlfriend] can contact them. This is the single most important workflow — no leads, no business.

This whole step costs roughly **100–300 THB per 1,000 businesses scanned**. It is cheap. The bottleneck is *contacting* them, not *finding* them.

---

## The tool we use

**Apify "Google Maps Scraper"** — actor `compass/crawler-google-places`.
- 436,000+ users, 4.75★, 94% success rate — the industry standard.
- It reads Google Maps the way a human would and gives us a clean spreadsheet.
- **Pricing (pay only for what you use):** ~**$0.003 / business** (≈ 0.10 THB) + ~$0.002/business if we also pull website contact emails. So 1,000 hotels ≈ **$3–5 (≈ 110–180 THB)**.

> Claude (me) can run this for you directly through the connected Apify tool — you don't have to touch the dashboard. You just tell me the town + business type.

---

## The killer setting: `website: "withoutWebsite"`

The scraper has a filter with three options: `allPlaces`, `withWebsite`, **`withoutWebsite`**.
Setting it to `withoutWebsite` means it returns **only businesses that have no website on their Google listing** — i.e. our exact target customer. No manual sorting needed.

---

## Copy-paste run config (example: hotels with no website in Hua Hin)

```json
{
  "searchStringsArray": ["hotel", "guest house", "resort", "hostel"],
  "locationQuery": "Hua Hin, Thailand",
  "maxCrawledPlacesPerSearch": 300,
  "language": "en",
  "countryCode": "th",
  "website": "withoutWebsite",
  "skipClosedPlaces": true,
  "scrapeContacts": true
}
```

What each line does:
- `searchStringsArray` — the business types. Swap in `["restaurant"]`, `["spa","massage"]`, `["dental clinic"]`, `["tour"]`, etc.
- `locationQuery` — one town per run. (Phuket, Krabi, Chiang Mai, Pai, Koh Lanta, Pattaya…)
- `website: "withoutWebsite"` — **only no-website businesses**.
- `skipClosedPlaces: true` — ignore permanently/temporarily closed places.
- `scrapeContacts: true` — also crawl any Facebook page they list to dig out an email + phone (the add-on that makes leads contactable).
- `language` / `countryCode` — keep results clean and Thai-localised. Use `"th"` language if you want Thai-language category names.

**What comes back per business:** name, address, phone, category, star rating, review count, number of photos, Google Maps link, lat/long, Facebook/Instagram (if listed), and email (when `scrapeContacts` finds one).

---

## Then: score & prioritise the list

Not every no-website hotel is worth chasing. Rank them — best leads first. (These priority signals are backed by the research; higher = contact first.)

| Priority | Signal in the data | Why it's a great lead |
|---|---|---|
| 🔥🔥🔥 | **No website + 20+ Google reviews + recent reviews** | Real, busy business, actual customers, just no site → easy ROI pitch |
| 🔥🔥🔥 | **No website + listed on Agoda/Booking** (OTA-only) | They're paying 15–25% commission. Direct-booking math sells itself |
| 🔥🔥 | **No website + owner replies to reviews** | Owner is engaged & checks their phone → answers your message |
| 🔥🔥 | **No website + runs Facebook ads** (check Meta Ad Library) | Already spends on marketing → has budget, understands digital |
| 🔥 | **No website + 10+ photos** | Owner cares about presentation → receptive to a nicer site |
| ➖ | No website + few/zero reviews | Dormant or no budget → contact last |

A simple **"digital audit" opener converts 3–5× better** than a generic pitch. Example we can auto-generate per lead:
> "Your hotel has 47 Google reviews ⭐4.7 but no website — you're sending all those guests to Agoda and paying ~20% commission. I can build you a direct-booking site + fix your Google Maps in ~5 days. Can I send you a free 2-minute video showing the gaps?"

---

## Three lead sources (run all three)

1. **Google Maps, no-website filter** — the main engine above. Best volume.
2. **OTA-only hotels** — hotels all over Agoda/Booking but with no own site. Detect by scraping Maps (no website) and/or searching `"[Hotel Name]" site:agoda.com -site:*.com`. These feel the OTA-commission pain most.
3. **Facebook-only businesses** — extremely common in Thailand (45M+ Thai FB users). Find via Meta **Ad Library** (filter country = Thailand, keyword = "resort"/"ที่พัก") or an Apify Facebook Pages scraper. They already pay for ads → warm leads.

> 💡 **LINE gap:** there's no good scraper for LINE business directories — but once you *contact* a Thai owner, LINE is where the conversation will actually happen. (See Workflow: Sales & Outreach.)

---

## Legal note — cold outreach & PDPA (Thailand's privacy law)

- Thailand's **PDPA** is GDPR-style and enforcement is rising (THB 21.5M in fines reported by Aug 2025).
- **B2B outreach to a generic business address** (e.g. `info@`, `reservations@`) pitching a business service sits in a **legally defensible zone** (B2B + legitimate-interest reading). Cold-messaging a person's *personal* email is higher risk.
- Practical rules: contact the **business**, not a named individual's private contact; **always offer an easy opt-out / "reply STOP"**; don't spam; keep volumes sane; prefer LINE/phone where you have a warm signal.
- This is general info, **not legal advice** — if scaling to thousands of messages, have a Thai lawyer sanity-check the script once. (Cheap insurance.)

---

## Output → your simple CRM

We dump each run to `data/leads/<town>-<type>-<date>.csv` with columns:
`name | phone | email | facebook | category | rating | reviews | photos | maps_url | priority | status | last_contacted | notes`

`status` flows: `new → contacted → replied → audit_sent → proposal_sent → won / lost / nurture`.

That spreadsheet *is* the business pipeline. Keep it alive.

---

## TL;DR for [girlfriend]
1. Tell me a town + business type ("hotels in Krabi").
2. I run the scraper (~150 THB/1,000) and hand you a ranked spreadsheet with phones & emails.
3. You contact the 🔥 ones first (LINE/phone/email) using the outreach scripts.
4. Interested? → I build the site + fix their Google Maps. → monthly fee starts.
