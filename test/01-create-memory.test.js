import { describe, it, expect } from "vitest";
import {
  createArrayLiteral,
  createWithNewArray,
  createFromRange,
  checkIsArray,
  arrayPassByReference,
  shallowCopyArray,
  emptyArrayTechniques,
  arrayWithMixedTypes,
  arrayMemorySimulation,
  sparseArrayDetection
} from "../src/01-create-memory.js";

describe("Модуль 1: Створення масивів, індексація з 0 та пам'ять", () => {
  describe("1.1 createArrayLiteral - Створення масиву через квадратні дужки []", () => {
    it("тест 1: createArrayLiteral(1, 2, 3)", () => {
      expect(createArrayLiteral(1, 2, 3)).toEqual([1,2,3]);
    });
    it("тест 2: createArrayLiteral(\"яблуко\", \"груша\", \"слива\")", () => {
      expect(createArrayLiteral("яблуко", "груша", "слива")).toEqual(["яблуко","груша","слива"]);
    });
    it("тест 3: createArrayLiteral(true, null, 42)", () => {
      expect(createArrayLiteral(true, null, 42)).toEqual([true,null,42]);
    });
  });

  describe("1.2 createWithNewArray - Створення масиву через конструктор new Array()", () => {
    it("тест 1: createWithNewArray(3, 0)", () => {
      expect(createWithNewArray(3, 0)).toEqual([0,0,0]);
    });
    it("тест 2: createWithNewArray(2, \"test\")", () => {
      expect(createWithNewArray(2, "test")).toEqual(["test","test"]);
    });
    it("тест 3: createWithNewArray(0, \"x\")", () => {
      expect(createWithNewArray(0, "x")).toEqual([]);
    });
  });

  describe("1.3 createFromRange - Створення послідовності чисел через Array.from()", () => {
    it("тест 1: createFromRange(1, 5)", () => {
      expect(createFromRange(1, 5)).toEqual([1,2,3,4,5]);
    });
    it("тест 2: createFromRange(3, 3)", () => {
      expect(createFromRange(3, 3)).toEqual([3]);
    });
    it("тест 3: createFromRange(5, 2)", () => {
      expect(createFromRange(5, 2)).toEqual([]);
    });
  });

  describe("1.4 checkIsArray - Надійна перевірка на масив: Array.isArray vs typeof", () => {
    it("тест 1: checkIsArray([1, 2])", () => {
      expect(checkIsArray([1, 2])).toEqual("array");
    });
    it("тест 2: checkIsArray({ a: 1 })", () => {
      expect(checkIsArray({ a: 1 })).toEqual("not_array");
    });
    it("тест 3: checkIsArray(\"рядок\")", () => {
      expect(checkIsArray("рядок")).toEqual("not_array");
    });
    it("тест 4: checkIsArray(null)", () => {
      expect(checkIsArray(null)).toEqual("not_array");
    });
  });

  describe("1.5 arrayPassByReference - Масиви в памʼяті: передача за посиланням", () => {
    it("тест 1: arrayPassByReference([10, 20], 99)", () => {
      expect(arrayPassByReference([10, 20], 99)).toEqual([99,20]);
    });
    it("тест 2: arrayPassByReference([\"a\", \"b\"], \"z\")", () => {
      expect(arrayPassByReference(["a", "b"], "z")).toEqual(["z","b"]);
    });
    it("тест 3: arrayPassByReference([], 5)", () => {
      expect(arrayPassByReference([], 5)).toEqual([]);
    });
  });

  describe("1.6 shallowCopyArray - Створення незалежної неглибокої копії (Shallow Copy)", () => {
    it("тест 1: shallowCopyArray([1, 2, 3], 99)", () => {
      expect(shallowCopyArray([1, 2, 3], 99)).toEqual({"copy":[1,2,99],"originalUnchanged":true});
    });
    it("тест 2: shallowCopyArray([\"cat\", \"dog\"], \"lion\")", () => {
      expect(shallowCopyArray(["cat", "dog"], "lion")).toEqual({"copy":["cat","lion"],"originalUnchanged":true});
    });
  });

  describe("1.7 emptyArrayTechniques - Швидке очищення масиву через length = 0", () => {
    it("тест 1: emptyArrayTechniques([1, 2, 3, 4])", () => {
      expect(emptyArrayTechniques([1, 2, 3, 4])).toEqual([]);
    });
    it("тест 2: emptyArrayTechniques([\"hello\"])", () => {
      expect(emptyArrayTechniques(["hello"])).toEqual([]);
    });
  });

  describe("1.8 arrayWithMixedTypes - Масив зі змішаними типами даних", () => {
    it("тест 1: arrayWithMixedTypes(101, \"Іван\", true, [\"admin\", \"dev\"])", () => {
      expect(arrayWithMixedTypes(101, "Іван", true, ["admin", "dev"])).toEqual([101,"Іван",true,["admin","dev"]]);
    });
    it("тест 2: arrayWithMixedTypes(202, \"Анна\", false, [])", () => {
      expect(arrayWithMixedTypes(202, "Анна", false, [])).toEqual([202,"Анна",false,[]]);
    });
  });

  describe("1.9 arrayMemorySimulation - Моделювання обчислення фізичної адреси елемента", () => {
    it("тест 1: arrayMemorySimulation(1000, 0, 8)", () => {
      expect(arrayMemorySimulation(1000, 0, 8)).toEqual(1000);
    });
    it("тест 2: arrayMemorySimulation(1000, 3, 8)", () => {
      expect(arrayMemorySimulation(1000, 3, 8)).toEqual(1024);
    });
    it("тест 3: arrayMemorySimulation(2048, -1, 4)", () => {
      expect(arrayMemorySimulation(2048, -1, 4)).toEqual(null);
    });
  });

  describe("1.10 sparseArrayDetection - Виявлення розрідженого масиву (Sparse Array)", () => {
    it("тест 1: sparseArrayDetection([1, 2, 3])", () => {
      expect(sparseArrayDetection([1, 2, 3])).toEqual(false);
    });
    it("тест 2: sparseArrayDetection(new Array(3))", () => {
      expect(sparseArrayDetection(new Array(3))).toEqual(true);
    });
    it("тест 3: sparseArrayDetection([1, , 3])", () => {
      expect(sparseArrayDetection([1, , 3])).toEqual(true);
    });
  });

});
