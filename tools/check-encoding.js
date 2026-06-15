const fs = require('fs');
const path = require('path');

const root = process.cwd();
const ignoredDirs = new Set(['.git', 'node_modules', '.wrangler', 'dist', 'build']);
const extensions = new Set(['.html', '.css', '.js', '.svg', '.xml', '.md', '.json', '.txt']);

const badPatterns = [
  '\u0102',
  '\u0139',
  '\u00C4',
  '\u00C2',
  '\u00E2',
  '\u0110',
  '\uFFFD',
  '\u0102\u2026',
  '\u0102\u201E',
  '\u0102\u201A',
  '\u0139\u203A',
  '\u0110\u201C',
  '\u0110\u201D',
  '\u0110\u2019',
  '\u0102\u00B0',
  '\u00C2\u00B0',
  '\u00C2\u00A0'
];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignoredDirs.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
    } else if (extensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

let failed = false;

for (const file of walk(root)) {
  const content = fs.readFileSync(file, 'utf8');
  for (const pattern of badPatterns) {
    if (content.includes(pattern)) {
      console.error(`[encoding] ${path.relative(root, file)} contains suspicious pattern: ${pattern}`);
      failed = true;
    }
  }
}

if (failed) {
  console.error('\nEncoding/mojibake check failed. Fix Polish characters before committing.');
  process.exit(1);
}

console.log('Encoding/mojibake check passed.');
