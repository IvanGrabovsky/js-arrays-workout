import { describe, it, expect } from 'vitest';
import { createAudioPlaylistWidget } from '../src/createAudioPlaylistWidget.js';

describe('15.19: createAudioPlaylistWidget', () => {
  it('test 1', () => {
    const fn = createAudioPlaylistWidget;
    const res = (() => { const pl = createAudioPlaylistWidget([{ id: 1, title: 'T1', duration: '3:00' }, { id: 2, title: 'T2', duration: '2:30' }]); const nextTrack = pl.next(); return nextTrack.id; })();
    expect(res).toEqual(2);
  });
});
