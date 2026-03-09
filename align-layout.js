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
      
      let modified = false;
      // Many components have `max-w-7xl mx-auto` or `max-w-6xl mx-auto` alongside `px-[5%]`, `px-4`, `px-6`
      // To match the Navbar, we simply want edge-to-edge layouts using `px-[5%]` (or similar fluid padding)
      // without max-width clamping the layout inward.
      
      const original = content;
      
      // Remove max-w-7xl mx-auto, max-w-6xl mx-auto, max-w-5xl mx-auto
      content = content.replace(/\bmax-w-[4567]xl\s+mx-auto\b/g, 'mx-auto w-full');
      // If there's left over max-w-7xl without mx-auto:
      content = content.replace(/\bmax-w-[4567]xl\b/g, 'w-full');
      
      // Ensure the section padding matches Navbar. Navbar has `padding: 0 5%`
      // Some sections have `px-4`, `px-5`, `md:px-8`, `px-[5%]`.
      // The Navbar uses 5%. So we should normalize container paddings to `px-[5%]`.
      // We will look for elements that now have `w-full` replacing max-w-* and force `px-[5%]`.
      content = content.replace(/px-(?:4|6|8)\s+md:px-[0-9]+/g, 'px-[5%]');
      
      if (original !== content) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Aligned layout gaps in ${fullPath}`);
      }
    }
  });
};

traverseAndFix(path.join(__dirname, 'components', 'sections'));
traverseAndFix(path.join(__dirname, 'app'));
console.log("Layout alignment complete.");
