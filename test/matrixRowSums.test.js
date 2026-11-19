import { describe, it, expect } from 'vitest';
import { matrixRowSums } from '../src/matrixRowSums.js';

describe('6.5: matrixRowSums', () => {
  it('test 1', () => {
    const fn = matrixRowSums;
    const res = matrixRowSums([[1, 2, 3], [10, 20, 30]]);
    expect(res).toEqual([6,60]);
  });
  it('test 2', () => {
    const fn = matrixRowSums;
    const res = matrixRowSums([[5]]);
    expect(res).toEqual([5]);
  });
  it('test 3', () => {
    const fn = matrixRowSums;
    const res = matrixRowSums([]);
    expect(res).toEqual([]);
  });
});
