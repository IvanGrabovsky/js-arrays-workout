import { describe, it, expect } from "vitest";
import {
  paginateArray,
  insertAt,
  replaceRange,
  mergeInventories,
  getLastNElements
} from "../src/00-subarrays.js";

describe("Модуль 4: Підмасиви (slice, splice, concat)", () => {
  it("paginateArray повертає відповідну сторінку без мутації", () => {
    const data = [1, 2, 3, 4, 5, 6, 7];
    expect(paginateArray(data, 1, 3)).toEqual([1, 2, 3]);
    expect(paginateArray(data, 2, 3)).toEqual([4, 5, 6]);
    expect(paginateArray(data, 3, 3)).toEqual([7]);
  });

  it("insertAt вставляє елементи в зазначений індекс", () => {
    expect(insertAt(["a", "d"], 1, "b", "c")).toEqual(["a", "b", "c", "d"]);
  });

  it("replaceRange замінює діапазон та повертає вилучені", () => {
    const res = replaceRange(["Mon", "Tue", "BAD", "Thu"], 2, 1, "Wed");
    expect(res).toEqual({ updated: ["Mon", "Tue", "Wed", "Thu"], removed: ["BAD"] });
  });

  it("mergeInventories обʼєднує кілька масивів через concat", () => {
    expect(mergeInventories(["sword"], ["shield"], ["potion"])).toEqual(["sword", "shield", "potion"]);
  });

  it("getLastNElements витягує хвіст масиву через slice(-n)", () => {
    expect(getLastNElements([1, 2, 3, 4, 5], 2)).toEqual([4, 5]);
    expect(getLastNElements([1, 2], 5)).toEqual([1, 2]);
    expect(getLastNElements([1, 2], 0)).toEqual([]);
  });
});
