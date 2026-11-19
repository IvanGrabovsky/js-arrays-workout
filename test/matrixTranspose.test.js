import { describe, it, expect } from 'vitest';
import { matrixTranspose } from '../src/matrixTranspose.js';

describe('6.8: matrixTranspose', () => {
  it('test 1', () => {
    const fn = matrixTranspose;
    const res = matrixTranspose([[1, 2, 3], [4, 5, 6]]);
    expect(res).toEqual([[1,4],[2,5],[3,6]]);
  });
  it('test 2', () => {
    const fn = matrixTranspose;
    const res = matrixTranspose([[1, 2], [3, 4]]);
    expect(res).toEqual([[1,3],[2,4]]);
  });
  it('test 3', () => {
    const fn = matrixTranspose;
    const res = matrixTranspose([]);
    expect(res).toEqual([]);
  });
});
