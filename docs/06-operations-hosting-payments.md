# 06 — Operations: Hosting, Domains & Getting Paid ⚙️

How we actually deliver and host sites cheaply, and — crucially — **how the money gets collected** in Thailand.

## Hosting — keep it free and low-maintenance

We build mostly **static sites** (HTML, like the template) → they're fast, secure, and basically free to host.

| Option | Cost | Best for | Watch out |
|---|---|---|---|
| **Cloudflare Pages** ⭐ | **Free** (unlimited bandwidth, ~100 sites/account) | **Our default** — many small hotel sites, global CDN, fast | 20k files/site (irrelevant for us) |
| Netlify | Free tier now credit-based (~15 deploys/mo) | occasional use | new credit model freezes sites if exceeded |
| Vercel | Hobby = **non-commercial only**; Pro $20/mo | Next.js apps | Hobby plan bans client work — avoid for clients |
| GitHub Pages | Free (public repos) | our own portfolio/demos | commercial use limited; no forms |
| Thai shared hosting (Ruk-Com, ReadyIDC, Z.com, Hostatom) | ฿600–1,900/yr | clients who *want* WordPress + Thai support | needs updates/maintenance |

**Recommendation:** **Cloudflare Pages** for everything static. Only use WordPress on Thai hosting if a client specifically demands a self-edit CMS — and then prefer a simple headless CMS (Sanity free tier) or a "message us your edits" flow over giving owners a WordPress login they'll break.

## Domains
- **.com** — ~฿360–540/yr, no requirements. **Use this by default** (buy via Cloudflare/Namecheap).
- **.co.th / .th** — looks local & trusted, but requires a **Thai company OR a registered trademark OR Thai VAT registration**, plus a Thai-resident contact. ~฿1,200–2,000/yr via Thai registrars. Offer it once [girlfriend] has a registered business; otherwise start clients on **.com**.
- Tip: register the domain in the **client's name** (or transfer on full payment) but **keep DNS/hosting under our management** while they're on a retainer — standard agency practice and it massively reduces churn.

## Static vs WordPress (our stance)
Static + AI content = near-zero maintenance, sub-1s load, nothing to hack. Hotel owners request edits via **LINE/WhatsApp or a simple form**, and we (Claude) implement + redeploy in minutes. Avoid the WordPress update/security treadmill unless a client truly needs to self-edit daily.

## 💸 Getting paid (the important part)

**PromptPay is king in Thailand** — but it's **push-only** (the customer scans/pays each time; you *cannot* auto-charge them). That's fine for small recurring fees with a personal relationship.

| Method | Auto-charge recurring? | Fees | Use it for |
|---|---|---|---|
| **PromptPay** (bank QR) | ❌ No (you send a QR/request monthly) | ~free to receive | **Most Thai hotel clients.** Send a QR on LINE each month. |
| **Bank transfer** | ❌ Manual | free–฿25 | Standard B2B; fine for 5–20 clients. |
| **Stripe (Thailand)** ✅ | ✅ Yes (cards) | cards 3.65%+VAT; PromptPay 1.65% | Foreign/card-paying clients; true subscriptions. *(Stripe PromptPay is one-time only; only card subscriptions auto-charge.)* |
| **Opn/Omise** | ✅ Yes (cards) | cards 3.65%+VAT | Thai-native gateway, recurring via card. |
| **Xendit** (was GB Prime Pay) | ✅ Yes | cards 3.2%; PromptPay 0.8% + ~$0.30/plan/mo | Cheapest PromptPay; good once you have many clients. |
| **PayPal** | limited | ~3.49%+ | Only for foreign clients; heavy Thai restrictions — avoid for Thai hotels. |

**Practical playbook:**
- **Build fee:** 50% deposit by PromptPay/transfer to start, 50% before go-live. Never hand over domain/hosting logins until paid in full.
- **Monthly retainer (1–15 clients):** send a **PromptPay QR on LINE** on the 1st each month with a friendly message. Instant, free, personal. Log who's paid in your CRM.
- **Scaling (15+ clients or card-payers):** move to **Xendit or Opn card subscriptions** so it auto-charges.
- This keeps fees near zero early and only adds a gateway when volume justifies it.

## Invoicing & records
- Below **฿1.8M/yr revenue** you don't need to charge VAT; a simple **receipt (ใบเสร็จรับเงิน)** is enough.
- Company clients may **withhold 3% tax** when they pay you — collect the WHT certificate (you credit it on your tax return).
- Keep every receipt; a cheap Thai accountant handles year-end. (See `07`.)
- Thailand's voluntary **e-Tax invoice** system exists but isn't required for a micro business yet.

## The delivery toolchain (what Claude uses)
- **Find leads:** Apify Google Maps scraper → CSV (`workflows/leadgen-apify.md`).
- **Build site:** customize `templates/website/hotel/index.html`; enhance photos with **Adobe Firefly** (background cleanup, expand, enhance). (`workflows/build-a-site-sop.md`)
- **Deploy:** push to **Cloudflare Pages**, point the **.com** domain, add SSL (automatic).
- **Maps:** run `workflows/gbp-optimization-sop.md`.
- **Bill:** PromptPay QR on LINE → mark paid in CRM.
Cost per client to *deliver*: a few hundred baht (domain + scraping). Everything else is time.
