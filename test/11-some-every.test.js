import { describe, it, expect } from "vitest";
import {
  mySomeAndEvery,
  validateFormFields,
  checkCartAffordability,
  verifyTeamVipStatus
} from "../src/11-some-every.js";

describe("Модуль 11: some та every — Предикатна валідація", () => {
  describe("11.1 mySomeAndEvery - Власні поліфіли mySome та myEvery", () => {
    it("тест 1: mySomeAndEvery([2, 4, 6], x => x % 2 === 0)", () => {
      expect(mySomeAndEvery([2, 4, 6], x => x % 2 === 0)).toEqual({"someResult":true,"everyResult":true});
    });
    it("тест 2: mySomeAndEvery([2, 3, 6], x => x % 2 === 0)", () => {
      expect(mySomeAndEvery([2, 3, 6], x => x % 2 === 0)).toEqual({"someResult":true,"everyResult":false});
    });
    it("тест 3: mySomeAndEvery([1, 3, 5], x => x % 2 === 0)", () => {
      expect(mySomeAndEvery([1, 3, 5], x => x % 2 === 0)).toEqual({"someResult":false,"everyResult":false});
    });
  });

  describe("11.2 validateFormFields - Валідація обовʼязкових полів форми", () => {
    it("тест 1: validateFormFields([{ field: \"email\", isValid: true }, { field: \"password\", isValid: true }])", () => {
      expect(validateFormFields([{ field: "email", isValid: true }, { field: "password", isValid: true }])).toEqual({"isValidForm":true,"hasErrors":false});
    });
    it("тест 2: validateFormFields([{ field: \"email\", isValid: true }, { field: \"password\", isValid: false }])", () => {
      expect(validateFormFields([{ field: "email", isValid: true }, { field: "password", isValid: false }])).toEqual({"isValidForm":false,"hasErrors":true});
    });
  });

  describe("11.3 checkCartAffordability - Перевірка платоспроможності кошика покупок", () => {
    it("тест 1: checkCartAffordability([{ name: \"Книга\", price: 300 }, { name: \"Годинник\", price: 5000 }], 6000, 4000)", () => {
      expect(checkCartAffordability([{ name: "Книга", price: 300 }, { name: "Годинник", price: 5000 }], 6000, 4000)).toEqual({"canAffordAll":true,"hasLuxuryItem":true});
    });
    it("тест 2: checkCartAffordability([{ name: \"Хліб\", price: 30 }], 20, 1000)", () => {
      expect(checkCartAffordability([{ name: "Хліб", price: 30 }], 20, 1000)).toEqual({"canAffordAll":false,"hasLuxuryItem":false});
    });
  });

  describe("11.4 verifyTeamVipStatus - Перевірка статусу VIP у команді", () => {
    it("тест 1: verifyTeamVipStatus([{ name: \"A\", isCaptain: true, isVip: true }, { name: \"B\", isCaptain: false, isVip: false }])", () => {
      expect(verifyTeamVipStatus([{ name: "A", isCaptain: true, isVip: true }, { name: "B", isCaptain: false, isVip: false }])).toEqual(true);
    });
    it("тест 2: verifyTeamVipStatus([{ name: \"A\", isCaptain: true, isVip: false }, { name: \"B\", isCaptain: false, isVip: false }])", () => {
      expect(verifyTeamVipStatus([{ name: "A", isCaptain: true, isVip: false }, { name: "B", isCaptain: false, isVip: false }])).toEqual(false);
    });
  });

});
