import { describe, it, expect } from 'vitest';
import { tailSlice } from '../src/tailSlice.js';

describe('5.7: tailSlice', () => {
  it('test 1', () => {
    const fn = tailSlice;
    const res = tailSlice([10, 20, 30, 40, 50], 3);
    expect(res).toEqual([30,40,50]);
  });
  it('test 2', () => {
    const fn = tailSlice;
    const res = tailSlice(["x", "y"], 1);
    expect(res).toEqual(["y"]);
  });
  it('test 3', () => {
    const fn = tailSlice;
    const res = tailSlice([1, 2], 0);
    expect(res).toEqual([]);
  });
});
