import { describe, it, expect } from 'vitest';
import { createArrayLiteral } from '../src/createArrayLiteral.js';

describe('1.1: createArrayLiteral', () => {
  it('test 1', () => {
    const fn = createArrayLiteral;
    const res = createArrayLiteral(1, 2, 3);
    expect(res).toEqual([1,2,3]);
  });
  it('test 2', () => {
    const fn = createArrayLiteral;
    const res = createArrayLiteral("яблуко", "груша", "слива");
    expect(res).toEqual(["яблуко","груша","слива"]);
  });
  it('test 3', () => {
    const fn = createArrayLiteral;
    const res = createArrayLiteral(true, null, 42);
    expect(res).toEqual([true,null,42]);
  });
});
