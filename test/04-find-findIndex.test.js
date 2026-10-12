import { describe, it, expect } from 'vitest';
import { myFind, myFindIndex, findSecurityIncident, locateFlightSeat } from '../src/04-find-findIndex.js';

describe('Модуль 4: find та findIndex — Точковий пошук сутності', () => {
  describe('4.1: myFind та myFindIndex', () => {
    it('myFind повертає перший знайдений елемент або undefined', () => {
      const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
      expect(myFind(items, (x) => x.id === 2)).toEqual({ id: 2 });
      expect(myFind(items, (x) => x.id === 99)).toBeUndefined();
    });

    it('myFindIndex повертає індекс першого збігу або -1', () => {
      const nums = [10, 25, 40];
      expect(myFindIndex(nums, (n) => n > 20)).toBe(1);
      expect(myFindIndex(nums, (n) => n > 100)).toBe(-1);
    });
  });

  describe('4.2: findSecurityIncident', () => {
    it('виявляє першу аномалію безпеки в логах', () => {
      const logs = [
        { timestamp: '12:00', ip: '1.1.1.1', statusCode: 200, responseTimeMs: 50, endpoint: '/home' },
        { timestamp: '12:01', ip: '2.2.2.2', statusCode: 401, responseTimeMs: 40, endpoint: '/admin/settings' },
        { timestamp: '12:02', ip: '3.3.3.3', statusCode: 500, responseTimeMs: 2500, endpoint: '/checkout' }
      ];

      const incident = findSecurityIncident(logs);
      expect(incident?.ip).toBe('2.2.2.2');
    });

    it('повертає null, якщо підозрілих подій немає', () => {
      const logs = [
        { timestamp: '12:00', ip: '1.1.1.1', statusCode: 200, responseTimeMs: 100, endpoint: '/feed' }
      ];
      expect(findSecurityIncident(logs)).toBeNull();
    });
  });

  describe('4.3: locateFlightSeat', () => {
    it('знаходить відповідне місце за критеріями комфорту', () => {
      const seats = [
        { seat: '1A', class: 'business', isAvailable: true, isWindow: true, extraLegroom: true },
        { seat: '12B', class: 'economy', isAvailable: true, isWindow: false, extraLegroom: false },
        { seat: '14F', class: 'economy', isAvailable: true, isWindow: true, extraLegroom: false }
      ];

      const res = locateFlightSeat(seats, {
        seatClass: 'economy',
        needsWindow: true,
        needsLegroom: false
      });

      expect(res).toEqual({ seatIndex: 2, seatCode: '14F' });
    });

    it('повертає -1 та null, якщо жодне місце не підійшло', () => {
      const seats = [{ seat: '20C', class: 'economy', isAvailable: false, isWindow: false, extraLegroom: false }];
      expect(locateFlightSeat(seats, { seatClass: 'business', needsWindow: true, needsLegroom: true })).toEqual({
        seatIndex: -1,
        seatCode: null
      });
    });
  });
});
