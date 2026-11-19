import { describe, it, expect } from 'vitest';
import { filterValidPromoCodes } from '../src/filterValidPromoCodes.js';

describe('9.2: filterValidPromoCodes', () => {
  it('test 1', () => {
    const fn = filterValidPromoCodes;
    const res = filterValidPromoCodes([{ code: "SALE20", isActive: true, expiryDate: "2026-12-31", discountPercent: 20 }, { code: "OLD", isActive: true, expiryDate: "2025-01-01", discountPercent: 30 }], "2026-10-17", 15);
    expect(res).toEqual([{"code":"SALE20","isActive":true,"expiryDate":"2026-12-31","discountPercent":20}]);
  });
});
