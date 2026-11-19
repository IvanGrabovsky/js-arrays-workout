import { describe, it, expect } from 'vitest';
import { createRemovableTags } from '../src/createRemovableTags.js';

describe('15.3: createRemovableTags', () => {
  it('test 1', () => {
    const fn = createRemovableTags;
    const res = (() => { const c = createRemovableTags(['html', 'css']); const btn = c.querySelector('.remove-btn'); btn.click(); return c.children.length; })();
    expect(res).toEqual(1);
  });
});
