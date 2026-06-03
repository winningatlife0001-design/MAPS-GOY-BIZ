# 00 — START HERE 👋 (read this first)

This whole project is a **complete business-in-a-box** for [girlfriend] to run a tiny, high-margin agency in Thailand that:

1. **Finds** Thai hotels & small businesses that have **no website / a bad one / a weak Google Maps** presence,
2. **Builds** them a fast, beautiful, bilingual website (Claude/AI does the actual building),
3. **Fixes & manages their Google Maps** so they get found and book guests directly,
4. **Charges a one-time build fee + a monthly fee forever.**

The dream — and it's realistic — is: **she sells & owns the client relationships; the AI does the production.** She never has to write code or design anything.

> สรุปสั้น ๆ (ภาษาไทย): นี่คือธุรกิจรับทำเว็บไซต์ + ดูแล Google Maps ให้โรงแรมเล็ก ๆ และร้านค้าในไทยที่ยังไม่มีเว็บหรือเว็บไม่ดี เก็บเงินค่าทำเว็บครั้งเดียว + ค่าดูแลรายเดือน งานหลักของคุณคือ "หาลูกค้าและคุยกับลูกค้า" ส่วนงานทำเว็บและปรับ Google ให้ AI ช่วยทำ เริ่มจากไฟล์นี้แล้วค่อย ๆ อ่านโฟลเดอร์ docs/ ทีละไฟล์

---

## Why this works (the 30-second version)

- A small Thai hotel pays Agoda/Booking **15–25% commission on every booking** — often **฿2 million+ a year** for a 20-room place.
- **85–92% of an independent Thai hotel's bookings go through OTAs** because they have no real website of their own.
- If we move even a *handful* of bookings to "direct," we save them more than our fee — **easy yes**.
- **Right now the Thai government gives SMEs a 200% tax deduction on digital spending** (until 31 Dec 2027). That means a ฿25,000 website can effectively cost them much less after tax. This is a *limited-time* sales gift — use it. (See `01-market-and-opportunity.md`.)
- Our costs are almost zero (AI builds it; hosting is free; finding leads costs ~฿150 per 1,000 businesses). **Margins are huge.** The only scarce resource is [girlfriend]'s time selling and looking after clients.

---

## ⚠️ The one thing you MUST get right (legal)

This business must be **genuinely owned and run by [girlfriend] (a Thai national).** That's clean and legal — a Thai person can register a tiny service business and run it solo.

The **foreign boyfriend must stay out of the operations.** Under Thai law "work" means *any* effort — even unpaid, even behind the scenes — and a foreigner doing it (especially while physically in Thailand) without a work permit is illegal, and a "she's the front, he really runs it" setup ("nominee") is illegal for *both* of them.

Using **AI tools (Claude) is fine** — that's just software, like using Canva or WordPress. The point is that **the Thai owner makes the decisions and owns the client relationships.** 👉 Read `07-legal-tax-foreigner.md` carefully — it's the most important doc here, and it says where you genuinely need a Thai lawyer's 1-hour opinion.

---

## What's in this repo (your filing cabinet)

```
docs/        ← the knowledge: read these in order
  00-START-HERE.md             ← you are here
  01-market-and-opportunity.md ← the size of the prize + the tax-deduction angle
  03-the-product-websites.md   ← what a great hotel site must have
  04-google-maps-local-seo.md  ← why Maps matters + what we sell
  05-pricing-and-packages.md   ← exactly what to charge (THB)
  06-operations-hosting-payments.md ← hosting + how to actually get paid
  07-legal-tax-foreigner.md    ← ⚠️ READ THIS
  08-sales-and-outreach-thailand.md ← how to actually sell to Thai owners
  09-competition-and-risks.md  ← who else is out there + what kills this business
  10-30-60-90-plan.md          ← your day-by-day startup plan

workflows/   ← the "how to do the work" recipes (mostly for Claude)
  leadgen-apify.md             ← find clients with no website (the lead machine)
  build-a-site-sop.md          ← turn a client into a finished website
  gbp-optimization-sop.md      ← the Google Maps checklist we run

templates/   ← reusable assets
  website/hotel/index.html     ← a real demo hotel website (open it in a browser!)
  outreach/                    ← ready-to-send messages (English + Thai)
  proposals/                   ← a proposal/quote you can send
  client-intake/               ← the questions to ask a new client

data/leads/  ← where client lists get saved (kept private, never shared)
```

---

## The simplest possible loop (this is the whole business)

1. **[girlfriend]:** "Claude, find hotels with no website in **Krabi**."
2. **Claude:** runs the lead machine → hands back a ranked spreadsheet with phone + email.
3. **[girlfriend]:** messages the best ones (LINE / phone / Facebook), offers a **free 2-minute "your Google Maps is missing X" audit**.
4. **Interested?** → Claude builds the site + fixes their Maps in a few days.
5. **Client pays** the build fee, then a **monthly fee starts** (this is the real money).
6. Repeat. Keep clients happy with a simple monthly results report so they never cancel.

That's it. Everything else in here just makes each step better.

> 🟢 **Next step:** read `01-market-and-opportunity.md`, then `07-legal-tax-foreigner.md`, then open `templates/website/hotel/index.html` in a browser to see what we actually deliver.
