# Website Template System 🎨 — match the **type**, the **tier**, and the **brand**

The mistake cheap web shops make: one template for everyone. A backpacker hostel, a beachfront 5-star, and a cocktail bar should look **nothing alike**. For every client we set **3 dials**:

1. **TYPE** — what *kind* of business → which sections the site needs.
2. **TIER** — the price/positioning → how it *looks and feels*.
3. **BRAND** — their logo, colours, fonts → so it's *theirs*, not a template.

Claude builds by: **pick the TYPE template → apply the TIER preset → drop in the BRAND tokens + logo → fill real content → deploy.** Same engine, infinite looks.

---

## Dial 1 — Business TYPE (decides the *sections*)

| Type | Core sections it needs | Main action (CTA) |
|---|---|---|
| **Hotel / Resort** | Rooms & rates, gallery, amenities, location/map, reviews, offers | **Book direct** (engine or enquiry) + LINE |
| **Hostel / Guesthouse** | Dorm vs private + prices, vibe/photos, location, "things to do", house rules | Book / message on LINE |
| **Restaurant / Café** | **Menu** (with photos + prices), hours, reservations, gallery, location | **Reserve a table / Order** + call |
| **Bar / Nightlife** | What's on / events, music, signature drinks, gallery, hours, vibe video | **Reserve / Find us tonight** + maps |
| **Spa / Wellness** | Treatment menu + prices, therapists, photos, packages/vouchers | **Book a treatment** |
| **Tour / Dive** | Tours/courses, itineraries, prices, what's included, reviews | **Book / request** + WhatsApp |
| **Clinic (dental/cosmetic)** | Services + prices, doctors/credentials, before/after, trust badges | **Book consultation** + WhatsApp |

> Folder per type: `hotel/`, `restaurant/`, … Each is a complete starting point. Don't put a "Rooms" section on a bar, or a "Menu" on a hotel.

## Dial 2 — Positioning TIER (decides the *feel*)

Same structure, very different styling. Read the client's star rating + room price to pick:

| Tier | Palette | Type / fonts | Density & imagery | Tone | Badges/discounts |
|---|---|---|---|---|---|
| **Budget / Hostel** | bright, warm, friendly | rounded sans, big | compact, lots of info, **prices loud** | fun, casual | YES — "save 20%", deals up front |
| **Mid / 3-star** | clean, confident, 1 accent | clear sans | comfortable, photo-led | warm, reassuring | light — "best price direct" |
| **Boutique** | characterful, moody, 1–2 signature colours | a personality display font + clean body | generous whitespace, story-led | distinctive, design-led | subtle |
| **Luxury / 5-star** | restrained — near-black/cream/stone, 1 metallic | **elegant serif** headings, airy | huge whitespace, full-bleed photography, slow fades | understated, evocative | **NONE** — no "discount" noise; luxury never shouts price |

**Rule of thumb:** the cheaper the room, the louder the price and the brighter the colour. The pricier the room, the quieter the design and the bigger the photos.

## Dial 3 — BRAND (makes it theirs)
See **`BRANDING.md`**. In short: use the client's logo if they have one (or we make a clean wordmark + simple mark with Adobe Firefly); pull 1–2 brand colours from their logo/photos; pick a font pairing per tier. Everything flows through **theme tokens** ↓

## The theme tokens (what we actually change)
Every template's `<style>` starts with the same CSS variables. To re-skin for a client, we change *only these* — structure stays put:

```css
:root{
  --brand:#0f766e;       /* primary brand colour */
  --brand-dark:#0b554f;
  --accent:#f59e0b;      /* CTA / highlight (LUXURY: set = brand, no loud accent) */
  --ink:#1f2937;         /* text */
  --bg:#ffffff; --soft:#f1f5f4;
  --radius:14px;         /* BUDGET 16px round · LUXURY 2px sharp */
  --font: system-ui, "Noto Sans Thai", sans-serif;        /* body */
  --display: var(--font);  /* LUXURY/BOUTIQUE: a serif, e.g. "Cormorant Garamond" */
}
```

**Tier presets (copy-paste starting points):**
- **Budget/Hostel:** `--brand:#0ea5e9; --accent:#f97316; --radius:18px;` bright photos, prices in hero.
- **Mid/3-star:** `--brand:#0f766e; --accent:#f59e0b; --radius:14px;` (the `hotel/` default — see Smile House demo).
- **Boutique:** `--brand:#6d5d4b; --accent:#c2693f; --radius:8px; --display:"Fraunces",serif;` story-led.
- **Luxury/5-star:** `--brand:#1c1a17; --accent:#1c1a17; --soft:#f5f1ea; --radius:2px; --display:"Cormorant Garamond",serif;` huge whitespace, no discount badges.

## Which template? (quick guide)
- Hotel/resort/guesthouse → `hotel/` (+ pick tier preset).
- Anything serving food/drink → `restaurant/` (bar = restaurant template + nightlife tier/theme + events instead of menu emphasis).
- Spa/tour/clinic → start from `hotel/` structure, swap "Rooms" for "Treatments/Tours/Services" (templates coming as we win clients in those niches).

## What's in this folder
```
hotel/index.html        # Hotel/resort — mid/3-star default (theme-able to any tier)
restaurant/index.html   # Restaurant / café / bar — food & drink businesses
BRANDING.md             # logos, brand colours, font pairings
_demos/                 # real, filled-in examples to SHOW prospects
  smile-house/          # rebuild of a real Samui hotel whose live site is a blank page
```

> Building a new client site? Follow `../../workflows/build-a-site-sop.md`: pick type → tier → brand → content → deploy. The structure is done; you're just dressing it.
