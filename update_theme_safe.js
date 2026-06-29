const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(/backdrop-blur-[a-z0-9]+/g, '');
  content = content.replace(/bg-surface\/[0-9]+/g, 'bg-surface');
  content = content.replace(/border-white\/[0-9]+/g, 'border-border');
  content = content.replace(/hover:border-white\/[0-9]+/g, 'hover:border-accent');
  
  content = content.replace(/hover:shadow-[a-z0-9]+/g, '');
  content = content.replace(/text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-warm/g, 'text-accent');

  content = content.replace(/bg-black\/[0-9]+/g, 'bg-surface');

  content = content.replace(/shadow-\[0_0_[0-9]+px_rgba\([^)]+\)\]/g, '');
  content = content.replace(/hover:shadow-\[0_0_[0-9]+px_rgba\([^)]+\)\]/g, '');

  fs.writeFileSync(filePath, content);
}
console.log('Components safely updated.');
