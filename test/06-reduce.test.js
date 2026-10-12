import { describe, it, expect } from 'vitest';
import { myReduce, groupByCategory, calculateOrderMetrics, flattenQueryString } from '../src/06-reduce.js';

describe('Модуль 6: reduce — Агрегація, згортання та групування даних', () => {
  describe('6.1: myReduce', () => {
    it('працює з переданим initialValue', () => {
      const sum = myReduce([1, 2, 3, 4], (acc, x) => acc + x, 10);
      expect(sum).toBe(20);
    });

    it('працює без initialValue, беручи перший елемент масиву', () => {
      const mult = myReduce([2, 3, 4], (acc, x) => acc * x);
      expect(mult).toBe(24);
    });

    it('викидає TypeError, якщо масив порожній і немає initialValue', () => {
      expect(() => myReduce([], (acc, x) => acc + x)).toThrow(TypeError);
    });
  });

  describe('6.2: groupByCategory', () => {
    it('групує масив обʼєктів за вказаним полем', () => {
      const items = [
        { id: 1, title: 'MacBook', category: 'electronics' },
        { id: 2, title: 'Худі', category: 'clothes' },
        { id: 3, title: 'iPad', category: 'electronics' },
        { id: 4, title: 'Невідоме' } // uncategorized
      ];

      const grouped = groupByCategory(items, 'category');
      expect(grouped.electronics.length).toBe(2);
      expect(grouped.clothes.length).toBe(1);
      expect(grouped.uncategorized.length).toBe(1);
    });
  });

  describe('6.3: calculateOrderMetrics', () => {
    it('розраховує фінансові метрики лише для завершених замовлень', () => {
      const orders = [
        { id: 1, totalAmount: 1200, status: 'completed', itemsCount: 3 },
        { id: 2, totalAmount: 400, status: 'cancelled', itemsCount: 1 },
        { id: 3, totalAmount: 800, status: 'completed', itemsCount: 2 },
        { id: 4, totalAmount: 500, status: 'pending', itemsCount: 1 }
      ];

      const metrics = calculateOrderMetrics(orders);
      expect(metrics).toEqual({
        totalRevenue: 2000,
        completedCount: 2,
        cancelledCount: 1,
        averageCheck: 1000,
        totalItemsSold: 5
      });
    });
  });

  describe('6.4: flattenQueryString', () => {
    it('збирає URL-рядок та відкидає невалідні параметри', () => {
      const params = [
        { key: 'search', value: 'frontend camp' },
        { key: 'page', value: 2 },
        { key: 'filter', value: null },
        { key: 'category', value: '' }
      ];

      const qs = flattenQueryString(params);
      expect(qs).toBe('?search=frontend%20camp&page=2');
    });

    it('повертає порожній рядок, якщо дійсних параметрів немає', () => {
      expect(flattenQueryString([{ key: 'a', value: null }])).toBe('');
    });
  });
});
