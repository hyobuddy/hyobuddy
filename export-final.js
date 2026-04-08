const fs = require('fs');
const path = require('path');
const https = require('https');

const TOKEN = 'skrlhVGlYck8QoaudJ0wv38CQx3RrlQV6j0X0FBqxTlLCNJQxeR43WBI8vFCk9gVljcJCdMxH5EEJ2Xn7hTJqGvWNgbO6H2lJPPK8P2U9ccDaKtNnOa6kURBk67F7PCA70HRAUPvYTlDiioU7qaw0JL6NXb72yuG2G1J015H9rGtVKDd11rL';
const PROJECT_ID = '35ugzwpe';
const DATASET = 'production';
const API_VERSION = '2024-03-01';

const QUERY = encodeURIComponent(`*[_type == "post"] | order(publishedAt desc) {
  _id, title, "slug": slug.current, excerpt,
  "body": body, "categories": categories[]->{title,"slug":slug.current},
  "featuredImage": mainImage{"asset":asset->{url}},
  "author": author->{name}, publishedAt, source, sourceUrl, tags, isArchived, impact, readTime, articleType
}`);

function fetchSanity() {
  return new Promise((resolve, reject) => {
    const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=${QUERY}`;
    https.get(url, { headers: { 'Authorization': `Bearer ${TOKEN}` } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch(e) { reject(e); }
      });
    }).on('error', reject);
  });
}

function extractUrls(obj, urls=new Set()) {
  if (typeof obj === 'string' && obj.includes('cdn.sanity.io')) urls.add(obj);
  else if (Array.isArray(obj)) obj.forEach(i => extractUrls(i, urls));
  else if (obj && typeof obj === 'object') Object.values(obj).forEach(v => extractUrls(v, urls));
  return urls;
}

function downloadImg(url, idx, total, dir) {
  return new Promise((resolve) => {
    const ext = path.extname(url.split('?')[0]) || '.webp';
    const fname = `sanity-img-${idx+1}${ext}`;
    const file = fs.createWriteStream(path.join(dir, fname));
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => { file.close(); process.stdout.write(`\r?? ${idx+1}/${total}`); resolve({ok:true, url, fname}); });
      } else { file.close(); resolve({ok:false, url}); }
    }).on('error', () => { file.close(); resolve({ok:false, url}); });
  });
}

async function main() {
  console.log('?? Fetching articles...');
  const result = await fetchSanity();
  const articles = result.result || [];
  console.log(`? Found ${articles.length} articles\n`);

  const backupDir = path.join(__dirname, 'app', 'sanity-backup');
  fs.mkdirSync(backupDir, { recursive: true });
  fs.writeFileSync(path.join(backupDir, 'articles.json'), JSON.stringify(articles, null, 2));

  const urls = Array.from(extractUrls(articles));
  console.log(`???  Found ${urls.length} images\n`);

  const imgDir = path.join(__dirname, 'app', 'public', 'images', 'sanity-imported');
  fs.mkdirSync(imgDir, { recursive: true });

  console.log('?? Downloading images...');
  const mapping = {};
  for (let i = 0; i < urls.length; i++) {
    const r = await downloadImg(urls[i], i, urls.length, imgDir);
    if (r.ok) mapping[r.url] = `/images/sanity-imported/${r.fname}`;
  }
  console.log('\n? Images done!');

  fs.writeFileSync(path.join(backupDir, 'mapping.json'), JSON.stringify(mapping, null, 2));

  const catMap = {'Geopolitics':'geopolitics','Economic':'economic','Market Trends':'trend','Organizations':'organization','Currencies':'currency','Digital':'digital','Human Interest':'human-interest'};
  const newsData = articles.map(a => ({
    id: a.slug || a._id,
    title: a.title,
    excerpt: a.excerpt || '',
    content: '',
    category: catMap[a.categories?.[0]?.title] || 'economic',
    date: a.publishedAt?.split('T')[0] || '2024-01-01',
    author: a.author?.name || 'HyoBuddy Editorial',
    source: a.source || 'HyoBuddy News',
    sourceUrl: a.sourceUrl || '#',
    image: a.featuredImage?.asset?.url ? (mapping[a.featuredImage.asset.url] || a.featuredImage.asset.url) : '/images/service-freight.jpg',
    readTime: a.readTime || '5 min',
    impact: a.impact || 'medium',
    tags: a.tags || [],
    isArchived: a.isArchived || false,
    articleType: a.articleType || 'news'
  }));

  const ts = `export interface NewsArticle {
  id: string; title: string; excerpt: string; content: string;
  category: 'geopolitics'|'economic'|'trend'|'organization'|'currency'|'digital'|'human-interest';
  date: string; author: string; source: string; sourceUrl: string;
  image: string; readTime: string; impact: 'high'|'medium'|'low';
  tags: string[]; isArchived?: boolean; articleType?: 'news'|'analysis';
}
export const newsArticles: NewsArticle[] = ${JSON.stringify(newsData, null, 2)};
export const getArticleById = (id: string) => newsArticles.find(a => a.id === id);
export const getActiveArticles = () => newsArticles.filter(a => !a.isArchived);
export const searchArticles = (q: string) => newsArticles.filter(a => 
  a.title.toLowerCase().includes(q.toLowerCase()) || a.excerpt.toLowerCase().includes(q.toLowerCase())
);
export const isSanityConfigured = false;`;

  fs.writeFileSync(path.join(__dirname, 'app', 'src', 'data', 'newsData.ts'), ts);

  let sanity = fs.readFileSync(path.join(__dirname, 'app', 'src', 'lib', 'sanity.ts'), 'utf8');
  sanity = sanity.replace(/export const isSanityConfigured = true/, 'export const isSanityConfigured = false');
  fs.writeFileSync(path.join(__dirname, 'app', 'src', 'lib', 'sanity.ts'), sanity);

  console.log('\n+--------------------------------------------------------+');
  console.log('¦           ? MIGRATION COMPLETE!                       ¦');
  console.log('+--------------------------------------------------------+');
  console.log(`\n?? Summary:`);
  console.log(`   • Articles: ${articles.length}`);
  console.log(`   • Images: ${urls.length} (${Object.keys(mapping).length} downloaded)`);
  console.log(`   • newsData.ts: Updated`);
  console.log(`   • Sanity: Disabled`);
}

main().catch(e => { console.error('? Error:', e.message); process.exit(1); });
