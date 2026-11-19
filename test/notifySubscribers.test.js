import { describe, it, expect } from 'vitest';
import { notifySubscribers } from '../src/notifySubscribers.js';

describe('7.2: notifySubscribers', () => {
  it('test 1', () => {
    const fn = notifySubscribers;
    const res = notifySubscribers([{ name: "Олена", isSubscribed: true, email: "o@test.com" }, { name: "Макс", isSubscribed: false, email: "m@test.com" }], "Хакатон!");
    expect(res).toEqual([{"to":"o@test.com","text":"Привіт, Олена! Хакатон!"}]);
  });
  it('test 2', () => {
    const fn = notifySubscribers;
    const res = notifySubscribers([], "тест");
    expect(res).toEqual([]);
  });
});
