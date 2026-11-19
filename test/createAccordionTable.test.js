import { describe, it, expect } from 'vitest';
import { createAccordionTable } from '../src/createAccordionTable.js';

describe('16.23: createAccordionTable', () => {
  it('test 1', () => {
    const fn = createAccordionTable;
    const res = (() => { const t = createAccordionTable([{ summary: 'Замовлення 1', details: 'Деталі замовлення' }]); const mainRow = t.querySelector('.main-row'); mainRow.click(); return t.querySelector('.detail-row').style.display; })();
    expect(res).toEqual("");
  });
});
