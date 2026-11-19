import { describe, it, expect } from 'vitest';
import { createStockTickerTape } from '../src/createStockTickerTape.js';

describe('15.20: createStockTickerTape', () => {
  it('test 1', () => {
    const fn = createStockTickerTape;
    const res = (() => { const t = createStockTickerTape([{ symbol: 'AAPL', price: 150, changePct: 2.5 }, { symbol: 'TSLA', price: 200, changePct: -1.2 }]); return [t.children[0].className, t.children[1].className]; })();
    expect(res).toEqual(["ticker-item gain","ticker-item loss"]);
  });
});
