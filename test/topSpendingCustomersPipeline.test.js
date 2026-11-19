import { describe, it, expect } from 'vitest';
import { topSpendingCustomersPipeline } from '../src/topSpendingCustomersPipeline.js';

describe('14.1: topSpendingCustomersPipeline', () => {
  it('test 1', () => {
    const fn = topSpendingCustomersPipeline;
    const res = topSpendingCustomersPipeline([{ customerId: "u1", amount: 500, status: "DELIVERED" }, { customerId: "u2", amount: 1200, status: "DELIVERED" }, { customerId: "u1", amount: 300, status: "DELIVERED" }, { customerId: "u3", amount: 4000, status: "CANCELLED" }], 2);
    expect(res).toEqual([{"customerId":"u2","totalSpent":1200},{"customerId":"u1","totalSpent":800}]);
  });
});
