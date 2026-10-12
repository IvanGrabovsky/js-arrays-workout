import { describe, it, expect } from 'vitest';
import { myFilter, filterActiveDiscounts, sanitizeComments, getAvailableRooms } from '../src/03-filter.js';

describe('Модуль 3: filter — Фільтрація та селекція елементів', () => {
  describe('3.1: myFilter', () => {
    it('повертає лише елементи, які задовольняють умову', () => {
      const res = myFilter([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0);
      expect(res).toEqual([2, 4, 6]);
    });

    it('повертає порожній масив, якщо збігів немає', () => {
      const res = myFilter([1, 3, 5], (n) => n > 10);
      expect(res).toEqual([]);
    });
  });

  describe('3.2: filterActiveDiscounts', () => {
    it('фільтрує купони за статусом, мінімальною знижкою та терміном дії', () => {
      const coupons = [
        { code: 'VALID30', discountPercent: 30, expiresAt: '2026-12-31', isActive: true },
        { code: 'INACTIVE', discountPercent: 40, expiresAt: '2026-12-31', isActive: false },
        { code: 'EXPIRED', discountPercent: 50, expiresAt: '2025-01-01', isActive: true },
        { code: 'LOW5', discountPercent: 5, expiresAt: '2026-12-31', isActive: true }
      ];

      const res = filterActiveDiscounts(coupons, 20, new Date('2026-06-01'));
      expect(res).toEqual([coupons[0]]);
    });
  });

  describe('3.3: sanitizeComments', () => {
    it('видаляє спам, скарги та заборонені слова (case-insensitive)', () => {
      const comments = [
        { id: 1, author: 'Іван', text: 'Корисна стаття, дякую!', reportsCount: 0 },
        { id: 2, author: 'Бот', text: 'КУПИТИ КРИПТУ терміново!', reportsCount: 1 },
        { id: 3, author: 'Троль', text: 'Повний відстій', reportsCount: 4 },
        { id: 4, author: 'Анонім', text: '  hi  ', reportsCount: 0 } // trim length 2
      ];

      const res = sanitizeComments(comments, ['крипту', 'казино']);
      expect(res).toEqual([comments[0]]);
    });
  });

  describe('3.4: getAvailableRooms', () => {
    it('знаходить кімнати без перетинів з існуючими бронюваннями', () => {
      const rooms = [
        {
          id: 101,
          roomNumber: '101',
          bookings: [{ from: '2026-07-10', to: '2026-07-15' }]
        },
        {
          id: 102,
          roomNumber: '102',
          bookings: [{ from: '2026-07-20', to: '2026-07-25' }]
        },
        {
          id: 103,
          roomNumber: '103',
          bookings: []
        }
      ];

      // Запит з 12 по 17 липня (перетинається з 101 кімнатою)
      const available = getAvailableRooms(rooms, '2026-07-12', '2026-07-17');
      expect(available.map((r) => r.id)).toEqual([102, 103]);
    });
  });
});
