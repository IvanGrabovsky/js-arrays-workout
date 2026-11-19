import { describe, it, expect } from 'vitest';
import { createMatrixTransposeView } from '../src/createMatrixTransposeView.js';

describe('16.14: createMatrixTransposeView', () => {
  it('test 1', () => {
    const fn = createMatrixTransposeView;
    const res = (() => { const v = createMatrixTransposeView([[1, 2, 3], [4, 5, 6]]); const t2 = v.querySelectorAll('table')[1]; return [t2.querySelectorAll('tr').length, t2.querySelectorAll('td').length]; })();
    expect(res).toEqual([3,6]);
  });
});
