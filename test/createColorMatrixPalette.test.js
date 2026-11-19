import { describe, it, expect } from 'vitest';
import { createColorMatrixPalette } from '../src/createColorMatrixPalette.js';

describe('16.26: createColorMatrixPalette', () => {
  it('test 1', () => {
    const fn = createColorMatrixPalette;
    const res = (() => { let copied = null; const p = createColorMatrixPalette([['#ff0000', '#00ff00']], c => copied = c); p.children[0].click(); return copied; })();
    expect(res).toEqual("#ff0000");
  });
});
