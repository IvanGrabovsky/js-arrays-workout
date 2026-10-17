import { describe, it, expect } from "vitest";
import {
  myFindAndFindIndex,
  detectSecurityAnomaly,
  selectFirstAvailableSeat
} from "../src/10-find-findIndex.js";

describe("Модуль 10: find та findIndex — Точковий пошук сутності", () => {
  describe("10.1 myFindAndFindIndex - Кастомні поліфіли myFind та myFindIndex", () => {
    it("тест 1: myFindAndFindIndex([10, 25, 30, 45], x => x > 20)", () => {
      expect(myFindAndFindIndex([10, 25, 30, 45], x => x > 20)).toEqual({"item":25,"index":1});
    });
    it("тест 2: myFindAndFindIndex([1, 2, 3], x => x > 99)", () => {
      expect(myFindAndFindIndex([1, 2, 3], x => x > 99)).toEqual({"item":null,"index":-1});
    });
  });

  describe("10.2 detectSecurityAnomaly - Виявлення першої критичної аномалії в логах", () => {
    it("тест 1: detectSecurityAnomaly([{ id: 1, level: \"INFO\", statusCode: 200 }, { id: 2, level: \"ERROR\", statusCode: 502 }])", () => {
      expect(detectSecurityAnomaly([{ id: 1, level: "INFO", statusCode: 200 }, { id: 2, level: "ERROR", statusCode: 502 }])).toEqual({"foundLog":{"id":2,"level":"ERROR","statusCode":502},"logIndex":1});
    });
    it("тест 2: detectSecurityAnomaly([{ id: 1, level: \"INFO\", statusCode: 200 }])", () => {
      expect(detectSecurityAnomaly([{ id: 1, level: "INFO", statusCode: 200 }])).toEqual(null);
    });
  });

  describe("10.3 selectFirstAvailableSeat - Вибір першого підходящого місця в літаку", () => {
    it("тест 1: selectFirstAvailableSeat([{ seat: \"1A\", isOccupied: false, isWindow: true, isEmergencyRow: false }], true)", () => {
      expect(selectFirstAvailableSeat([{ seat: "1A", isOccupied: false, isWindow: true, isEmergencyRow: false }], true)).toEqual({"seat":"1A","isOccupied":false,"isWindow":true,"isEmergencyRow":false});
    });
    it("тест 2: selectFirstAvailableSeat([{ seat: \"12A\", isOccupied: false, isWindow: true, isEmergencyRow: true }], true)", () => {
      expect(selectFirstAvailableSeat([{ seat: "12A", isOccupied: false, isWindow: true, isEmergencyRow: true }], true)).toEqual(null);
    });
  });

});
