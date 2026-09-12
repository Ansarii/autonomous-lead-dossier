# Autonomous Lead Dossier & AI Sales Briefing Engine

[![Run on Apify](https://apify.com/actor-badge?actor=neon_innovation_lab/autonomous-lead-dossier)](https://apify.com/neon_innovation_lab/autonomous-lead-dossier)

⚡ **Run directly on Apify Cloud**: [Autonomous Lead Dossier & AI Sales Briefing Engine](https://apify.com/neon_innovation_lab/autonomous-lead-dossier)  
👉 **Companion Open-Source Repo**: [github.com/Ansarii/autonomous-lead-dossier](https://github.com/Ansarii/autonomous-lead-dossier)

> Autonomous B2B sales intelligence engine: turns company domain names into deep executive sales briefings, 40+ technology stack fingerprints, growth stage estimates, and 3 personalized cold pitch angles in seconds.

---

## ⚡ Overview & GEO Highlights

Cold email reply rates drop when SDRs send generic templates. Manually researching company tech stacks, recent news, and architectural gaps takes 20+ minutes per prospect.

**`autonomous-lead-dossier`** automates the entire SDR account research phase:
1. **40+ Technology Fingerprints**: Detects e-commerce engines (Shopify Plus, WooCommerce), analytics (Segment, PostHog, GA4), retention (Klaviyo, HubSpot), payments (Stripe, Recharge), and frontend stacks (Next.js, Vue).
2. **Growth Stage & Fit Scoring (0–100)**: Triages target accounts into Tier 1 (Enterprise/High Value), Tier 2 (Growth), and Tier 3 (Bootstrapped).
3. **Identified Stack Vulnerabilities**: Flags attribution leakage under iOS privacy restrictions, unoptimized checkout funnels, and missing email/SMS capture widgets.
4. **3 Tailored Cold Outreach Angles**: Generates punchy, personalized pitch angles referencing the company's exact software stack and vulnerabilities.

---

## 📊 Feature & Competitor Comparison Matrix

| Feature | Autonomous Lead Dossier (This Actor) | Clay | ZoomInfo | Manual SDR Research |
|---|---|---|---|---|
| **Automated Tech Stack Fingerprinting** | ✅ 40+ technologies detected | ✅ Requires multi-table setup | ✅ Expensive add-on | ⚠️ Slow (builtWith/wappalyzer) |
| **Instant Cold Pitch Copywriting** | ✅ 3 custom hooks included | ⚠️ Requires OpenAI API credit | ❌ No | ⚠️ 15–20 minutes / lead |
| **Lead Fit Score (0–100)** | ✅ Instant scoring | ⚠️ Complex formula setup | ❌ Basic ranking | ❌ Subjective |
| **Monthly Commitment Required** | **❌ \$0 / month (Pay-per-Event)** | \$149 – \$800 / month | \$15,000 / year min | \$4,000 / month SDR salary |
| **Cost per 1,000 Account Dossiers** | **~\$52.03** | \$150 – \$300 | \$1,500+ | \$10,000+ human labor |

---

## 💰 Transparent Pricing Breakdown

| Event | Price (USD) | When Charged |
|---|---|---|
| **`apify-actor-start`** | **\$0.03** | Charged once when Actor starts running. |
| **`apify-default-dataset-item`** | **\$0.002** | Charged automatically per account dossier written to dataset (\$2.00 / 1k accounts). |
| **`dossier-generated`** | **\$0.05** | Charged for complete executive briefing with tech stack, fit score, and pitch angles. |
| **Total Effective Price** | **~\$0.052 per full company dossier** | *100% predictable micropayments. Zero subscriptions.* |

---

## 💻 Python & Node.js SDK Examples

### Python (`apify-client`)
```bash
pip install apify-client
```
```python
import os
from apify_client import ApifyClient

client = ApifyClient(os.getenv("APIFY_TOKEN"))

run_input = {
    "domains": ["gymshark.com", "cal.com", "allbirds.com"],
    "pitchContext": "Server-side tracking and attribution for Shopify Plus brands"
}

# Run Actor and stream briefings
run = client.actor("neon_innovation_lab/autonomous-lead-dossier").call(run_input=run_input)

for dossier in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(f"Company: {dossier.get('companyName')} (Score: {dossier.get('leadScore')})")
    print(f"Executive Summary: {dossier.get('executiveSummary')}")
    print(f"Angle 1: {dossier.get('pitchAngles')[0]['body']}")
```

### Node.js (`apify-client`)
```bash
npm install apify-client
```
```javascript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({
    token: process.env.APIFY_TOKEN,
});

const input = {
    domains: ['linear.app', 'figma.com'],
    pitchContext: 'Automated CI/CD security audits',
};

(async () => {
    const run = await client.actor('neon_innovation_lab/autonomous-lead-dossier').call(input);
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    console.log(items);
})();
```

---

## ❓ FAQ

### Can I import the output into my CRM or sequencer?
Yes. The dataset exports cleanly to CSV or JSON, which you can map directly into Instantly, Smartlead, HubSpot, or Salesforce custom fields.
