import { describe, it, expect } from 'vitest';
import { groupPurchasesByCategory } from '../src/groupPurchasesByCategory.js';

describe('12.2: groupPurchasesByCategory', () => {
  it('test 1', () => {
    const fn = groupPurchasesByCategory;
    const res = groupPurchasesByCategory([{ category: "їжа", amount: 150 }, { category: "транспорт", amount: 50 }, { category: "їжа", amount: 200 }]);
    expect(res).toEqual({"їжа":350,"транспорт":50});
  });
});
