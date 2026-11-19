import { describe, it, expect } from 'vitest';
import { createTicTacToeBoard } from '../src/createTicTacToeBoard.js';

describe('16.7: createTicTacToeBoard', () => {
  it('test 1', () => {
    const fn = createTicTacToeBoard;
    const res = (() => { let moved = null; const b = createTicTacToeBoard([['X', '', ''], ['', 'O', ''], ['', '', '']], (r, c) => moved = [r, c]); b.children[1].click(); return [b.children[0].textContent, moved]; })();
    expect(res).toEqual(["X",[0,1]]);
  });
});
