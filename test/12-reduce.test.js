import { describe, it, expect } from "vitest";
import {
  myReduce,
  groupPurchasesByCategory,
  generateQueryString,
  computeOrderMetrics
} from "../src/12-reduce.js";

describe("Модуль 12: reduce — Агрегація та згортання даних", () => {
  describe("12.1 myReduce - Власна реалізація reduce (Кастомний поліфіл)", () => {
    it("тест 1: myReduce([1, 2, 3, 4], (sum, x) => sum + x, 0)", () => {
      expect(myReduce([1, 2, 3, 4], (sum, x) => sum + x, 0)).toEqual(10);
    });
    it("тест 2: myReduce([10, 20, 30], (sum, x) => sum + x)", () => {
      expect(myReduce([10, 20, 30], (sum, x) => sum + x)).toEqual(60);
    });
  });

  describe("12.2 groupPurchasesByCategory - Групування покупок за категоріями через reduce", () => {
    it("тест 1: groupPurchasesByCategory([{ category: \"їжа\", amount: 150 }, { category: \"транспорт\", amount: 50 }, { category: \"їжа\", amount: 200 }])", () => {
      expect(groupPurchasesByCategory([{ category: "їжа", amount: 150 }, { category: "транспорт", amount: 50 }, { category: "їжа", amount: 200 }])).toEqual({"їжа":350,"транспорт":50});
    });
  });

  describe("12.3 generateQueryString - Генератор рядка URL query-параметрів", () => {
    it("тест 1: generateQueryString([{ key: \"page\", value: 1 }, { key: \"sort\", value: \"desc\" }])", () => {
      expect(generateQueryString([{ key: "page", value: 1 }, { key: "sort", value: "desc" }])).toEqual("page=1&sort=desc");
    });
    it("тест 2: generateQueryString([])", () => {
      expect(generateQueryString([])).toEqual("");
    });
  });

  describe("12.4 computeOrderMetrics - Обчислення фінансових метрик замовлень", () => {
    it("тест 1: computeOrderMetrics([{ total: 100, status: \"COMPLETED\" }, { total: 200, status: \"COMPLETED\" }, { total: 50, status: \"CANCELLED\" }])", () => {
      expect(computeOrderMetrics([{ total: 100, status: "COMPLETED" }, { total: 200, status: "COMPLETED" }, { total: 50, status: "CANCELLED" }])).toEqual({"totalRevenue":300,"completedCount":2,"averageCheck":150});
    });
    it("тест 2: computeOrderMetrics([])", () => {
      expect(computeOrderMetrics([])).toEqual({"totalRevenue":0,"completedCount":0,"averageCheck":0});
    });
  });

});
