import { describe, it, expect } from 'vitest';
import { findFirstIndex } from '../src/findFirstIndex.js';

describe('4.6: findFirstIndex', () => {
  it('test 1', () => {
    const fn = findFirstIndex;
    const res = findFirstIndex(["apple", "banana", "kiwi", "banana"], "banana");
    expect(res).toEqual(1);
  });
  it('test 2', () => {
    const fn = findFirstIndex;
    const res = findFirstIndex([10, 20, 30], 99);
    expect(res).toEqual(-1);
  });
});
