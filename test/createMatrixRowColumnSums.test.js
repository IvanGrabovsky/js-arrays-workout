import { describe, it, expect } from 'vitest';
import { createMatrixRowColumnSums } from '../src/createMatrixRowColumnSums.js';

describe('16.24: createMatrixRowColumnSums', () => {
  it('test 1', () => {
    const fn = createMatrixRowColumnSums;
    const res = (() => { const t = createMatrixRowColumnSums([[1, 2], [3, 4]]); return [t.querySelector('.grand-total').textContent, t.querySelectorAll('.sum-cell')[0].textContent]; })();
    expect(res).toEqual(["10","3"]);
  });
});
