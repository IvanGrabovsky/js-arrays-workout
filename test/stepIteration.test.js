import { describe, it, expect } from 'vitest';
import { stepIteration } from '../src/stepIteration.js';

describe('3.8: stepIteration', () => {
  it('test 1', () => {
    const fn = stepIteration;
    const res = stepIteration([10, 20, 30, 40, 50, 60], 2);
    expect(res).toEqual([10,30,50]);
  });
  it('test 2', () => {
    const fn = stepIteration;
    const res = stepIteration(["a", "b", "c", "d"], 3);
    expect(res).toEqual(["a","d"]);
  });
  it('test 3', () => {
    const fn = stepIteration;
    const res = stepIteration([1, 2], 0);
    expect(res).toEqual([]);
  });
});
