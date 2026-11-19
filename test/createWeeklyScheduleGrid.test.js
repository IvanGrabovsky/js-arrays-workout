import { describe, it, expect } from 'vitest';
import { createWeeklyScheduleGrid } from '../src/createWeeklyScheduleGrid.js';

describe('16.32: createWeeklyScheduleGrid', () => {
  it('test 1', () => {
    const fn = createWeeklyScheduleGrid;
    const res = (() => { const s = createWeeklyScheduleGrid(['Пн', 'Вт'], [{ day: 'Пн', time: '12:00', title: 'Обід' }]); return [s.children.length, s.querySelector('.event-card').textContent]; })();
    expect(res).toEqual([2,"12:00 Обід"]);
  });
});
