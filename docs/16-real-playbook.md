# 16 — The Real Playbook + Go‑To‑Market (synthesised from 50 operator videos)

> Built by mining the transcripts of 50 YouTube videos from the people **actually doing this** (Nick Ponte $140K/mo, Pavlo, Darrel Wilson, Payton Clark Smith 375K views, Jono Catliff, Mark Builds Brands, Self‑Made Web Designer, GHL SaaS operators). Every figure below comes from those transcripts. Caveat: most creators are GoHighLevel affiliates, so "it's so easy" is sales‑flavoured — the **tactics and numbers** are what they state.

> **🇹🇭 THIS PLAN IS FOR THAILAND ONLY.** Thais book via **LINE**; **holidaymakers (no LINE!) book via WhatsApp / phone / Google Maps / walk‑in / Klook‑Agoda**, Chinese guests via **WeChat**. **Payment is never ours** — owners settle it themselves in the LINE chat or at the venue; we never set up, display, or advise on payment. We build **trilingual (EN/ไทย/中文) sites that funnel into those channels** + the recurring automation layer. Every US/UK tactic below is mapped to Thai rails (Round 2 §A).

---

## 0. THE ONE TRUTH THAT CHANGES EVERYTHING

**Nobody who makes real money is selling "a beautiful website."** They sell a local business **more customers**, using the website as the *hook*, and make the actual money on **recurring automation**:

- Missed‑call text‑back (*"62% of calls to local businesses go unanswered"*)
- AI receptionist / chat that **books appointments**
- Google‑review automation (5★ → Google, 1★ → private feedback form)
- Google Business Profile optimisation, social posting, SEO, ads

**Nick Ponte: $140K/month from <50 clients at ~98% retention.** His maths: *50 clients × $40K/yr beats 500 × $4K* — fewer clients, more services stacked per client, higher retention. The website is a loss‑leader; the monthly automation is the business.

**What this means for us:** we have been building the 20% (the website) and ignoring the 80% (the recurring automation layer). That is the single biggest change to make.

---

## 1. THE 5 TIERS (what we actually offer)

| Tier | What it is | Build method | Time | Price (THB, mapped from USD) |
|---|---|---|---|---|
| **T0 — Presence** | 1‑page "be findable" template site | GHL / 10Web / Durable template, swap name+phone+photo | 10–20 min | **Free build + ฿900–1,500/mo** hosting |
| **T1 — Smart Site** | Template + the automation bundle (missed‑call text‑back, review automation, AI chat, GBP) | GHL template + GHL automations | ~1 hr | **฿0 build + ฿3,500–5,000/mo** (the $297 model) |
| **T2 — Custom AI** | Bespoke multi‑page, real content, booking/enquiry | Lovable / Relume→Webflow / 10Web | 2–4 hrs | **฿15,000–45,000 build + ฿3,500/mo** |
| **T3 — Premium Craft** | Hand‑designed, editorial, animated, trilingual | **Claude Design → Claude Code → Next.js/GSAP → Vercel** (our edge) | 1–2 days | **฿45,000–150,000 build + ฿4,000/mo** |
| **T4 — Growth Partner** | T2/T3 site + GBP + SEO + ads + AI receptionist, managed | Above + GHL services | ongoing | **฿15,000–50,000/mo retainer** |

The "let the client pick" close (Self‑Made Web Designer): never name price first — give the three‑tier range and ask *"which range would you feel comfortable in?"*

---

## 2. THE STACK — what to build with (decision)

Two layers. **You need both.**

