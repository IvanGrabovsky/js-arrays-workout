import { describe, it, expect } from 'vitest';
import { removeRangeAndReturnBoth } from '../src/removeRangeAndReturnBoth.js';

describe('5.11: removeRangeAndReturnBoth', () => {
  it('test 1', () => {
    const fn = removeRangeAndReturnBoth;
    const res = removeRangeAndReturnBoth(["a", "b", "c", "d", "e"], 1, 4);
    expect(res).toEqual({"remaining":["a","e"],"extracted":["b","c","d"]});
  });
  it('test 2', () => {
    const fn = removeRangeAndReturnBoth;
    const res = removeRangeAndReturnBoth([1, 2, 3], 0, 1);
    expect(res).toEqual({"remaining":[2,3],"extracted":[1]});
  });
});
