import { frequencyCalculator } from '../src/calculator';

describe('frequencyCalculator', () => {
  it('produces correct output for standard input', () => {
    const input = [1, 2, 2, 3, 4, 4, 4];
    const output = frequencyCalculator(input);

    expect(output).toContain('Frequency: 1, 2, 1, 3');
    expect(output).toContain('Number: 1, 2, 3, 4');
    expect(output).toContain('*');
    expect(output).toContain('1 2 3 4');
  });

  it('handles uniform input', () => {
    const input = [5, 5, 5];
    const output = frequencyCalculator(input);

    expect(output).toContain('Frequency: 3');
    expect(output).toContain('Number: 5');
    expect(output).toContain('*');
    expect(output).toContain('5');
  });

  it('handles gaps in number sequence', () => {
    const input = [1, 3, 3, 5];
    const output = frequencyCalculator(input);

    expect(output).toContain('Frequency: 1, 0, 2, 0, 1');
    expect(output).toContain('Number: 1, 2, 3, 4, 5');
  });

  it('handles single element', () => {
    const input = [42];
    const output = frequencyCalculator(input);

    expect(output).toContain('Frequency: 1');
    expect(output).toContain('Number: 42');
    expect(output).toContain('*');
  });

  it('throws for empty input', () => {
    expect(([]) => frequencyCalculator([])).toThrow();
  });
});
