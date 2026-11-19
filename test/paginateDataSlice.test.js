import { describe, it, expect } from 'vitest';
import { paginateDataSlice } from '../src/paginateDataSlice.js';

describe('5.1: paginateDataSlice', () => {
  it('test 1', () => {
    const fn = paginateDataSlice;
    const res = paginateDataSlice([1, 2, 3, 4, 5, 6, 7], 1, 3);
    expect(res).toEqual([1,2,3]);
  });
  it('test 2', () => {
    const fn = paginateDataSlice;
    const res = paginateDataSlice([1, 2, 3, 4, 5, 6, 7], 2, 3);
    expect(res).toEqual([4,5,6]);
  });
  it('test 3', () => {
    const fn = paginateDataSlice;
    const res = paginateDataSlice([1, 2, 3, 4, 5, 6, 7], 3, 3);
    expect(res).toEqual([7]);
  });
});
