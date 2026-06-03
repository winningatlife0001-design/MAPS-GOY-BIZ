# 03 — The Product: Websites That Get Direct Bookings 🌐

We don't sell "a website." We sell **more direct bookings and less OTA commission**, delivered as a fast, trustworthy, bilingual site. Open `templates/website/hotel/index.html` in a browser to see exactly what we ship.

## Why our sites convert (the money facts)
- A **direct** booking is worth more than an OTA one (≈ $516 vs $312 avg, 2025) **and** carries no 15–25% commission.
- **~75% of hotel bookings are on mobile.** **53% of people abandon** a page that takes >3s. A 0.1s speed gain has been linked to **+10% bookings.** → **mobile-first + fast is non-negotiable.**
- Switching from "request to book" to **instant/clear booking** lifts bookings 20–30%.
- A site with an **AI/LINE chat** assistant can lift direct conversion ~35% by killing hesitation.

## The must-have checklist (we build every site to this)
**Speed & tech**
- [ ] Core Web Vitals "Good": **LCP < 2.5s, INP < 200ms, CLS < 0.1**
- [ ] HTTPS everywhere; images compressed to **WebP**, lazy-loaded
- [ ] Mobile-first, tested on iOS Safari + Android Chrome; tap targets ≥44px
- [ ] **No PDF menus/rate sheets** (Google can't read them well; bad on mobile)

**Content & trust**
- [ ] Real photos: 5+ per room type (bed, bathroom, view) + pool/dining/exterior
- [ ] Room/rate cards with **prices visible** (no multi-click hunting)
- [ ] Google/TripAdvisor **review score shown**; clear **cancellation policy**
- [ ] About + owner/team photo (trust), FAQ (check-in, transfer, parking), location

**Booking & contact (the conversion core)**
- [ ] **"Book Direct" CTA above the fold + sticky** on scroll
- [ ] "Book direct & save vs Booking.com" incentive
- [ ] **Floating LINE button** (Thai/Asian guests) **+ WhatsApp** (Westerners) **+ click-to-call**
- [ ] Booking engine *or* a clean enquiry form (name/dates/guests/contact)

**Languages & money (Thailand reality)**
- [ ] **English + Thai + Simplified Chinese (zh-CN)** minimum; Russian useful in Pattaya/Phuket
- [ ] Correct **hreflang** tags (`th`, `zh-CN`, `zh-TW`, `en`, `x-default`), bidirectional
- [ ] Prices in **THB** with USD/EUR/CNY context; machine translation OK for info pages, **human-check the marketing copy** (especially Thai & Chinese)

**SEO & structured data**
- [ ] **`Hotel` JSON-LD schema** (not generic `LocalBusiness`): name, address, geo, phone, check-in/out, starRating, priceRange, amenityFeature, photos — most competitors skip this = our edge
- [ ] `FAQPage` schema; titles like `[Hotel] | [Room type] in [Area]`
- [ ] GBP fully populated + **NAP identical** across site, Google, OTAs (see `04`)

**Accessibility (WCAG 2.2 AA basics)**
- [ ] Alt text on all images; contrast ≥4.5:1; labelled form fields; logical headings; keyboard-usable date picker

## LINE & WhatsApp — Thailand's conversion superpower
- **LINE: 56M users (~78% of Thais), ~94% message open rate** — vastly beats email. Every site gets a **LINE click-to-chat** button: `https://line.me/R/ti/p/@theirID`.
- **WhatsApp** for foreign guests: `https://wa.me/66XXXXXXXXX?text=Hi,%20I'd%20like%20to%20book`.
- We can also set up the client's free **LINE Official Account** (free tier ~300–500 broadcasts/mo; Basic ~฿1,200/mo) as an add-on.

## Booking engine options (for hotels that want real-time availability)
Many small places are fine with an **enquiry form + fast LINE reply**. For those wanting a true engine (all commission-free on direct bookings):

| Engine | Best for | Approx cost |
|---|---|---|
| **Sirvoy** | 2–50 rooms, budget, 20+ languages | from ~$9/mo (≈ small) ; ~$35/mo typical |
| **Little Hotelier** (SiteMinder) | 1–20 rooms, owner-run | ~$29–99/mo |
| **Cloudbeds** | 10–100 rooms, growing | ~$100–150+/mo |
| **eZee / Hotelogix** | small–mid | ~$60–80/mo |
| **ZUZU Hospitality** | risk-averse | ฿0 fixed + % of revenue |
| **Enquiry form** (Jotform/Formspree) | micro guesthouses | free–$34/mo |

Connecting an engine also unlocks **Google's free hotel booking links** (the hotel's own rate shows on Google with an "Official site" badge, **zero cost per click**) — a fantastic upsell. (See `04`.)

## Good vs bad (what we fix)
**Typical bad Thai hotel site:** 8-second load, 2005 design, not mobile, English-only or Thai-only, no LINE button, prices that don't match the OTA, no reviews, no map, "Not Secure" warning, PDF menu. **We fix every one of these by default.**

## Other segments (same engine, small tweaks)
- **Restaurants:** HTML menu with photos + dietary tags, reservations/ordering, `Restaurant` schema (88% check the menu online first).
- **Spas:** treatment menu + prices, online appointment booking, vouchers.
- **Tour operators:** itinerary pages, instant-book/request, Rezdy/Bokun + Google Things-to-Do.

## How we actually build it
We start from `templates/website/hotel/index.html` (a complete, fast, bilingual base) and Claude customizes content, photos (enhanced via Adobe Firefly), languages, and schema per client — usually in **a few days**, not weeks. Step-by-step in `workflows/build-a-site-sop.md`.
