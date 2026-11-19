import { describe, it, expect } from 'vitest';
import { filterWithForOf } from '../src/filterWithForOf.js';

describe('3.3: filterWithForOf', () => {
  it('test 1', () => {
    const fn = filterWithForOf;
    const res = filterWithForOf(["кіт", "носоріг", "пес", "бегемот"], 5);
    expect(res).toEqual(["носоріг","бегемот"]);
  });
  it('test 2', () => {
    const fn = filterWithForOf;
    const res = filterWithForOf(["js", "html", "css"], 3);
    expect(res).toEqual(["html","css"]);
  });
  it('test 3', () => {
    const fn = filterWithForOf;
    const res = filterWithForOf([], 2);
    expect(res).toEqual([]);
  });
});
