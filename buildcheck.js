const { execSync } = require('child_process');
const fs = require('fs');

try {
  const output = execSync('npm run build', { encoding: 'utf8', stdio: 'pipe' });
  fs.writeFileSync('build-check.txt', output);
  console.log('Build succeeded');
} catch (e) {
  const errorOutput = (e.stdout || '') + '\n\n' + (e.stderr || '');
  fs.writeFileSync('build-check.txt', errorOutput);
  console.log('Build failed. Log saved.');
}
