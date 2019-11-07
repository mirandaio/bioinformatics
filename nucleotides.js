const fs = require('fs');

const filename = process.argv[2];
const fileStream = fs.createReadStream(filename, 'utf8');

let a = 0, c = 0, g = 0, t = 0;

fileStream.on('data', chunk => {
  for(const char of chunk) {
    if(char === 'A') {
      a++;
    } else if(char === 'C') {
      c++;
    } else if(char === 'G') {
      g++;
    } else if(char === 'T') {
      t++;
    }
  }
});

fileStream.on('end', () => {
  console.log(a, c, g, t);
});
