import { describe, it, expect } from 'vitest';
import { createSortableTableHeader } from '../src/createSortableTableHeader.js';

describe('16.2: createSortableTableHeader', () => {
  it('test 1', () => {
    const fn = createSortableTableHeader;
    const res = (() => { let sortDir = null; let col = null; const th = createSortableTableHeader(['Ціна', 'Рейтинг'], (c, d) => { col = c; sortDir = d; }); th.querySelector('tr').children[0].click(); return { col, sortDir }; })();
    expect(res).toEqual({"col":0,"sortDir":"asc"});
  });
});
