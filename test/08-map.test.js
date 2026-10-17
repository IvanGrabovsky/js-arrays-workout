import { describe, it, expect } from "vitest";
import {
  myMap,
  formatProductCards,
  anonymizeUserData,
  normalizeCoordinates
} from "../src/08-map.js";

describe("Модуль 8: map — Трансформація та проекції даних", () => {
  describe("8.1 myMap - Власна реалізація map (Кастомний поліфіл)", () => {
    it("тест 1: myMap([1, 2, 3], x => x * 2)", () => {
      expect(myMap([1, 2, 3], x => x * 2)).toEqual([2,4,6]);
    });
    it("тест 2: myMap([\"a\", \"b\"], (x, i) => `${i}:${x}`)", () => {
      expect(myMap(["a", "b"], (x, i) => `${i}:${x}`)).toEqual(["0:a","1:b"]);
    });
  });

  describe("8.2 formatProductCards - E-commerce DTO картки товарів з перерахунком цін", () => {
    it("тест 1: formatProductCards([{ id: 1, name: \"Ноутбук\", priceUsd: 1000, inStock: true }], 40, 20)", () => {
      expect(formatProductCards([{ id: 1, name: "Ноутбук", priceUsd: 1000, inStock: true }], 40, 20)).toEqual([{"id":1,"title":"Ноутбук","priceUah":48000,"priceFormatted":"48000 ₴","badge":"В наявності"}]);
    });
  });

  describe("8.3 anonymizeUserData - Маскування персональних даних за GDPR", () => {
    it("тест 1: anonymizeUserData([{ id: 1, fullName: \"Тарас Шевченко\", email: \"taras@ukr.net\", phone: \"+380501234567\" }])", () => {
      expect(anonymizeUserData([{ id: 1, fullName: "Тарас Шевченко", email: "taras@ukr.net", phone: "+380501234567" }])).toEqual([{"id":1,"maskedName":"Тарас Ш.","email":"t***@ukr.net","phone":"+380******67"}]);
    });
  });

  describe("8.4 normalizeCoordinates - Нормалізація гео-координат", () => {
    it("тест 1: normalizeCoordinates([{ lat: 50.4501, lng: 30.5234 }, { lat: 0, lng: 20.12 }])", () => {
      expect(normalizeCoordinates([{ lat: 50.4501, lng: 30.5234 }, { lat: 0, lng: 20.12 }])).toEqual([{"hash":"[50.4501,30.5234]","isEquator":false},{"hash":"[0.0000,20.1200]","isEquator":true}]);
    });
  });

});
