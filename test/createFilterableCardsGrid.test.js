import { describe, it, expect } from 'vitest';
import { createFilterableCardsGrid } from '../src/createFilterableCardsGrid.js';

describe('16.8: createFilterableCardsGrid', () => {
  it('test 1', () => {
    const fn = createFilterableCardsGrid;
    const res = (() => { const items = [{ id: 1, name: 'Чайник', category: 'appliances', price: 800 }, { id: 2, name: 'Книга', category: 'books', price: 300 }]; const g = createFilterableCardsGrid(items, 'books'); return [g.children[0].style.display, g.children[1].style.display]; })();
    expect(res).toEqual(["none",""]);
  });
});
