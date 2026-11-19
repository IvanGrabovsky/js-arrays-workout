import { describe, it, expect } from 'vitest';
import { cloneViaSlice } from '../src/cloneViaSlice.js';

describe('5.12: cloneViaSlice', () => {
  it('test 1', () => {
    const fn = cloneViaSlice;
    const res = cloneViaSlice([1, 2, 3]);
    expect(res).toEqual({"clone":[1,2,3],"isDistinctReference":true});
  });
  it('test 2', () => {
    const fn = cloneViaSlice;
    const res = cloneViaSlice([]);
    expect(res).toEqual({"clone":[],"isDistinctReference":true});
  });
});
