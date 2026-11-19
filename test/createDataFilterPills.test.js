import { describe, it, expect } from 'vitest';
import { createDataFilterPills } from '../src/createDataFilterPills.js';

describe('16.21: createDataFilterPills', () => {
  it('test 1', () => {
    const fn = createDataFilterPills;
    const res = (() => { let sel = null; const f = createDataFilterPills([{ cat: 'A' }, { cat: 'A' }, { cat: 'B' }], 'cat', v => sel = v); f.children[1].click(); return [f.children[0].textContent, sel]; })();
    expect(res).toEqual(["Всі (3)","A"]);
  });
});
