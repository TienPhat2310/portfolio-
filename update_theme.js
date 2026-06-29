const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove backdrop-blur-*
  content = content.replace(/backdrop-blur-(sm|md|lg|xl|2xl|3xl)/g, '');
  
  // Change bg-surface/* to bg-surface
  content = content.replace(/bg-surface\/(20|30|40|50|70|95)/g, 'bg-surface');
  
  // Change border-white/* to border-border
  content = content.replace(/border-white\/(5|10|20)/g, 'border-border');
  
  // Remove hover:border-white/20 and add hover:border-accent
  content = content.replace(/hover:border-white\/20/g, 'hover:border-accent');
  
  // Remove shadow-lg, shadow-xl, shadow-2xl on hover
  content = content.replace(/hover:shadow-(lg|xl|2xl)/g, '');
  
  // Fix gradients in text
  content = content.replace(/text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-warm/g, 'text-accent');

  // Specific fixes
  content = content.replace(/bg-black\/20/g, 'bg-black/50');
  content = content.replace(/bg-black\/30/g, 'bg-surface');
  content = content.replace(/bg-black\/40/g, 'bg-surface');
  
  // Clean up double spaces left by replacements
  content = content.replace(/\s{2,}/g, ' ');

  fs.writeFileSync(filePath, content);
}
console.log('Components updated.');
