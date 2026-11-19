import { describe, it, expect } from 'vitest';
import { flattenCategoryTree } from '../src/flattenCategoryTree.js';

describe('13.3: flattenCategoryTree', () => {
  it('test 1', () => {
    const fn = flattenCategoryTree;
    const res = flattenCategoryTree([{ name: "Електроніка", subcategories: ["Телефони", "Ноутбуки"] }, { name: "Одяг", subcategories: ["Взуття"] }]);
    expect(res).toEqual(["Електроніка","Телефони","Ноутбуки","Одяг","Взуття"]);
  });
});
