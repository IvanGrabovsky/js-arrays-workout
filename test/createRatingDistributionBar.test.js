import { describe, it, expect } from 'vitest';
import { createRatingDistributionBar } from '../src/createRatingDistributionBar.js';

describe('15.9: createRatingDistributionBar', () => {
  it('test 1', () => {
    const fn = createRatingDistributionBar;
    const res = (() => { const r = createRatingDistributionBar([0, 0, 0, 20, 80]); return r.children[4].querySelector('.pct-label').textContent; })();
    expect(res).toEqual("80%");
  });
});
