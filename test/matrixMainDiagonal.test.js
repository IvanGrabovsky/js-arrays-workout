import { describe, it, expect } from 'vitest';
import { matrixMainDiagonal } from '../src/matrixMainDiagonal.js';

describe('6.7: matrixMainDiagonal', () => {
  it('test 1', () => {
    const fn = matrixMainDiagonal;
    const res = matrixMainDiagonal([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(res).toEqual([1,5,9]);
  });
  it('test 2', () => {
    const fn = matrixMainDiagonal;
    const res = matrixMainDiagonal([["a", "b"], ["c", "d"]]);
    expect(res).toEqual(["a","d"]);
  });
  it('test 3', () => {
    const fn = matrixMainDiagonal;
    const res = matrixMainDiagonal([]);
    expect(res).toEqual([]);
  });
});
