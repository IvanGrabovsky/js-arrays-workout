import { describe, it, expect } from 'vitest';
import { runningSumArray } from '../src/runningSumArray.js';

describe('3.9: runningSumArray', () => {
  it('test 1', () => {
    const fn = runningSumArray;
    const res = runningSumArray([1, 2, 3, 4]);
    expect(res).toEqual([1,3,6,10]);
  });
  it('test 2', () => {
    const fn = runningSumArray;
    const res = runningSumArray([3, 1, 2, 10, 1]);
    expect(res).toEqual([3,4,6,16,17]);
  });
  it('test 3', () => {
    const fn = runningSumArray;
    const res = runningSumArray([]);
    expect(res).toEqual([]);
  });
});
