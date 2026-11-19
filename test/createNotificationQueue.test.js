import { describe, it, expect } from 'vitest';
import { createNotificationQueue } from '../src/createNotificationQueue.js';

describe('15.10: createNotificationQueue', () => {
  it('test 1', () => {
    const fn = createNotificationQueue;
    const res = (() => { const q = createNotificationQueue(2); q.enqueue('1'); q.enqueue('2'); q.enqueue('3'); return [q.container.children.length, q.container.firstChild.textContent]; })();
    expect(res).toEqual([2,"2"]);
  });
});
