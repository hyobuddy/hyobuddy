const fs = require('fs');
const path = require('path');

const newsDataPath = path.join('app', 'src', 'data', 'newsData.ts');
const content = fs.readFileSync(newsDataPath, 'utf8');

const startIdx = content.indexOf('export const newsArticles: NewsArticle[] = [');
if (startIdx === -1) {
  console.error('Could not find newsArticles array start');
  process.exit(1);
}

const arrayStart = content.indexOf('[', startIdx);

let bracketCount = 0;
let inString = false;
let stringChar = null;
let arrayEnd = -1;

for (let i = arrayStart; i < content.length; i++) {
  const char = content[i];
  const prevChar = i > 0 ? content[i-1] : null;
  
  if (inString) {
    if (char === stringChar && prevChar !== '\\\\') {
      inString = false;
    }
  } else {
    if (char === '"' || char === "'" || char === '\`') {
      inString = true;
      stringChar = char;
    } else if (char === '[') {
      bracketCount++;
    } else if (char === ']') {
      bracketCount--;
      if (bracketCount === 0) {
        arrayEnd = i;
        break;
      }
    }
  }
}

if (arrayEnd === -1) {
  console.error('Could not find array end');
  process.exit(1);
}

const arrayContent = content.substring(arrayStart, arrayEnd + 1);

let articles;
try {
  articles = eval('(' + arrayContent + ')');
} catch(e) {
  console.error('Parse error:', e.message);
  process.exit(1);
}

console.log('Found ' + articles.length + ' articles');

const outputDir = path.join('app', 'src', 'data', 'news');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const processedIds = new Set();
let createdCount = 0;

articles.forEach((article, index) => {
  let fileId = article.id || article.title.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .substring(0, 50);
  
  if (processedIds.has(fileId)) {
    fileId = fileId + '-' + index;
  }
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
    tags: article.tags || [],
    isArchived: article.isArchived || false,
    source: article.source || 'HyoBuddy News',
    sourceUrl: article.sourceUrl || '#',
    readTime: article.readTime || '5 min',
  };
  
  const outputPath = path.join(outputDir, fileId + '.json');
  fs.writeFileSync(outputPath, JSON.stringify(cleanArticle, null, 2), 'utf8');
  createdCount++;
});

console.log('Created ' + createdCount + ' JSON files in ' + outputDir);
