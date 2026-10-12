import { describe, it, expect } from 'vitest';
import { mySome, myEvery, validateRegistrationForm, hasVipAccess, canAffordCart } from '../src/05-some-every.js';

describe('Модуль 5: some та every — Предикатна валідація', () => {
  describe('5.1: mySome та myEvery', () => {
    it('mySome повертає true, якщо хоч один елемент задовольняє умову', () => {
      expect(mySome([1, 3, 5, 8], (x) => x % 2 === 0)).toBe(true);
      expect(mySome([1, 3, 5], (x) => x % 2 === 0)).toBe(false);
      expect(mySome([], (x) => x > 0)).toBe(false);
    });

    it('myEvery повертає true, якщо ВСІ елементи задовольняють умову', () => {
      expect(myEvery([2, 4, 6], (x) => x % 2 === 0)).toBe(true);
      expect(myEvery([2, 4, 5], (x) => x % 2 === 0)).toBe(false);
      expect(myEvery([], (x) => x > 0)).toBe(true);
    });
  });

  describe('5.2: validateRegistrationForm', () => {
    it('перевіряє коректність полів форми', () => {
      const fields = [
        { name: 'username', value: 'john_doe', required: true, minLength: 4 },
        { name: 'email', value: 'john@example.com', required: true, pattern: /^.+@.+\..+$/ },
        { name: 'password', value: '12345', required: true, minLength: 8 } // too short
      ];

      const res = validateRegistrationForm(fields);
      expect(res.isValid).toBe(false);
      expect(res.invalidFieldNames).toEqual(['password']);
    });
  });

  describe('5.3: hasVipAccess', () => {
    it('надає доступ команді, якщо є учасник зі спец-роллю або бейджем', () => {
      const team = [
        { name: 'Олександр', role: 'developer', badges: [] },
        { name: 'Катерина', role: 'designer', badges: ['VIP_PASS'] }
      ];

      const res = hasVipAccess(team, ['speaker', 'organizer']);
      expect(res).toEqual({ hasAccess: true, authorizedBy: 'Катерина' });
    });
  });

  describe('5.4: canAffordCart', () => {
    it('відхиляє кошик з невалідною ціною', () => {
      const cart = [{ title: 'Товар', price: -10, quantity: 1, maxPerOrder: 5 }];
      const res = canAffordCart(cart, { balance: 100, creditLimit: 50 });
      expect(res).toEqual({ canCheckout: false, reason: 'INVALID_ITEM_PRICE' });
    });

    it('відхиляє при перевищенні кількості товару', () => {
      const cart = [{ title: 'iPhone', price: 1000, quantity: 3, maxPerOrder: 2 }];
      const res = canAffordCart(cart, { balance: 5000, creditLimit: 0 });
      expect(res).toEqual({ canCheckout: false, reason: 'EXCEEDED_QUANTITY_LIMIT' });
    });

    it('дозволяє покупку в межах балансу та кредитного ліміту', () => {
      const cart = [
        { title: 'Книга', price: 300, quantity: 2, maxPerOrder: 5 },
        { title: 'Кава', price: 100, quantity: 1, maxPerOrder: 10 }
      ];
      const res = canAffordCart(cart, { balance: 500, creditLimit: 300 });
      expect(res).toEqual({ canCheckout: true, reason: null });
    });
  });
});
