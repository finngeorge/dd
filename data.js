// DD Dashboard — Stock Data
// All financial data as of March 26, 2026

const STOCKS = {
  MU: {
    ticker: 'MU', company: 'Micron Technology', sector: 'Semiconductors', exchange: 'NASDAQ',
    price: 355, target: 550, analystTarget: 490, rating: 'Strong Buy', conviction: 9.2, side: 'Long',
    fwdPE: 4.4, trailingPE: 18.6, evEbitda: 11.96, fwdEvEbitda: 6.9, pb: 6.04, peg: 0.2,
    marketCap: '394B', divYield: null, fcfYield: null,
    description: 'World\'s 3rd largest memory chipmaker. Produces DRAM, NAND flash, and HBM for AI accelerators, data centers, mobile, and automotive applications.',
    quarters: [
      { q: 'FQ2\'25', rev: 8.05, eps: 1.56, gm: 37.9, yoy: 38 },
      { q: 'FQ3\'25', rev: 9.30, eps: 1.91, gm: 39.0, yoy: 37 },
      { q: 'FQ4\'25', rev: 11.32, eps: 3.03, gm: 45.7, yoy: 46 },
      { q: 'FQ1\'26', rev: 13.64, eps: 4.78, gm: 56.0, yoy: 57 },
      { q: 'FQ2\'26', rev: 23.86, eps: 12.07, gm: 74.9, yoy: 196 },
      { q: 'FQ3\'26 (G)', rev: 33.50, eps: 18.90, gm: 81.0, yoy: 260, guided: true }
    ],
    segments: [
      { name: 'CMBU (Cloud)', value: 7.75, color: '#3b82f6' },
      { name: 'MCBU (Mobile/Client)', value: 7.71, color: '#a855f7' },
      { name: 'CDBU (Data Centre)', value: 5.69, color: '#06b6d4' },
      { name: 'AEBU (Auto/Embedded)', value: 2.71, color: '#f59e0b' }
    ],
    analysts: { buy: 28, hold: 2, sell: 0, avgTarget: 490, highTarget: 700, lowTarget: 400 },
    bull: [
      { title: 'AI Memory Supercycle is Structural', detail: 'Every GPU needs massive HBM/DRAM/NAND. $690B hyperscaler capex in 2026. Infrastructure buildout, not a fad.' },
      { title: 'HBM Sold Out Through 2027', detail: 'Non-cancellable, fixed-price contracts provide unprecedented revenue visibility. Structurally different from spot-market cycles.' },
      { title: '81% Gross Margin Unprecedented', detail: 'Never in Micron\'s history. Reflects pricing power + product mix shift to high-value HBM/server DRAM.' },
      { title: 'Forward P/E of 4.4x is Absurdly Cheap', detail: 'Semi industry avg is 40.9x. PEG ratio of 0.2 vs fair value of 1.0. Market pricing in immediate earnings collapse.' },
      { title: '$90+ EPS Expected FY2027', detail: 'At 6x: $540. At 10x: $900. Current price implies 80%+ earnings decline — unlikely before 2028.' },
      { title: 'Oligopoly Structure', detail: 'Only 3 companies make DRAM/HBM globally. Down from 23 in 1986. Rational supply discipline more likely.' }
    ],
    bear: [
      { title: 'Cyclicality is Eternal', detail: 'Memory has been cyclical for 40+ years through every secular demand driver. EV/Sales at historical peak of 3.18x sector-wide.' },
      { title: 'EV/Sales at 8.11x TTM', detail: 'Previous cycle peaks for MU were at much lower multiples. Reversion to mean implies >50% downside.' },
      { title: 'Google TurboQuant / Memory Efficiency', detail: '6x compression of KV cache. Mainly affects inference DRAM, NOT HBM for training. Overstated but worth monitoring.' },
      { title: 'Tariff Exposure', detail: 'Memory modules/SSDs subject to tariffs. Could dampen consumer demand. Stock already -14% on tariff news.' },
      { title: 'Post-2027 Cliff Risk', detail: 'When capacity expansions complete and if AI spending moderates, pricing could normalize rapidly.' },
      { title: 'Customer Concentration', detail: 'Heavy reliance on NVIDIA ecosystem and a few hyperscalers. Any slowdown directly impacts Micron.' }
    ],
    scenarios: [
      { name: 'Deep Bear', eps: 30, multiple: 5, price: 150 },
      { name: 'Moderate Bear', eps: 60, multiple: 5, price: 300 },
      { name: 'Base Case', eps: 90, multiple: 6, price: 550, highlight: true },
      { name: 'Bull Case', eps: 95, multiple: 8, price: 760 },
      { name: 'Ultra Bull', eps: 100, multiple: 10, price: 1000 }
    ],
    thesis: 'Micron is experiencing the most powerful demand environment in the history of the memory industry. At 4.4x forward P/E with 81% guided margins and HBM sold out through 2027, the market is pricing in an immediate earnings collapse. The -25% selloff on tariff/TurboQuant noise is a gift for 12+ month holders.',
    catalysts: ['FQ3 results (~June) with $33.5B revenue', 'HBM4 volume ramp', 'CHIPS Act fab construction progress', 'AI capex acceleration from hyperscalers'],
    risks_detail: 'Cyclicality, tariffs on modules/SSDs, China market loss, post-2027 capacity expansion, TurboQuant memory efficiency'
  },

  AVGO: {
    ticker: 'AVGO', company: 'Broadcom Inc', sector: 'Semiconductors', exchange: 'NASDAQ',
    price: 321, target: 450, analystTarget: 450, rating: 'Buy', conviction: 8.8, side: 'Long',
    fwdPE: 23.2, trailingPE: 60, evEbitda: 40.9, fwdEvEbitda: 22, pb: 20.27, peg: 0.58,
    marketCap: '1.47T', divYield: 1.1, fcfYield: null,
    description: 'Designs custom AI chips (XPUs) for hyperscalers, leads in data center networking, and owns VMware infrastructure software. The #2 AI semiconductor company after NVIDIA.',
    quarters: [
      { q: 'Q1 FY25', rev: 14.9, eps: 1.60, gm: 65.0, yoy: 25 },
      { q: 'Q2 FY25', rev: 15.0, eps: 1.64, gm: 65.5, yoy: 20 },
      { q: 'Q3 FY25', rev: 16.0, eps: 1.75, gm: 66.0, yoy: 22 },
      { q: 'Q4 FY25', rev: 18.0, eps: 1.92, gm: 67.0, yoy: 28 },
      { q: 'Q1 FY26', rev: 19.3, eps: 2.05, gm: 68.0, yoy: 29.5 },
      { q: 'Q2 FY26 (G)', rev: 14.9, eps: null, gm: 66.0, yoy: null, guided: true }
    ],
    segments: [
      { name: 'Semiconductor Solutions', value: 12.52, color: '#3b82f6' },
      { name: 'Infrastructure Software (VMware)', value: 6.80, color: '#a855f7' }
    ],
    analysts: { buy: 47, hold: 13, sell: 0, avgTarget: 450, highTarget: 582, lowTarget: 223 },
    bull: [
      { title: 'AI Revenue Hypergrowth', detail: '$8.4B AI revenue in Q1 FY26 (+106% YoY). $73B backlog over 18 months. Path to $100B annual AI revenue by 2027-2028.' },
      { title: 'VMware Cash Cow', detail: 'Software operating margin expanded from 13-22% (pre-acquisition) to 78%. Recurring subscription revenue at 93% gross margin.' },
      { title: 'Custom Silicon Dominance', detail: '60% projected market share in custom AI ASICs through 2027. First to ship 2nm custom AI SoCs. Google, Meta, Apple, OpenAI customers.' },
      { title: 'PEG Ratio of 0.58', detail: 'Significantly undervalued relative to growth rate. FY25 FCF of $26.9B provides massive financial flexibility.' },
      { title: 'Networking Moat', detail: 'Tomahawk 6 at 102.4 Tbps is 2 quarters ahead of competition. $10B+ AI switch backlog.' },
      { title: 'Diversified Revenue', detail: '39% from sticky infrastructure software insulates against pure AI spending slowdowns.' }
    ],
    bear: [
      { title: 'Customer Concentration', detail: 'Google, Meta, and Anthropic potentially >70% of AI chip revenue. In-house chip programs could crater demand.' },
      { title: '$66B Debt Load', detail: 'Manageable now but vulnerable in a downturn. VMware acquisition was debt-funded.' },
      { title: 'EU Antitrust Risk', detail: 'CISPE filed antitrust complaint (March 2026) over VMware licensing changes.' },
      { title: 'Supply Chain Bottlenecks', detail: 'TSMC capacity constraints plus laser and PCB shortages reported March 2026.' },
      { title: 'Elevated Trailing Valuation', detail: 'Trailing P/E >60x; EV/EBITDA of 41x leaves little room for disappointment.' }
    ],
    scenarios: [
      { name: 'Bear', eps: 8, multiple: 18, price: 144 },
      { name: 'Moderate Bear', eps: 9, multiple: 22, price: 198 },
      { name: 'Base Case', eps: 10.5, multiple: 28, price: 450, highlight: true },
      { name: 'Bull', eps: 12, multiple: 35, price: 420 },
      { name: 'Ultra Bull', eps: 14, multiple: 40, price: 560 }
    ],
    thesis: 'Broadcom is the second biggest winner of the AI buildout after NVIDIA. Custom XPUs for Google, Meta, Apple + $73B backlog provide multi-year visibility. VMware at 78% operating margin is an underappreciated cash machine. PEG of 0.58 suggests undervaluation.',
    catalysts: ['Q2 FY26 earnings with AI revenue guidance update', 'New XPU customer wins', 'VMware Phase 2 migration completions', '2nm custom SoC production ramp'],
    risks_detail: 'Customer concentration, EU antitrust on VMware, TSMC capacity constraints, $66B debt'
  },

  LULU: {
    ticker: 'LULU', company: 'Lululemon Athletica', sector: 'Consumer', exchange: 'NASDAQ',
    price: 157, target: 220, analystTarget: 191, rating: 'Buy', conviction: 8.5, side: 'Long',
    fwdPE: 13, trailingPE: 10.9, evEbitda: 6.28, fwdEvEbitda: 7.5, pb: null, peg: 2.54,
    marketCap: '20.7B', divYield: null, fcfYield: 5.54,
    description: '#2 U.S. athleisure brand. Premium yoga/athletic apparel with 55%+ gross margins. Down 68% from peak on U.S. weakness, CEO departure, and tariff fears. China growing 25%+ YoY.',
    quarters: [
      { q: 'Q4 FY24', rev: 3.60, eps: 6.14, gm: 60.4, yoy: 12 },
      { q: 'Q1 FY25', rev: 2.40, eps: 2.60, gm: 57.0, yoy: 7.3 },
      { q: 'Q2 FY25', rev: 2.50, eps: 3.10, gm: 57.5, yoy: 7 },
      { q: 'Q3 FY25', rev: 2.60, eps: 2.59, gm: 56.0, yoy: 7 },
      { q: 'Q4 FY25', rev: 3.60, eps: 5.01, gm: 54.9, yoy: 1 },
      { q: 'FY26 (G)', rev: 11.43, eps: 12.20, gm: 55.0, yoy: 3, guided: true }
    ],
    segments: [
      { name: 'Americas', value: 7.44, color: '#3b82f6' },
      { name: 'China Mainland', value: 1.78, color: '#ef4444' },
      { name: 'Rest of World', value: 1.89, color: '#f59e0b' }
    ],
    analysts: { buy: 5, hold: 28, sell: 0, avgTarget: 191, highTarget: 303, lowTarget: 175 },
    bull: [
      { title: 'Deep Value at 10.9x TTM P/E', detail: 'Trading 73% below 10-year median P/E. FCF yield of 5.54% is 2x its 5Y average. EV/EBITDA of 6.28x.' },
      { title: 'China Growth Engine', detail: '25% YoY growth in China, now 16% of revenue. Long runway to 25%+ as store count expands.' },
      { title: '$1M Insider Purchase', detail: 'New board director (former Levi\'s CEO) bought at $164. First major insider buy since the 50%+ decline.' },
      { title: 'Brand Strength Endures', detail: 'Still #2 in U.S. athleisure with 21.2% share. 55%+ gross margins remain best-in-class.' },
      { title: '$1B Buyback Authorization', detail: 'Share repurchases at these depressed levels are highly accretive to long-term shareholders.' }
    ],
    bear: [
      { title: 'Leadership Vacuum', detail: 'CEO Calvin McDonald departed Jan 2026 with no successor. Interim co-CEOs. Chip Wilson proxy fight adds distraction.' },
      { title: 'Americas Decline', detail: 'Core market (~67% of revenue) posting negative comps. Consumer spending headwinds persist.' },
      { title: 'Tariff Exposure', detail: '$380M gross tariff impact in FY26. 40% of manufacturing from Vietnam, 28% of fabrics from China.' },
      { title: 'Margin Erosion', detail: 'Operating margin dropped from 23.7% to 19.9% in one year. Gross margin down 550 bps in Q4.' },
      { title: 'Competition Intensifying', detail: 'Vuori and Alo Yoga gaining share rapidly. Alo capturing younger consumers who see LULU as "their mother\'s brand."' },
      { title: 'Product Innovation Stall', detail: 'Failed Breezethrough launch. Slow to adapt to baggier clothing trend. FY26 EPS guidance below consensus.' }
    ],
    scenarios: [
      { name: 'Deep Bear', eps: 10, multiple: 10, price: 100 },
      { name: 'Moderate Bear', eps: 12, multiple: 10, price: 120 },
      { name: 'Base Case', eps: 13, multiple: 17, price: 220, highlight: true },
      { name: 'Bull (new CEO)', eps: 15, multiple: 20, price: 300 },
      { name: 'Ultra Bull', eps: 16, multiple: 25, price: 400 }
    ],
    thesis: 'Classic contrarian deep-value setup. Down 68% from peak, trading at the cheapest valuation in over a decade. China growth at 25%+ provides a real growth engine. The market is pricing in permanent impairment that isn\'t reflected in 55%+ gross margins and strong FCF. Key catalyst: new CEO appointment.',
    catalysts: ['New permanent CEO appointment', 'China expansion acceleration', 'Product innovation reset', 'Tariff mitigation progress', 'Insider buying continuation'],
    risks_detail: 'CEO vacuum, Americas deceleration, tariff headwinds ($380M), competition from Vuori/Alo, founder proxy fight'
  },

  CEG: {
    ticker: 'CEG', company: 'Constellation Energy', sector: 'Energy', exchange: 'NASDAQ',
    price: 303, target: 410, analystTarget: 400, rating: 'Buy', conviction: 8.3, side: 'Long',
    fwdPE: 27, trailingPE: 41, evEbitda: 20, fwdEvEbitda: 15, pb: null, peg: null,
    marketCap: '111B', divYield: 0.7, fcfYield: null,
    description: 'Largest U.S. nuclear fleet (21 reactors, 32.4 GW). Restarting Three Mile Island for Microsoft. Acquired Calpine for $16.4B creating 60 GW total capacity. The monopoly power provider for AI data centers.',
    quarters: [
      { q: 'Q4 2024', rev: 6.50, eps: 2.44, gm: null, yoy: null },
      { q: 'Q1 2025', rev: 6.60, eps: 2.14, gm: null, yoy: null },
      { q: 'Q2 2025', rev: 5.80, eps: 1.68, gm: null, yoy: null },
      { q: 'Q3 2025', rev: 6.57, eps: 3.04, gm: null, yoy: null },
      { q: 'Q4 2025', rev: 6.50, eps: 2.30, gm: null, yoy: null },
      { q: 'FY26 (G)', rev: 30.0, eps: 11.00, gm: null, yoy: 17, guided: true }
    ],
    segments: [
      { name: 'Nuclear Generation', value: 18.0, color: '#22c55e' },
      { name: 'Natural Gas (Calpine)', value: 8.0, color: '#f59e0b' },
      { name: 'Renewables & Other', value: 4.0, color: '#06b6d4' }
    ],
    analysts: { buy: 14, hold: 5, sell: 0, avgTarget: 400, highTarget: 481, lowTarget: 277 },
    bull: [
      { title: 'Nuclear-AI Convergence', detail: 'Sole owner of America\'s largest nuclear fleet when hyperscalers desperately need 24/7 carbon-free baseload for AI data centers.' },
      { title: '20-Year PPAs with Microsoft & Meta', detail: 'TMI restart (835 MW) for Microsoft. Clinton (1,121 MW) for Meta. Decades of predictable, contracted cash flow.' },
      { title: 'Calpine Creates 60 GW Giant', detail: '$16.4B acquisition adds 26 GW natural gas + world\'s largest geothermal complex. 20% EPS accretion in 2026.' },
      { title: 'EPS Trajectory: $11→$13→$17', detail: 'Management guiding strong earnings ramp through 2028 with $4.5-6B annual FCF.' },
      { title: 'TMI Restart Ahead of Schedule', detail: 'Now targeting 2027 (originally 2028). $1B DOE loan secured. Massive symbolic + financial catalyst.' },
      { title: 'Capacity Auction Wins', detail: 'Cleared 18,000 MW at record $333/MW-day, securing ~$2.2B in high-visibility revenue.' }
    ],
    bear: [
      { title: 'Regulatory Risk', detail: 'Litigation over behind-the-meter data center deals. FERC/state regulators may impose limits on direct nuclear-to-DC PPAs.' },
      { title: 'Valuation Premium', detail: 'Forward P/E of 27-32x is 61% above industry median of 18x. Priced for perfection.' },
      { title: 'Energy Price Sensitivity', detail: '$5/MWh drop in energy prices could cut 2026 earnings by ~$219M on unhedged portfolio.' },
      { title: 'Calpine Integration Risk', detail: '$26.6B total enterprise value deal. $5B mandatory divestitures reduce some benefits.' },
      { title: 'TMI Execution Risk', detail: '$1.6B restart of facility with significant reputational baggage. Construction/regulatory delays possible.' },
      { title: 'FY2025 EPS Decline', detail: 'Full-year 2025 EPS fell 38% to $7.40 from $11.91 in 2024, raising earnings quality questions.' }
    ],
    scenarios: [
      { name: 'Bear', eps: 9, multiple: 15, price: 135 },
      { name: 'Moderate Bear', eps: 11, multiple: 18, price: 198 },
      { name: 'Base Case', eps: 13, multiple: 25, price: 410, highlight: true },
      { name: 'Bull', eps: 16, multiple: 28, price: 448 },
      { name: 'Ultra Bull', eps: 17, multiple: 30, price: 510 }
    ],
    thesis: 'Constellation owns the only asset that can provide 24/7 carbon-free power at data center scale — America\'s largest nuclear fleet. With 20-year PPAs from Microsoft and Meta, the Calpine acquisition creating a 60 GW empire, and TMI restart ahead of schedule, CEG is a monopoly on AI power. Down 27% from highs creates an attractive entry.',
    catalysts: ['TMI restart progress milestones', 'Additional hyperscaler PPA announcements', 'Calpine synergy realization', 'NRC license renewals', 'Rising power prices'],
    risks_detail: 'Regulatory limits on nuclear-to-DC PPAs, Calpine integration, TMI restart delays, energy price volatility'
  },

  LLY: {
    ticker: 'LLY', company: 'Eli Lilly', sector: 'Healthcare', exchange: 'NYSE',
    price: 898, target: 1200, analystTarget: 1183, rating: 'Buy', conviction: 8.0, side: 'Long',
    fwdPE: 28, trailingPE: 40, evEbitda: 35.1, fwdEvEbitda: 24, pb: null, peg: 1.1,
    marketCap: '866B', divYield: 0.6, fcfYield: null,
    description: 'Co-leader of the GLP-1 obesity drug revolution. Tirzepatide (Mounjaro/Zepbound) is the world\'s best-selling drug. Pipeline includes orforglipron (oral GLP-1) and retatrutide (triple agonist with 28.7% weight loss).',
    quarters: [
      { q: 'Q4 2024', rev: 13.53, eps: 4.88, gm: null, yoy: 45 },
      { q: 'Q1 2025', rev: 12.73, eps: 3.06, gm: null, yoy: 45 },
      { q: 'Q2 2025', rev: 15.59, eps: 4.10, gm: null, yoy: 38 },
      { q: 'Q3 2025', rev: 17.60, eps: 7.02, gm: null, yoy: 54 },
      { q: 'Q4 2025', rev: 19.30, eps: 7.39, gm: null, yoy: 43 },
      { q: 'FY26 (G)', rev: 81.50, eps: 34.25, gm: null, yoy: 25, guided: true }
    ],
    segments: [
      { name: 'Tirzepatide (Mounjaro+Zepbound)', value: 36.5, color: '#22c55e' },
      { name: 'Oncology', value: 10.0, color: '#a855f7' },
      { name: 'Immunology', value: 8.0, color: '#3b82f6' },
      { name: 'Other Pharma', value: 10.6, color: '#f59e0b' }
    ],
    analysts: { buy: 17, hold: 2, sell: 1, avgTarget: 1183, highTarget: 1500, lowTarget: 830 },
    bull: [
      { title: 'Orforglipron Approval Catalyst', detail: 'FDA decision expected mid-April 2026. First oral small-molecule GLP-1 would massively expand TAM by removing injection barrier.' },
      { title: 'Retatrutide: Next-Gen Blockbuster', detail: 'Triple agonist showing 28.7% weight loss — superior to any current product. 7 Phase 3 readouts in 2026.' },
      { title: 'Medicare Coverage Expansion', detail: 'GLP-1 Bridge launching July 2026. BALANCE Model for Part D starting Jan 2027. Tens of millions of new patients.' },
      { title: '$50B+ Manufacturing Investment', detail: 'Virginia, Texas, Alabama, Pennsylvania, Puerto Rico expansions will alleviate supply constraints by 2027-2028.' },
      { title: '57% GLP-1 Market Share', detail: 'Tirzepatide growing faster than Novo\'s semaglutide. $100B GLP-1 market projected by 2030.' }
    ],
    bear: [
      { title: 'Pricing Headwinds', detail: 'Low-to-mid-teens price drag in 2026 from government access agreements, direct-to-patient pricing, and Medicaid.' },
      { title: 'Competition Intensifying', detail: 'Structure Therapeutics\' aleniglipron shows potentially better efficacy/tolerability. Novo\'s amycretin entering Phase 3.' },
      { title: 'Premium Valuation', detail: 'Forward P/E of ~28x is well above pharma sector. Stock priced for perfection across entire pipeline.' },
      { title: 'Manufacturing Execution Risk', detail: '$50B expansion across 5+ new sites. Any FDA warning letter could delay supply and revenue recognition.' },
      { title: 'IRA Drug Price Negotiation', detail: 'Government could target tirzepatide for price negotiations, structurally compressing margins.' }
    ],
    scenarios: [
      { name: 'Bear', eps: 30, multiple: 20, price: 600 },
      { name: 'Moderate Bear', eps: 34, multiple: 22, price: 748 },
      { name: 'Base Case', eps: 38, multiple: 32, price: 1200, highlight: true },
      { name: 'Bull', eps: 42, multiple: 35, price: 1470 },
      { name: 'Ultra Bull', eps: 45, multiple: 38, price: 1710 }
    ],
    thesis: 'Eli Lilly is the co-leader of a $100B GLP-1 market revolution. Orforglipron (oral) filing in 2026 and retatrutide (28.7% weight loss) provide pipeline optionality that justifies the premium. Medicare coverage mid-2026 unlocks tens of millions of patients. The stock has pulled back from highs, offering a better entry.',
    catalysts: ['FDA orforglipron decision (~April 2026)', 'Retatrutide Phase 3 readouts (ADA June 2026)', 'Medicare GLP-1 Bridge launch (July 2026)', 'Manufacturing capacity coming online'],
    risks_detail: 'Government pricing pressure, GLP-1 competition (Structure, Novo), premium valuation, manufacturing scale-up risk'
  },

  ANET: {
    ticker: 'ANET', company: 'Arista Networks', sector: 'Semiconductors', exchange: 'NYSE',
    price: 131, target: 175, analystTarget: 174, rating: 'Buy', conviction: 7.8, side: 'Long',
    fwdPE: 39, trailingPE: 44, evEbitda: 41.5, fwdEvEbitda: 32, pb: null, peg: 1.5,
    marketCap: '82B', divYield: null, fcfYield: null,
    description: 'Dominant Ethernet networking provider for AI data center clusters. Zero debt. 40%+ operating margins. AI networking revenue raised to $3.25B for 2026 (+100% YoY).',
    quarters: [
      { q: 'Q4 2024', rev: 1.93, eps: 0.66, gm: 64.0, yoy: null },
      { q: 'Q1 2025', rev: 2.01, eps: 0.65, gm: 63.5, yoy: 27.6 },
      { q: 'Q2 2025', rev: 2.21, eps: 0.73, gm: 64.0, yoy: 30.4 },
      { q: 'Q3 2025', rev: 2.31, eps: 0.75, gm: 63.2, yoy: 27.5 },
      { q: 'Q4 2025', rev: 2.49, eps: 0.82, gm: 63.4, yoy: 28.9 },
      { q: 'FY26 (G)', rev: 11.25, eps: 3.40, gm: 62.5, yoy: 25, guided: true }
    ],
    segments: [
      { name: 'Cloud/AI Networking', value: 3.25, color: '#6366f1' },
      { name: 'Enterprise Networking', value: 4.50, color: '#3b82f6' },
      { name: 'Campus/Edge', value: 3.50, color: '#06b6d4' }
    ],
    analysts: { buy: 16, hold: 5, sell: 0, avgTarget: 174, highTarget: 210, lowTarget: 112 },
    bull: [
      { title: 'AI Networking Tailwind', detail: '$3.25B AI revenue target for 2026 (~30% of sales). Hyperscalers spending $690B on AI infrastructure.' },
      { title: 'Ethernet Winning vs InfiniBand', detail: 'Ethernet now >2/3 of AI back-end network switch sales, up from <20% in late 2023. Arista is the leading vendor.' },
      { title: 'Product Leadership', detail: '7800R4/7700R4 with Jericho3-AI are best-in-class for 100K+ GPU clusters. First-mover on 1.6T platforms.' },
      { title: 'Revenue Acceleration Path', detail: '$10B+ by 2026 was two years ahead of schedule. 25% guided growth with potential for beats.' },
      { title: 'Fortress Balance Sheet', detail: 'Zero debt. Massive cash generation. Consistently beating estimates by 10%+.' }
    ],
    bear: [
      { title: 'NVIDIA Competition', detail: 'NVIDIA\'s Spectrum-X surpassed Arista in DC Ethernet revenue. NVIDIA can bundle networking with GPUs.' },
      { title: 'Customer Concentration', detail: 'Top-2 (Meta 26%, Microsoft 16%) = 42% of revenue. Any spending pause would be material.' },
      { title: 'Insider Selling', detail: 'Key executive cut stake by 71%. Nearly $27M in insider sales over 3 months.' },
      { title: 'Premium Valuation', detail: 'Forward P/E of 39x. Some intrinsic value estimates as low as $73 (46% overvalued).' },
      { title: 'Tariff/Margin Pressure', detail: 'Manufacturing in Mexico/Malaysia. 1-1.5% gross margin headwind from tariffs.' }
    ],
    scenarios: [
      { name: 'Bear', eps: 3.0, multiple: 20, price: 60 },
      { name: 'Moderate Bear', eps: 3.2, multiple: 28, price: 90 },
      { name: 'Base Case', eps: 3.5, multiple: 35, price: 175, highlight: true },
      { name: 'Bull', eps: 4.0, multiple: 40, price: 160 },
      { name: 'Ultra Bull', eps: 4.5, multiple: 45, price: 203 }
    ],
    thesis: 'Arista is the dominant Ethernet provider for AI clusters as the industry shifts from InfiniBand. $3.25B AI revenue growing 100%+ with zero debt and 40%+ operating margins. Premium valuation is justified by structural positioning in a $690B capex wave.',
    catalysts: ['Q1 2026 earnings (~$2.6B guided)', '1.6T switch platform ramp', 'New hyperscaler customer wins', 'Ethernet share gains vs InfiniBand'],
    risks_detail: 'NVIDIA Spectrum-X competition, customer concentration (Meta+MSFT=42%), insider selling, tariff margin pressure'
  },

  CCJ: {
    ticker: 'CCJ', company: 'Cameco Corp', sector: 'Energy', exchange: 'NYSE',
    price: 106, target: 140, analystTarget: 137, rating: 'Buy', conviction: 7.5, side: 'Long',
    fwdPE: 93, trailingPE: null, evEbitda: 60, fwdEvEbitda: 35, pb: null, peg: null,
    marketCap: '46B', divYield: 0.2, fcfYield: null,
    description: 'World\'s #2 uranium producer. 49% owner of Westinghouse (nuclear reactor technology). Structural uranium supply deficit as nuclear renaissance meets AI data center power demand.',
    quarters: [
      { q: 'Q4 2024', rev: 1.20, eps: 0.32, gm: null, yoy: null },
      { q: 'Q1 2025', rev: 0.75, eps: 0.16, gm: null, yoy: null },
      { q: 'Q2 2025', rev: 0.88, eps: 0.20, gm: null, yoy: null },
      { q: 'Q3 2025', rev: 0.62, eps: 0.07, gm: null, yoy: null },
      { q: 'Q4 2025', rev: 1.20, eps: 0.50, gm: null, yoy: null },
      { q: 'FY26 (G)', rev: 3.80, eps: 1.50, gm: null, yoy: 11, guided: true }
    ],
    segments: [
      { name: 'Uranium Mining', value: 2.20, color: '#22c55e' },
      { name: 'Fuel Services', value: 0.60, color: '#f59e0b' },
      { name: 'Westinghouse (49%)', value: 1.00, color: '#a855f7' }
    ],
    analysts: { buy: 7, hold: 3, sell: 0, avgTarget: 137, highTarget: 171, lowTarget: 75 },
    bull: [
      { title: 'Structural Uranium Supply Deficit', detail: '3.1 billion lbs of uncovered requirements through 2045. Kazatomprom cutting production. Limited new mine investment.' },
      { title: 'Westinghouse Optionality', detail: '49% stake provides exposure to $80B+ in US government-backed nuclear reactor construction. Dukovany contract generating cash.' },
      { title: 'Nuclear Renaissance', detail: '75+ reactors under construction, 120+ planned. Global capacity targeting 2x by 2040. Tech giants signing nuclear PPAs.' },
      { title: 'Uranium Price Upside', detail: 'Spot at $87/lb vs analyst targets of $100-135/lb. Long-term contracts provide base while uncommitted volumes capture upside.' },
      { title: 'Earnings Inflection', detail: 'Adjusted EPS more than doubled in 2025. Westinghouse turning profitable. +55% growth projected for 2026.' }
    ],
    bear: [
      { title: 'Extreme Valuation', detail: 'Forward P/E of 93x, EV/EBITDA of 52-70x. Priced for massive growth that must materialize over many years.' },
      { title: 'Uranium Price Volatility', detail: 'Spot fell from highs to $87/lb. 2026 realized pricing outlook appears "flattish" per management.' },
      { title: 'Operational Risks', detail: 'McArthur River delays (ground freezing). Cigar Lake depleting in ~10 years. Inkai JV suspended in early 2025.' },
      { title: 'Long Development Timelines', detail: 'New mines take 10-15 years. Replacement supply for depleting mines is uncertain.' },
      { title: 'Geopolitical Exposure', detail: '40% stake in Inkai (Kazakhstan) creates political and transportation risk. Russian enrichment sanctions add complexity.' }
    ],
    scenarios: [
      { name: 'Bear', eps: 0.80, multiple: 40, price: 32 },
      { name: 'Moderate Bear', eps: 1.20, multiple: 50, price: 60 },
      { name: 'Base Case', eps: 2.00, multiple: 55, price: 140, highlight: true },
      { name: 'Bull', eps: 2.50, multiple: 60, price: 150 },
      { name: 'Ultra Bull', eps: 3.00, multiple: 65, price: 195 }
    ],
    thesis: 'Cameco is the safest way to play the nuclear renaissance. Structural uranium deficit, 49% Westinghouse ownership, and nuclear PPAs from tech giants create a multi-decade tailwind. Expensive on traditional metrics but earnings are inflecting sharply higher.',
    catalysts: ['Rising uranium spot price toward $100+/lb', 'New Westinghouse reactor contracts', 'SMR deployment progress', 'Nuclear PPA announcements from hyperscalers'],
    risks_detail: 'High valuation multiples, uranium price volatility, mine depletion timelines, Kazakhstan geopolitical risk'
  },

  VRT: {
    ticker: 'VRT', company: 'Vertiv Holdings', sector: 'Industrials', exchange: 'NYSE',
    price: 276, target: 340, analystTarget: 280, rating: 'Hold', conviction: 6.8, side: 'Long',
    fwdPE: 42.5, trailingPE: 70, evEbitda: 38, fwdEvEbitda: 28, pb: null, peg: 1.32,
    marketCap: '99B', divYield: 0.1, fcfYield: null,
    description: 'Leading provider of thermal management (liquid cooling) and power systems for data centers. $15B backlog. Co-engineering with NVIDIA. Liquid cooling revenue doubling annually.',
    quarters: [
      { q: 'Q3 2024', rev: 2.07, eps: 0.76, gm: null, yoy: null },
      { q: 'Q4 2024', rev: 2.35, eps: 0.99, gm: null, yoy: null },
      { q: 'Q1 2025', rev: 2.05, eps: 0.64, gm: null, yoy: 25 },
      { q: 'Q2 2025', rev: 2.64, eps: 0.89, gm: null, yoy: 28 },
      { q: 'Q3 2025', rev: 2.68, eps: 1.02, gm: null, yoy: 29 },
      { q: 'Q4 2025', rev: 2.88, eps: 1.36, gm: null, yoy: 23 },
      { q: 'FY26 (G)', rev: 13.50, eps: 6.02, gm: null, yoy: 28, guided: true }
    ],
    segments: [
      { name: 'Thermal Management', value: 5.5, color: '#06b6d4' },
      { name: 'Power Management', value: 4.5, color: '#f59e0b' },
      { name: 'IT Infrastructure & Services', value: 3.5, color: '#a855f7' }
    ],
    analysts: { buy: 22, hold: 3, sell: 0, avgTarget: 280, highTarget: 325, lowTarget: 155 },
    bull: [
      { title: 'Structural AI Cooling Demand', detail: 'AI racks at 120-150kW make air cooling physically impossible. Liquid cooling is mandatory, not optional.' },
      { title: '$15B Backlog, 2.9x Book-to-Bill', detail: 'Legally binding orders with advance payments. 109% YoY backlog growth. Multi-year visibility.' },
      { title: 'NVIDIA Co-Engineering', detail: '800VDC platforms and liquid cooling co-developed with NVIDIA. Creates sticky relationships.' },
      { title: 'Margin Expansion', detail: 'Operating margin guiding to 22.5% in 2026 from ~18.5% in mid-2025. Scale benefits accelerating.' },
      { title: 'Acquisitions Deepening Moat', detail: 'PerchRight (~$1B) for fluid management. ThermoKey for heat rejection. Building full thermal stack.' }
    ],
    bear: [
      { title: 'Extreme Valuation', detail: '42x forward P/E — 126% premium to industry. Any miss could cause severe de-rating.' },
      { title: 'Demand Pull-Forward Risk', detail: 'Record orders may represent a one-time buildout wave. If demand normalizes in 2027-2028, revenue could cliff.' },
      { title: 'Competition Intensifying', detail: 'Schneider Electric, Eaton aggressively targeting liquid cooling. Near-parity in global DCPI market share.' },
      { title: 'Execution Risk', detail: 'Component shortages, factory ramp-ups, and $1B+ in acquisitions create integration/supply chain risk.' }
    ],
    scenarios: [
      { name: 'Bear', eps: 4.0, multiple: 20, price: 80 },
      { name: 'Moderate Bear', eps: 5.5, multiple: 25, price: 138 },
      { name: 'Base Case', eps: 6.5, multiple: 35, price: 340, highlight: true },
      { name: 'Bull', eps: 7.5, multiple: 40, price: 300 },
      { name: 'Ultra Bull', eps: 8.5, multiple: 45, price: 383 }
    ],
    thesis: 'Vertiv is the picks-and-shovels play on AI data center cooling — a requirement, not a luxury. $15B backlog and NVIDIA co-engineering provide multi-year visibility. Expensive but 252% organic order growth justifies premium.',
    catalysts: ['Q1 2026 earnings', 'New liquid cooling product launches', 'ThermoKey acquisition completion', 'Continued hyperscaler order acceleration'],
    risks_detail: 'Premium valuation (42x), competition from Schneider/Eaton, demand pull-forward risk, acquisition integration'
  },

  GD: {
    ticker: 'GD', company: 'General Dynamics', sector: 'Defense', exchange: 'NYSE',
    price: 348, target: 420, analystTarget: 396, rating: 'Buy', conviction: 7.2, side: 'Long',
    fwdPE: 21.2, trailingPE: 23.3, evEbitda: 16, fwdEvEbitda: 14, pb: null, peg: null,
    marketCap: '95B', divYield: 1.7, fcfYield: null,
    description: 'One of two companies that build nuclear submarines. $118B backlog — largest in history. Gulfstream business jets. Combat vehicles for NATO rearmament. Technologies/IT services.',
    quarters: [
      { q: 'Q4 2024', rev: 13.30, eps: 4.15, gm: null, yoy: 14.3 },
      { q: 'Q1 2025', rev: 12.20, eps: 3.66, gm: null, yoy: 13.9 },
      { q: 'Q2 2025', rev: 13.00, eps: 3.74, gm: null, yoy: 8.9 },
      { q: 'Q3 2025', rev: 12.90, eps: 3.88, gm: null, yoy: 10.6 },
      { q: 'Q4 2025', rev: 14.40, eps: 4.17, gm: null, yoy: 8.3 },
      { q: 'FY26 (G)', rev: 54.55, eps: 16.15, gm: null, yoy: 3.7, guided: true }
    ],
    segments: [
      { name: 'Technologies (GDIT)', value: 16.5, color: '#3b82f6' },
      { name: 'Marine Systems', value: 13.5, color: '#06b6d4' },
      { name: 'Aerospace (Gulfstream)', value: 13.1, color: '#a855f7' },
      { name: 'Combat Systems', value: 9.5, color: '#f59e0b' }
    ],
    analysts: { buy: 12, hold: 10, sell: 1, avgTarget: 396, highTarget: 444, lowTarget: 327 },
    bull: [
      { title: '$118B Backlog + $60.9B Potential', detail: '2+ years of revenue visibility. Book-to-bill 1.6x across all segments. $179B total addressable backlog.' },
      { title: 'Columbia-Class Submarine Ramp', detail: 'Navy\'s #1 priority. $15.38B contract mod in March 2026. Dedicated SIB funding for decades of work.' },
      { title: 'European Rearmament Supercycle', detail: '$10B+ in Combat Systems orders from NATO nations. M1E3 Abrams and XM30 provide multi-decade revenue.' },
      { title: 'Gulfstream Demand > Supply', detail: '1.4x book-to-bill. G700/G800 at premium price points. 160 deliveries guided for 2026.' },
      { title: 'Rising Defense Budgets', detail: '$901B enacted → $1.5T target. Structural tailwind for submarines, combat vehicles, and IT services.' }
    ],
    bear: [
      { title: 'Shipbuilding Execution Risk', detail: 'Labor shortages, Bath Iron Works strike (March 2026), cost overruns on fixed-price Navy contracts.' },
      { title: 'Gulfstream Delivery Bottlenecks', detail: 'Completions capacity limits deliveries to ~160. Analysts have downgraded on missed delivery expectations.' },
      { title: 'DOGE Budget Uncertainty', detail: 'Government efficiency initiatives could target defense IT contracts (Technologies segment).' },
      { title: 'Supply Chain Constraints', detail: 'Sole-source components restrict production pace across Marine and Aerospace.' }
    ],
    scenarios: [
      { name: 'Bear', eps: 14, multiple: 16, price: 224 },
      { name: 'Moderate Bear', eps: 15.5, multiple: 18, price: 279 },
      { name: 'Base Case', eps: 17, multiple: 22, price: 420, highlight: true },
      { name: 'Bull', eps: 18, multiple: 24, price: 432 },
      { name: 'Ultra Bull', eps: 19, multiple: 26, price: 494 }
    ],
    thesis: 'General Dynamics has the largest defense backlog in history ($118B) anchored by the Columbia-class submarine program. One of two companies in the world that can build nuclear subs. NATO rearmament and rising U.S. defense budgets provide a structural multi-year tailwind.',
    catalysts: ['Columbia-class production milestones', 'XM30 program award', 'European Combat Systems orders', 'Gulfstream delivery ramp', 'Defense budget increases'],
    risks_detail: 'Shipbuilding labor shortages, Gulfstream delivery bottlenecks, DOGE budget cuts, Bath Iron Works strike'
  },

  RTX: {
    ticker: 'RTX', company: 'RTX Corporation', sector: 'Defense', exchange: 'NYSE',
    price: 193, target: 235, analystTarget: 225, rating: 'Buy', conviction: 7.0, side: 'Long',
    fwdPE: 29, trailingPE: 38.4, evEbitda: 19.5, fwdEvEbitda: 16, pb: null, peg: null,
    marketCap: '259B', divYield: 1.4, fcfYield: null,
    description: 'Broadest defense portfolio: Patriot missiles (Raytheon), F-135 engines (Pratt & Whitney), aerospace systems (Collins). $268B record backlog. Tripling Patriot production.',
    quarters: [
      { q: 'Q4 2024', rev: 21.60, eps: 1.54, gm: null, yoy: 9 },
      { q: 'Q1 2025', rev: 20.30, eps: 1.47, gm: null, yoy: 5 },
      { q: 'Q2 2025', rev: 21.60, eps: 1.57, gm: null, yoy: 9 },
      { q: 'Q3 2025', rev: 22.50, eps: 1.70, gm: null, yoy: 12 },
      { q: 'Q4 2025', rev: 24.20, eps: 1.55, gm: null, yoy: 12.1 },
      { q: 'FY26 (G)', rev: 92.50, eps: 6.70, gm: null, yoy: 5.5, guided: true }
    ],
    segments: [
      { name: 'Pratt & Whitney', value: 36.0, color: '#3b82f6' },
      { name: 'Collins Aerospace', value: 28.0, color: '#a855f7' },
      { name: 'Raytheon', value: 28.0, color: '#f59e0b' }
    ],
    analysts: { buy: 13, hold: 6, sell: 3, avgTarget: 225, highTarget: 240, lowTarget: 179 },
    bull: [
      { title: '$268B Record Backlog', detail: '$161B commercial + $107B defense. Up 23% YoY. Massive multi-year revenue visibility.' },
      { title: 'Global Rearmament Supercycle', detail: 'NATO spending surge, $1.5T U.S. budget target. Tripling Patriot production. $50B umbrella DLA contract.' },
      { title: 'Commercial Aerospace Recovery', detail: 'Pratt aftermarket +16%, Collins aftermarket +13%. Fleet age and travel recovery drive long-term demand.' },
      { title: 'FCF Inflection', detail: 'FCF grew $3.4B YoY to $7.9B in 2025. Guiding $8.25-$8.75B in 2026.' },
      { title: 'Diversified Portfolio', detail: 'Three segments spanning commercial/defense/aftermarket reduce concentration risk.' }
    ],
    bear: [
      { title: 'GTF Engine Recall', detail: '$2.8B in projected costs. SEC probe into disclosure practices. Airlines grounding fleets.' },
      { title: 'Supply Chain Fragility', detail: 'Titanium shortages, rare earth China dependency. $500M reshoring initiative underway but takes time.' },
      { title: 'Premium Valuation', detail: '29x forward P/E. Budget cuts or sequestration could trigger de-rating.' },
      { title: 'F-35 Program Risk', detail: 'Delays in F-35 production or arms export policy shifts would hit Pratt military revenues.' }
    ],
    scenarios: [
      { name: 'Bear', eps: 6.0, multiple: 18, price: 108 },
      { name: 'Moderate Bear', eps: 6.5, multiple: 22, price: 143 },
      { name: 'Base Case', eps: 7.0, multiple: 28, price: 235, highlight: true },
      { name: 'Bull', eps: 7.5, multiple: 30, price: 225 },
      { name: 'Ultra Bull', eps: 8.0, multiple: 32, price: 256 }
    ],
    thesis: 'RTX has the broadest defense portfolio of any U.S. contractor. $268B record backlog, Patriot production tripling, and commercial aftermarket recovery provide multiple growth vectors. GTF recall overhang creates an entry point.',
    catalysts: ['Patriot production ramp', 'GTF recall resolution progress', 'International defense orders', 'F-135 ECU program milestones', 'FCF growth enabling buybacks'],
    risks_detail: 'GTF engine recall ($2.8B), SEC probe, supply chain fragility, arms export policy shifts'
  },

  CRWD: {
    ticker: 'CRWD', company: 'CrowdStrike', sector: 'Technology', exchange: 'NASDAQ',
    price: 393, target: 510, analystTarget: 507, rating: 'Hold', conviction: 6.5, side: 'Long',
    fwdPE: 75, trailingPE: null, evEbitda: 65, fwdEvEbitda: 50, pb: null, peg: 3.0,
    marketCap: '118B', divYield: null, fcfYield: null,
    description: 'Dominant cloud-native cybersecurity platform. $5.25B ARR growing 24%. Recovered from July 2024 outage. Charlotte AI and IBM partnership strengthen the moat.',
    quarters: [
      { q: 'Q4 FY25', rev: 1.06, eps: 0.28, gm: 75.0, yoy: 25 },
      { q: 'Q1 FY26', rev: 1.12, eps: 0.30, gm: 75.5, yoy: 23 },
      { q: 'Q2 FY26', rev: 1.18, eps: 0.32, gm: 76.0, yoy: 22 },
      { q: 'Q3 FY26', rev: 1.25, eps: 0.35, gm: 76.5, yoy: 21 },
      { q: 'Q4 FY26', rev: 1.30, eps: 0.38, gm: 77.0, yoy: 22 },
      { q: 'FY27 (E)', rev: 5.50, eps: 1.50, gm: 77.0, yoy: 15, guided: false }
    ],
    segments: [
      { name: 'Endpoint Security', value: 2.50, color: '#ef4444' },
      { name: 'Cloud Security', value: 1.20, color: '#3b82f6' },
      { name: 'Identity/ITDR', value: 0.80, color: '#a855f7' },
      { name: 'Log Management/SIEM', value: 0.60, color: '#f59e0b' }
    ],
    analysts: { buy: 40, hold: 7, sell: 0, avgTarget: 507, highTarget: 706, lowTarget: 300 },
    bull: [
      { title: 'Platform Consolidation', detail: 'Enterprises moving from point solutions to platforms. CrowdStrike is the leading consolidator with 5+ module adoption rising.' },
      { title: 'Charlotte AI', detail: 'AI-driven threat detection improving efficacy and reducing analyst workload. Differentiating moat.' },
      { title: 'Full Outage Recovery', detail: 'July 2024 outage is in the rear-view. Customer retention remained high. Brand strengthened through crisis response.' },
      { title: 'ARR Momentum', detail: '$5.25B ARR growing 24%. Net retention rate strong. IBM partnership expanding distribution.' }
    ],
    bear: [
      { title: 'Premium Valuation', detail: '75x forward P/E for 22% growth. PEG of 3.0 is expensive. Little room for error.' },
      { title: 'Microsoft Competition', detail: 'Microsoft Defender bundled with M365 is a price-competitive alternative for budget-conscious enterprises.' },
      { title: 'Growth Deceleration', detail: 'Revenue growth decelerating from 30%+ to low 20s. Market may re-rate if this continues.' },
      { title: 'Spending Rationalization', detail: 'Cybersecurity budgets under scrutiny as companies optimize IT spending.' }
    ],
    scenarios: [
      { name: 'Bear', eps: 1.2, multiple: 30, price: 180 },
      { name: 'Moderate Bear', eps: 1.4, multiple: 45, price: 315 },
      { name: 'Base Case', eps: 1.6, multiple: 55, price: 510, highlight: true },
      { name: 'Bull', eps: 1.8, multiple: 65, price: 585 },
      { name: 'Ultra Bull', eps: 2.0, multiple: 75, price: 750 }
    ],
    thesis: 'CrowdStrike is the dominant cybersecurity platform benefiting from consolidation trends. Premium valuation but justified by 24% ARR growth and expanding module adoption. Hold for now — wait for a better entry or growth re-acceleration.',
    catalysts: ['Module adoption metrics improvement', 'Charlotte AI revenue contribution', 'Large enterprise wins vs Microsoft', 'International expansion'],
    risks_detail: 'Premium valuation (75x), Microsoft Defender competition, growth deceleration, spending rationalization'
  },

  PWR: {
    ticker: 'PWR', company: 'Quanta Services', sector: 'Industrials', exchange: 'NYSE',
    price: 578, target: 650, analystTarget: 574, rating: 'Hold', conviction: 6.3, side: 'Long',
    fwdPE: 44, trailingPE: 50, evEbitda: 22, fwdEvEbitda: 18, pb: null, peg: 2.4,
    marketCap: '84B', divYield: 0.2, fcfYield: null,
    description: 'Largest electrical infrastructure contractor in North America. $44B backlog (+27.5%). Turnkey solutions for AI data center power delivery and grid upgrades.',
    quarters: [
      { q: 'Q3 2024', rev: 6.50, eps: 2.60, gm: null, yoy: null },
      { q: 'Q4 2024', rev: 7.00, eps: 2.90, gm: null, yoy: null },
      { q: 'Q1 2025', rev: 6.80, eps: 2.70, gm: null, yoy: 15 },
      { q: 'Q2 2025', rev: 7.20, eps: 3.00, gm: null, yoy: 18 },
      { q: 'Q3 2025', rev: 7.50, eps: 3.10, gm: null, yoy: 15 },
      { q: 'FY26 (G)', rev: 33.50, eps: 13.00, gm: null, yoy: 15, guided: true }
    ],
    segments: [
      { name: 'Electric Power', value: 16.0, color: '#f59e0b' },
      { name: 'Renewable Energy', value: 10.0, color: '#22c55e' },
      { name: 'Underground/Infrastructure', value: 7.5, color: '#3b82f6' }
    ],
    analysts: { buy: 11, hold: 5, sell: 0, avgTarget: 574, highTarget: 685, lowTarget: 440 },
    bull: [
      { title: '$44B Backlog', detail: '+27.5% YoY growth. Exceptional visibility from hyperscaler data center and grid upgrade contracts.' },
      { title: 'AI Power Picks & Shovels', detail: 'Doesn\'t depend on any single chip company. Every data center needs grid connection and power delivery.' },
      { title: 'Grid Modernization Tailwind', detail: 'U.S. grid needs $500B+ in upgrades. Quanta is the dominant contractor for transmission and distribution.' },
      { title: 'Renewable Energy Transition', detail: 'Solar, wind, and battery storage installation growing as part of energy transition.' }
    ],
    bear: [
      { title: 'Premium Valuation', detail: '44x forward P/E is expensive for a construction/services company with 15% growth.' },
      { title: 'Labor Cost Inflation', detail: 'Skilled electrician and lineman shortages drive wage inflation, compressing margins.' },
      { title: 'Project Execution Risk', detail: 'Large fixed-price projects carry overrun risk. Integration of acquisitions adds complexity.' },
      { title: 'Interest Rate Sensitivity', detail: 'Capital-intensive projects are affected by borrowing costs.' }
    ],
    scenarios: [
      { name: 'Bear', eps: 11, multiple: 20, price: 220 },
      { name: 'Moderate Bear', eps: 12, multiple: 28, price: 336 },
      { name: 'Base Case', eps: 14, multiple: 35, price: 650, highlight: true },
      { name: 'Bull', eps: 15, multiple: 40, price: 600 },
      { name: 'Ultra Bull', eps: 16, multiple: 45, price: 720 }
    ],
    thesis: 'Quanta is the infrastructure backbone of the AI buildout — every data center needs power delivery and grid connection. $44B backlog provides visibility. But at 44x forward P/E, the stock is priced for perfection. Hold for a better entry.',
    catalysts: ['New hyperscaler infrastructure contracts', 'Grid modernization legislation', 'Margin expansion from scale', 'Backlog conversion acceleration'],
    risks_detail: 'Premium valuation, labor cost inflation, project execution risk, interest rate sensitivity'
  },

  // SHORT POSITIONS
  TSLA: {
    ticker: 'TSLA', company: 'Tesla Inc', sector: 'Automotive', exchange: 'NASDAQ',
    price: 272, target: 155, analystTarget: 255, rating: 'Short', conviction: 8.1, side: 'Short',
    fwdPE: 185, trailingPE: 220, evEbitda: 120, fwdEvEbitda: 90, pb: 18, peg: null,
    marketCap: '870B', divYield: null, fcfYield: null,
    description: 'EV maker trading at 185x forward P/E with declining deliveries and compressing margins. CEO distracted by government role. Robotaxi timeline repeatedly pushed. BYD competition intensifying.',
    quarters: [
      { q: 'Q3 2024', rev: 25.2, eps: 0.72, gm: 19.8, yoy: 8 },
      { q: 'Q4 2024', rev: 25.7, eps: 0.73, gm: 19.3, yoy: 2 },
      { q: 'Q1 2025', rev: 24.9, eps: 0.65, gm: 18.5, yoy: -2 },
      { q: 'Q2 2025', rev: 25.5, eps: 0.68, gm: 18.0, yoy: 1 },
      { q: 'Q3 2025', rev: 25.1, eps: 0.62, gm: 17.5, yoy: -1 },
      { q: 'Q4 2025', rev: 25.8, eps: 0.60, gm: 17.0, yoy: 0 }
    ],
    segments: [
      { name: 'Automotive', value: 80.0, color: '#ef4444' },
      { name: 'Energy Storage', value: 12.0, color: '#22c55e' },
      { name: 'Services/Other', value: 8.0, color: '#f59e0b' }
    ],
    analysts: { buy: 12, hold: 18, sell: 10, avgTarget: 255, highTarget: 450, lowTarget: 85 },
    bull: [],
    bear: [
      { title: '185x Forward P/E, Declining Sales', detail: 'EV deliveries declining while BYD surpasses Tesla globally. Automotive margins compressed from 25%+ to 17%.' },
      { title: 'CEO Distraction', detail: 'Elon Musk\'s DOGE government role consuming significant time. Brand damage with progressive-leaning customer base.' },
      { title: 'Robotaxi Perpetual Delay', detail: 'Robotaxi promised since 2019. Each delay destroys the discounted value of the "optionality" priced into the stock.' },
      { title: 'China Competition', detail: 'BYD selling more EVs globally. Chinese manufacturers offering comparable technology at 40-60% lower prices.' },
      { title: 'Margin Compression', detail: 'Price cuts to maintain volume destroying automotive margins. 17% GM vs 25%+ in 2022. Trend worsening.' },
      { title: 'Valuation Disconnect', detail: '$870B market cap = more than all other automakers combined. For a company with declining growth.' }
    ],
    scenarios: [
      { name: 'Ultra Bear', eps: 1.5, multiple: 15, price: 23 },
      { name: 'Bear (Our Target)', eps: 2.5, multiple: 25, price: 155, highlight: true },
      { name: 'Base', eps: 3.0, multiple: 40, price: 120 },
      { name: 'Bull', eps: 4.0, multiple: 60, price: 240 },
      { name: 'Ultra Bull (Robotaxi)', eps: 5.0, multiple: 100, price: 500 }
    ],
    thesis: 'Tesla at 185x forward P/E with declining deliveries and compressing margins is the clearest large-cap short in the market. CEO distraction, BYD competition, and repeated robotaxi delays make this a valuation correction waiting to happen. The only bull case is continued narrative premium — which is fading.',
    catalysts: ['Continued delivery declines', 'Further margin compression', 'Robotaxi delays', 'BYD market share gains', 'Elon DOGE controversy'],
    risks_detail: 'Cult stock dynamics, Elon optionality, FSD/robotaxi breakthrough, energy storage growth'
  },

  PLTR: {
    ticker: 'PLTR', company: 'Palantir Technologies', sector: 'Technology', exchange: 'NYSE',
    price: 107, target: 60, analystTarget: 95, rating: 'Short', conviction: 7.4, side: 'Short',
    fwdPE: 117, trailingPE: 250, evEbitda: 150, fwdEvEbitda: 100, pb: 35, peg: 5.3,
    marketCap: '250B', divYield: null, fcfYield: null,
    description: 'AI data analytics for government and enterprise. 117x forward P/E for 22% revenue growth (PEG of 5.3x). Prices in perfection for a decade.',
    quarters: [
      { q: 'Q3 2024', rev: 0.73, eps: 0.10, gm: 82.0, yoy: 30 },
      { q: 'Q4 2024', rev: 0.83, eps: 0.14, gm: 81.0, yoy: 36 },
      { q: 'Q1 2025', rev: 0.88, eps: 0.13, gm: 82.0, yoy: 39 },
      { q: 'Q2 2025', rev: 0.93, eps: 0.15, gm: 82.5, yoy: 27 },
      { q: 'Q3 2025', rev: 0.97, eps: 0.14, gm: 82.0, yoy: 33 },
      { q: 'Q4 2025', rev: 1.00, eps: 0.15, gm: 82.0, yoy: 20 }
    ],
    segments: [
      { name: 'Government', value: 1.80, color: '#3b82f6' },
      { name: 'Commercial (U.S.)', value: 1.40, color: '#a855f7' },
      { name: 'Commercial (International)', value: 0.60, color: '#f59e0b' }
    ],
    analysts: { buy: 5, hold: 10, sell: 8, avgTarget: 95, highTarget: 150, lowTarget: 30 },
    bull: [],
    bear: [
      { title: '117x Forward P/E for 22% Growth', detail: 'PEG of 5.3x. Would need to grow at 50%+ for years to justify current valuation. Revenue is decelerating.' },
      { title: 'Government Contract Concentration', detail: '~47% of revenue from government. DOGE budget cuts and contract reviews create direct risk.' },
      { title: 'Revenue Growth Decelerating', detail: 'Growth slowed from 39% to 20% over recent quarters. Market paying for acceleration that isn\'t happening.' },
      { title: 'Insider Selling', detail: 'CEO Alex Karp has been a consistent seller. Significant insider sales at elevated levels.' },
      { title: 'Stock Up 300%+ on AI Hype', detail: 'AIP (AI Platform) is real but the valuation assumes massive market capture that hasn\'t materialized in revenue.' }
    ],
    scenarios: [
      { name: 'Ultra Bear', eps: 0.50, multiple: 25, price: 13 },
      { name: 'Bear (Our Target)', eps: 0.60, multiple: 40, price: 60, highlight: true },
      { name: 'Base', eps: 0.70, multiple: 60, price: 42 },
      { name: 'Bull', eps: 0.80, multiple: 100, price: 80 },
      { name: 'Ultra Bull', eps: 1.00, multiple: 130, price: 130 }
    ],
    thesis: 'Palantir at 117x forward P/E for decelerating 22% growth is a textbook valuation disconnect. PEG of 5.3x means the market is pricing in a decade of perfection. Government contract concentration + DOGE risk + insider selling = strong short case.',
    catalysts: ['Revenue growth deceleration below 20%', 'DOGE government contract reviews', 'Insider selling continuation', 'AI narrative fatigue', 'Multiple compression'],
    risks_detail: 'AI narrative strength, government spending tailwinds, AIP platform stickiness, cult stock dynamics'
  },

  SNOW: {
    ticker: 'SNOW', company: 'Snowflake', sector: 'Technology', exchange: 'NYSE',
    price: 185, target: 120, analystTarget: 195, rating: 'Short', conviction: 6.8, side: 'Short',
    fwdPE: null, trailingPE: null, evEbitda: null, fwdEvEbitda: null, pb: null, peg: null,
    marketCap: '62B', divYield: null, fcfYield: null,
    description: 'Cloud data platform. Still unprofitable at ~$3.5B revenue. 25x EV/Revenue with decelerating growth. Databricks competition intensifying. CEO transition.',
    quarters: [
      { q: 'Q3 FY25', rev: 0.90, eps: -0.10, gm: 67.0, yoy: 28 },
      { q: 'Q4 FY25', rev: 0.99, eps: -0.05, gm: 68.0, yoy: 27 },
      { q: 'Q1 FY26', rev: 1.01, eps: -0.04, gm: 68.5, yoy: 25 },
      { q: 'Q2 FY26', rev: 1.05, eps: -0.02, gm: 69.0, yoy: 23 },
      { q: 'Q3 FY26', rev: 1.08, eps: 0.00, gm: 69.5, yoy: 20 },
      { q: 'Q4 FY26 (E)', rev: 1.12, eps: 0.02, gm: 70.0, yoy: 13 }
    ],
    segments: [
      { name: 'Product Revenue', value: 3.80, color: '#06b6d4' },
      { name: 'Professional Services', value: 0.46, color: '#f59e0b' }
    ],
    analysts: { buy: 25, hold: 15, sell: 3, avgTarget: 195, highTarget: 250, lowTarget: 120 },
    bull: [],
    bear: [
      { title: 'Still Unprofitable', detail: '~$3.5B revenue and still not consistently profitable. Path to profitability requires sustained growth.' },
      { title: '25x EV/Revenue', detail: 'Premium valuation for decelerating growth. NRR declining from 130%+ to low 120s.' },
      { title: 'Databricks Competition', detail: 'Databricks growing faster with unified analytics+ML platform. Taking share in data lakehouse.' },
      { title: 'Growth Deceleration', detail: 'Revenue growth slowing from 30%+ to low 20s. If this continues to mid-teens, valuation collapses.' },
      { title: 'CEO Transition', detail: 'Sridhar Ramaswamy replaced Frank Slootman. Execution risk during leadership change.' }
    ],
    scenarios: [
      { name: 'Ultra Bear', eps: -0.20, multiple: null, price: 80 },
      { name: 'Bear (Our Target)', eps: 0.10, multiple: null, price: 120, highlight: true },
      { name: 'Base', eps: 0.30, multiple: null, price: 165 },
      { name: 'Bull', eps: 0.60, multiple: null, price: 220 },
      { name: 'Ultra Bull', eps: 1.00, multiple: null, price: 300 }
    ],
    thesis: 'Snowflake at 25x EV/Revenue with decelerating growth, no profits, and intensifying Databricks competition is overvalued. CEO transition adds execution risk. NRR declining signals customer spending optimization.',
    catalysts: ['NRR further decline', 'Growth deceleration below 20%', 'Databricks market share gains', 'Profitability miss', 'Customer churn acceleration'],
    risks_detail: 'Product quality, AI data workload growth, M&A target potential, turnaround under new CEO'
  },

  RIVN: {
    ticker: 'RIVN', company: 'Rivian Automotive', sector: 'Automotive', exchange: 'NASDAQ',
    price: 14, target: 7, analystTarget: 16, rating: 'Short', conviction: 6.5, side: 'Short',
    fwdPE: null, trailingPE: null, evEbitda: null, fwdEvEbitda: null, pb: null, peg: null,
    marketCap: '16B', divYield: null, fcfYield: null,
    description: 'EV startup burning cash at unsustainable rates. Negative gross margins. VW partnership provides lifeline but profitability years away.',
    quarters: [
      { q: 'Q3 2024', rev: 0.87, eps: -1.08, gm: -44.0, yoy: null },
      { q: 'Q4 2024', rev: 0.95, eps: -0.95, gm: -38.0, yoy: null },
      { q: 'Q1 2025', rev: 1.00, eps: -0.85, gm: -30.0, yoy: 15 },
      { q: 'Q2 2025', rev: 1.10, eps: -0.75, gm: -22.0, yoy: 20 },
      { q: 'Q3 2025', rev: 1.15, eps: -0.65, gm: -15.0, yoy: 32 },
      { q: 'Q4 2025', rev: 1.20, eps: -0.55, gm: -8.0, yoy: 26 }
    ],
    segments: [
      { name: 'R1T/R1S Vehicles', value: 3.80, color: '#3b82f6' },
      { name: 'Amazon Vans (EDV)', value: 0.65, color: '#f59e0b' }
    ],
    analysts: { buy: 10, hold: 12, sell: 5, avgTarget: 16, highTarget: 28, lowTarget: 7 },
    bull: [],
    bear: [
      { title: 'Negative Gross Margins', detail: 'Losing money on every vehicle sold. Gross margin improving but still negative.' },
      { title: 'Cash Burn', detail: 'Burning $1.5-2B+ per year. VW investment provides lifeline but runway is limited without profitability.' },
      { title: 'Competition Intensifying', detail: 'Legacy OEMs and Chinese EVs entering the market at lower price points.' },
      { title: 'R2 Execution Risk', detail: 'R2 (affordable model) is critical to scale but faces significant manufacturing ramp risk.' },
      { title: 'Tariff Exposure', detail: 'Component costs rising from tariffs, further pressuring already negative margins.' }
    ],
    scenarios: [
      { name: 'Ultra Bear (Bankruptcy)', eps: null, multiple: null, price: 2 },
      { name: 'Bear (Our Target)', eps: null, multiple: null, price: 7, highlight: true },
      { name: 'Base', eps: null, multiple: null, price: 12 },
      { name: 'Bull (R2 Success)', eps: null, multiple: null, price: 25 },
      { name: 'Ultra Bull', eps: null, multiple: null, price: 40 }
    ],
    thesis: 'Rivian is burning cash at unsustainable rates with negative gross margins. The VW partnership helps but profitability is years away. At $14/share, the risk/reward favors shorts as competition intensifies and cash runway shortens.',
    catalysts: ['Continued cash burn acceleration', 'R2 launch delays', 'VW deal uncertainty', 'EV demand softening', 'Capital raise at dilutive levels'],
    risks_detail: 'VW partnership, R2 launch success, EV policy tailwinds, Amazon van contract expansion'
  },

  ABNB: {
    ticker: 'ABNB', company: 'Airbnb', sector: 'Consumer', exchange: 'NASDAQ',
    price: 128, target: 95, analystTarget: 145, rating: 'Watch', conviction: 5.5, side: 'Short',
    fwdPE: 32, trailingPE: 38, evEbitda: 22, fwdEvEbitda: 18, pb: null, peg: 4.0,
    marketCap: '82B', divYield: null, fcfYield: null,
    description: 'Short-term rental marketplace. Growth decelerating to single digits while trading at 32x forward. Regulatory headwinds mounting globally.',
    quarters: [
      { q: 'Q3 2024', rev: 3.73, eps: 2.13, gm: 83.0, yoy: 10 },
      { q: 'Q4 2024', rev: 2.48, eps: 0.73, gm: 82.0, yoy: 12 },
      { q: 'Q1 2025', rev: 2.27, eps: 0.41, gm: 81.0, yoy: 9 },
      { q: 'Q2 2025', rev: 2.95, eps: 0.90, gm: 82.0, yoy: 8 },
      { q: 'Q3 2025', rev: 3.90, eps: 2.20, gm: 83.0, yoy: 5 },
      { q: 'Q4 2025', rev: 2.60, eps: 0.80, gm: 82.0, yoy: 5 }
    ],
    segments: [
      { name: 'Stays', value: 9.50, color: '#3b82f6' },
      { name: 'Experiences', value: 1.00, color: '#a855f7' },
      { name: 'Other', value: 0.22, color: '#f59e0b' }
    ],
    analysts: { buy: 15, hold: 20, sell: 5, avgTarget: 145, highTarget: 200, lowTarget: 90 },
    bull: [],
    bear: [
      { title: 'Growth Decelerating to Single Digits', detail: 'Revenue growth slowed from 12% to 5% over recent quarters. Premium valuation assumes re-acceleration that may not come.' },
      { title: 'Regulatory Headwinds', detail: 'NYC near-total ban, Barcelona phasing out tourist apartments, EU short-term rental regulations tightening.' },
      { title: 'Supply Outpacing Demand', detail: 'Listings growing faster than bookings in many markets, pressuring pricing power for hosts.' },
      { title: '32x Forward P/E for 8% Growth', detail: 'PEG of 4.0x. Marketplace business with limited pricing power trading at a growth premium it doesn\'t deserve.' }
    ],
    scenarios: [
      { name: 'Ultra Bear', eps: 3.0, multiple: 15, price: 45 },
      { name: 'Bear (Our Target)', eps: 3.5, multiple: 20, price: 95, highlight: true },
      { name: 'Base', eps: 4.0, multiple: 28, price: 112 },
      { name: 'Bull', eps: 4.5, multiple: 35, price: 158 },
      { name: 'Ultra Bull', eps: 5.0, multiple: 40, price: 200 }
    ],
    thesis: 'Airbnb at 32x forward P/E with single-digit growth and mounting regulatory headwinds is overvalued. Supply outpacing demand pressures host pricing. This is a low-conviction watch — could become a stronger short if growth decelerates further.',
    catalysts: ['Further growth deceleration', 'New city-level regulatory restrictions', 'Host pricing pressure', 'Travel demand normalization'],
    risks_detail: 'Brand strength, new product categories (Experiences, luxury), housing shortage tailwind, travel industry recovery'
  }
};

