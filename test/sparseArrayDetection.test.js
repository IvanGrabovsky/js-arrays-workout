import { describe, it, expect } from 'vitest';
import { sparseArrayDetection } from '../src/sparseArrayDetection.js';

describe('1.10: sparseArrayDetection', () => {
  it('test 1', () => {
    const fn = sparseArrayDetection;
    const res = sparseArrayDetection([1, 2, 3]);
    expect(res).toEqual(false);
  });
  it('test 2', () => {
    const fn = sparseArrayDetection;
    const res = sparseArrayDetection(new Array(3));
    expect(res).toEqual(true);
  });
  it('test 3', () => {
    const fn = sparseArrayDetection;
    const res = sparseArrayDetection([1, , 3]);
    expect(res).toEqual(true);
  });
});
