import { describe, it, expect } from 'vitest';
import { smartPlaylistGenerator } from '../src/smartPlaylistGenerator.js';

describe('14.2: smartPlaylistGenerator', () => {
  it('test 1', () => {
    const fn = smartPlaylistGenerator;
    const res = smartPlaylistGenerator([{ title: "Track A", genre: "rock", rating: 5, durationSec: 180 }, { title: "Track B", genre: "rock", rating: 4, durationSec: 240 }, { title: "Track C", genre: "pop", rating: 5, durationSec: 200 }], "rock", 4, 300);
    expect(res).toEqual([{"title":"Track B","genre":"rock","rating":4,"durationSec":240}]);
  });
});