### A. The recurring / profit layer → **GoHighLevel (GHL)**
This is non‑negotiable per the data — it's the consensus operating system of every high‑revenue operator. One subscription = website builder + **unlimited free client sub‑accounts** + CRM + missed‑call text‑back + review automation + AI voice/chat + social posting + power dialer + client mobile app.
- Cost: **$97–$297/mo total, regardless of client count** (you pay the same with 1 or 1,000 clients → profitable on client #1).
- White‑label it under our own brand (e.g. operators brand it "Local Pro Connect").
- **The rebilling margin engine:** you pay GHL a flat fee (Starter $97 → **Agency Pro $497/mo**) and **rebill clients** for usage (AI‑receptionist minutes, texts) at your own markup — the spread is pure margin. One operator in the corpus reports **$28,946 in a single month** on this model with **churn "below 5%"**, and lives by *"100 clients × $100/mo beats chasing a handful of big accounts"* (more clients, smaller tickets, far stickier).

### B. The build layer → pick by tier
| Need | Tool | Cost |
|---|---|---|
| Fast template sites (T0/T1) | GHL templates, **10Web** (native WordPress, has a **white‑label reseller dashboard**), Durable | 10Web/GHL incl. |
| Mid custom (T2) | **Lovable** (5–10 min), **Relume → Webflow** (sitemap→wireframe→AI copy, 5 min), Replit Agent ($20/mo) | low |
| **Premium craft (T3) — our differentiator** | **Claude Design → Claude Code → Next.js + GSAP → Vercel/Cloudflare Pages** | free tools + domain |
| Hosting many cheap sites | **Cloudways $14/mo** server hosts *multiple* clients; "Safe Updates" $3/mo | huge margin |

**Our genuine edge:** we can hand‑craft T3 premium Claude sites that the GHL‑template crowd *cannot* — AND I can now **screenshot‑grade them visually** (proven this session: capture → decode → view). That's our quality moat at the top tier. For T0/T1 we use GHL templates like everyone else (speed + the automation bundle is the value, not artistry).

### How to 10× the output (from the transcripts)
1. **Separate design‑source from structure‑source, then merge** (Jono: Claude design system + a Durable screenshot for structure).
2. **`claude.md` blueprint file** so Claude Code one‑shots the whole site correctly.
3. **Clone the brand, not the design:** scrape the client's brand kit as JSON (**Firecrawl** "copy as JSON") and tell the AI "match this branding." `getdesign.md` has 68 brand kits free.
4. **Copy first (Mark):** the money is in research — have AI scrape Reddit/forums for the customer's "emotional pains," write outcome copy at **5th‑grade reading level** (Hemingway app), *then* design. "Ugly landers = pretty profits."
5. **Templatise + duplicate per client** (build once <1 hr, duplicate, swap name/phone/photo).
6. **Screenshot‑grade every build** before it ships (our new capability).
7. Always **attach a real domain before showing a client** — a `*.vercel.app` URL "makes it 5× harder to sell."

---

## 3. NICHES — who actually pays

**US winners (named repeatedly):** home‑services / blue‑collar trades — **roofers, HVAC, plumbers, electricians, landscapers, contractors** — plus **med‑spas, dental, legal, real estate**. Why: cash‑flow businesses, non‑technical, miss calls, value leads, a single job pays for the service many times over.

**Explicitly AVOID (Dylan Power):** personal trainers, barbershops, gyms, low‑ticket solo services — "price‑sensitive, constantly pitched, churn quickly."

**Two structural rules:**
- **One niche + one area** → referrals compound (a landscaper refers the kitchen‑reno guy).
- **Hedge with 2 blue‑collar + 2 white‑collar niches** — Dylan lost his roofing+landscaping leads overnight when a storm hit; diversification kept the agency alive.

### The honest hotel / booking answer
**Zero of the 50 operators target hotels.** Booking integration is exactly the friction that bit us. Booking only appears as *appointment* booking (AI agent → calendar) for service businesses — never hotel reservations/OTA. **Conclusion:** hotels are a **T3/T4‑only** play where we *connect* an existing engine (Little Hotelier ~฿3,900/mo, Beds24 ~€16/mo) rather than build one — and they should **not** be our opening wedge. The fast money is service businesses with simple enquiry/booking. *(Exact embed tools in Round 2 §A: BNBforms / MotoPress / Wix Hotels.)*

### Thailand‑adapted target list (best → start here)
1. **Spas & massage / wellness** — huge volume, tourist + local, simple "book a treatment" (Setmore/Fresha), LINE‑native. ★ best starter
2. **Dental & aesthetic clinics** — medical‑tourism money, high ticket, trust‑driven, English/Chinese needed. ★ high value
3. **Restaurants & cafés** — volume play, LINE/Google reserve, photography sells.
4. **Tour / activity / dive operators** — enquiry‑based, foreign customers, WhatsApp/LINE.
5. **Contractors / interior / pool / condo services** — the US blue‑collar model, ports directly.
6. (Hotels — T3/T4 only, later.)

---

## 4. OUTREACH & SALES — the engine

### Lead build (we already have most of this)
Apify Google‑Maps scrape → filter **no‑website / weak‑site** + sort to **mobile numbers** (ClearoutPhone — "the mobile number is usually the owner's cell → you reach the decision‑maker"). Tools the pros use: GMaps Extractor (free 1k/mo), Outscraper (~$12/4,000), LeadRocks ($79 lifetime, 100M B2B).

### The universal hook: **BUILD‑FIRST**
Every top operator opens with *"I already built you a website / mock‑up — want to see it?"* It removes friction and triggers reciprocity. **We can now mass‑produce demos cheaply** from the scrape data — this is our outreach factory.

### Channels (Thailand‑weighted)
- **LINE / SMS first** (Thailand reality): *"Hi, this is [Nok], I was looking you up on Google — I actually built you a sample website to get more customers. Want me to send it?"* Their reply = the first yes. Then move to a call/video.
- **Phone:** the #1 rule — **the call's only job is to book the Zoom, not sell the site.** "The website's free, we just charge ฿X/mo for hosting + the system that gets you customers."
- **Audit‑first close (Dylan):** show a custom **SEO/competitor‑gap report** *before* the demo → "significantly higher close rate." (We can auto‑generate these.)
- **Free Loom/video audit:** a 60–90s screen‑record of their Google listing with 2–3 fixes — *be helpful, don't roast.* "People rarely take the time — it sets you apart."
- **Email at scale** (later): D7 Lead Finder → verify → Instantly. Dylan: **40,000 emails → 49 opportunities → $112K pipeline in one week.**
- **Paid ads** (once we have proof): offer "free website + 5‑star review system." One student: **$4K spend → doubled in 2 months**, ~0 churn because of recurring.

### Sell the OUTCOME, never features
*"We'll follow up with every lead and you'll get more appointments"* — not "you get a chat widget." ROI framing: *"฿3,500/mo — if it saves you one extra customer a month, it's paid for many times over."*

---

## 5. THE AUTOMATION STACK (the profit centre we're missing)

Set up once in GHL, then near‑zero fulfilment, ฿3,500–฿20,000/mo:
1. **Missed‑call text‑back** — auto‑text anyone whose call went unanswered. One toggle.
2. **AI receptionist / chat** — answers 24/7, books appointments onto the calendar.
3. **Review automation** — request after every job; 5★ → Google, 1★ → private form (reputation protected). "10 → 50 reviews in two weeks."
4. **GBP optimisation** ($200–500/mo equiv), **social posting** ($199/mo equiv), **SEO**, **Google/Meta ads** ($2–3K/mo equiv).
5. **Client mobile app** (GHL) — owner sees their leads/appointments → *this is why they keep paying.*

**🇹🇭 Thailand adaptation (critical — the channel is LINE, not SMS):** missed‑call text‑back → **missed‑call → LINE auto‑message**; "AI receptionist" → **AI chat on the website + LINE OA** in TH/EN/中文; SMS broadcasts → **LINE OA broadcast** (promotions); reviews → **Google Maps reviews** (what tourists actually read). GHL can stay the CRM backbone, but everything customer‑facing routes through **LINE + WhatsApp + Google Maps** — never SMS, and payment stays entirely the owner's affair, settled in chat or at the venue. *(For deeper Thai‑native tactics, next research round should use a translate‑capable transcript actor to mine the Thai‑language operator videos that had no English captions.)*

---

## 6. WHAT ACTUALLY CONVERTS (every site we ship)

- **Above‑fold CTA**: "Book a Free Estimate" / "Reserve" / "Get a Quote."
- **Lead‑capture form / quote form** (its absence is the #1 leak), **services**, **service areas**, **trust badges** (licensed/insured/years), **Google reviews pulled onto the page**, **AI chat** bottom‑right.
- **NAP auto‑pulled from Google** (phone/address/hours) so it looks legit; **the client's real name + photo** swapped in (no placeholders).
- **Local‑SEO keywords** (city + service), **fast + mobile**, **copy at 5th‑grade, outcome‑led**.
- Premium tier adds: editorial design, **GSAP animations (without being cheesy)**, trilingual.
- Reality check (Dylan): *"They don't know what good looks like"* — the **demo + audit do the selling**, not technical perfection. The bar most local sites set is "a brochure from 2014."

---

## ★ THE $10,000‑WEBSITE BAR — our design rubric + premium build SOP (T3)

The single most useful thing in all 50 videos *for us specifically* (design quality is exactly where we've been weak): **Metics Media's "$10,000 vs $200 website" framework** (315k views). This is now the rubric we grade every site against before it ships.

**The 8 criteria that separate a $10,000 site from a $200 one** (three groups — taste / substance / felt quality):
1. **Point of view** — a real direction, not a mood board.
2. **Typography** — and **never ship Inter** ("it instantly screams *AI made this*"); swap to **Geist**.
3. **Color** — restraint: ~5 hex values, no rainbow palettes. "Restraint signals quality."
4. **Hierarchy** — huge → medium → small tells the eye what to read 1st/2nd/3rd.
5. **Imagery** — custom or AI‑generated, never stock‑generic.
6. **Copy** — restrained + sensory ("*Six dishes, one fire*"), not adjective soup.
7. **Motion** — subtle handcrafted micro‑interactions + cursor effects: *"the difference between a site that looks expensive and one that feels expensive."*
8. **Mobile** designed (hide / tighten / resize), not just shrunk — **+ the "invisible stuff"** (fast + finished).

**The build SOP (our new T3 process):**
1. Define the bar first — paste the 8‑criteria checklist; build to it.
2. Install the two design skills (below) so output isn't generic‑AI.
3. Brief with **references** (3–5 screenshots from Dribbble / Awwwards / Pinterest) and end the prompt with *"ask me clarifying questions"* → Claude offers 2–3 style directions before building.
4. **Grade against the checklist:** "where does this land on each criterion?" → strong / mixed / missing.
5. **Batch the fixes** — lead with *intent/feel*, not specs: *"more handcrafted micro‑interactions, the lower sections feel generic — not busier, just more expensive."*
6. **One cursor interaction per flat section** — walk every section; this pass is manual ("Claude can't feel your site the way you can").
7. **Dedicated mobile pass.**

**This is the exact loop I can now run** thanks to the screenshot pipeline: *define bar → build → screenshot → grade → batch‑fix → re‑screenshot.* That is the answer to "benchmark what a good website is."

**The premium toolchain (free/cheap — our T3 edge):**
- **Claude Code + two skills:** `front‑end‑design` (by Anthropic — bans overused fonts, pushes bold direction + restrained copy) and `UI‑UX‑Pro‑Max` (community — **57 UI styles / 95 palettes / 56 font pairings**; install via *"install this plugin using npm"*, call with `/UI‑UX‑Pro‑Max`).
- **21st.dev** — free library of dev‑built components / scroll effects / animations; "copy prompt" → paste into Claude. (It may be React — Claude correctly refuses to inject React into a static site; keep static HTML for simple sites.)
- **Nano Banana 2** (Google, free in AI Studio, **~600–750 gens/mo**) for custom imagery — prompt at **2K resolution**, feed image‑1 as the reference for image‑2 to hold consistency. Ask Claude to *write the image prompt* (it knows the project). Video/motion → an aggregator (11Labs/VEO, paid, optional).
- **All‑in cost of a genuine $10K‑grade site: ~$20/mo (Claude Pro) + ~$43/yr hosting+domain ≈ $60.** That's the T3 margin story — and our differentiator vs the GHL‑template crowd.

This rubric supersedes "make it look nice." Every demo gets graded on these 8 before it goes out.

---

## ★★ ROUND 2 — THE BOOKING ANSWER + NICHE‑SPECIFIC CONVERSION (43 more videos)

A second, **12× cheaper** mining round (43 *new* videos via `supreme_coder` at **$0.0005/transcript**, ~$0.02 total) aimed squarely at the three gaps the first 50 left open: **how booking actually works**, **what converts per niche**, and **the AI‑receptionist economics**.

### A. BOOKING & PAYMENT — answered FOR THAILAND (we do NOT build checkout)
**Hard correction: this is Thailand, and we are not a payments company.** The Western stack the US/UK YouTubers use — Stripe, PayPal, WooCommerce checkout, BNBforms — is **wrong for Thailand.** Here, money and bookings run on local rails, and the site's only job is **discovery + trust + funnel to the channel the customer already uses.** Never process a card.

**The Thai rails:**
- **Booking / contact for Thais = LINE.** Near‑universal locally. Primary CTA: **"จองผ่าน LINE"** → the business's **LINE Official Account**.
- **Payment = not our business, full stop.** The owner settles money **inside the LINE chat or at the venue** (transfer, QR, cash — however *they* like). **We never set up, display, advise on, or touch payment.** No Stripe, no PayPal, no checkout, no QR on the site. Nothing.
- **Tourists / holidaymakers usually DON'T have LINE.** A Western guest uses **WhatsApp**; a Chinese guest uses **WeChat**; everyone has **Google Maps**. So every site runs a **dual funnel**: LINE for Thais **+ WhatsApp click‑to‑chat, tap‑to‑call, Google‑Maps directions, "walk‑ins welcome" + hours, and a WeChat ID** for Chinese guests. **Prices visible in ฿** (tourists won't message to ask), languages EN/ไทย/中文.
- **Tourist trade → deep‑link to the platform they already trust:** Agoda/Booking (hotels), Klook/GetYourGuide/Fresha (spa & tours), Grab/LINE MAN (food delivery). The site *links out* — we never rebuild those.
- **Discovery = Google Business Profile / Maps** (our core service) + Facebook + LINE.

**Booking by niche, Thailand‑correct (payment is always the owner's affair, settled in chat or at the venue):**
| Niche | Thais book via | Tourists book via | Site funnels to |
|---|---|---|---|
| **Spa / massage (lead niche)** | LINE OA | **WhatsApp / walk‑in / phone**, Klook/Fresha | Google Maps, LINE, WhatsApp |
| **Dental / aesthetic** | LINE OA, phone | **WhatsApp / EN‑中文 enquiry form** | Google Maps, LINE, WhatsApp |
| **Restaurant / café** | LINE, phone, walk‑in | **walk‑in / Google Maps**, Grab/LINE MAN for delivery | Maps, Grab/LINE MAN |
| **Tours / activities** | LINE | **WhatsApp / Klook / GetYourGuide** | Klook, WhatsApp |
| **Hotel (T3/T4 only)** | LINE direct | **Agoda / Booking deep‑link**, WhatsApp | Agoda/Booking, Maps |

**The reframe:** a Thai SME site needs **LINE + WhatsApp + call buttons, Google‑Maps embed, visible ฿ prices, hours + "walk‑ins welcome," OTA/Klook links where relevant — in EN/ไทย/中文.** No engine, no checkout, no payment anything. What we set up and charge for: the **LINE OA + auto‑reply**, **WhatsApp click‑to‑chat**, **Google Business Profile**, the **OTA/Klook deep‑links**, and the trilingual site + automation layer.

### B. THE AI‑RECEPTIONIST ECONOMICS (the most profitable single add‑on)
**Connor Cahill: ~$50–60k/mo, $265k in 5 months, 172 clients**, selling **one** product — a GHL AI receptionist — at **$1,000/mo** (range $400–1,500) on a **$497/mo** GHL cost. Three moves:
1. **Lead‑gen that is its own demo:** post in **local Facebook groups** — *"Want to be the only business in your area taking calls after 5pm? My AI receptionist never misses a call, sounds human, books to your calendar — call it here to test."* The **AI itself sells the caller and books them**. The product is the demo.
2. **The value‑stack close** (works for dentist / med‑spa / chiro / realtor / plumber): "Open 24/7, how many extra calls/day? (30) → ×30 = 900/mo → ~50% convert = 450 → × ฿/customer = ฿huge. **Would you not pay ฿1,000/mo to make ฿huge/mo?**" Let the owner say the big number. Closes ~50% of calls.
3. **Anti‑churn foundation hack:** after they buy the receptionist, **give the website + Google reviews + SEO free** (zero marginal cost in GHL) → *"I become the foundation of their business — they don't keep paying because they want to, they keep paying because they have to."* Bonus: 24/7 hours → Google ranks you higher → free SEO.

Same engine as batch‑2's Kai ($28k/mo) and the Ponte thesis — confirmed a third time: **website = free hook; AI‑receptionist + automation = the ฿1,000–1,500/mo recurring core.** Med‑spa "**snapshots**" (Jasper Aiken) = a pre‑built GHL niche template imported per client in minutes (setup fee ~$1,000–3,000 + ~$1,000/mo) — the templatised delivery model we should copy per Thai niche.

**Thai‑channel note:** Connor's calls/SMS are US‑style; in Thailand the *same engine* runs on **LINE + an AI chat that answers in TH/EN/中文** and books to the calendar, with **missed‑call → LINE message** instead of text‑back. The **economics and the value‑stack close are identical — only the channel changes** (LINE + WhatsApp + Google Maps; never SMS, never payment).

### C. NICHE‑SPECIFIC CONVERSION RUBRICS (the category layouts requested)
**Dental (MGE):** the #1 mistake is the **brochure site**. Must have: clear **CTA** ("Schedule today / call now") + unmistakable **"accepting new patients,"** a **first‑visit special offer** (exam+x‑ray+clean), **attention headlines** from what locals want, **one selling page per service** (implants/Invisalign/whitening) answering FAQs, **reviews throughout**.

**Aesthetic / med‑spa (DevMart + Sagapixel):** **80% of traffic is mobile** → mobile‑first or lose bookings (*"cheap mobile site ⇒ clients assume cheap treatments"*). Must have: **sticky Book‑Now (header+footer) → +20–40% bookings**; **trust in the first 2 scrolls** (certifications, clinic + practitioner photos, Google/Trustpilot reviews, before/after); a templated **treatment page**: name+hero → what it solves (bullets) → **swipeable** before/after → how it works → benefits+downtime → **who it's NOT for** → one CTA. SEO: **title = "[Service] + [City]"**, name services by **search intent** ("chemical peels" not "peels"; "biodentical hormones" not "menopause"), fast load, **big tap‑to‑call / tap‑to‑book** mobile buttons (not tiny footer text). Compliance: aesthetic‑ad rules limit direct "Botox" claims — mind Thai medical‑ad law the same way.

**Hotels:** hero + rooms with rates; **Book on LINE** (Thais) + **WhatsApp & Agoda/Booking deep‑links** (tourists); Google‑Maps + reviews; EN/ไทย/中文. Any deposit is arranged by the owner in chat — not on the site. A true direct‑booking engine only if they ask (T3/T4).

**Restaurants:** photography sells; menu pages; **LINE / phone reserve** + walk‑in; delivery handed off to **Grab / LINE MAN / Foodpanda** (we link, not build); Google Maps; tourists walk in.

### D. DELIVERY & PAYMENT TERMS (protect the cash)
Two safe delivery methods (Saddam Kassim): (1) build on the **client's own domain+hosting** → auto‑live, no migration; or (2) build on **your subdomain/staging**, share for approval, **migrate** on sign‑off. **Always take ≥50% upfront** (escrow on freelance platforms). Maps to us: collect deposit → build on our gh‑pages staging → **screenshot‑grade** → migrate to their domain / go live on approval.

---

## 7. WHAT WE CHANGE — the 10× moves

1. **Add the recurring/automation layer (GHL).** This is the missing 80% of the revenue. Re‑price everything around **monthly recurring**, not one‑off builds.
2. **Become a build‑first demo factory.** Mass‑produce T0/T1 demos from Maps data; lead every outreach with "I already built you one."
3. **Keep our premium edge at T3** (Claude‑Code craft) — and **screenshot‑grade** every build before it ships (now possible).
4. **Pick 2 niches to start: spas/massage + dental/aesthetic clinics** (or restaurants), in **one area**, **LINE‑first**, owner = the local Thai face.
5. **Drop hotels as the wedge.** Revisit at T4 with a connected booking engine.
6. **Sell outcomes** (more customers, more reviews, fewer missed calls) — not "a beautiful website."

---

## 8. FIRST‑30‑DAYS ACTION PLAN

- **Wk1:** Set up GHL (trial), white‑label it, import 1 niche snapshot (missed‑call text‑back + review + AI chat + booking). Pick niche #1 (spa/massage) + area.
- **Wk1–2:** Scrape 200 no‑/weak‑website spas in the area; build **20 T1 demos** (GHL template + automations); generate a 1‑page audit per top lead.
- **Wk2–3:** Outreach via LINE/phone, build‑first hook, **goal = book demos, not sell**. Same‑day video demo. Close 3–5 at ฿3,500/mo (free build).
- **Wk3–4:** Deliver, turn on the automation, get them their first "look how many leads" moment. Ask for a referral. Stand up 1 **T3 premium** showcase (Claude‑Code) as the portfolio hero + screenshot‑grade it.
- **Ongoing:** stack services on existing clients (GBP, reviews, ads) → that's the Ponte $40K‑LTV path.

---

*Source corpus: **86 transcripts across two rounds** — Round 1 = 50 (karamelo, ~$0.006 each) + Round 2 = 36 of 43 new videos (supreme_coder, **$0.0005 each**; 7 Thai‑language ones had no English captions and need a translate‑capable actor next time). Discovery via streamers/youtube‑scraper (~$0.003/video). Raw transcripts in /tmp/yt/g1–g5. **Total transcript‑mining cost across BOTH rounds ≈ $0.5; Round 2 ≈ $0.24 all‑in.** The research is cents — the larger session spend was Google‑Maps‑scraping‑with‑photos (real business data + images for the demo sites) + the screenshot‑grading pipeline, not this plan.*

---

## 9. THE "$10,000 vs $200 WEBSITE" RUBRIC — how we grade every build

> Source: Metics Media, *Build $10,000 Websites using Claude Code* (315k views), + AI Chris Lee, Darrel Wilson, "I sell 3D sites for $10K" (batch 2). This is the **design benchmark** to grade every site against before it ships — the same eight criteria these demos were built to.

**The 8 things that separate a $10,000 site from a $200 one** — grouped as *taste · substance · felt quality*:
1. **Point of view** — a real direction, not a mood board ("dark-moody, Pacific-Northwest", not "modern & clean").
2. **Typography** — deliberate pairings; **ban Inter** (screams "AI made this") → Geist/Figtree/Fraunces etc.
3. **Colour** — restraint: ~5 hex values, no rainbow. Restraint signals quality.
4. **Hierarchy** — sizes tell the eye what to read 1st/2nd/3rd; flat = cheap.
5. **Imagery** — the one pillar AI can't fake: custom or AI-gen photos, consistent. (Our demos use the business's real Google photos; a signed client uses their own.)
6. **Motion** — restrained micro-interactions/cursor effects; "more expensive, not busier". *(This is the one our demos deliberately keep thin — next polish pass.)*
7. **Mobile** — *designed*, not shrunk: a dedicated pass (hide, tighten, resize), because phones dominate traffic.
8. **Invisible** — fast, finished, real domain attached (a `*.vercel.app`/localhost link "makes it 5× harder to sell").

**The build loop (T3 premium):** brief with a real point of view → **"ask me clarifying questions"** → grade honestly against the 8 → ask for a **batch** of fixes (not one-at-a-time) → a final pass adding **one** subtle motion per flat section → swap Inter → designed-mobile pass → ship on a real domain. **Screenshot-grade before shipping** (our proven capability).

### The premium build stack (concrete, from batch 2)
- **Claude Code + two skills:** Anthropic's **front-end-design** (bans overused fonts, pushes bold direction, restrained sensory copy) + community **UI-UX-Pro-Max** (57 UI styles, 95 colour palettes, 56 font pairings; install via *"install this plugin using npm"*).
- **21st.dev** — free pre-built components/scroll-effects (copy-prompt → paste into Claude Code). Claude protects your architecture (says no to React in a static site).
- **Nano Banana 2** (Google AI Studio) — free **~600–750 image gens/month**; prompt at **2K resolution**, feed image-1 as reference for consistency. Total startup ≈ **$20/mo (Claude Pro)**; a full site ships for **~$60 incl. domain**.
- **Hosting:** Hostinger Premium (static) / Business (Node) — but *our* T3 path is Claude Code → static HTML → Vercel/Pages.

### Concrete pricing & economics (batch 2 — what operators actually charge)
- **Darrel Wilson's 3 tiers:** $150–250 + $25–35/mo · $299–600 + $40–60/mo · $600–1,000 + $75–120/mo. (Maps to our T1–T3; the **monthly** is the point.)
- **"I sell 3D sites for $10K":** ~20 min to build, **~20 messages to sell** — *finding the buyer is the hard part, not the build.*
- **Kai (GHL SaaS): $28,946/month, churn <5%** — and the maths we adopt: **100 clients × $100 beats 5 × $2,000** (more clients, lower churn, stacked services).
- **Recurring is the asset (2V8wnMLKWh8):** a web-design business with **zero recurring revenue is worth nothing** to a buyer; valuation = a direct function of MRR. Reason enough to lead with the monthly.

### Lead-sniping & outreach (batch 2 additions)
- **Cameron's 3 methods:** expireddomains.net (sites that lapsed = owners who valued one), **Facebook Ad Library** (they're already spending = they have budget), and agency-outsource (white-label for busy agencies).
- **Personalised cold email ≈ 10.5% reply vs ~1% generic** — personalise the first line or don't send.
- **Payton's golden question:** *"When was the last time you guys updated your website?"* — opens the gap without insulting them.
- **NicStana:** *"won't take a job without a monthly"* + 6 recurring streams (hosting, care plan, SEO, content, reviews, ads) — the same stack we run through GHL.

*Batch 2 corpus (13 videos): Metics Media, AI Chris Lee, Darrel Wilson, Payton Clark Smith, Kai Stone, GHL SaaS operators, NicStana, Cameron, "$10K 3D sites". Mined via Apify; synthesis free.*
