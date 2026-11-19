import { describe, it, expect } from 'vitest';
import { createRankedLeaderboard } from '../src/createRankedLeaderboard.js';

describe('15.21: createRankedLeaderboard', () => {
  it('test 1', () => {
    const fn = createRankedLeaderboard;
    const res = (() => { const lb = createRankedLeaderboard([{ name: 'Богдан', score: 90 }, { name: 'Анна', score: 100 }, { name: 'Ігор', score: 80 }]); return lb.children[0].querySelector('.player-name').textContent; })();
    expect(res).toEqual("Анна");
  });
});
