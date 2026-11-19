import { describe, it, expect } from 'vitest';
import { createTableSearchFilter } from '../src/createTableSearchFilter.js';

describe('16.22: createTableSearchFilter', () => {
  it('test 1', () => {
    const fn = createTableSearchFilter;
    const res = (() => { const tbl = document.createElement('table'); tbl.innerHTML = '<tbody><tr><td>Київ</td></tr><tr><td>Львів</td></tr></tbody>'; const inp = document.createElement('input'); createTableSearchFilter(tbl, inp); inp.value = 'льв'; inp.dispatchEvent(new Event('input')); return [tbl.querySelectorAll('tbody tr')[0].style.display, tbl.querySelectorAll('tbody tr')[1].style.display]; })();
    expect(res).toEqual(["none",""]);
  });
});
