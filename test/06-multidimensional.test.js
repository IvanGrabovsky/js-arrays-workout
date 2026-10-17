import { describe, it, expect } from "vitest";
import {
  create2DMatrix,
  getMatrixElement,
  setMatrixElement,
  matrixTotalSum,
  matrixRowSums,
  matrixColSums,
  matrixMainDiagonal,
  matrixTranspose,
  findInMatrix,
  flatten2D,
  ticTacToeCheck,
  createMultiplicationMatrix
} from "../src/06-multidimensional.js";

describe("Модуль 6: Багатовимірні масиви (2D матриці, сітки, таблиці)", () => {
  describe("6.1 create2DMatrix - Створення матриці rows x cols із дефолтним значенням", () => {
    it("тест 1: create2DMatrix(2, 3, 0)", () => {
      expect(create2DMatrix(2, 3, 0)).toEqual([[0,0,0],[0,0,0]]);
    });
    it("тест 2: create2DMatrix(1, 2, \"x\")", () => {
      expect(create2DMatrix(1, 2, "x")).toEqual([["x","x"]]);
    });
    it("тест 3: create2DMatrix(0, 5, 1)", () => {
      expect(create2DMatrix(0, 5, 1)).toEqual([]);
    });
  });

  describe("6.2 getMatrixElement - Безпечне зчитування комірки matrix[r][c]", () => {
    it("тест 1: getMatrixElement([[\"A\", \"B\"], [\"C\", \"D\"]], 1, 0)", () => {
      expect(getMatrixElement([["A", "B"], ["C", "D"]], 1, 0)).toEqual("C");
    });
    it("тест 2: getMatrixElement([[1, 2], [3, 4]], 5, 1)", () => {
      expect(getMatrixElement([[1, 2], [3, 4]], 5, 1)).toEqual(undefined);
    });
    it("тест 3: getMatrixElement([], 0, 0)", () => {
      expect(getMatrixElement([], 0, 0)).toEqual(undefined);
    });
  });

  describe("6.3 setMatrixElement - Безпечний запис у комірку матриці", () => {
    it("тест 1: setMatrixElement([[1, 2], [3, 4]], 0, 1, 99)", () => {
      expect(setMatrixElement([[1, 2], [3, 4]], 0, 1, 99)).toEqual([[1,99],[3,4]]);
    });
    it("тест 2: setMatrixElement([[\"a\", \"b\"]], 0, 0, \"z\")", () => {
      expect(setMatrixElement([["a", "b"]], 0, 0, "z")).toEqual([["z","b"]]);
    });
  });

  describe("6.4 matrixTotalSum - Сума всіх чисел у 2D масиві", () => {
    it("тест 1: matrixTotalSum([[1, 2], [3, 4]])", () => {
      expect(matrixTotalSum([[1, 2], [3, 4]])).toEqual(10);
    });
    it("тест 2: matrixTotalSum([[5, 5], [10, -5]])", () => {
      expect(matrixTotalSum([[5, 5], [10, -5]])).toEqual(15);
    });
    it("тест 3: matrixTotalSum([])", () => {
      expect(matrixTotalSum([])).toEqual(0);
    });
  });

  describe("6.5 matrixRowSums - Сума елементів кожного рядка матриці", () => {
    it("тест 1: matrixRowSums([[1, 2, 3], [10, 20, 30]])", () => {
      expect(matrixRowSums([[1, 2, 3], [10, 20, 30]])).toEqual([6,60]);
    });
    it("тест 2: matrixRowSums([[5]])", () => {
      expect(matrixRowSums([[5]])).toEqual([5]);
    });
    it("тест 3: matrixRowSums([])", () => {
      expect(matrixRowSums([])).toEqual([]);
    });
  });

  describe("6.6 matrixColSums - Сума елементів кожного стовпчика матриці", () => {
    it("тест 1: matrixColSums([[1, 2], [3, 4]])", () => {
      expect(matrixColSums([[1, 2], [3, 4]])).toEqual([4,6]);
    });
    it("тест 2: matrixColSums([[1, 10, 100], [2, 20, 200]])", () => {
      expect(matrixColSums([[1, 10, 100], [2, 20, 200]])).toEqual([3,30,300]);
    });
    it("тест 3: matrixColSums([])", () => {
      expect(matrixColSums([])).toEqual([]);
    });
  });

  describe("6.7 matrixMainDiagonal - Елементи головної діагоналі квадратної матриці", () => {
    it("тест 1: matrixMainDiagonal([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
      expect(matrixMainDiagonal([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([1,5,9]);
    });
    it("тест 2: matrixMainDiagonal([[\"a\", \"b\"], [\"c\", \"d\"]])", () => {
      expect(matrixMainDiagonal([["a", "b"], ["c", "d"]])).toEqual(["a","d"]);
    });
    it("тест 3: matrixMainDiagonal([])", () => {
      expect(matrixMainDiagonal([])).toEqual([]);
    });
  });

  describe("6.8 matrixTranspose - Транспонування прямокутної матриці", () => {
    it("тест 1: matrixTranspose([[1, 2, 3], [4, 5, 6]])", () => {
      expect(matrixTranspose([[1, 2, 3], [4, 5, 6]])).toEqual([[1,4],[2,5],[3,6]]);
    });
    it("тест 2: matrixTranspose([[1, 2], [3, 4]])", () => {
      expect(matrixTranspose([[1, 2], [3, 4]])).toEqual([[1,3],[2,4]]);
    });
    it("тест 3: matrixTranspose([])", () => {
      expect(matrixTranspose([])).toEqual([]);
    });
  });

  describe("6.9 findInMatrix - Пошук координат елемента в матриці", () => {
    it("тест 1: findInMatrix([[\"a\", \"b\"], [\"c\", \"d\"]], \"c\")", () => {
      expect(findInMatrix([["a", "b"], ["c", "d"]], "c")).toEqual({"row":1,"col":0});
    });
    it("тест 2: findInMatrix([[1, 2], [3, 4]], 99)", () => {
      expect(findInMatrix([[1, 2], [3, 4]], 99)).toEqual(null);
    });
    it("тест 3: findInMatrix([], 5)", () => {
      expect(findInMatrix([], 5)).toEqual(null);
    });
  });

  describe("6.10 flatten2D - Сплющення 2D матриці в 1D масив через перебір", () => {
    it("тест 1: flatten2D([[1, 2], [3, 4], [5]])", () => {
      expect(flatten2D([[1, 2], [3, 4], [5]])).toEqual([1,2,3,4,5]);
    });
    it("тест 2: flatten2D([[\"x\"], [\"y\", \"z\"]])", () => {
      expect(flatten2D([["x"], ["y", "z"]])).toEqual(["x","y","z"]);
    });
    it("тест 3: flatten2D([])", () => {
      expect(flatten2D([])).toEqual([]);
    });
  });

  describe("6.11 ticTacToeCheck - Перевірка переможця на полі Хрестики-Нулики 3x3", () => {
    it("тест 1: ticTacToeCheck([[\"X\", \"X\", \"X\"], [\"O\", \" \", \"O\"], [\" \", \" \", \" \"]])", () => {
      expect(ticTacToeCheck([["X", "X", "X"], ["O", " ", "O"], [" ", " ", " "]])).toEqual("X");
    });
    it("тест 2: ticTacToeCheck([[\"O\", \"X\", \" \"], [\" \", \"O\", \"X\"], [\" \", \" \", \"O\"]])", () => {
      expect(ticTacToeCheck([["O", "X", " "], [" ", "O", "X"], [" ", " ", "O"]])).toEqual("O");
    });
    it("тест 3: ticTacToeCheck([[\"X\", \"O\", \"X\"], [\"O\", \"X\", \"O\"], [\"O\", \"X\", \"O\"]])", () => {
      expect(ticTacToeCheck([["X", "O", "X"], ["O", "X", "O"], ["O", "X", "O"]])).toEqual(null);
    });
  });

  describe("6.12 createMultiplicationMatrix - Генерація таблиці множення N x N", () => {
    it("тест 1: createMultiplicationMatrix(3)", () => {
      expect(createMultiplicationMatrix(3)).toEqual([[1,2,3],[2,4,6],[3,6,9]]);
    });
    it("тест 2: createMultiplicationMatrix(1)", () => {
      expect(createMultiplicationMatrix(1)).toEqual([[1]]);
    });
    it("тест 3: createMultiplicationMatrix(0)", () => {
      expect(createMultiplicationMatrix(0)).toEqual([]);
    });
  });

});
