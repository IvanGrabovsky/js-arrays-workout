import { describe, it, expect } from 'vitest';
import { createTagCloud } from '../src/createTagCloud.js';

describe('15.2: createTagCloud', () => {
  it('test 1', () => {
    const fn = createTagCloud;
    const res = (() => { const tc = createTagCloud(['javascript', 'react']); return [tc.className, tc.children[0].textContent, tc.children[1].textContent]; })();
    expect(res).toEqual(["tag-cloud","#javascript","#react"]);
  });
});
