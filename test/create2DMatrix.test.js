import { describe, it, expect } from 'vitest';
import { create2DMatrix } from '../src/create2DMatrix.js';

describe('6.1: create2DMatrix', () => {
  it('test 1', () => {
    const fn = create2DMatrix;
    const res = create2DMatrix(2, 3, 0);
    expect(res).toEqual([[0,0,0],[0,0,0]]);
  });
  it('test 2', () => {
    const fn = create2DMatrix;
    const res = create2DMatrix(1, 2, "x");
    expect(res).toEqual([["x","x"]]);
  });
  it('test 3', () => {
    const fn = create2DMatrix;
    const res = create2DMatrix(0, 5, 1);
    expect(res).toEqual([]);
  });
});
