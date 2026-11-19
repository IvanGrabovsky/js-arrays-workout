import { describe, it, expect } from 'vitest';
import { calculateAverage } from '../src/calculateAverage.js';

describe('3.5: calculateAverage', () => {
  it('test 1', () => {
    const fn = calculateAverage;
    const res = calculateAverage([10, 20, 30]);
    expect(res).toEqual(20);
  });
  it('test 2', () => {
    const fn = calculateAverage;
    const res = calculateAverage([1, 2]);
    expect(res).toEqual(1.5);
  });
  it('test 3', () => {
    const fn = calculateAverage;
    const res = calculateAverage([]);
    expect(res).toEqual(0);
  });
});
