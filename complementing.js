const fs = require('fs');

const filename = process.argv[2];
const fileStream = fs.createReadStream(filename, 'utf8');
const complement = [];

fileStream.on('data', chunk => {
  for (const char of chunk) {
    if (char === 'A') {
      complement.push('T');
    } else if (char === 'C') {
      complement.push('G');
    } else if (char === 'T') {
      complement.push('A');
    } else if(char === 'G') {
      complement.push('C');
    }
  }
});

fileStream.on('end', () => {
  process.stdout.write(complement.reverse().join(''));
});
