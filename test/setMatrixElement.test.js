import { describe, it, expect } from 'vitest';
import { setMatrixElement } from '../src/setMatrixElement.js';

describe('6.3: setMatrixElement', () => {
  it('test 1', () => {
    const fn = setMatrixElement;
    const res = setMatrixElement([[1, 2], [3, 4]], 0, 1, 99);
    expect(res).toEqual([[1,99],[3,4]]);
  });
  it('test 2', () => {
    const fn = setMatrixElement;
    const res = setMatrixElement([["a", "b"]], 0, 0, "z");
    expect(res).toEqual([["z","b"]]);
  });
});
