import { describe, it, expect } from 'vitest';
import { countOccurrences } from '../src/countOccurrences.js';

describe('3.6: countOccurrences', () => {
  it('test 1', () => {
    const fn = countOccurrences;
    const res = countOccurrences(["apple", "banana", "apple", "kiwi", "apple"], "apple");
    expect(res).toEqual(3);
  });
  it('test 2', () => {
    const fn = countOccurrences;
    const res = countOccurrences([1, 2, 3], 99);
    expect(res).toEqual(0);
  });
  it('test 3', () => {
    const fn = countOccurrences;
    const res = countOccurrences([], "x");
    expect(res).toEqual(0);
  });
});
