import { describe, it, expect } from "vitest";
import {
  sumWithClassicFor,
  reverseWithWhile,
  filterWithForOf,
  findMinAndMax,
  calculateAverage,
  countOccurrences,
  printWithIndices,
  stepIteration,
  runningSumArray,
  breakEarlySearch
} from "../src/03-traversal.js";

describe("Модуль 3: Перебір масивів (for, while, for...of)", () => {
  describe("3.1 sumWithClassicFor - Сума чисел через for (let i = 0; i < length; i++)", () => {
    it("тест 1: sumWithClassicFor([1, 2, 3, 4, 5])", () => {
      expect(sumWithClassicFor([1, 2, 3, 4, 5])).toEqual(15);
    });
    it("тест 2: sumWithClassicFor([-10, 10, 5])", () => {
      expect(sumWithClassicFor([-10, 10, 5])).toEqual(5);
    });
    it("тест 3: sumWithClassicFor([])", () => {
      expect(sumWithClassicFor([])).toEqual(0);
    });
  });

  describe("3.2 reverseWithWhile - Реверсування масиву через цикл while", () => {
    it("тест 1: reverseWithWhile([\"a\", \"b\", \"c\"])", () => {
      expect(reverseWithWhile(["a", "b", "c"])).toEqual(["c","b","a"]);
    });
    it("тест 2: reverseWithWhile([1, 2])", () => {
      expect(reverseWithWhile([1, 2])).toEqual([2,1]);
    });
    it("тест 3: reverseWithWhile([])", () => {
      expect(reverseWithWhile([])).toEqual([]);
    });
  });

  describe("3.3 filterWithForOf - Фільтрація рядків за довжиною через for...of", () => {
    it("тест 1: filterWithForOf([\"кіт\", \"носоріг\", \"пес\", \"бегемот\"], 5)", () => {
      expect(filterWithForOf(["кіт", "носоріг", "пес", "бегемот"], 5)).toEqual(["носоріг","бегемот"]);
    });
    it("тест 2: filterWithForOf([\"js\", \"html\", \"css\"], 3)", () => {
      expect(filterWithForOf(["js", "html", "css"], 3)).toEqual(["html","css"]);
    });
    it("тест 3: filterWithForOf([], 2)", () => {
      expect(filterWithForOf([], 2)).toEqual([]);
    });
  });

  describe("3.4 findMinAndMax - Пошук мінімуму та максимуму без Math.min/max", () => {
    it("тест 1: findMinAndMax([12, 5, 88, -3, 20])", () => {
      expect(findMinAndMax([12, 5, 88, -3, 20])).toEqual({"min":-3,"max":88});
    });
    it("тест 2: findMinAndMax([7])", () => {
      expect(findMinAndMax([7])).toEqual({"min":7,"max":7});
    });
    it("тест 3: findMinAndMax([])", () => {
      expect(findMinAndMax([])).toEqual({"min":null,"max":null});
    });
  });

  describe("3.5 calculateAverage - Середнє арифметичне значення масиву", () => {
    it("тест 1: calculateAverage([10, 20, 30])", () => {
      expect(calculateAverage([10, 20, 30])).toEqual(20);
    });
    it("тест 2: calculateAverage([1, 2])", () => {
      expect(calculateAverage([1, 2])).toEqual(1.5);
    });
    it("тест 3: calculateAverage([])", () => {
      expect(calculateAverage([])).toEqual(0);
    });
  });

  describe("3.6 countOccurrences - Підрахунок входжень елемента", () => {
    it("тест 1: countOccurrences([\"apple\", \"banana\", \"apple\", \"kiwi\", \"apple\"], \"apple\")", () => {
      expect(countOccurrences(["apple", "banana", "apple", "kiwi", "apple"], "apple")).toEqual(3);
    });
    it("тест 2: countOccurrences([1, 2, 3], 99)", () => {
      expect(countOccurrences([1, 2, 3], 99)).toEqual(0);
    });
    it("тест 3: countOccurrences([], \"x\")", () => {
      expect(countOccurrences([], "x")).toEqual(0);
    });
  });

  describe("3.7 printWithIndices - Формування індексованого списку", () => {
    it("тест 1: printWithIndices([\"HTML\", \"CSS\", \"JS\"])", () => {
      expect(printWithIndices(["HTML", "CSS", "JS"])).toEqual(["0: HTML","1: CSS","2: JS"]);
    });
    it("тест 2: printWithIndices([])", () => {
      expect(printWithIndices([])).toEqual([]);
    });
  });

  describe("3.8 stepIteration - Перебір масиву з довільним кроком", () => {
    it("тест 1: stepIteration([10, 20, 30, 40, 50, 60], 2)", () => {
      expect(stepIteration([10, 20, 30, 40, 50, 60], 2)).toEqual([10,30,50]);
    });
    it("тест 2: stepIteration([\"a\", \"b\", \"c\", \"d\"], 3)", () => {
      expect(stepIteration(["a", "b", "c", "d"], 3)).toEqual(["a","d"]);
    });
    it("тест 3: stepIteration([1, 2], 0)", () => {
      expect(stepIteration([1, 2], 0)).toEqual([]);
    });
  });

  describe("3.9 runningSumArray - Побудова масиву накопичувальних сум", () => {
    it("тест 1: runningSumArray([1, 2, 3, 4])", () => {
      expect(runningSumArray([1, 2, 3, 4])).toEqual([1,3,6,10]);
    });
    it("тест 2: runningSumArray([3, 1, 2, 10, 1])", () => {
      expect(runningSumArray([3, 1, 2, 10, 1])).toEqual([3,4,6,16,17]);
    });
    it("тест 3: runningSumArray([])", () => {
      expect(runningSumArray([])).toEqual([]);
    });
  });

  describe("3.10 breakEarlySearch - Дострокове переривання перебору (break)", () => {
    it("тест 1: breakEarlySearch([1, 3, 5, 8, 9, 10])", () => {
      expect(breakEarlySearch([1, 3, 5, 8, 9, 10])).toEqual({"value":8,"checkedSteps":4});
    });
    it("тест 2: breakEarlySearch([1, 3, 5])", () => {
      expect(breakEarlySearch([1, 3, 5])).toEqual({"value":null,"checkedSteps":3});
    });
    it("тест 3: breakEarlySearch([])", () => {
      expect(breakEarlySearch([])).toEqual({"value":null,"checkedSteps":0});
    });
  });

});
