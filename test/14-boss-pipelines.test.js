import { describe, it, expect } from "vitest";
import {
  topSpendingCustomersPipeline,
  smartPlaylistGenerator,
  rpgInventoryOptimizer
} from "../src/14-boss-pipelines.js";

describe("Модуль 14: Boss Challenges — Пайплайни методів масивів", () => {
  describe("14.1 topSpendingCustomersPipeline - Пайплайн: Топ покупців інтернет-магазину", () => {
    it("тест 1: topSpendingCustomersPipeline([{ customerId: \"u1\", amount: 500, status: \"DELIVERED\" }, { customerId: \"u2\", amount: 1200, status: \"DELIVERED\" }, { customerId: \"u1\", amount: 300, status: \"DELIVERED\" }, { customerId: \"u3\", amount: 4000, status: \"CANCELLED\" }], 2)", () => {
      expect(topSpendingCustomersPipeline([{ customerId: "u1", amount: 500, status: "DELIVERED" }, { customerId: "u2", amount: 1200, status: "DELIVERED" }, { customerId: "u1", amount: 300, status: "DELIVERED" }, { customerId: "u3", amount: 4000, status: "CANCELLED" }], 2)).toEqual([{"customerId":"u2","totalSpent":1200},{"customerId":"u1","totalSpent":800}]);
    });
  });

  describe("14.2 smartPlaylistGenerator - Генератор розумного плейлиста", () => {
    it("тест 1: smartPlaylistGenerator([{ title: \"Track A\", genre: \"rock\", rating: 5, durationSec: 180 }, { title: \"Track B\", genre: \"rock\", rating: 4, durationSec: 240 }, { title: \"Track C\", genre: \"pop\", rating: 5, durationSec: 200 }], \"rock\", 4, 300)", () => {
      expect(smartPlaylistGenerator([{ title: "Track A", genre: "rock", rating: 5, durationSec: 180 }, { title: "Track B", genre: "rock", rating: 4, durationSec: 240 }, { title: "Track C", genre: "pop", rating: 5, durationSec: 200 }], "rock", 4, 300)).toEqual([{"title":"Track B","genre":"rock","rating":4,"durationSec":240}]);
    });
  });

  describe("14.3 rpgInventoryOptimizer - Оптимізація інвентаря RPG персонажа", () => {
    it("тест 1: rpgInventoryOptimizer([{ id: 1, name: \"Золотий кубок\", value: 100, weight: 2, durability: 100 }, { id: 2, name: \"Важкий камінь\", value: 10, weight: 10, durability: 50 }, { id: 3, name: \"Зламаний меч\", value: 50, weight: 3, durability: 0 }], 5)", () => {
      expect(rpgInventoryOptimizer([{ id: 1, name: "Золотий кубок", value: 100, weight: 2, durability: 100 }, { id: 2, name: "Важкий камінь", value: 10, weight: 10, durability: 50 }, { id: 3, name: "Зламаний меч", value: 50, weight: 3, durability: 0 }], 5)).toEqual({"packedItems":[{"id":1,"name":"Золотий кубок","value":100,"weight":2}],"totalValue":100,"totalWeight":2});
    });
  });

});
