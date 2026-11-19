import { describe, it, expect } from 'vitest';
import { createInteractiveSeatingChart } from '../src/createInteractiveSeatingChart.js';

describe('16.31: createInteractiveSeatingChart', () => {
  it('test 1', () => {
    const fn = createInteractiveSeatingChart;
    const res = (() => { let sel = null; const h = createInteractiveSeatingChart([{ id: 'V1', tier: 'vip', price: 400 }], s => sel = s); h.children[0].click(); return [sel.id, h.children[0].classList.contains('seat-vip')]; })();
    expect(res).toEqual(["V1",true]);
  });
});
