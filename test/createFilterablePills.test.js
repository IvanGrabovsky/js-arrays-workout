import { describe, it, expect } from 'vitest';
import { createFilterablePills } from '../src/createFilterablePills.js';

describe('15.5: createFilterablePills', () => {
  it('test 1', () => {
    const fn = createFilterablePills;
    const res = (() => { let sel = ''; const bar = createFilterablePills(['Всі', 'Активні'], cat => sel = cat); bar.children[1].click(); return { activeIdx: bar.children[1].classList.contains('active'), sel }; })();
    expect(res).toEqual({"activeIdx":true,"sel":"Активні"});
  });
});
