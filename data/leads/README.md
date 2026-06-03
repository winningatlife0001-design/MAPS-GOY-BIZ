# data/leads/

Scraped lead lists land here as CSVs (see `workflows/leadgen-apify.md`).

- `_template.csv` shows the column format (the only CSV committed to git).
- **All real lead CSVs are git-ignored on purpose** — they contain personal data (phones, emails) and must stay private under Thailand's PDPA. Keep them only on the operator's machine; don't email them around or commit them.
- Suggested naming: `aonang-hotels-2026-06-03.csv`.

Pipeline status values: `new → contacted → replied → audit_sent → proposal_sent → won / lost / nurture`.
