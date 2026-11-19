import { describe, it, expect } from 'vitest';
import { concatMultipleArrays } from '../src/concatMultipleArrays.js';

describe('5.6: concatMultipleArrays', () => {
  it('test 1', () => {
    const fn = concatMultipleArrays;
    const res = concatMultipleArrays([1, 2], [3, 4], [5]);
    expect(res).toEqual([1,2,3,4,5]);
  });
  it('test 2', () => {
    const fn = concatMultipleArrays;
    const res = concatMultipleArrays(["a"], [], ["b"]);
    expect(res).toEqual(["a","b"]);
  });
});
