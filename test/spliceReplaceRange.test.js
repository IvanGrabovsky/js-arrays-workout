import { describe, it, expect } from 'vitest';
import { spliceReplaceRange } from '../src/spliceReplaceRange.js';

describe('5.5: spliceReplaceRange', () => {
  it('test 1', () => {
    const fn = spliceReplaceRange;
    const res = spliceReplaceRange(["червоний", "ПОМИЛКА", "синій"], 1, 1, ["зелений"]);
    expect(res).toEqual(["червоний","зелений","синій"]);
  });
  it('test 2', () => {
    const fn = spliceReplaceRange;
    const res = spliceReplaceRange([1, 2, 3, 4], 1, 2, [20, 30]);
    expect(res).toEqual([1,20,30,4]);
  });
});
