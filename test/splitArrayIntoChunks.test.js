import { describe, it, expect } from 'vitest';
import { splitArrayIntoChunks } from '../src/splitArrayIntoChunks.js';

describe('5.8: splitArrayIntoChunks', () => {
  it('test 1', () => {
    const fn = splitArrayIntoChunks;
    const res = splitArrayIntoChunks([1, 2, 3, 4, 5], 2);
    expect(res).toEqual([[1,2],[3,4],[5]]);
  });
  it('test 2', () => {
    const fn = splitArrayIntoChunks;
    const res = splitArrayIntoChunks(["a", "b", "c", "d"], 2);
    expect(res).toEqual([["a","b"],["c","d"]]);
  });
  it('test 3', () => {
    const fn = splitArrayIntoChunks;
    const res = splitArrayIntoChunks([], 3);
    expect(res).toEqual([]);
  });
});
