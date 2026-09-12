import { Actor } from 'apify';
import axios from 'axios';

interface InputSchema {
  domains: string[];
  pitchContext?: string;
  apiKey?: string;
}

await Actor.init();

const input = await Actor.getInput<InputSchema>();
const domains = input?.domains || [];
const pitchContext = input?.pitchContext || '';
const apiKey = input?.apiKey || '';

console.log(`🚀 Analyzing ${domains.length} domains with Neon Autonomous Lead Dossier Engine...`);

for (const rawDomain of domains) {
  const cleanDomain = rawDomain.replace(/^https?:\/\//i, '').replace(/\/.*$/, '').trim();
  if (!cleanDomain) continue;

  try {
    console.log(`🔍 Fingerprinting ${cleanDomain}...`);
    const res = await axios.post(
      'https://neoninnovationlab.com/api/v1/dossier',
      {
        domain: cleanDomain,
        pitchContext,
        apiKey,
      },
      { timeout: 20000 }
    );

    if (res.data?.success && res.data?.dossier) {
      const d = res.data.dossier;

      // PPE: charge per dossier using registered Apify event 'dossier-generated'
      try {
        await Actor.charge({ eventName: 'dossier-generated', count: 1 });
      } catch {
        try { await Actor.charge({ eventName: 'apify-default-dataset-item', count: 1 }); } catch {}
      }

      await Actor.pushData({
        domain: d.domain,
        companyName: d.company_name,
        websiteTitle: d.website_title,
        businessModel: d.business_model,
        targetAudience: d.target_audience,
        estimatedStage: d.estimated_stage,
        leadScore: d.lead_score,
        fitTier: d.fit_tier,
        detectedTechnologies: d.detected_technologies,
        techVulnerabilities: d.tech_vulnerabilities,
        executiveSummary: d.executive_summary,
        pitchAngles: d.pitch_angles,
        isLocked: d.is_locked,
        unlockUrl: d.unlock_url,
        analyzedAt: new Date().toISOString(),
      });
      console.log(`✅ Dossier generated for ${cleanDomain} (Score: ${d.lead_score}/100)`);
    } else {
      console.warn(`⚠️ Failed to generate dossier for ${cleanDomain}: ${res.data?.error}`);
    }
  } catch (err: any) {
    console.error(`❌ Error analyzing ${cleanDomain}: ${err.message}`);
  }
}

await Actor.exit();
