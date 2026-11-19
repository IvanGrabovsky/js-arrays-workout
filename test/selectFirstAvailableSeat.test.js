import { describe, it, expect } from 'vitest';
import { selectFirstAvailableSeat } from '../src/selectFirstAvailableSeat.js';

describe('10.3: selectFirstAvailableSeat', () => {
  it('test 1', () => {
    const fn = selectFirstAvailableSeat;
    const res = selectFirstAvailableSeat([{ seat: "1A", isOccupied: false, isWindow: true, isEmergencyRow: false }], true);
    expect(res).toEqual({"seat":"1A","isOccupied":false,"isWindow":true,"isEmergencyRow":false});
  });
  it('test 2', () => {
    const fn = selectFirstAvailableSeat;
    const res = selectFirstAvailableSeat([{ seat: "12A", isOccupied: false, isWindow: true, isEmergencyRow: true }], true);
    expect(res).toEqual(null);
  });
});
