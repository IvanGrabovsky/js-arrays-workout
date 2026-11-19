import { describe, it, expect } from 'vitest';
import { insertSorted } from '../src/insertSorted.js';

describe('5.9: insertSorted', () => {
  it('test 1', () => {
    const fn = insertSorted;
    const res = insertSorted([10, 20, 30, 40], 25);
    expect(res).toEqual([10,20,25,30,40]);
  });
  it('test 2', () => {
    const fn = insertSorted;
    const res = insertSorted([1, 5], 0);
    expect(res).toEqual([0,1,5]);
  });
  it('test 3', () => {
    const fn = insertSorted;
    const res = insertSorted([1, 5], 10);
    expect(res).toEqual([1,5,10]);
  });
});
