import { describe, it, expect } from "vitest";
import {
  stackPushPop,
  queuePushShift,
  priorityUnshift,
  removeLastNElements,
  checkExistence,
  findFirstIndex,
  findLastIndex,
  removeAllOccurrences,
  browserHistoryNavigation,
  batchPushItems,
  rotateArrayRight,
  rotateArrayLeft
} from "../src/04-stack-queue.js";

describe("Модуль 4: Операції стек та черга (push, pop, shift, unshift, includes, indexOf)", () => {
  describe("4.1 stackPushPop - Моделювання стека (LIFO) через push та pop", () => {
    it("тест 1: stackPushPop([{ action: \"push\", item: \"file1\" }, { action: \"push\", item: \"file2\" }, { action: \"pop\" }, { action: \"push\", item: \"file3\" }])", () => {
      expect(stackPushPop([{ action: "push", item: "file1" }, { action: "push", item: "file2" }, { action: "pop" }, { action: "push", item: "file3" }])).toEqual({"currentStack":["file1","file3"],"history":["file2"]});
    });
    it("тест 2: stackPushPop([])", () => {
      expect(stackPushPop([])).toEqual({"currentStack":[],"history":[]});
    });
  });

  describe("4.2 queuePushShift - Моделювання черги (FIFO) через push та shift", () => {
    it("тест 1: queuePushShift([\"Клієнт_1\", \"Клієнт_2\", \"Клієнт_3\"])", () => {
      expect(queuePushShift(["Клієнт_1", "Клієнт_2", "Клієнт_3"])).toEqual(["Клієнт_1","Клієнт_2","Клієнт_3"]);
    });
    it("тест 2: queuePushShift([])", () => {
      expect(queuePushShift([])).toEqual([]);
    });
  });

  describe("4.3 priorityUnshift - Пріоритетне додавання на початок черги через unshift", () => {
    it("тест 1: priorityUnshift([\"User1\", \"User2\"], [\"VIP_A\", \"VIP_B\"])", () => {
      expect(priorityUnshift(["User1", "User2"], ["VIP_A", "VIP_B"])).toEqual(["VIP_A","VIP_B","User1","User2"]);
    });
    it("тест 2: priorityUnshift([\"User1\"], [])", () => {
      expect(priorityUnshift(["User1"], [])).toEqual(["User1"]);
    });
  });

  describe("4.4 removeLastNElements - Видалення N останніх елементів через pop()", () => {
    it("тест 1: removeLastNElements([1, 2, 3, 4, 5], 2)", () => {
      expect(removeLastNElements([1, 2, 3, 4, 5], 2)).toEqual([1,2,3]);
    });
    it("тест 2: removeLastNElements([\"a\", \"b\"], 5)", () => {
      expect(removeLastNElements(["a", "b"], 5)).toEqual([]);
    });
  });

  describe("4.5 checkExistence - Перевірка наявності елемента через includes()", () => {
    it("тест 1: checkExistence([\"admin\", \"manager\", \"support\"], \"admin\")", () => {
      expect(checkExistence(["admin", "manager", "support"], "admin")).toEqual(true);
    });
    it("тест 2: checkExistence([\"admin\", \"manager\"], \"guest\")", () => {
      expect(checkExistence(["admin", "manager"], "guest")).toEqual(false);
    });
    it("тест 3: checkExistence([], \"x\")", () => {
      expect(checkExistence([], "x")).toEqual(false);
    });
  });

  describe("4.6 findFirstIndex - Пошук першого індексу через indexOf()", () => {
    it("тест 1: findFirstIndex([\"apple\", \"banana\", \"kiwi\", \"banana\"], \"banana\")", () => {
      expect(findFirstIndex(["apple", "banana", "kiwi", "banana"], "banana")).toEqual(1);
    });
    it("тест 2: findFirstIndex([10, 20, 30], 99)", () => {
      expect(findFirstIndex([10, 20, 30], 99)).toEqual(-1);
    });
  });

  describe("4.7 findLastIndex - Пошук останнього входження через lastIndexOf()", () => {
    it("тест 1: findLastIndex([\"a\", \"b\", \"c\", \"b\", \"d\"], \"b\")", () => {
      expect(findLastIndex(["a", "b", "c", "b", "d"], "b")).toEqual(3);
    });
    it("тест 2: findLastIndex([1, 2, 3], 1)", () => {
      expect(findLastIndex([1, 2, 3], 1)).toEqual(0);
    });
    it("тест 3: findLastIndex([1, 2, 3], 99)", () => {
      expect(findLastIndex([1, 2, 3], 99)).toEqual(-1);
    });
  });

  describe("4.8 removeAllOccurrences - Видалення всіх екземплярів через indexOf та splice", () => {
    it("тест 1: removeAllOccurrences([1, 2, 3, 2, 4, 2, 5], 2)", () => {
      expect(removeAllOccurrences([1, 2, 3, 2, 4, 2, 5], 2)).toEqual([1,3,4,5]);
    });
    it("тест 2: removeAllOccurrences([\"a\", \"b\", \"a\"], \"a\")", () => {
      expect(removeAllOccurrences(["a", "b", "a"], "a")).toEqual(["b"]);
    });
    it("тест 3: removeAllOccurrences([1, 2], 99)", () => {
      expect(removeAllOccurrences([1, 2], 99)).toEqual([1,2]);
    });
  });

  describe("4.9 browserHistoryNavigation - Симуляція історії браузера (Undo / Redo)", () => {
    it("тест 1: browserHistoryNavigation(\"home.com\", [{ type: \"visit\", url: \"blog.com\" }, { type: \"visit\", url: \"post1.com\" }, { type: \"back\" }])", () => {
      expect(browserHistoryNavigation("home.com", [{ type: "visit", url: "blog.com" }, { type: "visit", url: "post1.com" }, { type: "back" }])).toEqual({"current":"blog.com","backCount":1,"forwardCount":1});
    });
    it("тест 2: browserHistoryNavigation(\"home.com\", [{ type: \"back\" }])", () => {
      expect(browserHistoryNavigation("home.com", [{ type: "back" }])).toEqual({"current":"home.com","backCount":0,"forwardCount":0});
    });
  });

  describe("4.10 batchPushItems - Пакетне додавання елементів через push(...items)", () => {
    it("тест 1: batchPushItems([1, 2], [3, 4, 5])", () => {
      expect(batchPushItems([1, 2], [3, 4, 5])).toEqual([1,2,3,4,5]);
    });
    it("тест 2: batchPushItems([\"a\"], [])", () => {
      expect(batchPushItems(["a"], [])).toEqual(["a"]);
    });
  });

  describe("4.11 rotateArrayRight - Циклічний зсув масиву вправо на k позицій", () => {
    it("тест 1: rotateArrayRight([1, 2, 3, 4, 5], 2)", () => {
      expect(rotateArrayRight([1, 2, 3, 4, 5], 2)).toEqual([4,5,1,2,3]);
    });
    it("тест 2: rotateArrayRight([\"a\", \"b\", \"c\"], 1)", () => {
      expect(rotateArrayRight(["a", "b", "c"], 1)).toEqual(["c","a","b"]);
    });
    it("тест 3: rotateArrayRight([1, 2], 0)", () => {
      expect(rotateArrayRight([1, 2], 0)).toEqual([1,2]);
    });
  });

  describe("4.12 rotateArrayLeft - Циклічний зсув масиву вліво на k позицій", () => {
    it("тест 1: rotateArrayLeft([1, 2, 3, 4, 5], 2)", () => {
      expect(rotateArrayLeft([1, 2, 3, 4, 5], 2)).toEqual([3,4,5,1,2]);
    });
    it("тест 2: rotateArrayLeft([\"a\", \"b\", \"c\"], 1)", () => {
      expect(rotateArrayLeft(["a", "b", "c"], 1)).toEqual(["b","c","a"]);
    });
  });

});
