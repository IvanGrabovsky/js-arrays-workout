import { describe, it, expect } from 'vitest';
import { createRankedStarPills } from '../src/createRankedStarPills.js';

describe('15.32: createRankedStarPills', () => {
  it('test 1', () => {
    const fn = createRankedStarPills;
    const res = (() => { let picked = 0; const b = createRankedStarPills(s => picked = s); b.children[0].click(); return picked; })();
    expect(res).toEqual(5);
  });
});
