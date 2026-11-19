import { describe, it, expect } from 'vitest';
import { createColorPaletteBar } from '../src/createColorPaletteBar.js';

describe('15.7: createColorPaletteBar', () => {
  it('test 1', () => {
    const fn = createColorPaletteBar;
    const res = (() => { let picked = ''; const p = createColorPaletteBar(['#ff0000', '#00ff00'], c => picked = c); p.children[0].click(); return picked; })();
    expect(res).toEqual("#ff0000");
  });
});
