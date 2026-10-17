import { describe, it, expect } from "vitest";
import {
  createWithLiteral,
  createWithConstructor,
  getFirstAndLast,
  updateElementAtIndex,
  setArrayLength,
  getAtOffset
} from "../src/00-create-access.js";

describe("Модуль 1: Створення та доступ до елементів", () => {
  it("createWithLiteral створює масив з 3 елементів", () => {
    expect(createWithLiteral(10, 20, 30)).toEqual([10, 20, 30]);
    expect(createWithLiteral("a", "b", "c")).toEqual(["a", "b", "c"]);
  });

  it("createWithConstructor створює масив фіксованої довжини із заповненням", () => {
    expect(createWithConstructor(3, "0")).toEqual(["0", "0", "0"]);
    expect(createWithConstructor(0, 5)).toEqual([]);
  });

  it("getFirstAndLast повертає перший, останній елемент та довжину", () => {
    expect(getFirstAndLast([10, 20, 30, 40])).toEqual({ first: 10, last: 40, length: 4 });
    expect(getFirstAndLast([])).toEqual({ first: undefined, last: undefined, length: 0 });
  });

  it("updateElementAtIndex змінює елемент за індексом без мутації оригіналу", () => {
    const orig = [1, 2, 3];
    expect(updateElementAtIndex(orig, 1, 99)).toEqual([1, 99, 3]);
    expect(orig).toEqual([1, 2, 3]);
  });

  it("setArrayLength змінює length масиву", () => {
    expect(setArrayLength([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
  });

  it("getAtOffset підтримує відʼємні індекси", () => {
    expect(getAtOffset([10, 20, 30], -1)).toBe(30);
    expect(getAtOffset([10, 20, 30], 0)).toBe(10);
  });
});
