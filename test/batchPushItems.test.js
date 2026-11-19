import { describe, it, expect } from 'vitest';
import { batchPushItems } from '../src/batchPushItems.js';

describe('4.10: batchPushItems', () => {
  it('test 1', () => {
    const fn = batchPushItems;
    const res = batchPushItems([1, 2], [3, 4, 5]);
    expect(res).toEqual([1,2,3,4,5]);
  });
  it('test 2', () => {
    const fn = batchPushItems;
    const res = batchPushItems(["a"], []);
    expect(res).toEqual(["a"]);
  });
});
