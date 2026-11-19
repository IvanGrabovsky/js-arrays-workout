import { describe, it, expect } from 'vitest';
import { updateElementAtIndex } from '../src/updateElementAtIndex.js';

describe('2.3: updateElementAtIndex', () => {
  it('test 1', () => {
    const fn = updateElementAtIndex;
    const res = updateElementAtIndex([1, 2, 3], 1, 99);
    expect(res).toEqual([1,99,3]);
  });
  it('test 2', () => {
    const fn = updateElementAtIndex;
    const res = updateElementAtIndex(["x", "y"], 0, "z");
    expect(res).toEqual(["z","y"]);
  });
  it('test 3', () => {
    const fn = updateElementAtIndex;
    const res = updateElementAtIndex([1, 2], 5, 100);
    expect(res).toEqual([1,2]);
  });
});
