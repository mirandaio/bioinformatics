const fs = require('fs');

const n = process.argv[2];
const k = process.argv[3];

const results = [];

function compute(n, k) {
  if (results[n - 1]) {
    return results[n - 1];
  }

  if (n === 1 || n === 2) {
    results[n - 1] = 1;
    return 1;
  }

  results[n - 2] = compute(n - 1, k);
  results[n - 3] = compute(n - 2, k);
  results[n - 1] = results[n - 2] + k * results[n - 3];
  return results[n - 1];
}

process.stdout.write(compute(n, k).toString());
