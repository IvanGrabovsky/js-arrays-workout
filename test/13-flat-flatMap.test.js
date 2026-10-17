import { describe, it, expect } from "vitest";
import {
  myFlatAndFlatMap,
  extractUniqueHashtags,
  flattenCategoryTree
} from "../src/13-flat-flatMap.js";

describe("Модуль 13: flat та flatMap — Згладжування структур", () => {
  describe("13.1 myFlatAndFlatMap - Власні поліфіли flat та flatMap", () => {
    it("тест 1: myFlatAndFlatMap([[1, 2], [3], 4], x => Array.isArray(x) ? x.map(n => n * 2) : [x * 2])", () => {
      expect(myFlatAndFlatMap([[1, 2], [3], 4], x => Array.isArray(x) ? x.map(n => n * 2) : [x * 2])).toEqual({"flatResult":[1,2,3,4],"flatMapResult":[2,4,6,8]});
    });
  });

  describe("13.2 extractUniqueHashtags - Витягування унікальних хештегів із постів", () => {
    it("тест 1: extractUniqueHashtags([{ tags: [\"#js\", \"#code\"] }, { tags: [\"#web\", \"#js\"] }])", () => {
      expect(extractUniqueHashtags([{ tags: ["#js", "#code"] }, { tags: ["#web", "#js"] }])).toEqual(["#js","#code","#web"]);
    });
    it("тест 2: extractUniqueHashtags([])", () => {
      expect(extractUniqueHashtags([])).toEqual([]);
    });
  });

  describe("13.3 flattenCategoryTree - Розкриття дерева категорій до 1 рівня", () => {
    it("тест 1: flattenCategoryTree([{ name: \"Електроніка\", subcategories: [\"Телефони\", \"Ноутбуки\"] }, { name: \"Одяг\", subcategories: [\"Взуття\"] }])", () => {
      expect(flattenCategoryTree([{ name: "Електроніка", subcategories: ["Телефони", "Ноутбуки"] }, { name: "Одяг", subcategories: ["Взуття"] }])).toEqual(["Електроніка","Телефони","Ноутбуки","Одяг","Взуття"]);
    });
  });

});
