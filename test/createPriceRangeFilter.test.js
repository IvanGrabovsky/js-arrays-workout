import { describe, it, expect } from 'vitest';
import { createPriceRangeFilter } from '../src/createPriceRangeFilter.js';

describe('15.15: createPriceRangeFilter', () => {
  it('test 1', () => {
    const fn = createPriceRangeFilter;
    const res = (() => { const f = createPriceRangeFilter([{ name: 'A', price: 100 }, { name: 'B', price: 500 }]); const count = f.filterByMaxPrice(200); return count; })();
    expect(res).toEqual(1);
  });
});
