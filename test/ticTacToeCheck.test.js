import { describe, it, expect } from 'vitest';
import { ticTacToeCheck } from '../src/ticTacToeCheck.js';

describe('6.11: ticTacToeCheck', () => {
  it('test 1', () => {
    const fn = ticTacToeCheck;
    const res = ticTacToeCheck([["X", "X", "X"], ["O", " ", "O"], [" ", " ", " "]]);
    expect(res).toEqual("X");
  });
  it('test 2', () => {
    const fn = ticTacToeCheck;
    const res = ticTacToeCheck([["O", "X", " "], [" ", "O", "X"], [" ", " ", "O"]]);
    expect(res).toEqual("O");
  });
  it('test 3', () => {
    const fn = ticTacToeCheck;
    const res = ticTacToeCheck([["X", "O", "X"], ["O", "X", "O"], ["O", "X", "O"]]);
    expect(res).toEqual(null);
  });
});
