import { describe, it, expect } from 'vitest';
import { createBarChartFromTable } from '../src/createBarChartFromTable.js';

describe('16.30: createBarChartFromTable', () => {
  it('test 1', () => {
    const fn = createBarChartFromTable;
    const res = (() => { const c = createBarChartFromTable([{ label: 'A', value: 50 }, { label: 'B', value: 100 }], 100); return [c.children.length, c.querySelectorAll('.bar')[0].style.height, c.querySelectorAll('.bar')[1].style.height]; })();
    expect(res).toEqual([2,"50%","100%"]);
  });
});
