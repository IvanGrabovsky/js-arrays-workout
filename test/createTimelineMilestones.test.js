import { describe, it, expect } from 'vitest';
import { createTimelineMilestones } from '../src/createTimelineMilestones.js';

describe('16.25: createTimelineMilestones', () => {
  it('test 1', () => {
    const fn = createTimelineMilestones;
    const res = (() => { const tl = createTimelineMilestones([{ date: '2026-05', title: 'Реліз', done: true }]); return [tl.children.length, tl.children[0].classList.contains('completed')]; })();
    expect(res).toEqual([1,true]);
  });
});
