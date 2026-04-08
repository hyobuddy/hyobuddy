const fs = require('fs');
const path = require('path');

const newsDataPath = path.join('app', 'src', 'data', 'newsData.ts');
const content = fs.readFileSync(newsDataPath, 'utf8');

const startMarker = 'export const newsArticles: NewsArticle[] = ';
const startIdx = content.indexOf(startMarker);
if (startIdx === -1) {
  console.error('Could not find start marker');
  process.exit(1);
}

let braceDepth = 0;
let inString = false;
let stringChar = null;
let escapeNext = false;
let arrayStart = -1;
let arrayEnd = -1;

for (let i = startIdx + startMarker.length; i < content.length; i++) {
  const char = content[i];
  
  if (escapeNext) {
    escapeNext = false;
    continue;
  }
  
  if (char === '\\\\') {
    escapeNext = true;
    continue;
  }
  
  if (inString) {
    if (char === stringChar) {
      inString = false;
    }
  } else {
    if (char === '\"' || char === \"'\" || char === '\') {
      inString = true;
      stringChar = char;
    } else if (char === '[' && arrayStart === -1) {
      arrayStart = i;
      braceDepth = 1;
    } else if (char === '[') {
      braceDepth++;
    } else if (char === ']') {
      braceDepth--;
      if (braceDepth === 0) {
        arrayEnd = i + 1;
        break;
      }
    }
  }
}

if (arrayStart === -1 || arrayEnd === -1) {
  console.error('Could not find array boundaries');
  process.exit(1);
}

const arrayContent = content.substring(arrayStart, arrayEnd);

let articles;
try {
  articles = JSON.parse(arrayContent);
} catch(e) {
  try {
    articles = eval('(' + arrayContent + ')');
  } catch(e2) {
    console.error('Parse error:', e2.message);
    process.exit(1);
  }
}

console.log('Found ' + articles.length + ' articles');

const outputDir = path.join('app', 'src', 'data', 'news');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const processedIds = new Set();
let createdCount = 0;

articles.forEach((article, index) => {
  let fileId = article.id || 'article-' + index;
  fileId = fileId.replace(/[^a-zA-Z0-9_-]/g, '-').toLowerCase();
  
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
    tags: Array.isArray(article.tags) ? article.tags : [],
    isArchived: !!article.isArchived,
    source: article.source || 'HyoBuddy News',
    sourceUrl: article.sourceUrl || '#',
    readTime: article.readTime || '5 min',
  };
  
  const outputPath = path.join(outputDir, fileId + '.json');
  fs.writeFileSync(outputPath, JSON.stringify(cleanArticle, null, 2), 'utf8');
  createdCount++;
});

console.log('Created ' + createdCount + ' JSON files in ' + outputDir);
