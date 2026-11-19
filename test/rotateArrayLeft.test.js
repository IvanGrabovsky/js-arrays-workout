import { describe, it, expect } from 'vitest';
import { rotateArrayLeft } from '../src/rotateArrayLeft.js';

describe('4.12: rotateArrayLeft', () => {
  it('test 1', () => {
    const fn = rotateArrayLeft;
    const res = rotateArrayLeft([1, 2, 3, 4, 5], 2);
    expect(res).toEqual([3,4,5,1,2]);
  });
  it('test 2', () => {
    const fn = rotateArrayLeft;
    const res = rotateArrayLeft(["a", "b", "c"], 1);
    expect(res).toEqual(["b","c","a"]);
  });
});
