import { describe, it, expect } from 'vitest';
import { createBadgeAvatarGroup } from '../src/createBadgeAvatarGroup.js';

describe('15.14: createBadgeAvatarGroup', () => {
  it('test 1', () => {
    const fn = createBadgeAvatarGroup;
    const res = (() => { const g = createBadgeAvatarGroup([{ username: 'a' }, { username: 'b' }, { username: 'c' }, { username: 'd' }], 2); return [g.querySelectorAll('img').length, g.querySelector('.avatar-more').textContent]; })();
    expect(res).toEqual([2,"+2"]);
  });
});
