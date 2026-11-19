import { describe, it, expect } from 'vitest';
import { mergeInventoriesWithBonus } from '../src/mergeInventoriesWithBonus.js';

describe('5.10: mergeInventoriesWithBonus', () => {
  it('test 1', () => {
    const fn = mergeInventoriesWithBonus;
    const res = mergeInventoriesWithBonus(["меч", "щит"], ["зілля", "меч"], ["лук", "щит"]);
    expect(res).toEqual(["меч","щит","зілля","лук"]);
  });
  it('test 2', () => {
    const fn = mergeInventoriesWithBonus;
    const res = mergeInventoriesWithBonus(["ключ"], [], ["ключ"]);
    expect(res).toEqual(["ключ"]);
  });
});
