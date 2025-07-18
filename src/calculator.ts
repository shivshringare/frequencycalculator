export const frequencyCalculator = (numbers: number[]): string => {
  if (!numbers.length) {
    throw new Error("Input array must not be empty.");
  }

  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  // Initialize frequencies
  const freq: Record<number, number> = {};
  for (let i = min; i <= max; i++) freq[i] = 0;
  numbers.forEach(n => freq[n]++);

  // Prepare frequency and number data
  const frequencyLine = `Frequency: ${Array.from({ length: max - min + 1 }, (_, i) => freq[i + min]).join(', ')}`;
  const numberLine = `Number: ${Array.from({ length: max - min + 1 }, (_, i) => i + min).join(', ')}`;

  // Build bar chart
  const maxHeight = Math.max(...Object.values(freq));
  let chart = '';
  for (let level = maxHeight; level > 0; level--) {
    chart += Array.from({ length: max - min + 1 }, (_, i) =>
      freq[i + min] >= level ? '* ' : '  '
    ).join('') + '\n';
  }
  chart += Array.from({ length: max - min + 1 }, (_, i) => i + min).join(' ');

  return `${frequencyLine}\n${numberLine}\n\n${chart}`;
};

