import { describe, it, expect } from 'vitest';
import { createEditableTableCell } from '../src/createEditableTableCell.js';

describe('16.12: createEditableTableCell', () => {
  it('test 1', () => {
    const fn = createEditableTableCell;
    const res = (() => { let saved = null; const td = createEditableTableCell('Початковий', v => saved = v); td.dispatchEvent(new Event('dblclick')); const inp = td.querySelector('input'); inp.value = 'Оновлений'; inp.dispatchEvent(new Event('blur')); return [td.textContent, saved]; })();
    expect(res).toEqual(["Оновлений","Оновлений"]);
  });
});
