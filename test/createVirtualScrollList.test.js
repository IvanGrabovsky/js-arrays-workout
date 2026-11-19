import { describe, it, expect } from 'vitest';
import { createVirtualScrollList } from '../src/createVirtualScrollList.js';

describe('16.27: createVirtualScrollList', () => {
  it('test 1', () => {
    const fn = createVirtualScrollList;
    const res = (() => { const v = createVirtualScrollList(['A', 'B', 'C', 'D', 'E'], 2, 2); return [v.children.length, v.children[0].textContent]; })();
    expect(res).toEqual([2,"#2: C"]);
  });
});
