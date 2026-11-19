import { describe, it, expect } from 'vitest';
import { formatProductCards } from '../src/formatProductCards.js';

describe('8.2: formatProductCards', () => {
  it('test 1', () => {
    const fn = formatProductCards;
    const res = formatProductCards([{ id: 1, name: "Ноутбук", priceUsd: 1000, inStock: true }], 40, 20);
    expect(res).toEqual([{"id":1,"title":"Ноутбук","priceUah":48000,"priceFormatted":"48000 ₴","badge":"В наявності"}]);
  });
});
