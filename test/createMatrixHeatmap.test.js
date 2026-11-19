import { describe, it, expect } from 'vitest';
import { createMatrixHeatmap } from '../src/createMatrixHeatmap.js';

describe('16.10: createMatrixHeatmap', () => {
  it('test 1', () => {
    const fn = createMatrixHeatmap;
    const res = (() => { const hm = createMatrixHeatmap([[10, 50], [100, 0]], 100); return [hm.querySelectorAll('td').length, hm.querySelectorAll('td')[2].textContent]; })();
    expect(res).toEqual([4,"100"]);
  });
});
