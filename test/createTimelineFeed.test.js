import { describe, it, expect } from 'vitest';
import { createTimelineFeed } from '../src/createTimelineFeed.js';

describe('15.22: createTimelineFeed', () => {
  it('test 1', () => {
    const fn = createTimelineFeed;
    const res = (() => { const t = createTimelineFeed([{ time: '10:00', title: 'Реєстрація' }]); return t.children[0].querySelector('h4').textContent; })();
    expect(res).toEqual("Реєстрація");
  });
});
