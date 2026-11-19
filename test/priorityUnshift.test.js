import { describe, it, expect } from 'vitest';
import { priorityUnshift } from '../src/priorityUnshift.js';

describe('4.3: priorityUnshift', () => {
  it('test 1', () => {
    const fn = priorityUnshift;
    const res = priorityUnshift(["User1", "User2"], ["VIP_A", "VIP_B"]);
    expect(res).toEqual(["VIP_A","VIP_B","User1","User2"]);
  });
  it('test 2', () => {
    const fn = priorityUnshift;
    const res = priorityUnshift(["User1"], []);
    expect(res).toEqual(["User1"]);
  });
});
