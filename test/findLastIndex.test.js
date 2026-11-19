import { describe, it, expect } from 'vitest';
import { findLastIndex } from '../src/findLastIndex.js';

describe('4.7: findLastIndex', () => {
  it('test 1', () => {
    const fn = findLastIndex;
    const res = findLastIndex(["a", "b", "c", "b", "d"], "b");
    expect(res).toEqual(3);
  });
  it('test 2', () => {
    const fn = findLastIndex;
    const res = findLastIndex([1, 2, 3], 1);
    expect(res).toEqual(0);
  });
  it('test 3', () => {
    const fn = findLastIndex;
    const res = findLastIndex([1, 2, 3], 99);
    expect(res).toEqual(-1);
  });
});
