const fs = require('fs');
const path = require('path');

const traverseDir = (dir) => {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // We look for <Image src={...} alt={...} style={{...}} /> without width/height/fill
      // Or <Image src="..." style={{...}} />
      // Since it's hard to write a perfect regex, we can match <Image ... />
      
      let modified = false;
      const imageRegex = /<Image\s+([^>]+)>/g;
      content = content.replace(imageRegex, (match, props) => {
        // If it already has width, height, or fill, ignore it
        if (/(\s|^)(width=|height=|fill)(\s|=|>)/.test(props)) return match;
        
        // Otherwise, we inject `fill ` and modify the `style` to ensure it acts like `fill` if needed
        // but Next.js `fill` requires parent to be `relative`, `absolute`, or `fixed`.
        // The ones missing props usually have `position:"absolute", inset:0` and look like:
        // `src={ind.img} alt={ind.title} style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover" }}`
        
        modified = true;
        return `<Image fill ${props}>`;
      });
      
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Fixed missing Image props in ${fullPath}`);
      }
    }
  });
};

const appDir = path.join(__dirname, 'app');
const compDir = path.join(__dirname, 'components');
if (fs.existsSync(appDir)) traverseDir(appDir);
if (fs.existsSync(compDir)) traverseDir(compDir);
console.log("Image fix complete.");
