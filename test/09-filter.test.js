import { describe, it, expect } from "vitest";
import {
  myFilter,
  filterValidPromoCodes,
  moderateComments,
  findAvailableHotelRooms
} from "../src/09-filter.js";

describe("Модуль 9: filter — Фільтрація та селекція", () => {
  describe("9.1 myFilter - Власна реалізація filter (Кастомний поліфіл)", () => {
    it("тест 1: myFilter([1, 2, 3, 4, 5], x => x % 2 === 0)", () => {
      expect(myFilter([1, 2, 3, 4, 5], x => x % 2 === 0)).toEqual([2,4]);
    });
    it("тест 2: myFilter([\"apple\", \"banana\"], s => s.startsWith(\"a\"))", () => {
      expect(myFilter(["apple", "banana"], s => s.startsWith("a"))).toEqual(["apple"]);
    });
  });

  describe("9.2 filterValidPromoCodes - Фільтр валідних промокодів акції", () => {
    it("тест 1: filterValidPromoCodes([{ code: \"SALE20\", isActive: true, expiryDate: \"2026-12-31\", discountPercent: 20 }, { code: \"OLD\", isActive: true, expiryDate: \"2025-01-01\", discountPercent: 30 }], \"2026-10-17\", 15)", () => {
      expect(filterValidPromoCodes([{ code: "SALE20", isActive: true, expiryDate: "2026-12-31", discountPercent: 20 }, { code: "OLD", isActive: true, expiryDate: "2025-01-01", discountPercent: 30 }], "2026-10-17", 15)).toEqual([{"code":"SALE20","isActive":true,"expiryDate":"2026-12-31","discountPercent":20}]);
    });
  });

  describe("9.3 moderateComments - Модерація коментарів та фільтрація спаму", () => {
    it("тест 1: moderateComments([{ text: \"Чудовий курс!\", isSpam: false, rating: 5 }, { text: \"Купи крипту\", isSpam: true, rating: 1 }], [\"крипту\"])", () => {
      expect(moderateComments([{ text: "Чудовий курс!", isSpam: false, rating: 5 }, { text: "Купи крипту", isSpam: true, rating: 1 }], ["крипту"])).toEqual([{"text":"Чудовий курс!","isSpam":false,"rating":5}]);
    });
  });

  describe("9.4 findAvailableHotelRooms - Пошук вільних номерів готелю", () => {
    it("тест 1: findAvailableHotelRooms([{ id: 101, capacity: 2, pricePerNight: 1200, isAvailable: true }, { id: 102, capacity: 4, pricePerNight: 3500, isAvailable: true }], 2, 2000)", () => {
      expect(findAvailableHotelRooms([{ id: 101, capacity: 2, pricePerNight: 1200, isAvailable: true }, { id: 102, capacity: 4, pricePerNight: 3500, isAvailable: true }], 2, 2000)).toEqual([{"id":101,"capacity":2,"pricePerNight":1200,"isAvailable":true}]);
    });
  });

});
