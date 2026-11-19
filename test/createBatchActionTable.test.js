import { describe, it, expect } from 'vitest';
import { createBatchActionTable } from '../src/createBatchActionTable.js';

describe('15.24: createBatchActionTable', () => {
  it('test 1', () => {
    const fn = createBatchActionTable;
    const res = (() => { const t = createBatchActionTable([{ id: '1', name: 'A' }, { id: '2', name: 'B' }]); t.table.querySelector('#selectAll').click(); return t.getSelectedIds(); })();
    expect(res).toEqual(["1","2"]);
  });
});
