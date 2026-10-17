import { describe, it, expect } from "vitest";
import {
  sumWithForLoop,
  reverseWithWhileLoop,
  countStringsLongerThan,
  findMinMax,
  calculateAverage
} from "../src/00-traversal.js";

describe("Модуль 2: Перебір масивів", () => {
  it("sumWithForLoop коректно сумує елементи", () => {
    expect(sumWithForLoop([1, 2, 3, 4])).toBe(10);
    expect(sumWithForLoop([])).toBe(0);
  });

  it("reverseWithWhileLoop реверсує масив через while", () => {
    expect(reverseWithWhileLoop(["a", "b", "c"])).toEqual(["c", "b", "a"]);
    expect(reverseWithWhileLoop([])).toEqual([]);
  });

  it("countStringsLongerThan рахує рядки через for...of", () => {
    expect(countStringsLongerThan(["cat", "elephant", "dog", "giraffe"], 3)).toBe(2);
  });

  it("findMinMax знаходить екстремуми без Math.min/max", () => {
    expect(findMinMax([14, 2, 88, -5, 30])).toEqual({ min: -5, max: 88 });
    expect(findMinMax([])).toEqual({ min: null, max: null });
  });

  it("calculateAverage повертає середнє з округленням", () => {
    expect(calculateAverage([10, 20, 30])).toBe(20);
    expect(calculateAverage([1, 2])).toBe(1.5);
    expect(calculateAverage([])).toBe(0);
  });
});
