import { describe, it, expect } from "vitest";
import {
  getFirstAndLast,
  getAtNegativeOffset,
  updateElementAtIndex,
  swapElements,
  truncateArray,
  safeGetWithDefault,
  getMiddleElement,
  setLastElement,
  cyclicIndexAccess,
  compareArrayLengths
} from "../src/02-access-length.js";

describe("Модуль 2: Доступ до елементів, зміна значень та .length", () => {
  describe("2.1 getFirstAndLast - Отримання першого та останнього елемента", () => {
    it("тест 1: getFirstAndLast([10, 20, 30, 40])", () => {
      expect(getFirstAndLast([10, 20, 30, 40])).toEqual({"first":10,"last":40,"length":4});
    });
    it("тест 2: getFirstAndLast([\"єдиний\"])", () => {
      expect(getFirstAndLast(["єдиний"])).toEqual({"first":"єдиний","last":"єдиний","length":1});
    });
    it("тест 3: getFirstAndLast([])", () => {
      expect(getFirstAndLast([])).toEqual({"first":null,"last":null,"length":0});
    });
  });

  describe("2.2 getAtNegativeOffset - Доступ до елементів з кінця через arr.at()", () => {
    it("тест 1: getAtNegativeOffset([\"a\", \"b\", \"c\", \"d\"], -1)", () => {
      expect(getAtNegativeOffset(["a", "b", "c", "d"], -1)).toEqual("d");
    });
    it("тест 2: getAtNegativeOffset([\"a\", \"b\", \"c\", \"d\"], -2)", () => {
      expect(getAtNegativeOffset(["a", "b", "c", "d"], -2)).toEqual("c");
    });
    it("тест 3: getAtNegativeOffset([\"a\", \"b\"], -5)", () => {
      expect(getAtNegativeOffset(["a", "b"], -5)).toEqual(undefined);
    });
  });

  describe("2.3 updateElementAtIndex - Зміна значення елемента за індексом", () => {
    it("тест 1: updateElementAtIndex([1, 2, 3], 1, 99)", () => {
      expect(updateElementAtIndex([1, 2, 3], 1, 99)).toEqual([1,99,3]);
    });
    it("тест 2: updateElementAtIndex([\"x\", \"y\"], 0, \"z\")", () => {
      expect(updateElementAtIndex(["x", "y"], 0, "z")).toEqual(["z","y"]);
    });
    it("тест 3: updateElementAtIndex([1, 2], 5, 100)", () => {
      expect(updateElementAtIndex([1, 2], 5, 100)).toEqual([1,2]);
    });
  });

  describe("2.4 swapElements - Обмін двох елементів місцями за індексами", () => {
    it("тест 1: swapElements([\"перший\", \"другий\", \"третій\"], 0, 2)", () => {
      expect(swapElements(["перший", "другий", "третій"], 0, 2)).toEqual(["третій","другий","перший"]);
    });
    it("тест 2: swapElements([1, 2, 3], 0, 1)", () => {
      expect(swapElements([1, 2, 3], 0, 1)).toEqual([2,1,3]);
    });
    it("тест 3: swapElements([1, 2], 0, 9)", () => {
      expect(swapElements([1, 2], 0, 9)).toEqual([1,2]);
    });
  });

  describe("2.5 truncateArray - Обрізання довжини масиву через .length", () => {
    it("тест 1: truncateArray([1, 2, 3, 4, 5], 3)", () => {
      expect(truncateArray([1, 2, 3, 4, 5], 3)).toEqual([1,2,3]);
    });
    it("тест 2: truncateArray([\"a\", \"b\", \"c\"], 1)", () => {
      expect(truncateArray(["a", "b", "c"], 1)).toEqual(["a"]);
    });
    it("тест 3: truncateArray([10, 20], 0)", () => {
      expect(truncateArray([10, 20], 0)).toEqual([]);
    });
  });

  describe("2.6 safeGetWithDefault - Безпечне зчитування з дефолтним значенням", () => {
    it("тест 1: safeGetWithDefault([\"admin\", \"editor\"], 1, \"guest\")", () => {
      expect(safeGetWithDefault(["admin", "editor"], 1, "guest")).toEqual("editor");
    });
    it("тест 2: safeGetWithDefault([\"admin\", \"editor\"], 5, \"guest\")", () => {
      expect(safeGetWithDefault(["admin", "editor"], 5, "guest")).toEqual("guest");
    });
    it("тест 3: safeGetWithDefault([], 0, \"empty\")", () => {
      expect(safeGetWithDefault([], 0, "empty")).toEqual("empty");
    });
  });

  describe("2.7 getMiddleElement - Отримання центрального елемента масиву", () => {
    it("тест 1: getMiddleElement([10, 20, 30, 40, 50])", () => {
      expect(getMiddleElement([10, 20, 30, 40, 50])).toEqual(30);
    });
    it("тест 2: getMiddleElement([10, 20, 30, 40])", () => {
      expect(getMiddleElement([10, 20, 30, 40])).toEqual(20);
    });
    it("тест 3: getMiddleElement([])", () => {
      expect(getMiddleElement([])).toEqual(null);
    });
  });

  describe("2.8 setLastElement - Оновлення значення останнього елемента", () => {
    it("тест 1: setLastElement([1, 2, 3], 99)", () => {
      expect(setLastElement([1, 2, 3], 99)).toEqual([1,2,99]);
    });
    it("тест 2: setLastElement([], \"перший\")", () => {
      expect(setLastElement([], "перший")).toEqual(["перший"]);
    });
  });

  describe("2.9 cyclicIndexAccess - Циклічний доступ до елементів за модулем", () => {
    it("тест 1: cyclicIndexAccess([\"Пн\", \"Вт\", \"Ср\"], 4)", () => {
      expect(cyclicIndexAccess(["Пн", "Вт", "Ср"], 4)).toEqual("Вт");
    });
    it("тест 2: cyclicIndexAccess([\"Пн\", \"Вт\", \"Ср\"], 0)", () => {
      expect(cyclicIndexAccess(["Пн", "Вт", "Ср"], 0)).toEqual("Пн");
    });
    it("тест 3: cyclicIndexAccess([\"Пн\", \"Вт\", \"Ср\"], -1)", () => {
      expect(cyclicIndexAccess(["Пн", "Вт", "Ср"], -1)).toEqual("Ср");
    });
  });

  describe("2.10 compareArrayLengths - Порівняння довжини двох масивів", () => {
    it("тест 1: compareArrayLengths([1, 2, 3], [1, 2])", () => {
      expect(compareArrayLengths([1, 2, 3], [1, 2])).toEqual("first_longer");
    });
    it("тест 2: compareArrayLengths([\"a\"], [\"x\", \"y\"])", () => {
      expect(compareArrayLengths(["a"], ["x", "y"])).toEqual("second_longer");
    });
    it("тест 3: compareArrayLengths([], [])", () => {
      expect(compareArrayLengths([], [])).toEqual("equal");
    });
  });

});
