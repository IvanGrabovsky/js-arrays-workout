import { describe, it, expect } from 'vitest';
import { findMinAndMax } from '../src/findMinAndMax.js';

describe('3.4: findMinAndMax', () => {
  it('test 1', () => {
    const fn = findMinAndMax;
    const res = findMinAndMax([12, 5, 88, -3, 20]);
    expect(res).toEqual({"min":-3,"max":88});
  });
  it('test 2', () => {
    const fn = findMinAndMax;
    const res = findMinAndMax([7]);
    expect(res).toEqual({"min":7,"max":7});
  });
  it('test 3', () => {
    const fn = findMinAndMax;
    const res = findMinAndMax([]);
    expect(res).toEqual({"min":null,"max":null});
  });
});
