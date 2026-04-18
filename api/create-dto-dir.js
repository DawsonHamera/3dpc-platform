const fs = require('fs');
const path = require('path');

const dtoDir = path.join(__dirname, 'src', 'modules', 'products', 'dto');
fs.mkdirSync(dtoDir, { recursive: true });
console.log('Directory created:', dtoDir);
