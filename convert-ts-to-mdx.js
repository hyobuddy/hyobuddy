/**
 * Convert TypeScript news data to MDX files
 */
const fs = require('fs');
const path = require('path');

const INPUT_FILE = path.join(__dirname, 'app', 'src', 'data', 'newsData.ts');
const OUTPUT_DIR = path.join(__dirname, 'app', 'content', 'articles');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`Created directory: ${OUTPUT_DIR}`);
}

const fileContent = fs.readFileSync(INPUT_FILE, 'utf-8');
const arrayStart = fileContent.indexOf('export const newsArticles: NewsArticle[] = [');
const arrayEnd = fileContent.indexOf('];\n\nexport const getArticleById');

if (arrayStart === -1 || arrayEnd === -1) {
  console.error('Could not find newsArticles array in the file');
  process.exit(1);
}

let arrayContent = fileContent.substring(
  arrayStart + 'export const newsArticles: NewsArticle[] = '.length,
  arrayEnd + 1
);

let jsonContent = arrayContent
  .replace(/\s+/g, ' ')
  .replace(/,\s*([}\]])/g, '$1')
  .replace(/([{,]\s*)(\w+):/g, '$1"$2":')
  .replace(/:\s*undefined/g, ': null')
  .replace(/"tags":\s*\{\s*\}/g, '"tags": []')
  .replace(/\/\/.*$/gm, '')
  .replace(/\/\*[\s\S]*?\*\//g, '');

const parsedArticles = JSON.parse(jsonContent);
console.log(`Found ${parsedArticles.length} articles`);

let createdCount = 0;
let skippedCount = 0;
const seenSlugs = new Set();

for (const article of parsedArticles) {
  if (!article.id) {
    skippedCount++;
    continue;
  }
  
  let slug = article.id.replace(/\.html$/, '');
  const originalSlug = slug;
  let counter = 1;
  while (seenSlugs.has(slug)) {
    slug = `${originalSlug}-${counter}`;
    counter++;
  }
  seenSlugs.add(slug);
  
  const date = article.date || '2026-01-01';
  const excerpt = (article.excerpt || '').replace(/"/g, '\\"').replace(/\n/g, ' ').trim();
  const tags = Array.isArray(article.tags) && article.tags.length > 0 
    ? article.tags.map(t => `"${t}"`).join(', ')
    : '';
  const videoUrl = article.videoUrl === null || article.videoUrl === undefined 
    ? 'null' 
    : `"${article.videoUrl}"`;
  const isArchived = article.isArchived === true ? 'true' : 'false';
  const readTime = typeof article.readTime === 'string' ? `"${article.readTime}"` : '"5 min"';
  const sourceUrl = typeof article.sourceUrl === 'string' ? `"${article.sourceUrl}"` : '"#"';
  const image = article.image || '/images/hero-brics.jpg';
  
  const frontmatter = `---
title: "${(article.title || '').replace(/"/g, '\\"')}"
slug: ${slug}
date: ${date}
author: ${article.author || 'Azim'}
category: ${article.category || 'geopolitics'}
articleType: ${article.articleType || 'news'}
impact: ${article.impact || 'medium'}
image: ${image}
excerpt: "${excerpt}"
source: ${article.source || 'HyoBuddy News'}
sourceUrl: ${sourceUrl}
readTime: ${readTime}
isArchived: ${isArchived}
tags: [${tags}]
videoUrl: ${videoUrl}
---

`;

  const bodyContent = article.contentHTML || article.content || '';
  const mdxContent = frontmatter + bodyContent;
  const outputPath = path.join(OUTPUT_DIR, `${slug}.mdx`);
  fs.writeFileSync(outputPath, mdxContent, 'utf-8');
  console.log(`Created: ${path.basename(outputPath)}`);
  createdCount++;
}

console.log('\n--- Conversion Complete ---');
console.log(`Total articles in source: ${parsedArticles.length}`);
console.log(`MDX files created: ${createdCount}`);
console.log(`Skipped (no id): ${skippedCount}`);
