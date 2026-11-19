import { describe, it, expect } from 'vitest';
import { verifyTeamVipStatus } from '../src/verifyTeamVipStatus.js';

describe('11.4: verifyTeamVipStatus', () => {
  it('test 1', () => {
    const fn = verifyTeamVipStatus;
    const res = verifyTeamVipStatus([{ name: "A", isCaptain: true, isVip: true }, { name: "B", isCaptain: false, isVip: false }]);
    expect(res).toEqual(true);
  });
  it('test 2', () => {
    const fn = verifyTeamVipStatus;
    const res = verifyTeamVipStatus([{ name: "A", isCaptain: true, isVip: false }, { name: "B", isCaptain: false, isVip: false }]);
    expect(res).toEqual(false);
  });
});
