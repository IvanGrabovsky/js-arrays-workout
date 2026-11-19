import { describe, it, expect } from 'vitest';
import { createProductVariantSelector } from '../src/createProductVariantSelector.js';

describe('15.29: createProductVariantSelector', () => {
  it('test 1', () => {
    const fn = createProductVariantSelector;
    const res = (() => { let chosen = ''; const s = createProductVariantSelector(['S', 'M', 'L'], sz => chosen = sz); s.children[1].click(); return chosen; })();
    expect(res).toEqual("M");
  });
});
