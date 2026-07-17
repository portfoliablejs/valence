import fs from 'fs';
import path from 'path';

const STORIES_DIR = path.join(process.cwd(), 'src', 'stories');
const OUTPUT_FILE = path.join(process.cwd(), 'src', 'main.js');

const CATEGORIES = [
  { label: 'Sub-atomic', folder: 'sub-atomic' },
  { label: 'Atoms', folder: 'atoms' },
  { label: 'Molecules', folder: 'molecules' },
  { label: 'Organisms', folder: 'organisms' },
];

let content = `// src/main.js in the 'valence' project\n\n// Import the foundational styles so they are bundled with the package\nimport './stories/sub-atomic/index.css';\n\n`;

CATEGORIES.forEach(({ label, folder }) => {
  const categoryDir = path.join(STORIES_DIR, folder);
  if (!fs.existsSync(categoryDir)) return;

  const componentFolders = fs.readdirSync(categoryDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const exports = [];

  componentFolders.forEach((compFolder) => {
    const compPath = path.join(categoryDir, compFolder);
    const files = fs.readdirSync(compPath);

    // Pick up component .js files, ignoring .stories.js
    const jsFiles = files.filter(
      (file) => file.endsWith('.js') && !file.endsWith('.stories.js')
    );

    jsFiles.forEach((file) => {
      exports.push(`export * from './stories/${folder}/${compFolder}/${file}';`);
    });
  });

  if (exports.length > 0) {
    content += `// ${label}\n` + exports.join('\n') + '\n\n';
  }
});

fs.writeFileSync(OUTPUT_FILE, content.trim() + '\n');
console.log('✨ Successfully updated src/main.js');