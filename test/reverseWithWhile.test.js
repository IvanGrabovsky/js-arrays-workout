import { describe, it, expect } from 'vitest';
import { reverseWithWhile } from '../src/reverseWithWhile.js';

describe('3.2: reverseWithWhile', () => {
  it('test 1', () => {
    const fn = reverseWithWhile;
    const res = reverseWithWhile(["a", "b", "c"]);
    expect(res).toEqual(["c","b","a"]);
  });
  it('test 2', () => {
    const fn = reverseWithWhile;
    const res = reverseWithWhile([1, 2]);
    expect(res).toEqual([2,1]);
  });
  it('test 3', () => {
    const fn = reverseWithWhile;
    const res = reverseWithWhile([]);
    expect(res).toEqual([]);
  });
});
