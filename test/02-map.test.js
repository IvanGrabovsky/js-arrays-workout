import { describe, it, expect } from 'vitest';
import { myMap, formatProductCards, anonymizeUsers, normalizeGeoCoordinates } from '../src/02-map.js';

describe('Модуль 2: map — Трансформація та проекції даних', () => {
  describe('2.1: myMap', () => {
    it('трансформує кожен елемент масиву', () => {
      const res = myMap([1, 2, 3], (x) => x * 10);
      expect(res).toEqual([10, 20, 30]);
    });

    it('передає аргументи (item, index, array)', () => {
      const arr = ['a', 'b'];
      const res = myMap(arr, (val, idx) => `${val}-${idx}`);
      expect(res).toEqual(['a-0', 'b-1']);
    });

    it('не мутує вхідний масив', () => {
      const arr = [5, 6];
      myMap(arr, (x) => x + 1);
      expect(arr).toEqual([5, 6]);
    });
  });

  describe('2.2: formatProductCards', () => {
    it('перераховує ціну з USD у UAH з ПДВ і форматує картку', () => {
      const products = [
        { id: 101, name: 'Ноутбук', priceUsd: 1000, inStock: true },
        { id: 102, name: 'Кабель Type-C', priceUsd: 5.5, inStock: false }
      ];
      const cards = formatProductCards(products, 40, 20);

      expect(cards[0]).toEqual({
        id: 101,
        title: 'Ноутбук',
        priceFormatted: '48000 ₴',
        priceUah: 48000,
        badge: 'В наявності'
      });

      // 5.5 * 40 * 1.2 = 264
      expect(cards[1]).toEqual({
        id: 102,
        title: 'Кабель Type-C',
        priceFormatted: '264 ₴',
        priceUah: 264,
        badge: 'Очікується'
      });
    });
  });

  describe('2.3: anonymizeUsers', () => {
    it('маскує email, телефон та імʼя за правилами GDPR', () => {
      const users = [
        { id: 1, fullName: 'Тарас Шевченко', email: 'taras@kobzar.ua', phone: '+380501234567' },
        { id: 2, fullName: 'Леся Українка', email: 'lesya@lit.org', phone: '+380679876543' }
      ];
      const result = anonymizeUsers(users);

      expect(result[0]).toEqual({
        id: 1,
        maskedName: 'Тарас Ш.',
        email: 't***@kobzar.ua',
        phone: '+380******67'
      });

      expect(result[1]).toEqual({
        id: 2,
        maskedName: 'Леся У.',
        email: 'l***@lit.org',
        phone: '+380******43'
      });
    });
  });

  describe('2.4: normalizeGeoCoordinates', () => {
    it('нормалізує координати з різних форматів та валідує їх', () => {
      const input = [
        [50.4501, 30.5234],
        '49.8397, 24.0297',
        { lat: 46.4825, lng: 30.7233 },
        { latitude: 48.9226, longitude: 24.7111 },
        { lat: 105.0, lng: 20.0 }, // invalid lat > 90
        'invalid,coord'
      ];

      const res = normalizeGeoCoordinates(input);

      expect(res[0]).toEqual({ lat: 50.4501, lng: 30.5234, isValid: true });
      expect(res[1]).toEqual({ lat: 49.8397, lng: 24.0297, isValid: true });
      expect(res[2]).toEqual({ lat: 46.4825, lng: 30.7233, isValid: true });
      expect(res[3]).toEqual({ lat: 48.9226, lng: 24.7111, isValid: true });
      expect(res[4].isValid).toBe(false);
      expect(res[5].isValid).toBe(false);
    });
  });
});
