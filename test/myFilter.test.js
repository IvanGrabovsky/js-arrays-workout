import { describe, it, expect } from 'vitest';
import { myFilter } from '../src/myFilter.js';

describe('9.1: myFilter', () => {
  it('test 1', () => {
    const fn = myFilter;
    const res = myFilter([1, 2, 3, 4, 5], x => x % 2 === 0);
    expect(res).toEqual([2,4]);
  });
  it('test 2', () => {
    const fn = myFilter;
    const res = myFilter(["apple", "banana"], s => s.startsWith("a"));
    expect(res).toEqual(["apple"]);
  });
});
