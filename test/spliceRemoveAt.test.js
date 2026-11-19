import { describe, it, expect } from 'vitest';
import { spliceRemoveAt } from '../src/spliceRemoveAt.js';

describe('5.3: spliceRemoveAt', () => {
  it('test 1', () => {
    const fn = spliceRemoveAt;
    const res = spliceRemoveAt(["a", "b", "c", "d"], 1, 2);
    expect(res).toEqual({"updatedArray":["a","d"],"removedItems":["b","c"]});
  });
  it('test 2', () => {
    const fn = spliceRemoveAt;
    const res = spliceRemoveAt([1, 2, 3], 0, 1);
    expect(res).toEqual({"updatedArray":[2,3],"removedItems":[1]});
  });
});
