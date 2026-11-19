import { describe, it, expect } from 'vitest';
import { matrixColSums } from '../src/matrixColSums.js';

describe('6.6: matrixColSums', () => {
  it('test 1', () => {
    const fn = matrixColSums;
    const res = matrixColSums([[1, 2], [3, 4]]);
    expect(res).toEqual([4,6]);
  });
  it('test 2', () => {
    const fn = matrixColSums;
    const res = matrixColSums([[1, 10, 100], [2, 20, 200]]);
    expect(res).toEqual([3,30,300]);
  });
  it('test 3', () => {
    const fn = matrixColSums;
    const res = matrixColSums([]);
    expect(res).toEqual([]);
  });
});
