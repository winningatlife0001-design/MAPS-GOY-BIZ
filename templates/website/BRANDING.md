# Branding & Logos — make each site feel like *theirs* 🪪

A template stops looking like a template the moment it wears the client's **logo, colours, and fonts**. Everything funnels into the **theme tokens** (`:root` CSS variables) in each template — change those, the whole site re-skins. (See tiers in `README.md`.)

## 1. Logo
**If they have one:** ask for the best version (SVG > transparent PNG > high-res PNG). Put it in the header (replace the emoji wordmark) and the footer. Never stretch it; give it breathing room.

**If they don't (most small places):** two good options —
- **Clean wordmark** — their name set in the tier's display font, brand colour. Looks professional instantly, costs nothing. (That's what the demo templates use: `😊 Smile House`, `🍜 Baan Aroi`.)
- **Simple mark** — generate a tasteful icon/monogram with **Adobe Firefly** (e.g. "minimal line logo of a palm + wave, single colour, flat") and pair it with the wordmark. Offer a proper logo as a paid add-on (฿1,500–3,000).

🚫 Don't: use a blurry low-res logo, invent awards/“5-star” claims, or imitate another brand's identity.

## 2. Colours (set `--brand` + `--accent`)
- Pull **1–2 colours** from their logo or their best photo (sea-teal, sunset-orange, jungle-green…). Use one **brand** colour + one **accent** (for buttons/CTAs).
- Keep it to two — more looks messy. Ensure text contrast stays ≥4.5:1 (accessibility).
- **Tier nuance:** budget = brighter/warmer; luxury = near-black/cream with one restrained accent (no loud orange "deal" colour).

```css
:root{ --brand:#0ea5e9;  --accent:#f97316; }  /* example: beach budget */
```

## 3. Fonts (set `--font` + `--display`)
Body stays a clean system/sans font (fast, supports Thai via "Noto Sans Thai"). The **display** font carries the personality:

| Tier | Display (headings) | Body |
|---|---|---|
| Budget / Hostel | rounded friendly sans (e.g. *Baloo 2*, *Fredoka*) | system sans |
| Mid / 3-star | strong sans (e.g. *Poppins*, *Inter*) | system sans |
| Boutique | a character display (e.g. *Fraunces*, *DM Serif*) | clean sans |
| Luxury / 5-star | elegant serif (e.g. *Cormorant Garamond*, *Playfair*) | airy sans |

Always include **"Noto Sans Thai"** in the stack so Thai renders properly.

## 4. Imagery (the biggest trust signal)
- Use the **client's real photos** wherever possible (rooms, food, the actual place). Ask for 15–30; phone photos are fine.
- Clean them up with **Adobe Firefly**: remove clutter/backgrounds, fix exposure/colour, expand/crop, upscale. Export **WebP**, compress (<200 KB hero).
- 🚫 Never fabricate the actual product (don't AI-generate fake rooms/dishes). AI is for *enhancing real photos* and tasteful backgrounds/patterns only.

## 5. Favicon & share image
- Favicon: their logo, or a single emoji (the templates do this with an inline SVG — quick + crisp).
- Set Open Graph title/description/image so the link looks good when shared on **Facebook / LINE**.

## Assets to collect from each client (intake)
- [ ] Logo (any format) — or permission to make a wordmark
- [ ] Brand colours (or "pull from my logo/photos")
- [ ] 15–30 real photos
- [ ] Fonts they like / a site they admire
- [ ] Exact name spelling (Thai + English)

> Workflow: in `build-a-site-sop.md`, step "customise" = set the 4 token groups (colour, font, radius, logo) for the chosen **tier**, drop in the logo + photos, done.
