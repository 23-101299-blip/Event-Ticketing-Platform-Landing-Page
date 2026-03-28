const { execSync } = require('child_process');
const fs = require('fs');

const script = `
const fs = require('fs');
const msgs = {
  "Initial commit": "first pass at landing page - layout and basic components with localization",
  "Enhance UI": "swapped out emoji icons for real photos to make it pop",
  "Fix broken images": "switched to loremflickr because unsplash links were dead",
  "Update Summer": "better dj photo for the music fest card",
  "Rebrand platform": "renamed the whole project to vibepass instead of the generic string"
};
const input = fs.readFileSync(0, 'utf-8').trim();
let newMsg = input;
for (const [k, v] of Object.entries(msgs)) {
  if (input.includes(k)) newMsg = v;
}
console.log(newMsg);
`;

fs.writeFileSync('filter.cjs', script);

try {
  console.log("Starting git filter-branch...");
  execSync('git filter-branch -f --msg-filter "node ./filter.cjs" -- --all', { stdio: 'inherit' });
  console.log("Force pushing to github...");
  execSync('git push -f origin main', { stdio: 'inherit' });
  console.log("Success!");
} catch (e) {
  console.error("Failed to rewrite history.", e.message);
}
