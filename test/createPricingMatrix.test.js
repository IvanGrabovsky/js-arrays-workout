import { describe, it, expect } from 'vitest';
import { createPricingMatrix } from '../src/createPricingMatrix.js';

describe('16.28: createPricingMatrix', () => {
  it('test 1', () => {
    const fn = createPricingMatrix;
    const res = (() => { let sel = null; const p = createPricingMatrix([{ title: 'Pro', monthlyPrice: 200, yearlyPrice: 1800 }], true, x => sel = x); p.querySelector('button').click(); return [p.querySelector('.price').textContent, sel.title]; })();
    expect(res).toEqual(["1800 грн","Pro"]);
  });
});
