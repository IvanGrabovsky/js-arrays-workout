import { describe, it, expect } from 'vitest';
import { createMatrixGrid } from '../src/createMatrixGrid.js';

describe('16.4: createMatrixGrid', () => {
  it('test 1', () => {
    const fn = createMatrixGrid;
    const res = (() => { const g = createMatrixGrid([[1, 2], [3, 4]]); return [g.children.length, g.children[2].textContent]; })();
    expect(res).toEqual([4,"3"]);
  });
});
