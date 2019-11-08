const fs = require('fs');

const n = process.argv[2];
const k = process.argv[3];

function buildFibonacci(k) {
  const lookupTable = [];

  return function fib(n) {
    if (lookupTable[n - 1]) {
      return lookupTable[n - 1];
    }

    if (n === 1 || n === 2) {
      lookupTable[n - 1] = 1;
      return 1;
    }

    lookupTable[n - 2] = fib(n - 1);
    lookupTable[n - 3] = fib(n - 2);
    lookupTable[n - 1] = lookupTable[n - 2] + k * lookupTable[n - 3];
    return lookupTable[n - 1];
  }
}

const fibonacci = buildFibonacci(k);

process.stdout.write(fibonacci(n).toString());
