import { describe, it, expect } from "vitest";
import {
  createMatrix,
  getMatrixCell,
  calculateRowSums,
  transposeMatrix,
  checkTicTacToeWinner
} from "../src/00-multidimensional.js";

describe("Модуль 5: Багатовимірні масиви", () => {
  it("createMatrix створює матрицю потрібного розміру", () => {
    expect(createMatrix(2, 3, 0)).toEqual([
      [0, 0, 0],
      [0, 0, 0]
    ]);
  });

  it("getMatrixCell безпечно читає значення", () => {
    const grid = [["a", "b"], ["c", "d"]];
    expect(getMatrixCell(grid, 0, 1)).toBe("b");
    expect(getMatrixCell(grid, 5, 5)).toBeUndefined();
  });

  it("calculateRowSums обчислює суми кожного рядка", () => {
    const m = [[1, 2, 3], [10, 20, 30], [5, 5, 5]];
    expect(calculateRowSums(m)).toEqual([6, 60, 15]);
  });

  it("transposeMatrix повертає транспоновану матрицю", () => {
    const m = [[1, 2, 3], [4, 5, 6]];
    expect(transposeMatrix(m)).toEqual([[1, 4], [2, 5], [3, 6]]);
  });

  it("checkTicTacToeWinner визначає переможця", () => {
    const boardX = [
      ["X", "X", "X"],
      ["O", "", "O"],
      ["", "", ""]
    ];
    expect(checkTicTacToeWinner(boardX)).toBe("X");

    const boardDiag = [
      ["O", "X", ""],
      ["", "O", "X"],
      ["", "", "O"]
    ];
    expect(checkTicTacToeWinner(boardDiag)).toBe("O");

    const boardNoWinner = [
      ["X", "O", "X"],
      ["O", "X", "O"],
      ["O", "X", "O"]
    ];
    expect(checkTicTacToeWinner(boardNoWinner)).toBe(null);
  });
});
