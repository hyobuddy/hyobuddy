const fs = require('fs');
const path = require('path');
const https = require('https');

// SANITY CONFIG
const SANITY_CONFIG = {
  projectId: '35ugzwpe',
  dataset: 'production',
  apiVersion: '2024-03-01',
  token: 'skL6VhcwUm91igjAoPDZ5X2bYodFCG57mcBNAuEYO6b5lrrnCvPUKH0Oi01rp4FZa7enN8jqgiMEYkKPM9ec1OsVijPkVhk9gDH4TTVzWq4ynEbwoEr7BklTO1VJRqNfwV1LYKT4YvX7j3FcBhY4m8PVNSFSTSCVW80XCJsEhuTvk0J2YXzQ'
};

const QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id, title, "slug": slug.current, excerpt,
  "body": body, "categories": categories[]->{title, "slug": slug.current},
  "featuredImage": mainImage, "author": author->{name},
  publishedAt, source, sourceUrl, tags, isArchived
}`;

async function fetchFromSanity() {
  console.log('?? Fetching from Sanity...');
  const url = `https://${SANITY_CONFIG.projectId}.api.sanity.io/v${SANITY_CONFIG.apiVersion}/data/query/${SANITY_CONFIG.dataset}?query=${encodeURIComponent(QUERY)}`;
  
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'Authorization': `Bearer ${SANITY_CONFIG.token}` } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch(e) { reject(e); }
      });
    }).on('error', reject);
  });
}

function extractImageUrls(obj, urls = new Set()) {
  if (typeof obj === 'string' && obj.includes('cdn.sanity.io')) urls.add(obj);
  else if (Array.isArray(obj)) obj.forEach(item => extractImageUrls(item, urls));
  else if (obj && typeof obj === 'object') Object.values(obj).forEach(v => extractImageUrls(v, urls));
  return urls;
}

async function downloadImage(url, index, total, imageDir) {
  const ext = path.extname(url.split('?')[0]) || '.webp';
  const filename = `sanity-image-${index + 1}${ext}`;
  const filepath = path.join(imageDir, filename);
  
  return new Promise((resolve) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          process.stdout.write(`\r?? ${index + 1}/${total} images`);
          resolve({ success: true, url, filename });
        });
      } else {
        file.close();
        fs.unlinkSync(filepath);
        resolve({ success: false, url, error: res.statusCode });
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
      resolve({ success: false, url, error: err.message });
    });
  });
}

async function main() {
  try {
    // 1. Fetch from Sanity
    const result = await fetchFromSanity();
    const articles = result.result || [];
    console.log(`? Fetched ${articles.length} articles\n`);

    // 2. Create backup folder
    const backupDir = path.join(__dirname, 'sanity-backup');
    fs.mkdirSync(backupDir, { recursive: true });
    fs.writeFileSync(path.join(backupDir, 'articles-raw.json'), JSON.stringify(articles, null, 2));
    console.log('?? Saved: sanity-backup/articles-raw.json');

    // 3. Extract image URLs
    const imageUrls = Array.from(extractImageUrls(articles));
    console.log(`???  Found ${imageUrls.length} unique images\n`);

    // 4. Create image folder
    const imageDir = path.join(__dirname, 'public', 'images', 'sanity-imported');
    fs.mkdirSync(imageDir, { recursive: true });

    // 5. Download images
    console.log('?? Downloading images...');
    const mapping = {};
    for (let i = 0; i < imageUrls.length; i++) {
      const result = await downloadImage(imageUrls[i], i, imageUrls.length, imageDir);
      if (result.success) mapping[result.url] = `/images/sanity-imported/${result.filename}`;
      await new Promise(r => setTimeout(r, 50));
    }
    console.log('\n? Images downloaded!');

    // 6. Save mapping
    fs.writeFileSync(path.join(backupDir, 'image-mapping.json'), JSON.stringify(mapping, null, 2));
    console.log(`?? Saved: sanity-backup/image-mapping.json`);

    // 7. Create newsData.ts
    const newsData = articles.map(a => ({
      id: a.slug || a._id,
      title: a.title,
      excerpt: a.excerpt || '',
      content: '',
      category: 'economic',
      date: a.publishedAt ? a.publishedAt.split('T')[0] : new Date().toISOString().split('T')[0],
      author: a.author?.name || 'HyoBuddy Editorial',
      source: a.source || 'HyoBuddy News',
      sourceUrl: a.sourceUrl || '#',
      image: a.featuredImage?.asset?.url ? mapping[a.featuredImage.asset.url] || a.featuredImage.asset.url : '/images/service-freight.jpg',
      readTime: '5 min',
      impact: 'medium',
      tags: a.tags || [],
      isArchived: a.isArchived || false
    }));

    const newsDataContent = `export interface NewsArticle {
  id: string; title: string; excerpt: string; content: string;
  category: 'geopolitics' | 'economic' | 'trend' | 'organization' | 'currency' | 'digital' | 'human-interest';
  date: string; author: string; source: string; sourceUrl: string;
  image: string; readTime: string; impact: 'high' | 'medium' | 'low';
  tags: string[]; isArchived?: boolean;
}

export const newsArticles: NewsArticle[] = ${JSON.stringify(newsData, null, 2)};

export const getArticleById = (id: string) => newsArticles.find(a => a.id === id);
export const getActiveArticles = () => newsArticles.filter(a => !a.isArchived);
export const searchArticles = (query: string) => newsArticles.filter(a => 
  a.title.toLowerCase().includes(query.toLowerCase()) ||
  a.excerpt.toLowerCase().includes(query.toLowerCase())
);
`;

    fs.writeFileSync(path.join(__dirname, 'src', 'data', 'newsData.ts'), newsDataContent);
    console.log('?? Saved: src/data/newsData.ts\n');

    // 8. Disable Sanity
    const sanityPath = path.join(__dirname, 'src', 'lib', 'sanity.ts');
    if (fs.existsSync(sanityPath)) {
      let content = fs.readFileSync(sanityPath, 'utf8');
      content = content.replace(/export const isSanityConfigured = true/, 'export const isSanityConfigured = false');
      fs.writeFileSync(sanityPath, content);
      console.log('?? Disabled Sanity connection');
    }

    console.log('\n+--------------------------------------------------------+');
    console.log('¦           ? MIGRATION COMPLETE!                       ¦');
    console.log('+--------------------------------------------------------+');
    console.log(`\n?? Summary:`);
    console.log(`   • Articles: ${articles.length}`);
    console.log(`   • Images: ${imageUrls.length} (${Object.keys(mapping).length} downloaded)`);
    console.log(`   • newsData.ts: Updated`);
    console.log(`   • Sanity: Disabled\n`);

  } catch (err) {
    console.error('? Error:', err.message);
    process.exit(1);
  }
}

main();
