import { describe, it, expect } from 'vitest';
import { createNotificationBadgeCounter } from '../src/createNotificationBadgeCounter.js';

describe('15.25: createNotificationBadgeCounter', () => {
  it('test 1', () => {
    const fn = createNotificationBadgeCounter;
    const res = (() => { const b = createNotificationBadgeCounter([{ id: 1, isRead: false }, { id: 2, isRead: true }, { id: 3, isRead: false }]); return b.querySelector('.badge').textContent; })();
    expect(res).toEqual("2");
  });
});
