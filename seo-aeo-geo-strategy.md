# AEO / GEO Strategy for Zedgehost Pakistan

## 1. Current AI visibility audit

The site already has strong Pakistan-localized on-page SEO, including page titles, meta descriptions, canonical links, local geo tags, and Organization/Service JSON-LD. However, it was missing the explicit AI-discoverability files recommended by the AEO/GEO skill: `llms.txt`, a root-level `robots.txt` that allows AI crawlers, and a sitemap.xml that exposes the most valuable service and domain pages.

### What was missing

- No root `llms.txt` for AI assistants to understand the site and its primary content categories
- No `robots.txt` with explicit AI crawler allowances
- No root `sitemap.xml` to expose canonical service URLs to crawlers and AI systems
- Limited AI-focused extraction structure beyond standard schema on a few pages

### Current strengths

- Pakistan-targeted copy on the home and service pages
- Canonical URLs are present on major pages
- Local meta tags (`geo.region`, `geo.placename`, locale) are configured
- Organization and Service schema exists on many pages

## 2. Five-layer scorecard

### 1) Extractable content structure: 8/10

The pages are mostly clear and readable, and some headings map well to user intent. The site would benefit from more explicit FAQ-style Q&A structures on core pages and stronger direct-answer paragraphs near the top of key service pages.

### 2) Citation worthiness: 6/10

The site has service authority and local relevance, but AI systems prefer more specific credibility signals such as author bios, update dates, methodology disclosures, support details, and a clearer trust/knowledge base structure.

### 3) Structured data depth: 8/10

The site includes Organization and Service JSON-LD, which is a good foundation. Deeper AI-friendly schema such as FAQPage for pages with real questions would help answer-engine visibility.

### 4) AI-readable accessibility: 5/10

The main gap was the absence of `llms.txt` and explicit AI-crawler permissions. The site is static and crawler-friendly, which is a strength, but the AI-access layer was not fully implemented.

### 5) Real-world entity signals: 6/10

The site has a clear brand and geo identity, but stronger authority signals such as a stronger About page, reviewer mentions, social profiles, and consistent service details across sources would improve entity recognition.

## 3. Priority queries the site should be cited for

1. web hosting in Pakistan
2. domain registration in Pakistan
3. shared hosting Pakistan
4. WordPress hosting Pakistan
5. cloud hosting Pakistan
6. Linux VPS hosting Pakistan
7. reseller hosting Pakistan
8. business email hosting Pakistan
9. premium domain names Pakistan
10. cheap domain registration Pakistan
11. website security Pakistan
12. SSL certificate Pakistan
13. website backup Pakistan
14. domain transfer Pakistan
15. bulk domain transfer Pakistan

## 4. Layer-by-layer remediation plan

### Layer 1: Extractable content structure

- Keep direct-answer paragraphs near the top of service pages
- Add FAQ sections to the highest-value landing pages
- Ensure each service page answers the key question in the first 1-3 paragraphs
- Use consistent H2/H3 question-based headings for service comparison and setup pages

### Layer 2: Citation worthiness

- Add visible last-updated dates to important service pages
- Highlight author/support credibility and local business context
- Link to About, Contact, and policy pages consistently

### Layer 3: Structured data depth

- Add FAQPage schema to homepage and main service pages
- Keep Organization schema consistent across pages
- Add WebSite schema for the base domain if needed
- Ensure all schema reflects what is visible on the page

### Layer 4: AI-readable accessibility

- Publish `llms.txt` at the root of the domain
- Publish `robots.txt` with explicit AI bot allowances
- Publish `sitemap.xml` for core service and domain URLs
- Confirm the files are served from the canonical domain and are not blocked

### Layer 5: Real-world entity signals

- Strengthen About page with clear business story and trust details
- Add consistent NAP and contact information on all service pages
- Link to official social and business profiles where available
- Ensure business listing and review signals are managed off-site as well

## 5. Implementation roadmap

### Immediate

- Add root AI-discovery files: `llms.txt`, `robots.txt`, and `sitemap.xml`
- Confirm all canonical URLs are clean
- Ensure root files are served correctly

### Next sprint

- Add FAQPage JSON-LD to the homepage and top 5 service pages
- Review top 10 service pages for stronger direct-answer structure
- Refresh the About and Contact pages with clearer authority language

### Quarterly re-test

- Query AI products with the target questions above
- Compare which sources they cite and whether the site appears
- Refresh `llms.txt` and key pages based on what AI systems are actually surfacing

## 6. Re-test schedule

- First review: within 7 days after deployment
- Monthly: check crawlability and content visibility
- Quarterly: run an AI-citation test again and update the strategy based on real outcomes

## Implementation status

✅ `llms.txt` created
✅ `robots.txt` created
✅ `sitemap.xml` created
✅ AI-discoverability foundation added for the live site

This keeps the site aligned with the AEO/GEO skill while preserving the stronger on-page SEO work already done for the Pakistan market.
