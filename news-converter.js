const fs = require('fs');
const path = require('path');

const newsDataPath = path.join('app', 'src', 'data', 'newsData.ts');
const content = fs.readFileSync(newsDataPath, 'utf8');

const startMarker = 'export const newsArticles: NewsArticle[] = ';
const startIdx = content.indexOf(startMarker);

let braceDepth = 0;
let inString = false;
let stringChar = null;
let escapeNext = false;
let arrayStart = -1;
let arrayEnd = -1;

for (let i = startIdx + startMarker.length; i < content.length; i++) {
  const char = content[i];
  if (escapeNext) { escapeNext = false; continue; }
  if (char === '\\') { escapeNext = true; continue; }
  if (inString) {
    if (char === stringChar) { inString = false; }
  } else {
    if (char === '"' || char === "'" || char === '`') { inString = true; stringChar = char; }
    else if (char === '[' && arrayStart === -1) { arrayStart = i; braceDepth = 1; }
    else if (char === '[') { braceDepth++; }
    else if (char === ']') { braceDepth--; if (braceDepth === 0) { arrayEnd = i + 1; break; } }
  }
}

const arrayContent = content.substring(arrayStart, arrayEnd);
let articles = eval('(' + arrayContent + ')');
console.log('Found ' + articles.length + ' articles');

const outputDir = path.join('app', 'src', 'data', 'news');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const processedIds = new Set();
articles.forEach((article, index) => {
  let fileId = (article.id || 'article-' + index).replace(/[^a-zA-Z0-9_-]/g, '-').toLowerCase();
  if (processedIds.has(fileId)) fileId = fileId + '-' + index;
  processedIds.add(fileId);
  
  const cleanArticle = {
    title: article.title || '',
    excerpt: article.excerpt || '',
    content: article.content || '',
    category: article.category || 'geopolitics',
    date: article.date || new Date().toISOString().split('T')[0],
    author: article.author || '',
    image: article.image || '',
    impact: article.impact || 'medium',
    articleType: article.articleType || 'news',
    tags: Array.isArray(article.tags) ? article.tags : [],
    isArchived: !!article.isArchived,
    source: article.source || 'HyoBuddy News',
    sourceUrl: article.sourceUrl || '#',
    readTime: article.readTime || '5 min',
  };
  fs.writeFileSync(path.join(outputDir, fileId + '.json'), JSON.stringify(cleanArticle, null, 2), 'utf8');
});
console.log('Created ' + processedIds.size + ' JSON files');