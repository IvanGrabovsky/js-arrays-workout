import { describe, it, expect } from 'vitest';
import { shallowCopyArray } from '../src/shallowCopyArray.js';

describe('1.6: shallowCopyArray', () => {
  it('test 1', () => {
    const fn = shallowCopyArray;
    const res = shallowCopyArray([1, 2, 3], 99);
    expect(res).toEqual({"copy":[1,2,99],"originalUnchanged":true});
  });
  it('test 2', () => {
    const fn = shallowCopyArray;
    const res = shallowCopyArray(["cat", "dog"], "lion");
    expect(res).toEqual({"copy":["cat","lion"],"originalUnchanged":true});
  });
});
