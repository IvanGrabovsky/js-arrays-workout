import { describe, it, expect } from 'vitest';
import { removeLastNElements } from '../src/removeLastNElements.js';

describe('4.4: removeLastNElements', () => {
  it('test 1', () => {
    const fn = removeLastNElements;
    const res = removeLastNElements([1, 2, 3, 4, 5], 2);
    expect(res).toEqual([1,2,3]);
  });
  it('test 2', () => {
    const fn = removeLastNElements;
    const res = removeLastNElements(["a", "b"], 5);
    expect(res).toEqual([]);
  });
});
