import { describe, it, expect } from 'vitest';
import { createMultiSelectCheckboxes } from '../src/createMultiSelectCheckboxes.js';

describe('15.11: createMultiSelectCheckboxes', () => {
  it('test 1', () => {
    const fn = createMultiSelectCheckboxes;
    const res = (() => { const g = createMultiSelectCheckboxes(['js', 'ts']); g.container.querySelectorAll('input')[0].checked = true; return g.getSelected(); })();
    expect(res).toEqual(["js"]);
  });
});
