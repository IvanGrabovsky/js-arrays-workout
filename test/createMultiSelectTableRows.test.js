import { describe, it, expect } from 'vitest';
import { createMultiSelectTableRows } from '../src/createMultiSelectTableRows.js';

describe('16.11: createMultiSelectTableRows', () => {
  it('test 1', () => {
    const fn = createMultiSelectTableRows;
    const res = (() => { let sel = []; const t = createMultiSelectTableRows([{ id: 1, name: 'A' }, { id: 2, name: 'B' }], s => sel = s); const selectAll = t.querySelector('thead input'); selectAll.click(); return sel.length; })();
    expect(res).toEqual(2);
  });
});
