import { describe, it, expect } from 'vitest';
import { compareArrayLengths } from '../src/compareArrayLengths.js';

describe('2.10: compareArrayLengths', () => {
  it('test 1', () => {
    const fn = compareArrayLengths;
    const res = compareArrayLengths([1, 2, 3], [1, 2]);
    expect(res).toEqual("first_longer");
  });
  it('test 2', () => {
    const fn = compareArrayLengths;
    const res = compareArrayLengths(["a"], ["x", "y"]);
    expect(res).toEqual("second_longer");
  });
  it('test 3', () => {
    const fn = compareArrayLengths;
    const res = compareArrayLengths([], []);
    expect(res).toEqual("equal");
  });
});
