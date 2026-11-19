import { describe, it, expect } from 'vitest';
import { computeOrderMetrics } from '../src/computeOrderMetrics.js';

describe('12.4: computeOrderMetrics', () => {
  it('test 1', () => {
    const fn = computeOrderMetrics;
    const res = computeOrderMetrics([{ total: 100, status: "COMPLETED" }, { total: 200, status: "COMPLETED" }, { total: 50, status: "CANCELLED" }]);
    expect(res).toEqual({"totalRevenue":300,"completedCount":2,"averageCheck":150});
  });
  it('test 2', () => {
    const fn = computeOrderMetrics;
    const res = computeOrderMetrics([]);
    expect(res).toEqual({"totalRevenue":0,"completedCount":0,"averageCheck":0});
  });
});
