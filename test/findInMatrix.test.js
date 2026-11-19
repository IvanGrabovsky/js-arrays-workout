import { describe, it, expect } from 'vitest';
import { findInMatrix } from '../src/findInMatrix.js';

describe('6.9: findInMatrix', () => {
  it('test 1', () => {
    const fn = findInMatrix;
    const res = findInMatrix([["a", "b"], ["c", "d"]], "c");
    expect(res).toEqual({"row":1,"col":0});
  });
  it('test 2', () => {
    const fn = findInMatrix;
    const res = findInMatrix([[1, 2], [3, 4]], 99);
    expect(res).toEqual(null);
  });
  it('test 3', () => {
    const fn = findInMatrix;
    const res = findInMatrix([], 5);
    expect(res).toEqual(null);
  });
});
