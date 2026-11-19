import { describe, it, expect } from 'vitest';
import { tallyVotes } from '../src/tallyVotes.js';

describe('7.3: tallyVotes', () => {
  it('test 1', () => {
    const fn = tallyVotes;
    const res = tallyVotes(["Олена", "Ігор", "Олена", ""]);
    expect(res).toEqual({"candidateVotes":{"Олена":2,"Ігор":1},"totalValidVotes":3});
  });
  it('test 2', () => {
    const fn = tallyVotes;
    const res = tallyVotes([]);
    expect(res).toEqual({"candidateVotes":{},"totalValidVotes":0});
  });
});
