import { describe, it, expect } from 'vitest';
import { createStatusSummaryBadges } from '../src/createStatusSummaryBadges.js';

describe('15.31: createStatusSummaryBadges', () => {
  it('test 1', () => {
    const fn = createStatusSummaryBadges;
    const res = (() => { const b = createStatusSummaryBadges([{ status: 'PENDING' }, { status: 'DONE' }, { status: 'DONE' }]); return b.querySelector('.badge-done').textContent; })();
    expect(res).toEqual("Виконано: 2");
  });
});
