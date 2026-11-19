import { describe, it, expect } from 'vitest';
import { checkIsArray } from '../src/checkIsArray.js';

describe('1.4: checkIsArray', () => {
  it('test 1', () => {
    const fn = checkIsArray;
    const res = checkIsArray([1, 2]);
    expect(res).toEqual("array");
  });
  it('test 2', () => {
    const fn = checkIsArray;
    const res = checkIsArray({ a: 1 });
    expect(res).toEqual("not_array");
  });
  it('test 3', () => {
    const fn = checkIsArray;
    const res = checkIsArray("рядок");
    expect(res).toEqual("not_array");
  });
  it('test 4', () => {
    const fn = checkIsArray;
    const res = checkIsArray(null);
    expect(res).toEqual("not_array");
  });
});
