import { describe, it, expect } from 'vitest';
import { extractMiddleSubarray } from '../src/extractMiddleSubarray.js';

describe('5.2: extractMiddleSubarray', () => {
  it('test 1', () => {
    const fn = extractMiddleSubarray;
    const res = extractMiddleSubarray([10, 20, 30, 40, 50]);
    expect(res).toEqual([20,30,40]);
  });
  it('test 2', () => {
    const fn = extractMiddleSubarray;
    const res = extractMiddleSubarray(["start", "content", "end"]);
    expect(res).toEqual(["content"]);
  });
  it('test 3', () => {
    const fn = extractMiddleSubarray;
    const res = extractMiddleSubarray([1, 2]);
    expect(res).toEqual([]);
  });
});
