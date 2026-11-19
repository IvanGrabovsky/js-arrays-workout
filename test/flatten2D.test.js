import { describe, it, expect } from 'vitest';
import { flatten2D } from '../src/flatten2D.js';

describe('6.10: flatten2D', () => {
  it('test 1', () => {
    const fn = flatten2D;
    const res = flatten2D([[1, 2], [3, 4], [5]]);
    expect(res).toEqual([1,2,3,4,5]);
  });
  it('test 2', () => {
    const fn = flatten2D;
    const res = flatten2D([["x"], ["y", "z"]]);
    expect(res).toEqual(["x","y","z"]);
  });
  it('test 3', () => {
    const fn = flatten2D;
    const res = flatten2D([]);
    expect(res).toEqual([]);
  });
});
