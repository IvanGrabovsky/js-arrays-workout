import { describe, it, expect } from 'vitest';
import { queuePushShift } from '../src/queuePushShift.js';

describe('4.2: queuePushShift', () => {
  it('test 1', () => {
    const fn = queuePushShift;
    const res = queuePushShift(["Клієнт_1", "Клієнт_2", "Клієнт_3"]);
    expect(res).toEqual(["Клієнт_1","Клієнт_2","Клієнт_3"]);
  });
  it('test 2', () => {
    const fn = queuePushShift;
    const res = queuePushShift([]);
    expect(res).toEqual([]);
  });
});