// Growth projection models for portfolio simulator
const GROWTH_MODELS = {
  MU:   { bear: [-30, -15, 5, 10, 10], base: [55, 40, 20, 15, 10], bull: [80, 60, 30, 20, 15] },
  AVGO: { bear: [-10, 0, 5, 8, 8], base: [25, 20, 18, 15, 12], bull: [40, 35, 25, 20, 15] },
  LULU: { bear: [-15, -5, 0, 5, 5], base: [10, 15, 20, 15, 12], bull: [25, 30, 25, 20, 15] },
  CEG:  { bear: [-5, 0, 5, 8, 8], base: [20, 15, 12, 10, 8], bull: [35, 25, 20, 15, 12] },
  LLY:  { bear: [-10, 5, 8, 10, 10], base: [20, 25, 20, 15, 12], bull: [35, 35, 25, 20, 15] },
  ANET: { bear: [-15, -5, 5, 8, 8], base: [20, 18, 15, 12, 10], bull: [35, 30, 22, 18, 15] },
  CCJ:  { bear: [-20, -10, 0, 5, 5], base: [15, 20, 15, 12, 10], bull: [30, 35, 25, 20, 15] },
  VRT:  { bear: [-20, -10, 0, 5, 5], base: [25, 20, 15, 12, 10], bull: [40, 35, 25, 18, 12] },
  GD:   { bear: [-5, 0, 3, 5, 5], base: [10, 10, 8, 7, 6], bull: [18, 15, 12, 10, 8] },
  RTX:  { bear: [-8, -3, 3, 5, 5], base: [12, 10, 8, 7, 6], bull: [20, 15, 12, 10, 8] },
  CRWD: { bear: [-25, -10, 5, 8, 8], base: [15, 12, 12, 10, 10], bull: [30, 25, 20, 18, 15] },
  PWR:  { bear: [-15, -5, 3, 5, 5], base: [12, 10, 10, 8, 7], bull: [22, 18, 15, 12, 10] },
  TSLA: { bear: [-40, -25, -10, 0, 5], base: [-15, -10, 0, 5, 5], bull: [10, 15, 20, 25, 30] },
  PLTR: { bear: [-35, -20, -10, 0, 5], base: [-10, -5, 5, 8, 8], bull: [15, 20, 15, 12, 10] },
  SNOW: { bear: [-30, -15, -5, 0, 5], base: [-5, 5, 10, 12, 10], bull: [15, 20, 18, 15, 12] },
  RIVN: { bear: [-50, -30, -20, 0, 5], base: [-20, -10, 5, 15, 20], bull: [10, 25, 40, 35, 25] },
  ABNB: { bear: [-20, -10, -5, 0, 3], base: [5, 8, 8, 7, 6], bull: [15, 15, 12, 10, 8] }
};
