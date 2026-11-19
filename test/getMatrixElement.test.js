import { describe, it, expect } from 'vitest';
import { getMatrixElement } from '../src/getMatrixElement.js';

describe('6.2: getMatrixElement', () => {
  it('test 1', () => {
    const fn = getMatrixElement;
    const res = getMatrixElement([["A", "B"], ["C", "D"]], 1, 0);
    expect(res).toEqual("C");
  });
  it('test 2', () => {
    const fn = getMatrixElement;
    const res = getMatrixElement([[1, 2], [3, 4]], 5, 1);
    expect(res).toEqual(undefined);
  });
  it('test 3', () => {
    const fn = getMatrixElement;
    const res = getMatrixElement([], 0, 0);
    expect(res).toEqual(undefined);
  });
});
