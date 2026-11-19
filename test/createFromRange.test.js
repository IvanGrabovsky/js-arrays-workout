import { describe, it, expect } from 'vitest';
import { createFromRange } from '../src/createFromRange.js';

describe('1.3: createFromRange', () => {
  it('test 1', () => {
    const fn = createFromRange;
    const res = createFromRange(1, 5);
    expect(res).toEqual([1,2,3,4,5]);
  });
  it('test 2', () => {
    const fn = createFromRange;
    const res = createFromRange(3, 3);
    expect(res).toEqual([3]);
  });
  it('test 3', () => {
    const fn = createFromRange;
    const res = createFromRange(5, 2);
    expect(res).toEqual([]);
  });
});
