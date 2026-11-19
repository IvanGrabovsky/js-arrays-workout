import { describe, it, expect } from 'vitest';
import { createShoppingCartSummary } from '../src/createShoppingCartSummary.js';

describe('15.6: createShoppingCartSummary', () => {
  it('test 1', () => {
    const fn = createShoppingCartSummary;
    const res = (() => { const c = createShoppingCartSummary([{ name: 'Кава', price: 60, qty: 2 }, { name: 'Круасан', price: 40, qty: 1 }]); return c.querySelector('.cart-total').textContent; })();
    expect(res).toEqual("Загалом: 160 грн");
  });
});
