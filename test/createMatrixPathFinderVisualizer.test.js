import { describe, it, expect } from 'vitest';
import { createMatrixPathFinderVisualizer } from '../src/createMatrixPathFinderVisualizer.js';

describe('16.35: createMatrixPathFinderVisualizer', () => {
  it('test 1', () => {
    const fn = createMatrixPathFinderVisualizer;
    const res = (() => { const g = createMatrixPathFinderVisualizer(3, 3, [[0, 0], [1, 1], [2, 2]]); return g.querySelectorAll('.path-step').length; })();
    expect(res).toEqual(3);
  });
});
