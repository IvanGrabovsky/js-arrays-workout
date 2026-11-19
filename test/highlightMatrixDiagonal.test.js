import { describe, it, expect } from 'vitest';
import { highlightMatrixDiagonal } from '../src/highlightMatrixDiagonal.js';

describe('16.5: highlightMatrixDiagonal', () => {
  it('test 1', () => {
    const fn = highlightMatrixDiagonal;
    const res = (() => { const wrap = document.createElement('div'); for (let i = 0; i < 9; i++) wrap.appendChild(document.createElement('div')); const count = highlightMatrixDiagonal(wrap, 3); return [count, wrap.children[0].classList.contains('diagonal'), wrap.children[4].classList.contains('diagonal')]; })();
    expect(res).toEqual([3,true,true]);
  });
});
