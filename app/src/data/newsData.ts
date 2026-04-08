export interface NewsArticle {
  id: string; title: string; excerpt: string; content: string;
  category: 'geopolitics'|'economic'|'trend'|'organization'|'currency'|'digital'|'human-interest';
  date: string; author: string; source: string; sourceUrl: string;
  image: string; readTime: string; impact: 'high'|'medium'|'low';
  tags: string[]; isArchived?: boolean; articleType?: 'news'|'analysis';
}

export const newsArticles: NewsArticle[] = [
    {
        "id":  "pakistan-helps-iran-and-u-s-agree-on-two-week-ceasefire-to-pause-fighting",
        "title":  "Pakistan Helps Iran and U.S. Agree on Two‑Week Ceasefire to Pause Fighting",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-04-07",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-1.webp",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "global-powers-clash-at-un-russia-and-china-veto-strait-of-hormuz-resolution-amid-rising-tensions",
        "title":  "Global Powers Clash at UN: Russia and China Veto Strait of Hormuz Resolution Amid Rising Tensions",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-04-07",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-2.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "gunfire-erupts-outside-israeli-consulate-in-istanbul-highlighting-rising-regional-tensions",
        "title":  "Gunfire Erupts Outside Israeli Consulate in Istanbul, Highlighting Rising Regional Tensions",
        "excerpt":  "",
        "content":  "",
        "category":  "human-interest",
        "date":  "2026-04-07",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-3.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "easter-church-attack-highlights-escalating-wave-of-violence-across-nigeria",
        "title":  "Easter Church Attack Highlights Escalating Wave of Violence Across Nigeria",
        "excerpt":  "",
        "content":  "",
        "category":  "human-interest",
        "date":  "2026-04-07",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-4.webp",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "world-health-day-2026-marks-a-moment-to-reflect-on-global-wellbeing",
        "title":  "World Health Day 2026 Marks a Moment to Reflect on Global Wellbeing",
        "excerpt":  "",
        "content":  "",
        "category":  "human-interest",
        "date":  "2026-04-07",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-5.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "markets-on-edge-as-five-signals-shape-investor-sentiment",
        "title":  "Markets on Edge as Five Signals Shape Investor Sentiment",
        "excerpt":  "",
        "content":  "",
        "category":  "economic",
        "date":  "2026-04-07",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-6.png",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "analysis"
    },
    {
        "id":  "war-beyond-borders-middle-east-nations-bear-the-hidden-cost-of-u-s-israel-iran-conflict",
        "title":  "War Beyond Borders: Middle East Nations Bear the Hidden Cost of U.S.–Israel–Iran Conflict",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-04-06",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-7.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "hungary-on-edge-explosives-scare-and-fierce-election-battle-shake-the-nation",
        "title":  "Hungary on Edge: Explosives Scare and Fierce Election Battle Shake the Nation",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-04-06",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-8.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "human-ingenuity-in-the-age-of-ai-why-we-still-matter",
        "title":  "Human Ingenuity in the Age of AI: Why We Still Matter",
        "excerpt":  "",
        "content":  "",
        "category":  "digital",
        "date":  "2026-04-06",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-9.webp",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "analysis"
    },
    {
        "id":  "global-energy-shock-why-asia-pays-the-price-for-decisions-far-away",
        "title":  "Global Energy Shock: Why Asia Pays the Price for Decisions Far Away",
        "excerpt":  "",
        "content":  "",
        "category":  "economic",
        "date":  "2026-04-06",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-10.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "analysis"
    },
    {
        "id":  "stablecoin-as-a-silent-force-in-the-contest-for-global-financial-influence",
        "title":  "Stablecoin as a Silent Force in the Contest for Global Financial Influence",
        "excerpt":  "",
        "content":  "",
        "category":  "economic",
        "date":  "2026-04-05",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-11.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "analysis"
    },
    {
        "id":  "power-shock-a-silent-surge-in-global-electricity-prices-sparks-fear-across-continents",
        "title":  "Power Shock: A Silent Surge in Global Electricity Prices Sparks Fear Across Continents",
        "excerpt":  "",
        "content":  "",
        "category":  "economic",
        "date":  "2026-04-05",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-12.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "netanyahu-confirms-strikes-on-iran-geopolitical-and-global-economic-implications",
        "title":  "Netanyahu Confirms Strikes on Iran: Geopolitical and Global Economic Implications",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-04-05",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-13.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "senegal-curbs-ministers-foreign-travel-as-oil-shock-forces-austerity-measures",
        "title":  "Senegal Curbs Ministers’ Foreign Travel as Oil Shock Forces Austerity Measures",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-04-05",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-14.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "boosting-southeast-asia-s-local-economy-with-tourism-amid-global-challenges",
        "title":  "Boosting Southeast Asia’s Local Economy With Tourism Amid Global Challenges",
        "excerpt":  "",
        "content":  "",
        "category":  "human-interest",
        "date":  "2026-04-05",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-15.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "are-top-u-s-generals-forced-out-over-politics-not-national-security",
        "title":  "Are Top U.S. Generals Forced Out Over Politics, Not National Security?",
        "excerpt":  "",
        "content":  "",
        "category":  "human-interest",
        "date":  "2026-04-04",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-16.heif",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "rising-food-prices-amid-middle-east-conflict-market-analysis-and-business-implications",
        "title":  "Rising Food Prices Amid Middle East Conflict: Market Analysis and Business Implications",
        "excerpt":  "",
        "content":  "",
        "category":  "economic",
        "date":  "2026-04-04",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-17.webp",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "analysis"
    },
    {
        "id":  "is-china-replacing-the-united-states-as-the-world-s-peacekeeper",
        "title":  "Is China Replacing the United States as the World’s Peacekeeper?",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-04-04",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-18.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "vietnam-embraces-china-s-cross-border-qr-payment-network",
        "title":  "Vietnam Embraces China’s Cross-Border QR Payment Network",
        "excerpt":  "",
        "content":  "",
        "category":  "digital",
        "date":  "2026-04-04",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-19.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "myanmar-s-junta-chief-moves-toward-presidency-drawing-skepticism-and-public-unease",
        "title":  "Myanmar’s Junta Chief Moves Toward Presidency, Drawing Skepticism and Public Unease",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-04-03",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-20.webp",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "navigating-volatility-risks-and-opportunities-in-global-and-malaysian-stock-markets",
        "title":  "Navigating Volatility: Risks and Opportunities in Global and Malaysian Stock Markets",
        "excerpt":  "",
        "content":  "",
        "category":  "economic",
        "date":  "2026-04-02",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-21.png",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "analysis"
    },
    {
        "id":  "gold-in-april-2026-navigating-volatility-amid-geopolitical-and-economic-uncertainty",
        "title":  "Gold in April 2026: Navigating Volatility Amid Geopolitical and Economic Uncertainty",
        "excerpt":  "",
        "content":  "",
        "category":  "economic",
        "date":  "2026-04-02",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-22.png",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "analysis"
    },
    {
        "id":  "supreme-court-strikes-down-trump-tariffs-strategic-insights-for-businesses",
        "title":  "Supreme Court Strikes Down Trump Tariffs: Strategic Insights for Businesses",
        "excerpt":  "",
        "content":  "",
        "category":  "economic",
        "date":  "2026-04-02",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-23.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "analysis"
    },
    {
        "id":  "is-the-united-states-stepping-back-strategic-shift-or-sign-of-weakness",
        "title":  "Is the United States Stepping Back? Strategic Shift or Sign of Weakness",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-04-02",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-24.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "eastern-indonesia-hit-by-powerful-quake-one-dead-as-government-rushes-aid-to-north-maluku-and",
        "title":  "Eastern Indonesia Hit by Powerful Quake, One Dead as Government Rushes Aid to North Maluku and North Sulawesi",
        "excerpt":  "",
        "content":  "",
        "category":  "human-interest",
        "date":  "2026-04-02",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-25.webp",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "europe-faces-a-new-energy-pressures-middle-east-tensions-rise",
        "title":  "Europe Faces a New Energy Pressures Middle East Tensions Rise",
        "excerpt":  "",
        "content":  "",
        "category":  "economic",
        "date":  "2026-04-02",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-26.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "quantum-computing-the-next-digital-breakthrough-or-a-global-power-race",
        "title":  "Quantum Computing: The Next Digital Breakthrough or a Global Power Race",
        "excerpt":  "",
        "content":  "",
        "category":  "digital",
        "date":  "2026-04-01",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-27.png",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "trump-signals-endgame-in-iran-war-while-threatening-nato-exit-and-allies",
        "title":  "Trump Signals Endgame in Iran War While Threatening NATO Exit and Allies",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-04-01",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-28.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "stalled-diplomacy-rising-pressure-global-powers-push-to-mediate-as-us-iran-war-intensifies",
        "title":  "Stalled Diplomacy, Rising Pressure: Global Powers Push to Mediate as US–Iran War Intensifies",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-04-01",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-29.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "japan-iran-and-the-yuan-a-new-threat-to-dollar-dominance",
        "title":  "Japan, Iran and the Yuan: A New Threat to Dollar Dominance?",
        "excerpt":  "",
        "content":  "",
        "category":  "economic",
        "date":  "2026-04-01",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-30.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "analysis"
    },
    {
        "id":  "u-s-dollar-outlook-2026-strength-now-uncertainty-ahead",
        "title":  "U.S. Dollar Outlook 2026: Strength Now, Uncertainty Ahead",
        "excerpt":  "",
        "content":  "",
        "category":  "economic",
        "date":  "2026-04-01",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-31.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "analysis"
    },
    {
        "id":  "is-cuba-next-rising-u-s-pressure-signals-a-new-flashpoint-in-the-americas",
        "title":  "Is Cuba Next? Rising U.S. Pressure Signals a New Flashpoint in the Americas",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-03-31",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-32.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "gold-faces-structural-headwinds-as-macro-regime-shifts-point-to-further-downside",
        "title":  " Gold Faces Structural Headwinds as Macro Regime Shifts Point to Further Downside",
        "excerpt":  "",
        "content":  "",
        "category":  "economic",
        "date":  "2026-03-31",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-33.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "analysis"
    },
    {
        "id":  "justice-or-double-standard-israel-s-death-penalty-law-raises-questions-of-hypocrisy",
        "title":  "Justice or Double Standard? Israel’s Death Penalty Law Raises Questions of Hypocrisy",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-03-31",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-34.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "trump-s-take-the-oil-remark-on-iran-sparks-global-tension-and-market-shock",
        "title":  "Trump’s ‘Take the Oil’ Remark on Iran Sparks Global Tension and Market Shock",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-03-30",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-35.webp",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "australia-faces-fuel-price-surge-and-growing-shortages-amid-global-oil-disruptions",
        "title":  "Australia Faces Fuel Price Surge and Growing Shortages Amid Global Oil Disruptions",
        "excerpt":  "",
        "content":  "",
        "category":  "economic",
        "date":  "2026-03-30",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-36.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "philippines-reasserts-sabah-claim-at-united-nations-malaysia-lodges-strong-diplomatic-protest",
        "title":  "Philippines Reasserts Sabah Claim at United Nations; Malaysia Lodges Strong Diplomatic Protest",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-03-29",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-37.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "pakistan-steps-in-as-mediator-in-iran-crisis-amid-fragile-talks",
        "title":  "Pakistan Steps In as Mediator in Iran Crisis Amid Fragile Talks",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-03-29",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-38.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "u-s-troop-surge-near-iran-raises-stakes-in-expanding-regional-crisis",
        "title":  "U.S. Troop Surge Near Iran Raises Stakes in Expanding Regional Crisis",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-03-29",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-39.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "targeting-the-truth-three-journalists-killed-yesterday-in-lebanon-strike-sparks-outrage-and",
        "title":  "Targeting the Truth: Three Journalists Killed Yesterday in Lebanon Strike Sparks Outrage and Doubt",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-03-29",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-40.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "houthis-claim-missile-strike-on-israel-opening-new-front-in-regional-conflict",
        "title":  "Houthis Claim Missile Strike on Israel, Opening New Front in Regional Conflict",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-03-28",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-41.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "hydropower-in-the-global-energy-system-strategic-economic-and-industrial-insights-2026-business",
        "title":  "Hydropower in the Global Energy System: Strategic, Economic, and Industrial Insights (2026) – Business-Focused Analyst Report",
        "excerpt":  "",
        "content":  "",
        "category":  "economic",
        "date":  "2026-03-28",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-42.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "g7-speaks-loudly-but-actions-lag-behind",
        "title":  "G7 Speaks Loudly, But Actions Lag Behind",
        "excerpt":  "",
        "content":  "",
        "category":  "economic",
        "date":  "2026-03-28",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-43.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "strategic-access-and-power-how-energy-conflict-is-redrawing-global-influence",
        "title":  "Strategic Access and Power: How Energy Conflict Is Redrawing Global Influence",
        "excerpt":  "",
        "content":  "",
        "category":  "economic",
        "date":  "2026-03-27",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-44.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "brazil-condemns-trump-remarks-warns-of-escalation-and-inequality-in-global-power-dynamics",
        "title":  "Brazil Condemns Trump Remarks, Warns of Escalation and Inequality in Global Power Dynamics",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-03-27",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-45.jpg",
        "readTime":  "5 min",
        "impact":  "low",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "trump-grants-10-day-window-for-diplomacy-as-iran-rejects-u-s-terms",
        "title":  "Trump Grants 10-Day Window for Diplomacy as Iran Rejects U.S. Terms",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-03-27",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-46.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "global-energy-crisis-reshapes-business-landscape-across-southeast-asia",
        "title":  "Global Energy Crisis Reshapes Business Landscape Across Southeast Asia",
        "excerpt":  "",
        "content":  "",
        "category":  "economic",
        "date":  "2026-03-26",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-47.heif",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "analysis"
    },
    {
        "id":  "diplomacy-in-the-shadow-of-war-why-a-xi-visit-still-matters",
        "title":  "Diplomacy in the Shadow of War, Why a Xi Visit Still Matters",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-03-26",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-48.jpg",
        "readTime":  "5 min",
        "impact":  "low",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "iran-rejects-u-s-peace-proposal-tightens-control-of-strait-of-hormuz",
        "title":  "Iran Rejects U.S. Peace Proposal, Tightens Control of Strait of Hormuz",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-03-26",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-49.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "imf-steps-up-engagement-as-debt-risks-build-across-emerging-markets",
        "title":  "IMF Steps Up Engagement as Debt Risks Build Across Emerging Markets",
        "excerpt":  "",
        "content":  "",
        "category":  "economic",
        "date":  "2026-03-26",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-50.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "imf-and-world-bank-annual-meetings-2026-bangkok-takes-centre-stage",
        "title":  "IMF and World Bank Annual Meetings 2026: Bangkok Takes Centre Stage",
        "excerpt":  "",
        "content":  "",
        "category":  "economic",
        "date":  "2026-03-25",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-51.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "dollar-rallies-emerging-market-fx-slumps-as-oil-shock-spurs-flight-to-safety",
        "title":  "Dollar Rallies, Emerging-Market FX Slumps as Oil Shock Spurs Flight to Safety",
        "excerpt":  "",
        "content":  "",
        "category":  "economic",
        "date":  "2026-03-25",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-52.png",
        "readTime":  "5 min",
        "impact":  "high",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "philippines-declares-energy-emergency-as-oil-crisis-forces-hundreds-of-gas-stations-to-shut",
        "title":  "Philippines Declares Energy Emergency as Oil Crisis Forces Hundreds of Gas Stations to Shut Down",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-03-25",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-53.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "larry-fink-warns-modern-capitalism-is-failing-to-share-wealth",
        "title":  "Larry Fink Warns Modern Capitalism Is Failing to Share Wealth",
        "excerpt":  "",
        "content":  "",
        "category":  "economic",
        "date":  "2026-03-24",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-54.webp",
        "readTime":  "5 min",
        "impact":  "low",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "global-markets-whipsawed-as-oil-shock-rate-bets-drive-volatility",
        "title":  "Global Markets Whipsawed as Oil Shock, Rate Bets Drive Volatility",
        "excerpt":  "",
        "content":  "",
        "category":  "economic",
        "date":  "2026-03-24",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-55.png",
        "readTime":  "5 min",
        "impact":  "high",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "analysis"
    },
    {
        "id":  "global-oil-reserve-strain-hits-asia-s-most-vulnerable-economies",
        "title":  "Global Oil Reserve Strain Hits Asia’s Most Vulnerable Economies",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-03-24",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-56.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "u-s-iran-talks-raise-hopes-but-no-ceasefire-yet-as-war-continues",
        "title":  "U.S. Iran Talks Raise Hopes, but No Ceasefire Yet as War Continues",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-03-23",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-57.jpg",
        "readTime":  "5 min",
        "impact":  "low",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "the-war-economy-as-structural-violence-profit-power-and-the-failure-of-international-regulation",
        "title":  "The War Economy as Structural Violence: Profit, Power, and the Failure of International Regulation",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-03-23",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-58.jpg",
        "readTime":  "5 min",
        "impact":  "high",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "global-inequality-widens-as-middle-east-war-triggers-economic-shockwaves",
        "title":  "Global Inequality Widens as Middle East War Triggers Economic Shockwaves",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-03-23",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-59.jpg",
        "readTime":  "5 min",
        "impact":  "high",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "oil-shock-u-s-iran-conflict-triggers-a-new-global-energy-crisis",
        "title":  "Oil Shock: U.S.–Iran Conflict Triggers a New Global Energy Crisis",
        "excerpt":  "",
        "content":  "",
        "category":  "economic",
        "date":  "2026-03-22",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-60.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "analysis"
    },
    {
        "id":  "kazakhstan-s-new-constitution-reform-or-power-consolidation",
        "title":  "Kazakhstan’s New Constitution: Reform or Power Consolidation?",
        "excerpt":  "",
        "content":  "",
        "category":  "economic",
        "date":  "2026-03-22",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-61.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "demand-side-solutions-or-misplaced-responsibility-issues-with-the-latest-international-energy",
        "title":  "Demand-Side Solutions or Misplaced Responsibility? Issues with the Latest International Energy Agency Report on Easing Oil Prices",
        "excerpt":  "",
        "content":  "",
        "category":  "economic",
        "date":  "2026-03-21",
        "author":  "Azim",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-62.png",
        "readTime":  "5 min",
        "impact":  "high",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "the-dragon-and-the-bear-in-the-persian-gulf-how-russia-and-china-navigate-the-us-israel-iran-war",
        "title":  "The Dragon and the Bear in the Persian Gulf: How Russia and China Navigate the US-Israel-Iran War",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-03-20",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-63.jpg",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    },
    {
        "id":  "countries-reportedly-able-to-pass-the-selective-blockade-of-the-strait-of-hormuz",
        "title":  "Countries Reportedly Able to Pass: The Selective Blockade of the Strait of Hormuz",
        "excerpt":  "",
        "content":  "",
        "category":  "geopolitics",
        "date":  "2026-03-20",
        "author":  "zaid",
        "source":  "HyoBuddy News",
        "sourceUrl":  "#",
        "image":  "/images/sanity-imported/sanity-img-64.webp",
        "readTime":  "5 min",
        "impact":  "medium",
        "tags":  {

                 },
        "isArchived":  false,
        "articleType":  "news"
    }
];

export const getArticleById = (id: string): NewsArticle | undefined => newsArticles.find(a => a.id === id);
export const getActiveArticles = (): NewsArticle[] => newsArticles.filter(a => !a.isArchived);
export const searchArticles = (query: string): NewsArticle[] => newsArticles.filter(a => 
  a.title.toLowerCase().includes(query.toLowerCase()) ||
  a.excerpt.toLowerCase().includes(query.toLowerCase())
);
export const getArticlesByCategory = (category: string): NewsArticle[] => newsArticles.filter(a => a.category === category);
export const isSanityConfigured = false;

