import { describe, it, expect } from 'vitest';
import { matrixTotalSum } from '../src/matrixTotalSum.js';

describe('6.4: matrixTotalSum', () => {
  it('test 1', () => {
    const fn = matrixTotalSum;
    const res = matrixTotalSum([[1, 2], [3, 4]]);
    expect(res).toEqual(10);
  });
  it('test 2', () => {
    const fn = matrixTotalSum;
    const res = matrixTotalSum([[5, 5], [10, -5]]);
    expect(res).toEqual(15);
  });
  it('test 3', () => {
    const fn = matrixTotalSum;
    const res = matrixTotalSum([]);
    expect(res).toEqual(0);
  });
});
