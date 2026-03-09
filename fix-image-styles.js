const fs = require('fs');
const path = require('path');

const traverseAndFix = (dir) => {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseAndFix(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;

      // Match <Image tags that have `fill` anywhere, and `style={{...height...}}` or `style={{...width...}}`
      // Since parsing JSX with regex is tricky, let's just do a simpler search and replace for the `style` prop of Image tags

      // A simple regex to find `style={{...}}` blocks inside `<Image...>` 
      // where `fill` is present.
      
      // We can use a regex replacer function over all <Image ...> tags
      content = content.replace(/<Image\b[^>]+>/g, (imageTag) => {
         if (imageTag.includes('fill') && imageTag.includes('style={{')) {
             // Extract the style string inner part
             return imageTag.replace(/style=\{\{(.*?)\}\}/s, (match, innerStyle) => {
                // If it contains width: or height:, remove them
                let newInner = innerStyle.replace(/\b(?:width|height)\s*:\s*[^,]+,?/g, '');
                
                // Clean up trailing commas or empty spaces
                newInner = newInner.replace(/,\s*$/, '').trim();
                
                if (newInner === '') {
                   return ''; // remove style entirely if empty
                }
                return `style={{ ${newInner} }}`;
             });
         }
         return imageTag;
      });

      if (original !== content) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Cleaned Image styles in ${fullPath}`);
      }
    }
  });
};

traverseAndFix(path.join(__dirname, 'components'));
traverseAndFix(path.join(__dirname, 'app'));
console.log("Image inline style scrubbing complete.");
