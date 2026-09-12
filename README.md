# Autonomous Lead Dossier & AI Sales Briefing Engine

Autonomous B2B sales intelligence that turns raw website domains into executive sales briefings, tech stack fingerprints, and tailored cold pitch hooks in seconds.

---

## ⚡ Key Capabilities

- **40+ Technology Fingerprints**: Detects Shopify Plus, WooCommerce, Klaviyo, HubSpot, GA4, Segment, PostHog, Meta Pixel, Next.js, Stripe, Recharge, and more.
- **Identified Gaps & Vulnerabilities**: Automatically spots client-side tracking leakage under modern iOS privacy restrictions, unoptimized checkout friction, and missing SMS/retention flows.
- **3 Tailored Cold Pitch Angles**: Produces personalized, punchy 75-word cold outreach copy tailored specifically to the company's tech stack and vulnerabilities.
- **Lead Fit Score (0–100)**: Instant triage into Tier 1 (High Priority), Tier 2 (Moderate Opportunity), and Tier 3 (Low Fit).

---

## 📥 Input Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `domains` | Array of strings | **Yes** | List of company domains (e.g. `["gymshark.com", "cal.com", "allbirds.com"]`). |
| `pitchContext` | String | No | Your specific service or value proposition (e.g. "server-side tracking", "checkout optimization"). |
| `apiKey` | String | No | Neon Dossier Pro API key (`neon_sk_...`) to unmask full personalized cold email copy. |

---

## 📤 Output Format

The Actor pushes comprehensive JSON records to the default Apify dataset:

```json
{
  "domain": "gymshark.com",
  "companyName": "Gymshark",
  "websiteTitle": "Gymshark Official Store",
  "businessModel": "D2C E-Commerce",
  "targetAudience": "Fitness enthusiasts & activewear buyers",
  "estimatedStage": "Scaling ($100M+ ARR)",
  "leadScore": 92,
  "fitTier": "Tier 1: High Priority",
  "detectedTechnologies": [
    { "category": "E-Commerce", "name": "Shopify Plus" },
    { "category": "Marketing Automation", "name": "Klaviyo" }
  ],
  "techVulnerabilities": [
    "Attribution gap on iOS traffic due to client-side pixel restrictions."
  ],
  "executiveSummary": "Global fitness apparel brand operating on Shopify Plus.",
  "pitchAngles": [
    {
      "angle_type": "The Technical Gap Hook",
      "subject_line": "Quick observation regarding gymshark.com's tracking stack",
      "body": "Hi there, noticed your checkout setup..."
    }
  ]
}
```

---

## 🚀 Live API & Web Inspector

- Interactive Web Inspector: [https://neoninnovationlab.com/dossier](https://neoninnovationlab.com/dossier)
- Direct REST API: `POST https://neoninnovationlab.com/api/v1/dossier`
- MCP Server for Claude / Cursor: `https://neoninnovationlab.com/api/v1/mcp`
