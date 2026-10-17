import { describe, it, expect } from "vitest";
import {
  paginateDataSlice,
  extractMiddleSubarray,
  spliceRemoveAt,
  spliceInsertAt,
  spliceReplaceRange,
  concatMultipleArrays,
  tailSlice,
  splitArrayIntoChunks,
  insertSorted,
  mergeInventoriesWithBonus,
  removeRangeAndReturnBoth,
  cloneViaSlice
} from "../src/05-subarrays.js";

describe("Модуль 5: Робота з підмасивами (slice, splice, concat)", () => {
  describe("5.1 paginateDataSlice - Пагінація за допомогою slice(start, end)", () => {
    it("тест 1: paginateDataSlice([1, 2, 3, 4, 5, 6, 7], 1, 3)", () => {
      expect(paginateDataSlice([1, 2, 3, 4, 5, 6, 7], 1, 3)).toEqual([1,2,3]);
    });
    it("тест 2: paginateDataSlice([1, 2, 3, 4, 5, 6, 7], 2, 3)", () => {
      expect(paginateDataSlice([1, 2, 3, 4, 5, 6, 7], 2, 3)).toEqual([4,5,6]);
    });
    it("тест 3: paginateDataSlice([1, 2, 3, 4, 5, 6, 7], 3, 3)", () => {
      expect(paginateDataSlice([1, 2, 3, 4, 5, 6, 7], 3, 3)).toEqual([7]);
    });
  });

  describe("5.2 extractMiddleSubarray - Вилучення центральної частини без зміни оригіналу", () => {
    it("тест 1: extractMiddleSubarray([10, 20, 30, 40, 50])", () => {
      expect(extractMiddleSubarray([10, 20, 30, 40, 50])).toEqual([20,30,40]);
    });
    it("тест 2: extractMiddleSubarray([\"start\", \"content\", \"end\"])", () => {
      expect(extractMiddleSubarray(["start", "content", "end"])).toEqual(["content"]);
    });
    it("тест 3: extractMiddleSubarray([1, 2])", () => {
      expect(extractMiddleSubarray([1, 2])).toEqual([]);
    });
  });

  describe("5.3 spliceRemoveAt - Видалення елементів за індексом через splice()", () => {
    it("тест 1: spliceRemoveAt([\"a\", \"b\", \"c\", \"d\"], 1, 2)", () => {
      expect(spliceRemoveAt(["a", "b", "c", "d"], 1, 2)).toEqual({"updatedArray":["a","d"],"removedItems":["b","c"]});
    });
    it("тест 2: spliceRemoveAt([1, 2, 3], 0, 1)", () => {
      expect(spliceRemoveAt([1, 2, 3], 0, 1)).toEqual({"updatedArray":[2,3],"removedItems":[1]});
    });
  });

  describe("5.4 spliceInsertAt - Вставка елементів у довільну позицію без видалення", () => {
    it("тест 1: spliceInsertAt([\"Mon\", \"Thu\"], 1, [\"Tue\", \"Wed\"])", () => {
      expect(spliceInsertAt(["Mon", "Thu"], 1, ["Tue", "Wed"])).toEqual(["Mon","Tue","Wed","Thu"]);
    });
    it("тест 2: spliceInsertAt([1, 4], 1, [2, 3])", () => {
      expect(spliceInsertAt([1, 4], 1, [2, 3])).toEqual([1,2,3,4]);
    });
  });

  describe("5.5 spliceReplaceRange - Заміна діапазону елементів через splice()", () => {
    it("тест 1: spliceReplaceRange([\"червоний\", \"ПОМИЛКА\", \"синій\"], 1, 1, [\"зелений\"])", () => {
      expect(spliceReplaceRange(["червоний", "ПОМИЛКА", "синій"], 1, 1, ["зелений"])).toEqual(["червоний","зелений","синій"]);
    });
    it("тест 2: spliceReplaceRange([1, 2, 3, 4], 1, 2, [20, 30])", () => {
      expect(spliceReplaceRange([1, 2, 3, 4], 1, 2, [20, 30])).toEqual([1,20,30,4]);
    });
  });

  describe("5.6 concatMultipleArrays - Обʼєднання кількох масивів через concat()", () => {
    it("тест 1: concatMultipleArrays([1, 2], [3, 4], [5])", () => {
      expect(concatMultipleArrays([1, 2], [3, 4], [5])).toEqual([1,2,3,4,5]);
    });
    it("тест 2: concatMultipleArrays([\"a\"], [], [\"b\"])", () => {
      expect(concatMultipleArrays(["a"], [], ["b"])).toEqual(["a","b"]);
    });
  });

  describe("5.7 tailSlice - Отримання N останніх елементів через slice(-n)", () => {
    it("тест 1: tailSlice([10, 20, 30, 40, 50], 3)", () => {
      expect(tailSlice([10, 20, 30, 40, 50], 3)).toEqual([30,40,50]);
    });
    it("тест 2: tailSlice([\"x\", \"y\"], 1)", () => {
      expect(tailSlice(["x", "y"], 1)).toEqual(["y"]);
    });
    it("тест 3: tailSlice([1, 2], 0)", () => {
      expect(tailSlice([1, 2], 0)).toEqual([]);
    });
  });

  describe("5.8 splitArrayIntoChunks - Розбиття масиву на чанки фіксованого розміру", () => {
    it("тест 1: splitArrayIntoChunks([1, 2, 3, 4, 5], 2)", () => {
      expect(splitArrayIntoChunks([1, 2, 3, 4, 5], 2)).toEqual([[1,2],[3,4],[5]]);
    });
    it("тест 2: splitArrayIntoChunks([\"a\", \"b\", \"c\", \"d\"], 2)", () => {
      expect(splitArrayIntoChunks(["a", "b", "c", "d"], 2)).toEqual([["a","b"],["c","d"]]);
    });
    it("тест 3: splitArrayIntoChunks([], 3)", () => {
      expect(splitArrayIntoChunks([], 3)).toEqual([]);
    });
  });

  describe("5.9 insertSorted - Вставка числа у відсортований масив на потрібне місце", () => {
    it("тест 1: insertSorted([10, 20, 30, 40], 25)", () => {
      expect(insertSorted([10, 20, 30, 40], 25)).toEqual([10,20,25,30,40]);
    });
    it("тест 2: insertSorted([1, 5], 0)", () => {
      expect(insertSorted([1, 5], 0)).toEqual([0,1,5]);
    });
    it("тест 3: insertSorted([1, 5], 10)", () => {
      expect(insertSorted([1, 5], 10)).toEqual([1,5,10]);
    });
  });

  describe("5.10 mergeInventoriesWithBonus - Обʼєднання списків інвентаря з усуненням дублікатів", () => {
    it("тест 1: mergeInventoriesWithBonus([\"меч\", \"щит\"], [\"зілля\", \"меч\"], [\"лук\", \"щит\"])", () => {
      expect(mergeInventoriesWithBonus(["меч", "щит"], ["зілля", "меч"], ["лук", "щит"])).toEqual(["меч","щит","зілля","лук"]);
    });
    it("тест 2: mergeInventoriesWithBonus([\"ключ\"], [], [\"ключ\"])", () => {
      expect(mergeInventoriesWithBonus(["ключ"], [], ["ключ"])).toEqual(["ключ"]);
    });
  });

  describe("5.11 removeRangeAndReturnBoth - Вилучення діапазону із поверненням залишку та вилучених", () => {
    it("тест 1: removeRangeAndReturnBoth([\"a\", \"b\", \"c\", \"d\", \"e\"], 1, 4)", () => {
      expect(removeRangeAndReturnBoth(["a", "b", "c", "d", "e"], 1, 4)).toEqual({"remaining":["a","e"],"extracted":["b","c","d"]});
    });
    it("тест 2: removeRangeAndReturnBoth([1, 2, 3], 0, 1)", () => {
      expect(removeRangeAndReturnBoth([1, 2, 3], 0, 1)).toEqual({"remaining":[2,3],"extracted":[1]});
    });
  });

  describe("5.12 cloneViaSlice - Клонування масиву за допомогою slice(0)", () => {
    it("тест 1: cloneViaSlice([1, 2, 3])", () => {
      expect(cloneViaSlice([1, 2, 3])).toEqual({"clone":[1,2,3],"isDistinctReference":true});
    });
    it("тест 2: cloneViaSlice([])", () => {
      expect(cloneViaSlice([])).toEqual({"clone":[],"isDistinctReference":true});
    });
  });

});
