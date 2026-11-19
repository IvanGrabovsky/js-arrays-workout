import { describe, it, expect } from 'vitest';
import { createCalendarMonthGrid } from '../src/createCalendarMonthGrid.js';

describe('16.17: createCalendarMonthGrid', () => {
  it('test 1', () => {
    const fn = createCalendarMonthGrid;
    const res = (() => { const cal = createCalendarMonthGrid(2026, 0, 15); return [cal.querySelector('.cal-day.active').textContent, cal.querySelectorAll('.cal-day:not(.empty)').length]; })();
    expect(res).toEqual(["15",31]);
  });
});
