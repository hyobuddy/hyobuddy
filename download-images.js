const fs = require('fs');
const path = require('path');
const https = require('https');

const backupDir = path.join(__dirname, 'app', 'sanity-backup');
const rawData = JSON.parse(fs.readFileSync(path.join(backupDir, 'articles-raw.json'), 'utf8'));

const imageUrls = new Set();
function extractUrls(obj) {
  if (typeof obj === 'string' && obj.includes('cdn.sanity.io')) imageUrls.add(obj);
  else if (Array.isArray(obj)) obj.forEach(extractUrls);
  else if (typeof obj === 'object' && obj !== null) Object.values(obj).forEach(extractUrls);
}
extractUrls(rawData);

const urls = Array.from(imageUrls);
console.log(`Found ${urls.length} unique image URLs`);

const imageDir = path.join(__dirname, 'app', 'public', 'images', 'sanity-imported');
fs.mkdirSync(imageDir, { recursive: true });
fs.writeFileSync(path.join(backupDir, 'image-urls.txt'), urls.join('\n'));

let downloaded = 0, failed = 0;
function downloadImage(url, index) {
  return new Promise((resolve) => {
    const ext = path.extname(url.split('?')[0]) || '.webp';
    const filename = `sanity-image-${index + 1}${ext}`;
    const file = fs.createWriteStream(path.join(imageDir, filename));
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => { file.close(); downloaded++; process.stdout.write(`\r? ${downloaded}/${urls.length}`); resolve({success: true, url, filename}); });
      } else { file.close(); failed++; resolve({success: false, url, error: res.statusCode}); }
    }).on('error', (err) => { file.close(); failed++; resolve({success: false, url, error: err.message}); });
  });
}

async function downloadAll() {
  console.log('?? Starting download...\n');
  for (let i = 0; i < urls.length; i++) await downloadImage(urls[i], i);
  console.log(`\n\n? Done! Downloaded: ${downloaded}, Failed: ${failed}`);
}
downloadAll();
