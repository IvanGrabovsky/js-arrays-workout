import { describe, it, expect } from "vitest";
import {
  myForEach,
  notifySubscribers,
  tallyVotes
} from "../src/07-forEach.js";

describe("Модуль 7: forEach — Перебір та побічні ефекти", () => {
  describe("7.1 myForEach - Власна реалізація forEach (Кастомний поліфіл)", () => {
    it("тест 1: (() => { const log = []; myForEach([10, 20], (x, i) => log.push(`${i}:${x}`)); return log; })()", () => {
      expect((() => { const log = []; myForEach([10, 20], (x, i) => log.push(`${i}:${x}`)); return log; })()).toEqual(["0:10","1:20"]);
    });
    it("тест 2: myForEach([], () => {})", () => {
      expect(myForEach([], () => {})).toEqual(undefined);
    });
  });

  describe("7.2 notifySubscribers - Практична розсилка сповіщень підписникам", () => {
    it("тест 1: notifySubscribers([{ name: \"Олена\", isSubscribed: true, email: \"o@test.com\" }, { name: \"Макс\", isSubscribed: false, email: \"m@test.com\" }], \"Хакатон!\")", () => {
      expect(notifySubscribers([{ name: "Олена", isSubscribed: true, email: "o@test.com" }, { name: "Макс", isSubscribed: false, email: "m@test.com" }], "Хакатон!")).toEqual([{"to":"o@test.com","text":"Привіт, Олена! Хакатон!"}]);
    });
    it("тест 2: notifySubscribers([], \"тест\")", () => {
      expect(notifySubscribers([], "тест")).toEqual([]);
    });
  });

  describe("7.3 tallyVotes - Підрахунок голосів на виборах за допомогою forEach", () => {
    it("тест 1: tallyVotes([\"Олена\", \"Ігор\", \"Олена\", \"\"])", () => {
      expect(tallyVotes(["Олена", "Ігор", "Олена", ""])).toEqual({"candidateVotes":{"Олена":2,"Ігор":1},"totalValidVotes":3});
    });
    it("тест 2: tallyVotes([])", () => {
      expect(tallyVotes([])).toEqual({"candidateVotes":{},"totalValidVotes":0});
    });
  });

});
