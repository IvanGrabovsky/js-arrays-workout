import { describe, it, expect } from 'vitest';
import { createMultiplicationMatrix } from '../src/createMultiplicationMatrix.js';

describe('6.12: createMultiplicationMatrix', () => {
  it('test 1', () => {
    const fn = createMultiplicationMatrix;
    const res = createMultiplicationMatrix(3);
    expect(res).toEqual([[1,2,3],[2,4,6],[3,6,9]]);
  });
  it('test 2', () => {
    const fn = createMultiplicationMatrix;
    const res = createMultiplicationMatrix(1);
    expect(res).toEqual([[1]]);
  });
  it('test 3', () => {
    const fn = createMultiplicationMatrix;
    const res = createMultiplicationMatrix(0);
    expect(res).toEqual([]);
  });
});
