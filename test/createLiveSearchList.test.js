import { describe, it, expect } from 'vitest';
import { createLiveSearchList } from '../src/createLiveSearchList.js';

describe('15.18: createLiveSearchList', () => {
  it('test 1', () => {
    const fn = createLiveSearchList;
    const res = (() => { const s = createLiveSearchList(['Київ', 'Харків', 'Одеса']); const res = s.filter('хар'); return res; })();
    expect(res).toEqual(1);
  });
});
