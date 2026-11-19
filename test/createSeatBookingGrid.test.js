import { describe, it, expect } from 'vitest';
import { createSeatBookingGrid } from '../src/createSeatBookingGrid.js';

describe('16.6: createSeatBookingGrid', () => {
  it('test 1', () => {
    const fn = createSeatBookingGrid;
    const res = (() => { let clicked = null; const g = createSeatBookingGrid(2, 2, [[0, 0]], (r, c) => clicked = [r, c]); const seats = g.querySelectorAll('.seat'); seats[1].click(); return [seats[0].classList.contains('occupied'), seats[1].classList.contains('selected'), clicked]; })();
    expect(res).toEqual([true,true,[0,1]]);
  });
});
