import { describe, it, expect } from 'vitest';
import { createSegmentedControl } from '../src/createSegmentedControl.js';

describe('15.17: createSegmentedControl', () => {
  it('test 1', () => {
    const fn = createSegmentedControl;
    const res = (() => { let val = ''; const c = createSegmentedControl(['День', 'Тиждень', 'Місяць'], 0, v => val = v); c.children[1].click(); return { activeText: c.children[1].textContent, val }; })();
    expect(res).toEqual({"activeText":"Тиждень","val":"Тиждень"});
  });
});
