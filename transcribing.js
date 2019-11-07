const fs = require('fs');

const filename = process.argv[2];
const fileStream = fs.createReadStream(filename, 'utf8');
const rna = [];

fileStream.on('data', chunk => {
  rna.push(chunk.replace(/T/g, 'U'));
});

fileStream.on('end', () => {
  process.stdout.write(rna.join(''));
});
