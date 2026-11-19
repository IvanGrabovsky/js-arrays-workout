import { describe, it, expect } from 'vitest';
import { renderSimpleTable } from '../src/renderSimpleTable.js';

describe('16.1: renderSimpleTable', () => {
  it('test 1', () => {
    const fn = renderSimpleTable;
    const res = (() => { const t = renderSimpleTable(['Імʼя', 'Вік'], [['Тарас', 25], ['Олена', 22]]); return [t.querySelectorAll('th').length, t.querySelectorAll('tbody tr').length, t.querySelector('tbody td').textContent]; })();
    expect(res).toEqual([2,2,"Тарас"]);
  });
});
