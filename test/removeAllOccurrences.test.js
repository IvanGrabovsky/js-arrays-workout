import { describe, it, expect } from 'vitest';
import { removeAllOccurrences } from '../src/removeAllOccurrences.js';

describe('4.8: removeAllOccurrences', () => {
  it('test 1', () => {
    const fn = removeAllOccurrences;
    const res = removeAllOccurrences([1, 2, 3, 2, 4, 2, 5], 2);
    expect(res).toEqual([1,3,4,5]);
  });
  it('test 2', () => {
    const fn = removeAllOccurrences;
    const res = removeAllOccurrences(["a", "b", "a"], "a");
    expect(res).toEqual(["b"]);
  });
  it('test 3', () => {
    const fn = removeAllOccurrences;
    const res = removeAllOccurrences([1, 2], 99);
    expect(res).toEqual([1,2]);
  });
});
