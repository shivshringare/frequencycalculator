import { frequencyCalculator } from './src/calculator';

const input = process.argv.slice(2).map(Number);
if (input.length === 0) {
  console.error('Usage: ts-node index.ts 1 2 2 3 4');
  process.exit(1);
}

console.log(frequencyCalculator(input));
