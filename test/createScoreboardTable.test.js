import { describe, it, expect } from 'vitest';
import { createScoreboardTable } from '../src/createScoreboardTable.js';

describe('16.18: createScoreboardTable', () => {
  it('test 1', () => {
    const fn = createScoreboardTable;
    const res = (() => { const t = createScoreboardTable([{ name: 'Богдан', points: 50 }, { name: 'Анна', points: 120 }, { name: 'Сергій', points: 90 }]); return [t.querySelectorAll('tr')[0].querySelector('.rank').textContent, t.querySelectorAll('tr')[0].querySelector('.name').textContent]; })();
    expect(res).toEqual(["🥇","Анна"]);
  });
});
