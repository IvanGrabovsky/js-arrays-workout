import { describe, it, expect } from 'vitest';
import { createTableColumnToggler } from '../src/createTableColumnToggler.js';

describe('16.15: createTableColumnToggler', () => {
  it('test 1', () => {
    const fn = createTableColumnToggler;
    const res = (() => { const tbl = document.createElement('table'); tbl.innerHTML = '<tr><th>A</th><th>B</th></tr><tr><td>1</td><td>2</td></tr>'; const toggler = createTableColumnToggler(tbl, ['A', 'B']); toggler.querySelector('input').click(); return [tbl.querySelector('th').style.display, tbl.querySelector('td').style.display]; })();
    expect(res).toEqual(["none","none"]);
  });
});
