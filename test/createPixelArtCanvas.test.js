import { describe, it, expect } from 'vitest';
import { createPixelArtCanvas } from '../src/createPixelArtCanvas.js';

describe('16.16: createPixelArtCanvas', () => {
  it('test 1', () => {
    const fn = createPixelArtCanvas;
    const res = (() => { const c = createPixelArtCanvas(4, '#ff0000'); c.children[0].click(); return [c.children.length, c.children[0].style.backgroundColor]; })();
    expect(res).toEqual([16,"rgb(255, 0, 0)"]);
  });
});
