import { describe, it, expect } from 'vitest';
import { truncateArray } from '../src/truncateArray.js';

describe('2.5: truncateArray', () => {
  it('test 1', () => {
    const fn = truncateArray;
    const res = truncateArray([1, 2, 3, 4, 5], 3);
    expect(res).toEqual([1,2,3]);
  });
  it('test 2', () => {
    const fn = truncateArray;
    const res = truncateArray(["a", "b", "c"], 1);
    expect(res).toEqual(["a"]);
  });
  it('test 3', () => {
    const fn = truncateArray;
    const res = truncateArray([10, 20], 0);
    expect(res).toEqual([]);
  });
});
