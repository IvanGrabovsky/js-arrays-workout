import { describe, it, expect } from 'vitest';
import { createSpreadsheetFormulaSum } from '../src/createSpreadsheetFormulaSum.js';

describe('16.36: createSpreadsheetFormulaSum', () => {
  it('test 1', () => {
    const fn = createSpreadsheetFormulaSum;
    const res = (() => { const s = createSpreadsheetFormulaSum(2, 2); const inputs = s.querySelectorAll('input'); inputs[0].value = '10'; inputs[1].value = '25'; inputs[0].dispatchEvent(new Event('input')); return s.querySelector('.sum-result').textContent; })();
    expect(res).toEqual("SUM: 35");
  });
});
