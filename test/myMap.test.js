import { describe, it, expect } from 'vitest';
import { myMap } from '../src/myMap.js';

describe('8.1: myMap', () => {
  it('test 1', () => {
    const fn = myMap;
    const res = myMap([1, 2, 3], x => x * 2);
    expect(res).toEqual([2,4,6]);
  });
  it('test 2', () => {
    const fn = myMap;
    const res = myMap(["a", "b"], (x, i) => `${i}:${x}`);
    expect(res).toEqual(["0:a","1:b"]);
  });
});
