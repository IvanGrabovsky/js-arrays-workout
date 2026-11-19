import { describe, it, expect } from 'vitest';
import { createComparisonTable } from '../src/createComparisonTable.js';

describe('16.20: createComparisonTable', () => {
  it('test 1', () => {
    const fn = createComparisonTable;
    const res = (() => { const t = createComparisonTable(['Basic', 'Pro'], [{ name: 'Швидкість', basic: '100 Mbps', pro: '1 Gbps' }]); return [t.querySelectorAll('th').length, t.querySelectorAll('tbody td')[1].textContent]; })();
    expect(res).toEqual([3,"100 Mbps"]);
  });
});
