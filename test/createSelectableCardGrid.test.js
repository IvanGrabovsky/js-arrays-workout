import { describe, it, expect } from 'vitest';
import { createSelectableCardGrid } from '../src/createSelectableCardGrid.js';

describe('15.35: createSelectableCardGrid', () => {
  it('test 1', () => {
    const fn = createSelectableCardGrid;
    const res = (() => { let chosen = null; const g = createSelectableCardGrid([{ id: 1, title: 'Тариф 1', desc: 'Базовий' }, { id: 2, title: 'Тариф 2', desc: 'Про' }], c => chosen = c); g.children[1].click(); return { isSel: g.children[1].classList.contains('selected'), id: chosen.id }; })();
    expect(res).toEqual({"isSel":true,"id":2});
  });
});
