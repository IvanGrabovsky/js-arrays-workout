import { describe, it, expect } from 'vitest';
import { getMiddleElement } from '../src/getMiddleElement.js';

describe('2.7: getMiddleElement', () => {
  it('test 1', () => {
    const fn = getMiddleElement;
    const res = getMiddleElement([10, 20, 30, 40, 50]);
    expect(res).toEqual(30);
  });
  it('test 2', () => {
    const fn = getMiddleElement;
    const res = getMiddleElement([10, 20, 30, 40]);
    expect(res).toEqual(20);
  });
  it('test 3', () => {
    const fn = getMiddleElement;
    const res = getMiddleElement([]);
    expect(res).toEqual(null);
  });
});
