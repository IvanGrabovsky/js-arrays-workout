import { describe, it, expect } from 'vitest';
import { getTopSpendersAnalytics, generateMusicPlaylist, optimizeInventoryLoot } from '../src/08-boss-pipelines.js';

describe('Модуль 8: Boss Challenges — Комплексні пайплайни методів масивів', () => {
  describe('8.1: getTopSpendersAnalytics', () => {
    it('агрегує успішні транзакції та повертає топ-покупців за спаданням', () => {
      const txs = [
        { id: 't1', userId: 'u1', userName: 'Тарас', amount: 500, status: 'approved' },
        { id: 't2', userId: 'u2', userName: 'Оксана', amount: 1200, status: 'approved' },
        { id: 't3', userId: 'u1', userName: 'Тарас', amount: 800, status: 'approved' },
        { id: 't4', userId: 'u3', userName: 'Дмитро', amount: 3000, status: 'declined' },
        { id: 't5', userId: 'u4', userName: 'Юлія', amount: 1500, status: 'approved' }
      ];

      const top = getTopSpendersAnalytics(txs, 2);
      expect(top).toEqual([
        { userId: 'u4', userName: 'Юлія', totalSpent: 1500, transactionsCount: 1 },
        { userId: 'u1', userName: 'Тарас', totalSpent: 1300, transactionsCount: 2 }
      ]);
    });
  });

  describe('8.2: generateMusicPlaylist', () => {
    it('формує плейлист під настрій з найвищим рейтингом у межах тривалості', () => {
      const library = [
        { id: 1, title: 'Relax Wave', artist: 'Lofi Guy', mood: 'chill', durationSec: 180, rating: 4.8, isExplicit: false },
        { id: 2, title: 'Chill Beats', artist: 'Sunny', mood: 'chill', durationSec: 200, rating: 4.9, isExplicit: true },
        { id: 3, title: 'Night Walk', artist: 'Luna', mood: 'chill', durationSec: 120, rating: 4.7, isExplicit: false },
        { id: 4, title: 'Rock Storm', artist: 'Band X', mood: 'rock', durationSec: 240, rating: 5.0, isExplicit: false }
      ];

      // Ліміт 350 сек, без explicit (трек 2 випадає, трек 1 (180с) + трек 3 (120с) = 300с <= 350с)
      const res = generateMusicPlaylist(library, {
        mood: 'chill',
        maxDurationSec: 350,
        allowExplicit: false
      });

      expect(res.tracksCount).toBe(2);
      expect(res.totalDurationSec).toBe(300);
      expect(res.playlist.map((t) => t.title)).toEqual(['Relax Wave', 'Night Walk']);
      expect(res.playlist[0].durationFormatted).toBe('03:00');
    });
  });

  describe('8.3: optimizeInventoryLoot', () => {
    it('пакує рюкзак найціннішим лутом відповідно до ваги та рівня героя', () => {
      const items = [
        { name: 'Легендарний меч', minLevel: 10, weight: 15, value: 500 }, // рівень завеликий
        { name: 'Діамант', minLevel: 1, weight: 1, value: 100 },          // efficiency = 100
        { name: 'Золотий кубок', minLevel: 1, weight: 4, value: 200 },     // efficiency = 50
        { name: 'Залізна броня', minLevel: 1, weight: 12, value: 120 },    // efficiency = 10
        { name: 'Стародавня книга', minLevel: 2, weight: 2, value: 80 }    // efficiency = 40
      ];

      const hero = { level: 3, maxWeight: 8 };

      // Доступні для рівня 3:
      // Діамант (w=1, v=100) -> залишок ваги 7
      // Золотий кубок (w=4, v=200) -> залишок ваги 3
      // Стародавня книга (w=2, v=80) -> залишок ваги 1
      // Залізна броня не влізе (w=12 > 1)
      const res = optimizeInventoryLoot(items, hero);

      expect(res.backpackItems).toEqual(['Діамант', 'Золотий кубок', 'Стародавня книга']);
      expect(res.totalGold).toBe(380);
      expect(res.totalWeight).toBe(7);
      expect(res.freeCapacity).toBe(1);
    });
  });
});
