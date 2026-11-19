import { describe, it, expect } from 'vitest';
import { rotateArrayRight } from '../src/rotateArrayRight.js';

describe('4.11: rotateArrayRight', () => {
  it('test 1', () => {
    const fn = rotateArrayRight;
    const res = rotateArrayRight([1, 2, 3, 4, 5], 2);
    expect(res).toEqual([4,5,1,2,3]);
  });
  it('test 2', () => {
    const fn = rotateArrayRight;
    const res = rotateArrayRight(["a", "b", "c"], 1);
    expect(res).toEqual(["c","a","b"]);
  });
  it('test 3', () => {
    const fn = rotateArrayRight;
    const res = rotateArrayRight([1, 2], 0);
    expect(res).toEqual([1,2]);
  });
});
