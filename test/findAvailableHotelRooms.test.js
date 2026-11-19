import { describe, it, expect } from 'vitest';
import { findAvailableHotelRooms } from '../src/findAvailableHotelRooms.js';

describe('9.4: findAvailableHotelRooms', () => {
  it('test 1', () => {
    const fn = findAvailableHotelRooms;
    const res = findAvailableHotelRooms([{ id: 101, capacity: 2, pricePerNight: 1200, isAvailable: true }, { id: 102, capacity: 4, pricePerNight: 3500, isAvailable: true }], 2, 2000);
    expect(res).toEqual([{"id":101,"capacity":2,"pricePerNight":1200,"isAvailable":true}]);
  });
});
