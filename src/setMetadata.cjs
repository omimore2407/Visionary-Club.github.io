const fs = require('fs');
const path = require('path');

// Path to index.html
const filePath = path.join(__dirname, '../public/index.html');

// Read the file
let fileContent = fs.readFileSync(filePath, 'utf-8');

// Replace title
fileContent = fileContent.replace(/<title>(.*?)<\/title>/, '<title>VISIONARY CLUB</title>');

// Replace favicon
fileContent = fileContent.replace(
    /<link rel="icon" href=".*?"\/>/,
    '<link rel="icon" href="https://github.com/Visionary-Club/Visionary-Club.github.io/blob/main/src/assets/VISIONARY_CLUB.png" type="image/png" />'
);

// Write the file back
fs.writeFileSync(filePath, fileContent, 'utf-8');

console.log('Metadata updated (title and favicon)');
