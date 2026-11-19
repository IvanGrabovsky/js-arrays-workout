import { describe, it, expect } from 'vitest';
import { emptyArrayTechniques } from '../src/emptyArrayTechniques.js';

describe('1.7: emptyArrayTechniques', () => {
  it('test 1', () => {
    const fn = emptyArrayTechniques;
    const res = emptyArrayTechniques([1, 2, 3, 4]);
    expect(res).toEqual([]);
  });
  it('test 2', () => {
    const fn = emptyArrayTechniques;
    const res = emptyArrayTechniques(["hello"]);
    expect(res).toEqual([]);
  });
});
