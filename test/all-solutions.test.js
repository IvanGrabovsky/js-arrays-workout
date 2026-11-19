import { describe, it, expect } from "vitest";

describe("SOLUTIONS: Модуль 1: Створення масивів, індексація з 0 та пам'ять", () => {
  describe("1.1 createArrayLiteral", () => {
    function createArrayLiteral(a, b, c) {
      return [a, b, c];
    }
    it("test 1", () => {
      expect(createArrayLiteral(1, 2, 3)).toEqual([1,2,3]);
    });
    it("test 2", () => {
      expect(createArrayLiteral("яблуко", "груша", "слива")).toEqual(["яблуко","груша","слива"]);
    });
    it("test 3", () => {
      expect(createArrayLiteral(true, null, 42)).toEqual([true,null,42]);
    });
  });

  describe("1.2 createWithNewArray", () => {
    function createWithNewArray(length, fillValue) {
      if (length <= 0) return []; return new Array(length).fill(fillValue);
    }
    it("test 1", () => {
      expect(createWithNewArray(3, 0)).toEqual([0,0,0]);
    });
    it("test 2", () => {
      expect(createWithNewArray(2, "test")).toEqual(["test","test"]);
    });
    it("test 3", () => {
      expect(createWithNewArray(0, "x")).toEqual([]);
    });
  });

  describe("1.3 createFromRange", () => {
    function createFromRange(start, end) {
      if (start > end) return []; return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }
    it("test 1", () => {
      expect(createFromRange(1, 5)).toEqual([1,2,3,4,5]);
    });
    it("test 2", () => {
      expect(createFromRange(3, 3)).toEqual([3]);
    });
    it("test 3", () => {
      expect(createFromRange(5, 2)).toEqual([]);
    });
  });

  describe("1.4 checkIsArray", () => {
    function checkIsArray(value) {
      return Array.isArray(value) ? "array" : "not_array";
    }
    it("test 1", () => {
      expect(checkIsArray([1, 2])).toEqual("array");
    });
    it("test 2", () => {
      expect(checkIsArray({ a: 1 })).toEqual("not_array");
    });
    it("test 3", () => {
      expect(checkIsArray("рядок")).toEqual("not_array");
    });
    it("test 4", () => {
      expect(checkIsArray(null)).toEqual("not_array");
    });
  });

  describe("1.5 arrayPassByReference", () => {
    function arrayPassByReference(arr, newValue) {
      if (arr.length > 0) arr[0] = newValue; return arr;
    }
    it("test 1", () => {
      expect(arrayPassByReference([10, 20], 99)).toEqual([99,20]);
    });
    it("test 2", () => {
      expect(arrayPassByReference(["a", "b"], "z")).toEqual(["z","b"]);
    });
    it("test 3", () => {
      expect(arrayPassByReference([], 5)).toEqual([]);
    });
  });

  describe("1.6 shallowCopyArray", () => {
    function shallowCopyArray(arr, newValue) {
      const copy = [...arr]; if (copy.length > 0) copy[copy.length - 1] = newValue; return { copy, originalUnchanged: arr[arr.length - 1] !== newValue || arr.length === 0 };
    }
    it("test 1", () => {
      expect(shallowCopyArray([1, 2, 3], 99)).toEqual({"copy":[1,2,99],"originalUnchanged":true});
    });
    it("test 2", () => {
      expect(shallowCopyArray(["cat", "dog"], "lion")).toEqual({"copy":["cat","lion"],"originalUnchanged":true});
    });
  });

  describe("1.7 emptyArrayTechniques", () => {
    function emptyArrayTechniques(arr) {
      arr.length = 0; return arr;
    }
    it("test 1", () => {
      expect(emptyArrayTechniques([1, 2, 3, 4])).toEqual([]);
    });
    it("test 2", () => {
      expect(emptyArrayTechniques(["hello"])).toEqual([]);
    });
  });

  describe("1.8 arrayWithMixedTypes", () => {
    function arrayWithMixedTypes(id, name, isActive, tags) {
      return [id, name, isActive, tags];
    }
    it("test 1", () => {
      expect(arrayWithMixedTypes(101, "Іван", true, ["admin", "dev"])).toEqual([101,"Іван",true,["admin","dev"]]);
    });
    it("test 2", () => {
      expect(arrayWithMixedTypes(202, "Анна", false, [])).toEqual([202,"Анна",false,[]]);
    });
  });

  describe("1.9 arrayMemorySimulation", () => {
    function arrayMemorySimulation(baseAddress, index, elementSize) {
      if (index < 0) return null; return baseAddress + index * elementSize;
    }
    it("test 1", () => {
      expect(arrayMemorySimulation(1000, 0, 8)).toEqual(1000);
    });
    it("test 2", () => {
      expect(arrayMemorySimulation(1000, 3, 8)).toEqual(1024);
    });
    it("test 3", () => {
      expect(arrayMemorySimulation(2048, -1, 4)).toEqual(null);
    });
  });

  describe("1.10 sparseArrayDetection", () => {
    function sparseArrayDetection(arr) {
      return Object.keys(arr).length < arr.length;
    }
    it("test 1", () => {
      expect(sparseArrayDetection([1, 2, 3])).toEqual(false);
    });
    it("test 2", () => {
      expect(sparseArrayDetection(new Array(3))).toEqual(true);
    });
    it("test 3", () => {
      expect(sparseArrayDetection([1, , 3])).toEqual(true);
    });
  });

});
describe("SOLUTIONS: Модуль 2: Доступ до елементів, зміна значень та .length", () => {
  describe("2.1 getFirstAndLast", () => {
    function getFirstAndLast(arr) {
      if (!arr || arr.length === 0) return { first: null, last: null, length: 0 }; return { first: arr[0], last: arr[arr.length - 1], length: arr.length };
    }
    it("test 1", () => {
      expect(getFirstAndLast([10, 20, 30, 40])).toEqual({"first":10,"last":40,"length":4});
    });
    it("test 2", () => {
      expect(getFirstAndLast(["єдиний"])).toEqual({"first":"єдиний","last":"єдиний","length":1});
    });
    it("test 3", () => {
      expect(getFirstAndLast([])).toEqual({"first":null,"last":null,"length":0});
    });
  });

  describe("2.2 getAtNegativeOffset", () => {
    function getAtNegativeOffset(arr, offset) {
      return arr.at ? arr.at(offset) : (offset < 0 ? arr[arr.length + offset] : arr[offset]);
    }
    it("test 1", () => {
      expect(getAtNegativeOffset(["a", "b", "c", "d"], -1)).toEqual("d");
    });
    it("test 2", () => {
      expect(getAtNegativeOffset(["a", "b", "c", "d"], -2)).toEqual("c");
    });
    it("test 3", () => {
      expect(getAtNegativeOffset(["a", "b"], -5)).toEqual(undefined);
    });
  });

  describe("2.3 updateElementAtIndex", () => {
    function updateElementAtIndex(arr, index, newValue) {
      const copy = [...arr]; if (index >= 0 && index < copy.length) copy[index] = newValue; return copy;
    }
    it("test 1", () => {
      expect(updateElementAtIndex([1, 2, 3], 1, 99)).toEqual([1,99,3]);
    });
    it("test 2", () => {
      expect(updateElementAtIndex(["x", "y"], 0, "z")).toEqual(["z","y"]);
    });
    it("test 3", () => {
      expect(updateElementAtIndex([1, 2], 5, 100)).toEqual([1,2]);
    });
  });

  describe("2.4 swapElements", () => {
    function swapElements(arr, i, j) {
      const copy = [...arr]; if (i >= 0 && i < copy.length && j >= 0 && j < copy.length) { const temp = copy[i]; copy[i] = copy[j]; copy[j] = temp; } return copy;
    }
    it("test 1", () => {
      expect(swapElements(["перший", "другий", "третій"], 0, 2)).toEqual(["третій","другий","перший"]);
    });
    it("test 2", () => {
      expect(swapElements([1, 2, 3], 0, 1)).toEqual([2,1,3]);
    });
    it("test 3", () => {
      expect(swapElements([1, 2], 0, 9)).toEqual([1,2]);
    });
  });

  describe("2.5 truncateArray", () => {
    function truncateArray(arr, newLength) {
      const copy = [...arr]; if (newLength >= 0) copy.length = newLength; return copy;
    }
    it("test 1", () => {
      expect(truncateArray([1, 2, 3, 4, 5], 3)).toEqual([1,2,3]);
    });
    it("test 2", () => {
      expect(truncateArray(["a", "b", "c"], 1)).toEqual(["a"]);
    });
    it("test 3", () => {
      expect(truncateArray([10, 20], 0)).toEqual([]);
    });
  });

  describe("2.6 safeGetWithDefault", () => {
    function safeGetWithDefault(arr, index, defaultValue) {
      return (arr && arr[index] !== undefined) ? arr[index] : defaultValue;
    }
    it("test 1", () => {
      expect(safeGetWithDefault(["admin", "editor"], 1, "guest")).toEqual("editor");
    });
    it("test 2", () => {
      expect(safeGetWithDefault(["admin", "editor"], 5, "guest")).toEqual("guest");
    });
    it("test 3", () => {
      expect(safeGetWithDefault([], 0, "empty")).toEqual("empty");
    });
  });

  describe("2.7 getMiddleElement", () => {
    function getMiddleElement(arr) {
      if (!arr || arr.length === 0) return null; const midIdx = Math.floor((arr.length - 1) / 2); return arr[midIdx];
    }
    it("test 1", () => {
      expect(getMiddleElement([10, 20, 30, 40, 50])).toEqual(30);
    });
    it("test 2", () => {
      expect(getMiddleElement([10, 20, 30, 40])).toEqual(20);
    });
    it("test 3", () => {
      expect(getMiddleElement([])).toEqual(null);
    });
  });

  describe("2.8 setLastElement", () => {
    function setLastElement(arr, newLast) {
      const copy = [...arr]; if (copy.length === 0) copy.push(newLast); else copy[copy.length - 1] = newLast; return copy;
    }
    it("test 1", () => {
      expect(setLastElement([1, 2, 3], 99)).toEqual([1,2,99]);
    });
    it("test 2", () => {
      expect(setLastElement([], "перший")).toEqual(["перший"]);
    });
  });

  describe("2.9 cyclicIndexAccess", () => {
    function cyclicIndexAccess(arr, step) {
      if (!arr || arr.length === 0) return undefined; const idx = ((step % arr.length) + arr.length) % arr.length; return arr[idx];
    }
    it("test 1", () => {
      expect(cyclicIndexAccess(["Пн", "Вт", "Ср"], 4)).toEqual("Вт");
    });
    it("test 2", () => {
      expect(cyclicIndexAccess(["Пн", "Вт", "Ср"], 0)).toEqual("Пн");
    });
    it("test 3", () => {
      expect(cyclicIndexAccess(["Пн", "Вт", "Ср"], -1)).toEqual("Ср");
    });
  });

  describe("2.10 compareArrayLengths", () => {
    function compareArrayLengths(arr1, arr2) {
      if (arr1.length > arr2.length) return "first_longer"; if (arr2.length > arr1.length) return "second_longer"; return "equal";
    }
    it("test 1", () => {
      expect(compareArrayLengths([1, 2, 3], [1, 2])).toEqual("first_longer");
    });
    it("test 2", () => {
      expect(compareArrayLengths(["a"], ["x", "y"])).toEqual("second_longer");
    });
    it("test 3", () => {
      expect(compareArrayLengths([], [])).toEqual("equal");
    });
  });

});
describe("SOLUTIONS: Модуль 3: Перебір масивів (for, while, for...of)", () => {
  describe("3.1 sumWithClassicFor", () => {
    function sumWithClassicFor(numbers) {
      let sum = 0; for (let i = 0; i < numbers.length; i++) sum += numbers[i]; return sum;
    }
    it("test 1", () => {
      expect(sumWithClassicFor([1, 2, 3, 4, 5])).toEqual(15);
    });
    it("test 2", () => {
      expect(sumWithClassicFor([-10, 10, 5])).toEqual(5);
    });
    it("test 3", () => {
      expect(sumWithClassicFor([])).toEqual(0);
    });
  });

  describe("3.2 reverseWithWhile", () => {
    function reverseWithWhile(arr) {
      const res = []; let i = arr.length - 1; while (i >= 0) { res.push(arr[i]); i--; } return res;
    }
    it("test 1", () => {
      expect(reverseWithWhile(["a", "b", "c"])).toEqual(["c","b","a"]);
    });
    it("test 2", () => {
      expect(reverseWithWhile([1, 2])).toEqual([2,1]);
    });
    it("test 3", () => {
      expect(reverseWithWhile([])).toEqual([]);
    });
  });

  describe("3.3 filterWithForOf", () => {
    function filterWithForOf(words, minLength) {
      const res = []; for (const word of words) { if (typeof word === "string" && word.length >= minLength) res.push(word); } return res;
    }
    it("test 1", () => {
      expect(filterWithForOf(["кіт", "носоріг", "пес", "бегемот"], 5)).toEqual(["носоріг","бегемот"]);
    });
    it("test 2", () => {
      expect(filterWithForOf(["js", "html", "css"], 3)).toEqual(["html","css"]);
    });
    it("test 3", () => {
      expect(filterWithForOf([], 2)).toEqual([]);
    });
  });

  describe("3.4 findMinAndMax", () => {
    function findMinAndMax(numbers) {
      if (!numbers || numbers.length === 0) return { min: null, max: null }; let min = numbers[0], max = numbers[0]; for (let i = 1; i < numbers.length; i++) { if (numbers[i] < min) min = numbers[i]; if (numbers[i] > max) max = numbers[i]; } return { min, max };
    }
    it("test 1", () => {
      expect(findMinAndMax([12, 5, 88, -3, 20])).toEqual({"min":-3,"max":88});
    });
    it("test 2", () => {
      expect(findMinAndMax([7])).toEqual({"min":7,"max":7});
    });
    it("test 3", () => {
      expect(findMinAndMax([])).toEqual({"min":null,"max":null});
    });
  });

  describe("3.5 calculateAverage", () => {
    function calculateAverage(arr) {
      if (!arr || arr.length === 0) return 0; let sum = 0; for (const x of arr) sum += x; return Number((sum / arr.length).toFixed(2));
    }
    it("test 1", () => {
      expect(calculateAverage([10, 20, 30])).toEqual(20);
    });
    it("test 2", () => {
      expect(calculateAverage([1, 2])).toEqual(1.5);
    });
    it("test 3", () => {
      expect(calculateAverage([])).toEqual(0);
    });
  });

  describe("3.6 countOccurrences", () => {
    function countOccurrences(arr, target) {
      let count = 0; for (let i = 0; i < arr.length; i++) { if (arr[i] === target) count++; } return count;
    }
    it("test 1", () => {
      expect(countOccurrences(["apple", "banana", "apple", "kiwi", "apple"], "apple")).toEqual(3);
    });
    it("test 2", () => {
      expect(countOccurrences([1, 2, 3], 99)).toEqual(0);
    });
    it("test 3", () => {
      expect(countOccurrences([], "x")).toEqual(0);
    });
  });

  describe("3.7 printWithIndices", () => {
    function printWithIndices(arr) {
      const res = []; for (let i = 0; i < arr.length; i++) res.push(`${i}: ${arr[i]}`); return res;
    }
    it("test 1", () => {
      expect(printWithIndices(["HTML", "CSS", "JS"])).toEqual(["0: HTML","1: CSS","2: JS"]);
    });
    it("test 2", () => {
      expect(printWithIndices([])).toEqual([]);
    });
  });

  describe("3.8 stepIteration", () => {
    function stepIteration(arr, step) {
      if (step <= 0) return []; const res = []; for (let i = 0; i < arr.length; i += step) res.push(arr[i]); return res;
    }
    it("test 1", () => {
      expect(stepIteration([10, 20, 30, 40, 50, 60], 2)).toEqual([10,30,50]);
    });
    it("test 2", () => {
      expect(stepIteration(["a", "b", "c", "d"], 3)).toEqual(["a","d"]);
    });
    it("test 3", () => {
      expect(stepIteration([1, 2], 0)).toEqual([]);
    });
  });

  describe("3.9 runningSumArray", () => {
    function runningSumArray(numbers) {
      const res = []; let acc = 0; for (let i = 0; i < numbers.length; i++) { acc += numbers[i]; res.push(acc); } return res;
    }
    it("test 1", () => {
      expect(runningSumArray([1, 2, 3, 4])).toEqual([1,3,6,10]);
    });
    it("test 2", () => {
      expect(runningSumArray([3, 1, 2, 10, 1])).toEqual([3,4,6,16,17]);
    });
    it("test 3", () => {
      expect(runningSumArray([])).toEqual([]);
    });
  });

  describe("3.10 breakEarlySearch", () => {
    function breakEarlySearch(arr) {
      let value = null; let checkedSteps = 0; for (let i = 0; i < arr.length; i++) { checkedSteps++; if (arr[i] % 2 === 0) { value = arr[i]; break; } } return { value, checkedSteps };
    }
    it("test 1", () => {
      expect(breakEarlySearch([1, 3, 5, 8, 9, 10])).toEqual({"value":8,"checkedSteps":4});
    });
    it("test 2", () => {
      expect(breakEarlySearch([1, 3, 5])).toEqual({"value":null,"checkedSteps":3});
    });
    it("test 3", () => {
      expect(breakEarlySearch([])).toEqual({"value":null,"checkedSteps":0});
    });
  });

});
describe("SOLUTIONS: Модуль 4: Операції стек та черга (push, pop, shift, unshift, includes, indexOf)", () => {
  describe("4.1 stackPushPop", () => {
    function stackPushPop(commands) {
      const currentStack = []; const history = []; for (const cmd of commands) { if (cmd.action === "push") currentStack.push(cmd.item); else if (cmd.action === "pop") history.push(currentStack.pop()); } return { currentStack, history };
    }
    it("test 1", () => {
      expect(stackPushPop([{ action: "push", item: "file1" }, { action: "push", item: "file2" }, { action: "pop" }, { action: "push", item: "file3" }])).toEqual({"currentStack":["file1","file3"],"history":["file2"]});
    });
    it("test 2", () => {
      expect(stackPushPop([])).toEqual({"currentStack":[],"history":[]});
    });
  });

  describe("4.2 queuePushShift", () => {
    function queuePushShift(incoming) {
      const queue = []; const servedOrders = []; for (const c of incoming) queue.push(c); while (queue.length > 0) servedOrders.push(queue.shift()); return servedOrders;
    }
    it("test 1", () => {
      expect(queuePushShift(["Клієнт_1", "Клієнт_2", "Клієнт_3"])).toEqual(["Клієнт_1","Клієнт_2","Клієнт_3"]);
    });
    it("test 2", () => {
      expect(queuePushShift([])).toEqual([]);
    });
  });

  describe("4.3 priorityUnshift", () => {
    function priorityUnshift(queue, vipList) {
      const res = [...queue]; res.unshift(...vipList); return res;
    }
    it("test 1", () => {
      expect(priorityUnshift(["User1", "User2"], ["VIP_A", "VIP_B"])).toEqual(["VIP_A","VIP_B","User1","User2"]);
    });
    it("test 2", () => {
      expect(priorityUnshift(["User1"], [])).toEqual(["User1"]);
    });
  });

  describe("4.4 removeLastNElements", () => {
    function removeLastNElements(arr, count) {
      const copy = [...arr]; for (let i = 0; i < count; i++) { if (copy.length === 0) break; copy.pop(); } return copy;
    }
    it("test 1", () => {
      expect(removeLastNElements([1, 2, 3, 4, 5], 2)).toEqual([1,2,3]);
    });
    it("test 2", () => {
      expect(removeLastNElements(["a", "b"], 5)).toEqual([]);
    });
  });

  describe("4.5 checkExistence", () => {
    function checkExistence(allowedItems, value) {
      return allowedItems.includes(value);
    }
    it("test 1", () => {
      expect(checkExistence(["admin", "manager", "support"], "admin")).toEqual(true);
    });
    it("test 2", () => {
      expect(checkExistence(["admin", "manager"], "guest")).toEqual(false);
    });
    it("test 3", () => {
      expect(checkExistence([], "x")).toEqual(false);
    });
  });

  describe("4.6 findFirstIndex", () => {
    function findFirstIndex(arr, searchItem) {
      return arr.indexOf(searchItem);
    }
    it("test 1", () => {
      expect(findFirstIndex(["apple", "banana", "kiwi", "banana"], "banana")).toEqual(1);
    });
    it("test 2", () => {
      expect(findFirstIndex([10, 20, 30], 99)).toEqual(-1);
    });
  });

  describe("4.7 findLastIndex", () => {
    function findLastIndex(arr, searchItem) {
      return arr.lastIndexOf(searchItem);
    }
    it("test 1", () => {
      expect(findLastIndex(["a", "b", "c", "b", "d"], "b")).toEqual(3);
    });
    it("test 2", () => {
      expect(findLastIndex([1, 2, 3], 1)).toEqual(0);
    });
    it("test 3", () => {
      expect(findLastIndex([1, 2, 3], 99)).toEqual(-1);
    });
  });

  describe("4.8 removeAllOccurrences", () => {
    function removeAllOccurrences(arr, targetValue) {
      const res = [...arr]; let idx = res.indexOf(targetValue); while (idx !== -1) { res.splice(idx, 1); idx = res.indexOf(targetValue); } return res;
    }
    it("test 1", () => {
      expect(removeAllOccurrences([1, 2, 3, 2, 4, 2, 5], 2)).toEqual([1,3,4,5]);
    });
    it("test 2", () => {
      expect(removeAllOccurrences(["a", "b", "a"], "a")).toEqual(["b"]);
    });
    it("test 3", () => {
      expect(removeAllOccurrences([1, 2], 99)).toEqual([1,2]);
    });
  });

  describe("4.9 browserHistoryNavigation", () => {
    function browserHistoryNavigation(initialPage, actions) {
      let current = initialPage; const backStack = []; const forwardStack = []; for (const cmd of actions) { if (cmd.type === "visit") { backStack.push(current); forwardStack.length = 0; current = cmd.url; } else if (cmd.type === "back" && backStack.length > 0) { forwardStack.push(current); current = backStack.pop(); } else if (cmd.type === "forward" && forwardStack.length > 0) { backStack.push(current); current = forwardStack.pop(); } } return { current, backCount: backStack.length, forwardCount: forwardStack.length };
    }
    it("test 1", () => {
      expect(browserHistoryNavigation("home.com", [{ type: "visit", url: "blog.com" }, { type: "visit", url: "post1.com" }, { type: "back" }])).toEqual({"current":"blog.com","backCount":1,"forwardCount":1});
    });
    it("test 2", () => {
      expect(browserHistoryNavigation("home.com", [{ type: "back" }])).toEqual({"current":"home.com","backCount":0,"forwardCount":0});
    });
  });

  describe("4.10 batchPushItems", () => {
    function batchPushItems(targetArray, newItems) {
      targetArray.push(...newItems); return targetArray;
    }
    it("test 1", () => {
      expect(batchPushItems([1, 2], [3, 4, 5])).toEqual([1,2,3,4,5]);
    });
    it("test 2", () => {
      expect(batchPushItems(["a"], [])).toEqual(["a"]);
    });
  });

  describe("4.11 rotateArrayRight", () => {
    function rotateArrayRight(arr, k) {
      if (!arr || arr.length <= 1) return [...(arr || [])]; const copy = [...arr]; const steps = k % copy.length; for (let i = 0; i < steps; i++) copy.unshift(copy.pop()); return copy;
    }
    it("test 1", () => {
      expect(rotateArrayRight([1, 2, 3, 4, 5], 2)).toEqual([4,5,1,2,3]);
    });
    it("test 2", () => {
      expect(rotateArrayRight(["a", "b", "c"], 1)).toEqual(["c","a","b"]);
    });
    it("test 3", () => {
      expect(rotateArrayRight([1, 2], 0)).toEqual([1,2]);
    });
  });

  describe("4.12 rotateArrayLeft", () => {
    function rotateArrayLeft(arr, k) {
      if (!arr || arr.length <= 1) return [...(arr || [])]; const copy = [...arr]; const steps = k % copy.length; for (let i = 0; i < steps; i++) copy.push(copy.shift()); return copy;
    }
    it("test 1", () => {
      expect(rotateArrayLeft([1, 2, 3, 4, 5], 2)).toEqual([3,4,5,1,2]);
    });
    it("test 2", () => {
      expect(rotateArrayLeft(["a", "b", "c"], 1)).toEqual(["b","c","a"]);
    });
  });

});
describe("SOLUTIONS: Модуль 5: Робота з підмасивами (slice, splice, concat)", () => {
  describe("5.1 paginateDataSlice", () => {
    function paginateDataSlice(items, pageNumber, pageSize) {
      const start = (pageNumber - 1) * pageSize; return items.slice(start, start + pageSize);
    }
    it("test 1", () => {
      expect(paginateDataSlice([1, 2, 3, 4, 5, 6, 7], 1, 3)).toEqual([1,2,3]);
    });
    it("test 2", () => {
      expect(paginateDataSlice([1, 2, 3, 4, 5, 6, 7], 2, 3)).toEqual([4,5,6]);
    });
    it("test 3", () => {
      expect(paginateDataSlice([1, 2, 3, 4, 5, 6, 7], 3, 3)).toEqual([7]);
    });
  });

  describe("5.2 extractMiddleSubarray", () => {
    function extractMiddleSubarray(arr) {
      if (!arr || arr.length <= 2) return []; return arr.slice(1, -1);
    }
    it("test 1", () => {
      expect(extractMiddleSubarray([10, 20, 30, 40, 50])).toEqual([20,30,40]);
    });
    it("test 2", () => {
      expect(extractMiddleSubarray(["start", "content", "end"])).toEqual(["content"]);
    });
    it("test 3", () => {
      expect(extractMiddleSubarray([1, 2])).toEqual([]);
    });
  });

  describe("5.3 spliceRemoveAt", () => {
    function spliceRemoveAt(arr, startIndex, deleteCount) {
      const copy = [...arr]; const removedItems = copy.splice(startIndex, deleteCount); return { updatedArray: copy, removedItems };
    }
    it("test 1", () => {
      expect(spliceRemoveAt(["a", "b", "c", "d"], 1, 2)).toEqual({"updatedArray":["a","d"],"removedItems":["b","c"]});
    });
    it("test 2", () => {
      expect(spliceRemoveAt([1, 2, 3], 0, 1)).toEqual({"updatedArray":[2,3],"removedItems":[1]});
    });
  });

  describe("5.4 spliceInsertAt", () => {
    function spliceInsertAt(arr, insertIndex, newItems) {
      const copy = [...arr]; copy.splice(insertIndex, 0, ...newItems); return copy;
    }
    it("test 1", () => {
      expect(spliceInsertAt(["Mon", "Thu"], 1, ["Tue", "Wed"])).toEqual(["Mon","Tue","Wed","Thu"]);
    });
    it("test 2", () => {
      expect(spliceInsertAt([1, 4], 1, [2, 3])).toEqual([1,2,3,4]);
    });
  });

  describe("5.5 spliceReplaceRange", () => {
    function spliceReplaceRange(arr, startIndex, count, replacementItems) {
      const copy = [...arr]; copy.splice(startIndex, count, ...replacementItems); return copy;
    }
    it("test 1", () => {
      expect(spliceReplaceRange(["червоний", "ПОМИЛКА", "синій"], 1, 1, ["зелений"])).toEqual(["червоний","зелений","синій"]);
    });
    it("test 2", () => {
      expect(spliceReplaceRange([1, 2, 3, 4], 1, 2, [20, 30])).toEqual([1,20,30,4]);
    });
  });

  describe("5.6 concatMultipleArrays", () => {
    function concatMultipleArrays(a, b, c) {
      return a.concat(b, c);
    }
    it("test 1", () => {
      expect(concatMultipleArrays([1, 2], [3, 4], [5])).toEqual([1,2,3,4,5]);
    });
    it("test 2", () => {
      expect(concatMultipleArrays(["a"], [], ["b"])).toEqual(["a","b"]);
    });
  });

  describe("5.7 tailSlice", () => {
    function tailSlice(arr, n) {
      if (n <= 0) return []; return arr.slice(-n);
    }
    it("test 1", () => {
      expect(tailSlice([10, 20, 30, 40, 50], 3)).toEqual([30,40,50]);
    });
    it("test 2", () => {
      expect(tailSlice(["x", "y"], 1)).toEqual(["y"]);
    });
    it("test 3", () => {
      expect(tailSlice([1, 2], 0)).toEqual([]);
    });
  });

  describe("5.8 splitArrayIntoChunks", () => {
    function splitArrayIntoChunks(arr, chunkSize) {
      if (chunkSize <= 0) return []; const res = []; for (let i = 0; i < arr.length; i += chunkSize) res.push(arr.slice(i, i + chunkSize)); return res;
    }
    it("test 1", () => {
      expect(splitArrayIntoChunks([1, 2, 3, 4, 5], 2)).toEqual([[1,2],[3,4],[5]]);
    });
    it("test 2", () => {
      expect(splitArrayIntoChunks(["a", "b", "c", "d"], 2)).toEqual([["a","b"],["c","d"]]);
    });
    it("test 3", () => {
      expect(splitArrayIntoChunks([], 3)).toEqual([]);
    });
  });

  describe("5.9 insertSorted", () => {
    function insertSorted(sortedArr, num) {
      const copy = [...sortedArr]; let idx = 0; while (idx < copy.length && copy[idx] < num) idx++; copy.splice(idx, 0, num); return copy;
    }
    it("test 1", () => {
      expect(insertSorted([10, 20, 30, 40], 25)).toEqual([10,20,25,30,40]);
    });
    it("test 2", () => {
      expect(insertSorted([1, 5], 0)).toEqual([0,1,5]);
    });
    it("test 3", () => {
      expect(insertSorted([1, 5], 10)).toEqual([1,5,10]);
    });
  });

  describe("5.10 mergeInventoriesWithBonus", () => {
    function mergeInventoriesWithBonus(base, extra, bonus) {
      const merged = base.concat(extra, bonus); const res = []; for (const item of merged) { if (!res.includes(item)) res.push(item); } return res;
    }
    it("test 1", () => {
      expect(mergeInventoriesWithBonus(["меч", "щит"], ["зілля", "меч"], ["лук", "щит"])).toEqual(["меч","щит","зілля","лук"]);
    });
    it("test 2", () => {
      expect(mergeInventoriesWithBonus(["ключ"], [], ["ключ"])).toEqual(["ключ"]);
    });
  });

  describe("5.11 removeRangeAndReturnBoth", () => {
    function removeRangeAndReturnBoth(arr, start, end) {
      const copy = [...arr]; const count = Math.max(0, end - start); const extracted = copy.splice(start, count); return { remaining: copy, extracted };
    }
    it("test 1", () => {
      expect(removeRangeAndReturnBoth(["a", "b", "c", "d", "e"], 1, 4)).toEqual({"remaining":["a","e"],"extracted":["b","c","d"]});
    });
    it("test 2", () => {
      expect(removeRangeAndReturnBoth([1, 2, 3], 0, 1)).toEqual({"remaining":[2,3],"extracted":[1]});
    });
  });

  describe("5.12 cloneViaSlice", () => {
    function cloneViaSlice(arr) {
      const clone = arr.slice(0); return { clone, isDistinctReference: clone !== arr };
    }
    it("test 1", () => {
      expect(cloneViaSlice([1, 2, 3])).toEqual({"clone":[1,2,3],"isDistinctReference":true});
    });
    it("test 2", () => {
      expect(cloneViaSlice([])).toEqual({"clone":[],"isDistinctReference":true});
    });
  });

});
describe("SOLUTIONS: Модуль 6: Багатовимірні масиви (2D матриці, сітки, таблиці)", () => {
  describe("6.1 create2DMatrix", () => {
    function create2DMatrix(rows, cols, defaultValue) {
      if (rows <= 0 || cols <= 0) return []; const matrix = []; for (let r = 0; r < rows; r++) { const row = []; for (let c = 0; c < cols; c++) row.push(defaultValue); matrix.push(row); } return matrix;
    }
    it("test 1", () => {
      expect(create2DMatrix(2, 3, 0)).toEqual([[0,0,0],[0,0,0]]);
    });
    it("test 2", () => {
      expect(create2DMatrix(1, 2, "x")).toEqual([["x","x"]]);
    });
    it("test 3", () => {
      expect(create2DMatrix(0, 5, 1)).toEqual([]);
    });
  });

  describe("6.2 getMatrixElement", () => {
    function getMatrixElement(matrix, r, c) {
      if (!matrix || r < 0 || r >= matrix.length) return undefined; if (!matrix[r] || c < 0 || c >= matrix[r].length) return undefined; return matrix[r][c];
    }
    it("test 1", () => {
      expect(getMatrixElement([["A", "B"], ["C", "D"]], 1, 0)).toEqual("C");
    });
    it("test 2", () => {
      expect(getMatrixElement([[1, 2], [3, 4]], 5, 1)).toEqual(undefined);
    });
    it("test 3", () => {
      expect(getMatrixElement([], 0, 0)).toEqual(undefined);
    });
  });

  describe("6.3 setMatrixElement", () => {
    function setMatrixElement(matrix, r, c, value) {
      const copy = matrix.map(row => [...row]); if (r >= 0 && r < copy.length && c >= 0 && c < copy[r].length) copy[r][c] = value; return copy;
    }
    it("test 1", () => {
      expect(setMatrixElement([[1, 2], [3, 4]], 0, 1, 99)).toEqual([[1,99],[3,4]]);
    });
    it("test 2", () => {
      expect(setMatrixElement([["a", "b"]], 0, 0, "z")).toEqual([["z","b"]]);
    });
  });

  describe("6.4 matrixTotalSum", () => {
    function matrixTotalSum(matrix) {
      let sum = 0; for (let r = 0; r < matrix.length; r++) { for (let c = 0; c < matrix[r].length; c++) sum += matrix[r][c]; } return sum;
    }
    it("test 1", () => {
      expect(matrixTotalSum([[1, 2], [3, 4]])).toEqual(10);
    });
    it("test 2", () => {
      expect(matrixTotalSum([[5, 5], [10, -5]])).toEqual(15);
    });
    it("test 3", () => {
      expect(matrixTotalSum([])).toEqual(0);
    });
  });

  describe("6.5 matrixRowSums", () => {
    function matrixRowSums(matrix) {
      const res = []; for (let r = 0; r < matrix.length; r++) { let rowSum = 0; for (let c = 0; c < matrix[r].length; c++) rowSum += matrix[r][c]; res.push(rowSum); } return res;
    }
    it("test 1", () => {
      expect(matrixRowSums([[1, 2, 3], [10, 20, 30]])).toEqual([6,60]);
    });
    it("test 2", () => {
      expect(matrixRowSums([[5]])).toEqual([5]);
    });
    it("test 3", () => {
      expect(matrixRowSums([])).toEqual([]);
    });
  });

  describe("6.6 matrixColSums", () => {
    function matrixColSums(matrix) {
      if (!matrix || matrix.length === 0 || matrix[0].length === 0) return []; const cols = matrix[0].length; const res = []; for (let c = 0; c < cols; c++) { let colSum = 0; for (let r = 0; r < matrix.length; r++) colSum += matrix[r][c]; res.push(colSum); } return res;
    }
    it("test 1", () => {
      expect(matrixColSums([[1, 2], [3, 4]])).toEqual([4,6]);
    });
    it("test 2", () => {
      expect(matrixColSums([[1, 10, 100], [2, 20, 200]])).toEqual([3,30,300]);
    });
    it("test 3", () => {
      expect(matrixColSums([])).toEqual([]);
    });
  });

  describe("6.7 matrixMainDiagonal", () => {
    function matrixMainDiagonal(matrix) {
      const res = []; for (let i = 0; i < matrix.length; i++) { if (matrix[i] && matrix[i][i] !== undefined) res.push(matrix[i][i]); } return res;
    }
    it("test 1", () => {
      expect(matrixMainDiagonal([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([1,5,9]);
    });
    it("test 2", () => {
      expect(matrixMainDiagonal([["a", "b"], ["c", "d"]])).toEqual(["a","d"]);
    });
    it("test 3", () => {
      expect(matrixMainDiagonal([])).toEqual([]);
    });
  });

  describe("6.8 matrixTranspose", () => {
    function matrixTranspose(matrix) {
      if (!matrix || matrix.length === 0 || matrix[0].length === 0) return []; const res = []; for (let c = 0; c < matrix[0].length; c++) { const col = []; for (let r = 0; r < matrix.length; r++) col.push(matrix[r][c]); res.push(col); } return res;
    }
    it("test 1", () => {
      expect(matrixTranspose([[1, 2, 3], [4, 5, 6]])).toEqual([[1,4],[2,5],[3,6]]);
    });
    it("test 2", () => {
      expect(matrixTranspose([[1, 2], [3, 4]])).toEqual([[1,3],[2,4]]);
    });
    it("test 3", () => {
      expect(matrixTranspose([])).toEqual([]);
    });
  });

  describe("6.9 findInMatrix", () => {
    function findInMatrix(matrix, targetValue) {
      for (let r = 0; r < matrix.length; r++) { for (let c = 0; c < matrix[r].length; c++) { if (matrix[r][c] === targetValue) return { row: r, col: c }; } } return null;
    }
    it("test 1", () => {
      expect(findInMatrix([["a", "b"], ["c", "d"]], "c")).toEqual({"row":1,"col":0});
    });
    it("test 2", () => {
      expect(findInMatrix([[1, 2], [3, 4]], 99)).toEqual(null);
    });
    it("test 3", () => {
      expect(findInMatrix([], 5)).toEqual(null);
    });
  });

  describe("6.10 flatten2D", () => {
    function flatten2D(matrix) {
      const flat = []; for (let r = 0; r < matrix.length; r++) { for (let c = 0; c < matrix[r].length; c++) flat.push(matrix[r][c]); } return flat;
    }
    it("test 1", () => {
      expect(flatten2D([[1, 2], [3, 4], [5]])).toEqual([1,2,3,4,5]);
    });
    it("test 2", () => {
      expect(flatten2D([["x"], ["y", "z"]])).toEqual(["x","y","z"]);
    });
    it("test 3", () => {
      expect(flatten2D([])).toEqual([]);
    });
  });

  describe("6.11 ticTacToeCheck", () => {
    function ticTacToeCheck(board) {
      for (let r = 0; r < 3; r++) { if (board[r][0] && board[r][0] === board[r][1] && board[r][1] === board[r][2]) return board[r][0]; } for (let c = 0; c < 3; c++) { if (board[0][c] && board[0][c] === board[1][c] && board[1][c] === board[2][c]) return board[0][c]; } if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) return board[0][0]; if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) return board[0][2]; return null;
    }
    it("test 1", () => {
      expect(ticTacToeCheck([["X", "X", "X"], ["O", " ", "O"], [" ", " ", " "]])).toEqual("X");
    });
    it("test 2", () => {
      expect(ticTacToeCheck([["O", "X", " "], [" ", "O", "X"], [" ", " ", "O"]])).toEqual("O");
    });
    it("test 3", () => {
      expect(ticTacToeCheck([["X", "O", "X"], ["O", "X", "O"], ["O", "X", "O"]])).toEqual(null);
    });
  });

  describe("6.12 createMultiplicationMatrix", () => {
    function createMultiplicationMatrix(n) {
      if (n <= 0) return []; const res = []; for (let r = 1; r <= n; r++) { const row = []; for (let c = 1; c <= n; c++) row.push(r * c); res.push(row); } return res;
    }
    it("test 1", () => {
      expect(createMultiplicationMatrix(3)).toEqual([[1,2,3],[2,4,6],[3,6,9]]);
    });
    it("test 2", () => {
      expect(createMultiplicationMatrix(1)).toEqual([[1]]);
    });
    it("test 3", () => {
      expect(createMultiplicationMatrix(0)).toEqual([]);
    });
  });

});
describe("SOLUTIONS: Модуль 7: forEach — Перебір та побічні ефекти", () => {
  describe("7.1 myForEach", () => {
    function myForEach(array, callback) {
      for (let i = 0; i < array.length; i++) callback(array[i], i, array); return undefined;
    }
    it("test 1", () => {
      expect((() => { const log = []; myForEach([10, 20], (x, i) => log.push(`${i}:${x}`)); return log; })()).toEqual(["0:10","1:20"]);
    });
    it("test 2", () => {
      expect(myForEach([], () => {})).toEqual(undefined);
    });
  });

  describe("7.2 notifySubscribers", () => {
    function notifySubscribers(users, message) {
      const res = []; users.forEach(u => { if (u.isSubscribed) res.push({ to: u.email, text: `Привіт, ${u.name}! ${message}` }); }); return res;
    }
    it("test 1", () => {
      expect(notifySubscribers([{ name: "Олена", isSubscribed: true, email: "o@test.com" }, { name: "Макс", isSubscribed: false, email: "m@test.com" }], "Хакатон!")).toEqual([{"to":"o@test.com","text":"Привіт, Олена! Хакатон!"}]);
    });
    it("test 2", () => {
      expect(notifySubscribers([], "тест")).toEqual([]);
    });
  });

  describe("7.3 tallyVotes", () => {
    function tallyVotes(votes) {
      const candidateVotes = {}; let totalValidVotes = 0; votes.forEach(v => { if (v && typeof v === "string" && v.trim() !== "") { candidateVotes[v] = (candidateVotes[v] || 0) + 1; totalValidVotes++; } }); return { candidateVotes, totalValidVotes };
    }
    it("test 1", () => {
      expect(tallyVotes(["Олена", "Ігор", "Олена", ""])).toEqual({"candidateVotes":{"Олена":2,"Ігор":1},"totalValidVotes":3});
    });
    it("test 2", () => {
      expect(tallyVotes([])).toEqual({"candidateVotes":{},"totalValidVotes":0});
    });
  });

});
describe("SOLUTIONS: Модуль 8: map — Трансформація та проекції даних", () => {
  describe("8.1 myMap", () => {
    function myMap(array, callback) {
      const res = []; for (let i = 0; i < array.length; i++) res.push(callback(array[i], i, array)); return res;
    }
    it("test 1", () => {
      expect(myMap([1, 2, 3], x => x * 2)).toEqual([2,4,6]);
    });
    it("test 2", () => {
      expect(myMap(["a", "b"], (x, i) => `${i}:${x}`)).toEqual(["0:a","1:b"]);
    });
  });

  describe("8.2 formatProductCards", () => {
    function formatProductCards(products, exchangeRate, vatPercent) {
      return products.map(p => { const priceUah = Math.round(p.priceUsd * exchangeRate * (1 + vatPercent / 100)); return { id: p.id, title: p.name, priceUah, priceFormatted: `${priceUah} ₴`, badge: p.inStock ? "В наявності" : "Під замовлення" }; });
    }
    it("test 1", () => {
      expect(formatProductCards([{ id: 1, name: "Ноутбук", priceUsd: 1000, inStock: true }], 40, 20)).toEqual([{"id":1,"title":"Ноутбук","priceUah":48000,"priceFormatted":"48000 ₴","badge":"В наявності"}]);
    });
  });

  describe("8.3 anonymizeUserData", () => {
    function anonymizeUserData(users) {
      return users.map(u => { const parts = u.fullName.split(" "); const maskedName = `${parts[0]} ${parts[1] ? parts[1][0] + "." : ""}`.trim(); const atIdx = u.email.indexOf("@"); const maskedEmail = u.email[0] + "***" + u.email.slice(atIdx); const maskedPhone = u.phone.slice(0, 4) + "******" + u.phone.slice(-2); return { id: u.id, maskedName, email: maskedEmail, phone: maskedPhone }; });
    }
    it("test 1", () => {
      expect(anonymizeUserData([{ id: 1, fullName: "Тарас Шевченко", email: "taras@ukr.net", phone: "+380501234567" }])).toEqual([{"id":1,"maskedName":"Тарас Ш.","email":"t***@ukr.net","phone":"+380******67"}]);
    });
  });

  describe("8.4 normalizeCoordinates", () => {
    function normalizeCoordinates(coords) {
      return coords.map(c => ({ hash: `[${c.lat.toFixed(4)},${c.lng.toFixed(4)}]`, isEquator: c.lat === 0 }));
    }
    it("test 1", () => {
      expect(normalizeCoordinates([{ lat: 50.4501, lng: 30.5234 }, { lat: 0, lng: 20.12 }])).toEqual([{"hash":"[50.4501,30.5234]","isEquator":false},{"hash":"[0.0000,20.1200]","isEquator":true}]);
    });
  });

});
describe("SOLUTIONS: Модуль 9: filter — Фільтрація та селекція", () => {
  describe("9.1 myFilter", () => {
    function myFilter(array, callback) {
      const res = []; for (let i = 0; i < array.length; i++) { if (callback(array[i], i, array)) res.push(array[i]); } return res;
    }
    it("test 1", () => {
      expect(myFilter([1, 2, 3, 4, 5], x => x % 2 === 0)).toEqual([2,4]);
    });
    it("test 2", () => {
      expect(myFilter(["apple", "banana"], s => s.startsWith("a"))).toEqual(["apple"]);
    });
  });

  describe("9.2 filterValidPromoCodes", () => {
    function filterValidPromoCodes(promos, currentIsoDate, minDiscount) {
      return promos.filter(p => p.isActive && p.discountPercent >= minDiscount && currentIsoDate <= p.expiryDate);
    }
    it("test 1", () => {
      expect(filterValidPromoCodes([{ code: "SALE20", isActive: true, expiryDate: "2026-12-31", discountPercent: 20 }, { code: "OLD", isActive: true, expiryDate: "2025-01-01", discountPercent: 30 }], "2026-10-17", 15)).toEqual([{"code":"SALE20","isActive":true,"expiryDate":"2026-12-31","discountPercent":20}]);
    });
  });

  describe("9.3 moderateComments", () => {
    function moderateComments(comments, stopWords) {
      return comments.filter(c => !c.isSpam && c.rating >= 1 && !stopWords.some(w => c.text.toLowerCase().includes(w.toLowerCase())));
    }
    it("test 1", () => {
      expect(moderateComments([{ text: "Чудовий курс!", isSpam: false, rating: 5 }, { text: "Купи крипту", isSpam: true, rating: 1 }], ["крипту"])).toEqual([{"text":"Чудовий курс!","isSpam":false,"rating":5}]);
    });
  });

  describe("9.4 findAvailableHotelRooms", () => {
    function findAvailableHotelRooms(rooms, guestsCount, maxPrice) {
      return rooms.filter(r => r.isAvailable && r.capacity >= guestsCount && r.pricePerNight <= maxPrice);
    }
    it("test 1", () => {
      expect(findAvailableHotelRooms([{ id: 101, capacity: 2, pricePerNight: 1200, isAvailable: true }, { id: 102, capacity: 4, pricePerNight: 3500, isAvailable: true }], 2, 2000)).toEqual([{"id":101,"capacity":2,"pricePerNight":1200,"isAvailable":true}]);
    });
  });

});
describe("SOLUTIONS: Модуль 10: find та findIndex — Точковий пошук сутності", () => {
  describe("10.1 myFindAndFindIndex", () => {
    function myFindAndFindIndex(array, predicate) {
      let item = null, index = -1; for (let i = 0; i < array.length; i++) { if (predicate(array[i], i, array)) { item = array[i]; index = i; break; } } return { item, index };
    }
    it("test 1", () => {
      expect(myFindAndFindIndex([10, 25, 30, 45], x => x > 20)).toEqual({"item":25,"index":1});
    });
    it("test 2", () => {
      expect(myFindAndFindIndex([1, 2, 3], x => x > 99)).toEqual({"item":null,"index":-1});
    });
  });

  describe("10.2 detectSecurityAnomaly", () => {
    function detectSecurityAnomaly(logs) {
      const idx = logs.findIndex(l => l.level === "CRITICAL" || l.statusCode >= 500); if (idx === -1) return null; return { foundLog: logs[idx], logIndex: idx };
    }
    it("test 1", () => {
      expect(detectSecurityAnomaly([{ id: 1, level: "INFO", statusCode: 200 }, { id: 2, level: "ERROR", statusCode: 502 }])).toEqual({"foundLog":{"id":2,"level":"ERROR","statusCode":502},"logIndex":1});
    });
    it("test 2", () => {
      expect(detectSecurityAnomaly([{ id: 1, level: "INFO", statusCode: 200 }])).toEqual(null);
    });
  });

  describe("10.3 selectFirstAvailableSeat", () => {
    function selectFirstAvailableSeat(seats, preferWindow) {
      const seat = seats.find(s => !s.isOccupied && !s.isEmergencyRow && s.isWindow === preferWindow); return seat || null;
    }
    it("test 1", () => {
      expect(selectFirstAvailableSeat([{ seat: "1A", isOccupied: false, isWindow: true, isEmergencyRow: false }], true)).toEqual({"seat":"1A","isOccupied":false,"isWindow":true,"isEmergencyRow":false});
    });
    it("test 2", () => {
      expect(selectFirstAvailableSeat([{ seat: "12A", isOccupied: false, isWindow: true, isEmergencyRow: true }], true)).toEqual(null);
    });
  });

});
describe("SOLUTIONS: Модуль 11: some та every — Предикатна валідація", () => {
  describe("11.1 mySomeAndEvery", () => {
    function mySomeAndEvery(array, predicate) {
      let someResult = false; let everyResult = true; for (let i = 0; i < array.length; i++) { if (predicate(array[i], i, array)) someResult = true; else everyResult = false; } if (array.length === 0) { someResult = false; everyResult = true; } return { someResult, everyResult };
    }
    it("test 1", () => {
      expect(mySomeAndEvery([2, 4, 6], x => x % 2 === 0)).toEqual({"someResult":true,"everyResult":true});
    });
    it("test 2", () => {
      expect(mySomeAndEvery([2, 3, 6], x => x % 2 === 0)).toEqual({"someResult":true,"everyResult":false});
    });
    it("test 3", () => {
      expect(mySomeAndEvery([1, 3, 5], x => x % 2 === 0)).toEqual({"someResult":false,"everyResult":false});
    });
  });

  describe("11.2 validateFormFields", () => {
    function validateFormFields(fields) {
      const isValidForm = fields.every(f => f.isValid === true); const hasErrors = fields.some(f => f.isValid === false); return { isValidForm, hasErrors };
    }
    it("test 1", () => {
      expect(validateFormFields([{ field: "email", isValid: true }, { field: "password", isValid: true }])).toEqual({"isValidForm":true,"hasErrors":false});
    });
    it("test 2", () => {
      expect(validateFormFields([{ field: "email", isValid: true }, { field: "password", isValid: false }])).toEqual({"isValidForm":false,"hasErrors":true});
    });
  });

  describe("11.3 checkCartAffordability", () => {
    function checkCartAffordability(items, budget, luxuryThreshold) {
      const canAffordAll = items.every(i => i.price <= budget); const hasLuxuryItem = items.some(i => i.price >= luxuryThreshold); return { canAffordAll, hasLuxuryItem };
    }
    it("test 1", () => {
      expect(checkCartAffordability([{ name: "Книга", price: 300 }, { name: "Годинник", price: 5000 }], 6000, 4000)).toEqual({"canAffordAll":true,"hasLuxuryItem":true});
    });
    it("test 2", () => {
      expect(checkCartAffordability([{ name: "Хліб", price: 30 }], 20, 1000)).toEqual({"canAffordAll":false,"hasLuxuryItem":false});
    });
  });

  describe("11.4 verifyTeamVipStatus", () => {
    function verifyTeamVipStatus(team) {
      const allVip = team.every(m => m.isVip); const captainVip = team.some(m => m.isCaptain && m.isVip); return allVip || captainVip;
    }
    it("test 1", () => {
      expect(verifyTeamVipStatus([{ name: "A", isCaptain: true, isVip: true }, { name: "B", isCaptain: false, isVip: false }])).toEqual(true);
    });
    it("test 2", () => {
      expect(verifyTeamVipStatus([{ name: "A", isCaptain: true, isVip: false }, { name: "B", isCaptain: false, isVip: false }])).toEqual(false);
    });
  });

});
describe("SOLUTIONS: Модуль 12: reduce — Агрегація та згортання даних", () => {
  describe("12.1 myReduce", () => {
    function myReduce(array, callback, initialValue) {
      if (array.length === 0 && initialValue === undefined) throw new TypeError("Reduce of empty array with no initial value"); let acc = initialValue !== undefined ? initialValue : array[0]; const startIdx = initialValue !== undefined ? 0 : 1; for (let i = startIdx; i < array.length; i++) { acc = callback(acc, array[i], i, array); } return acc;
    }
    it("test 1", () => {
      expect(myReduce([1, 2, 3, 4], (sum, x) => sum + x, 0)).toEqual(10);
    });
    it("test 2", () => {
      expect(myReduce([10, 20, 30], (sum, x) => sum + x)).toEqual(60);
    });
  });

  describe("12.2 groupPurchasesByCategory", () => {
    function groupPurchasesByCategory(transactions) {
      return transactions.reduce((acc, t) => { acc[t.category] = (acc[t.category] || 0) + t.amount; return acc; }, {});
    }
    it("test 1", () => {
      expect(groupPurchasesByCategory([{ category: "їжа", amount: 150 }, { category: "транспорт", amount: 50 }, { category: "їжа", amount: 200 }])).toEqual({"їжа":350,"транспорт":50});
    });
  });

  describe("12.3 generateQueryString", () => {
    function generateQueryString(params) {
      if (!params || params.length === 0) return ""; return params.reduce((acc, p, idx) => acc + (idx > 0 ? "&" : "") + `${encodeURIComponent(p.key)}=${encodeURIComponent(p.value)}`, "");
    }
    it("test 1", () => {
      expect(generateQueryString([{ key: "page", value: 1 }, { key: "sort", value: "desc" }])).toEqual("page=1&sort=desc");
    });
    it("test 2", () => {
      expect(generateQueryString([])).toEqual("");
    });
  });

  describe("12.4 computeOrderMetrics", () => {
    function computeOrderMetrics(orders) {
      const stats = orders.reduce((acc, o) => { if (o.status === "COMPLETED") { acc.totalRevenue += o.total; acc.completedCount++; } return acc; }, { totalRevenue: 0, completedCount: 0 }); const averageCheck = stats.completedCount > 0 ? Number((stats.totalRevenue / stats.completedCount).toFixed(2)) : 0; return { totalRevenue: stats.totalRevenue, completedCount: stats.completedCount, averageCheck };
    }
    it("test 1", () => {
      expect(computeOrderMetrics([{ total: 100, status: "COMPLETED" }, { total: 200, status: "COMPLETED" }, { total: 50, status: "CANCELLED" }])).toEqual({"totalRevenue":300,"completedCount":2,"averageCheck":150});
    });
    it("test 2", () => {
      expect(computeOrderMetrics([])).toEqual({"totalRevenue":0,"completedCount":0,"averageCheck":0});
    });
  });

});
describe("SOLUTIONS: Модуль 13: flat та flatMap — Згладжування структур", () => {
  describe("13.1 myFlatAndFlatMap", () => {
    function myFlatAndFlatMap(array, mapper) {
      const flatResult = []; for (const item of array) { if (Array.isArray(item)) flatResult.push(...item); else flatResult.push(item); } const flatMapResult = []; for (let i = 0; i < array.length; i++) { const mapped = mapper(array[i], i, array); if (Array.isArray(mapped)) flatMapResult.push(...mapped); else flatMapResult.push(mapped); } return { flatResult, flatMapResult };
    }
    it("test 1", () => {
      expect(myFlatAndFlatMap([[1, 2], [3], 4], x => Array.isArray(x) ? x.map(n => n * 2) : [x * 2])).toEqual({"flatResult":[1,2,3,4],"flatMapResult":[2,4,6,8]});
    });
  });

  describe("13.2 extractUniqueHashtags", () => {
    function extractUniqueHashtags(posts) {
      const allTags = posts.flatMap(p => p.tags || []); const unique = []; for (const t of allTags) { if (!unique.includes(t)) unique.push(t); } return unique;
    }
    it("test 1", () => {
      expect(extractUniqueHashtags([{ tags: ["#js", "#code"] }, { tags: ["#web", "#js"] }])).toEqual(["#js","#code","#web"]);
    });
    it("test 2", () => {
      expect(extractUniqueHashtags([])).toEqual([]);
    });
  });

  describe("13.3 flattenCategoryTree", () => {
    function flattenCategoryTree(categories) {
      return categories.flatMap(c => [c.name, ...(c.subcategories || [])]);
    }
    it("test 1", () => {
      expect(flattenCategoryTree([{ name: "Електроніка", subcategories: ["Телефони", "Ноутбуки"] }, { name: "Одяг", subcategories: ["Взуття"] }])).toEqual(["Електроніка","Телефони","Ноутбуки","Одяг","Взуття"]);
    });
  });

});
describe("SOLUTIONS: Модуль 14: Boss Challenges — Пайплайни методів масивів", () => {
  describe("14.1 topSpendingCustomersPipeline", () => {
    function topSpendingCustomersPipeline(orders, topLimit) {
      const delivered = orders.filter(o => o.status === "DELIVERED"); const grouped = delivered.reduce((acc, o) => { acc[o.customerId] = (acc[o.customerId] || 0) + o.amount; return acc; }, {}); return Object.entries(grouped).map(([customerId, totalSpent]) => ({ customerId, totalSpent })).sort((a, b) => b.totalSpent - a.totalSpent).slice(0, topLimit);
    }
    it("test 1", () => {
      expect(topSpendingCustomersPipeline([{ customerId: "u1", amount: 500, status: "DELIVERED" }, { customerId: "u2", amount: 1200, status: "DELIVERED" }, { customerId: "u1", amount: 300, status: "DELIVERED" }, { customerId: "u3", amount: 4000, status: "CANCELLED" }], 2)).toEqual([{"customerId":"u2","totalSpent":1200},{"customerId":"u1","totalSpent":800}]);
    });
  });

  describe("14.2 smartPlaylistGenerator", () => {
    function smartPlaylistGenerator(tracks, targetGenre, minRating, maxTotalSec) {
      const filtered = tracks.filter(t => t.genre === targetGenre && t.rating >= minRating).sort((a, b) => b.durationSec - a.durationSec); const playlist = []; let total = 0; for (const t of filtered) { if (total + t.durationSec <= maxTotalSec) { playlist.push(t); total += t.durationSec; } } return playlist;
    }
    it("test 1", () => {
      expect(smartPlaylistGenerator([{ title: "Track A", genre: "rock", rating: 5, durationSec: 180 }, { title: "Track B", genre: "rock", rating: 4, durationSec: 240 }, { title: "Track C", genre: "pop", rating: 5, durationSec: 200 }], "rock", 4, 300)).toEqual([{"title":"Track B","genre":"rock","rating":4,"durationSec":240}]);
    });
  });

  describe("14.3 rpgInventoryOptimizer", () => {
    function rpgInventoryOptimizer(items, maxWeight) {
      const valid = items.filter(i => i.durability > 0 && i.weight <= maxWeight).map(i => ({ ...i, density: i.value / i.weight })).sort((a, b) => b.density - a.density); const packedItems = []; let totalValue = 0, totalWeight = 0; for (const item of valid) { if (totalWeight + item.weight <= maxWeight) { packedItems.push({ id: item.id, name: item.name, value: item.value, weight: item.weight }); totalValue += item.value; totalWeight += item.weight; } } return { packedItems, totalValue, totalWeight };
    }
    it("test 1", () => {
      expect(rpgInventoryOptimizer([{ id: 1, name: "Золотий кубок", value: 100, weight: 2, durability: 100 }, { id: 2, name: "Важкий камінь", value: 10, weight: 10, durability: 50 }, { id: 3, name: "Зламаний меч", value: 50, weight: 3, durability: 0 }], 5)).toEqual({"packedItems":[{"id":1,"name":"Золотий кубок","value":100,"weight":2}],"totalValue":100,"totalWeight":2});
    });
  });

});
