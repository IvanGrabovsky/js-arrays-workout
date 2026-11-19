import { describe, it, expect } from 'vitest';
import { rpgInventoryOptimizer } from '../src/rpgInventoryOptimizer.js';

describe('14.3: rpgInventoryOptimizer', () => {
  it('test 1', () => {
    const fn = rpgInventoryOptimizer;
    const res = rpgInventoryOptimizer([{ id: 1, name: "Золотий кубок", value: 100, weight: 2, durability: 100 }, { id: 2, name: "Важкий камінь", value: 10, weight: 10, durability: 50 }, { id: 3, name: "Зламаний меч", value: 50, weight: 3, durability: 0 }], 5);
    expect(res).toEqual({"packedItems":[{"id":1,"name":"Золотий кубок","value":100,"weight":2}],"totalValue":100,"totalWeight":2});
  });
});
