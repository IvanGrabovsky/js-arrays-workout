import { describe, it, expect } from "vitest";
import {
  simulateStack,
  simulateQueue,
  addVipClients,
  checkItemPresence,
  removeAllOccurrences
} from "../src/00-operations.js";

describe("Модуль 3: Операції з масивами (push, pop, shift, unshift, includes, indexOf)", () => {
  it("simulateStack виконує LIFO операції", () => {
    const res = simulateStack([
      { type: "push", value: "doc1" },
      { type: "push", value: "doc2" },
      { type: "pop" },
      { type: "push", value: "doc3" }
    ]);
    expect(res).toEqual({ stack: ["doc1", "doc3"], poppedHistory: ["doc2"] });
  });

  it("simulateQueue обслуговує чергу FIFO", () => {
    expect(simulateQueue(["UserA", "UserB", "UserC"])).toEqual(["UserA", "UserB", "UserC"]);
  });

  it("addVipClients додає VIP на початок черги в правильному порядку", () => {
    expect(addVipClients(["c3", "c4"], ["vip1", "vip2"])).toEqual(["vip1", "vip2", "c3", "c4"]);
  });

  it("checkItemPresence перевіряє includes та indexOf", () => {
    expect(checkItemPresence(["apple", "banana", "cherry"], "banana")).toEqual({ exists: true, index: 1 });
    expect(checkItemPresence(["apple", "banana"], "orange")).toEqual({ exists: false, index: -1 });
  });

  it("removeAllOccurrences видаляє всі цільові значення", () => {
    expect(removeAllOccurrences([1, 2, 3, 2, 4, 2], 2)).toEqual([1, 3, 4]);
  });
});
