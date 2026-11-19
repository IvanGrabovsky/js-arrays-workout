import { describe, it, expect } from 'vitest';
import { createPaginatedTable } from '../src/createPaginatedTable.js';

describe('16.3: createPaginatedTable', () => {
  it('test 1', () => {
    const fn = createPaginatedTable;
    const res = (() => { let p = 1; const bar = createPaginatedTable(25, 10, newP => p = newP); bar.children[1].click(); return [bar.children.length, p, bar.children[1].classList.contains('active')]; })();
    expect(res).toEqual([3,2,true]);
  });
});
