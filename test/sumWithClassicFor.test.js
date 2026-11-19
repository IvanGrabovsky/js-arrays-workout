import { describe, it, expect } from 'vitest';
import { sumWithClassicFor } from '../src/sumWithClassicFor.js';

describe('3.1: sumWithClassicFor', () => {
  it('test 1', () => {
    const fn = sumWithClassicFor;
    const res = sumWithClassicFor([1, 2, 3, 4, 5]);
    expect(res).toEqual(15);
  });
  it('test 2', () => {
    const fn = sumWithClassicFor;
    const res = sumWithClassicFor([-10, 10, 5]);
    expect(res).toEqual(5);
  });
  it('test 3', () => {
    const fn = sumWithClassicFor;
    const res = sumWithClassicFor([]);
    expect(res).toEqual(0);
  });
});
