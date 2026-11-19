import { describe, it, expect } from 'vitest';
import { createChessboardView } from '../src/createChessboardView.js';

describe('16.19: createChessboardView', () => {
  it('test 1', () => {
    const fn = createChessboardView;
    const res = (() => { const b = createChessboardView({ 'e4': '♙' }); const e4 = b.querySelector('[data-coord="e4"]'); return [b.children.length, e4.textContent]; })();
    expect(res).toEqual([64,"♙"]);
  });
});
