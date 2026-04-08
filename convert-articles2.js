const fs = require('fs');
const path = require('path');

const newsDataPath = path.join('app', 'src', 'data', 'newsData.ts');
const content = fs.readFileSync(newsDataPath, 'utf8');

// Find all article objects using regex
const articleRegex = /\{\s*"id":\s*"([^"]+)"[\s\S]*?"title":\s*"([^"]+)"[\s\S]*?"excerpt":\s*"([^"]*)"[\s\S]*?"content":\s*`([\s\S]*?)`,\s*"category"/g;
const articles = [];
let match;

while ((match = articleRegex.exec(content)) !== null) {
  console.log('Found article: ' + match[2].substring(0, 50));
}

// Alternative: find positions and extract manually
const idMatches = [...content.matchAll(/"id":\s*"([^"]+)"/g)];
console.log('Found ' + idMatches.length + ' IDs');
