import { describe, it, expect } from 'vitest';
import { breakEarlySearch } from '../src/breakEarlySearch.js';

describe('3.10: breakEarlySearch', () => {
  it('test 1', () => {
    const fn = breakEarlySearch;
    const res = breakEarlySearch([1, 3, 5, 8, 9, 10]);
    expect(res).toEqual({"value":8,"checkedSteps":4});
  });
  it('test 2', () => {
    const fn = breakEarlySearch;
    const res = breakEarlySearch([1, 3, 5]);
    expect(res).toEqual({"value":null,"checkedSteps":3});
  });
  it('test 3', () => {
    const fn = breakEarlySearch;
    const res = breakEarlySearch([]);
    expect(res).toEqual({"value":null,"checkedSteps":0});
  });
});
