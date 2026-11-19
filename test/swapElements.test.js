import { describe, it, expect } from 'vitest';
import { swapElements } from '../src/swapElements.js';

describe('2.4: swapElements', () => {
  it('test 1', () => {
    const fn = swapElements;
    const res = swapElements(["перший", "другий", "третій"], 0, 2);
    expect(res).toEqual(["третій","другий","перший"]);
  });
  it('test 2', () => {
    const fn = swapElements;
    const res = swapElements([1, 2, 3], 0, 1);
    expect(res).toEqual([2,1,3]);
  });
  it('test 3', () => {
    const fn = swapElements;
    const res = swapElements([1, 2], 0, 9);
    expect(res).toEqual([1,2]);
  });
});
