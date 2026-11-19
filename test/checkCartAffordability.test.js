import { describe, it, expect } from 'vitest';
import { checkCartAffordability } from '../src/checkCartAffordability.js';

describe('11.3: checkCartAffordability', () => {
  it('test 1', () => {
    const fn = checkCartAffordability;
    const res = checkCartAffordability([{ name: "Книга", price: 300 }, { name: "Годинник", price: 5000 }], 6000, 4000);
    expect(res).toEqual({"canAffordAll":true,"hasLuxuryItem":true});
  });
  it('test 2', () => {
    const fn = checkCartAffordability;
    const res = checkCartAffordability([{ name: "Хліб", price: 30 }], 20, 1000);
    expect(res).toEqual({"canAffordAll":false,"hasLuxuryItem":false});
  });
});
