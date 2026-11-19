import { describe, it, expect } from 'vitest';
import { spliceInsertAt } from '../src/spliceInsertAt.js';

describe('5.4: spliceInsertAt', () => {
  it('test 1', () => {
    const fn = spliceInsertAt;
    const res = spliceInsertAt(["Mon", "Thu"], 1, ["Tue", "Wed"]);
    expect(res).toEqual(["Mon","Tue","Wed","Thu"]);
  });
  it('test 2', () => {
    const fn = spliceInsertAt;
    const res = spliceInsertAt([1, 4], 1, [2, 3]);
    expect(res).toEqual([1,2,3,4]);
  });
});
