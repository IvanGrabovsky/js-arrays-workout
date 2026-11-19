import { describe, it, expect } from 'vitest';
import { myReduce } from '../src/myReduce.js';

describe('12.1: myReduce', () => {
  it('test 1', () => {
    const fn = myReduce;
    const res = myReduce([1, 2, 3, 4], (sum, x) => sum + x, 0);
    expect(res).toEqual(10);
  });
  it('test 2', () => {
    const fn = myReduce;
    const res = myReduce([10, 20, 30], (sum, x) => sum + x);
    expect(res).toEqual(60);
  });
});
