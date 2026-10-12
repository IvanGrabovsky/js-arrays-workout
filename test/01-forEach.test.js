import { describe, it, expect, vi } from 'vitest';
import { myForEach, notifySubscribers, tallyVotes } from '../src/01-forEach.js';

describe('Модуль 1: forEach — Перебір масиву та побічні ефекти', () => {
  describe('1.1: myForEach', () => {
    it('викликає callback для кожного елемента з (item, index, array)', () => {
      const items = [10, 20, 30];
      const log = [];
      myForEach(items, (item, idx, arr) => {
        log.push(`${idx}:${item}`);
        expect(arr).toBe(items);
      });
      expect(log).toEqual(['0:10', '1:20', '2:30']);
    });

    it('безпечно опрацьовує порожній масив', () => {
      const fn = vi.fn();
      myForEach([], fn);
      expect(fn).not.toHaveBeenCalled();
    });

    it('повертає undefined', () => {
      const res = myForEach([1], () => 123);
      expect(res).toBeUndefined();
    });
  });

  describe('1.2: notifySubscribers', () => {
    it('надсилає сповіщення лише активним підписникам', () => {
      const users = [
        { id: 1, name: 'Олена', isSubscribed: true, email: 'olena@test.com' },
        { id: 2, name: 'Максим', isSubscribed: false, email: 'max@test.com' },
        { id: 3, name: 'Сергій', isSubscribed: true, email: 'serhiy@test.com' }
      ];
      const result = notifySubscribers(users, 'Старт хакатону!');
      expect(result).toEqual([
        { to: 'olena@test.com', text: 'Привіт, Олена! Старт хакатону!' },
        { to: 'serhiy@test.com', text: 'Привіт, Сергій! Старт хакатону!' }
      ]);
    });

    it('повертає порожній масив, якщо немає підписників', () => {
      const users = [{ id: 1, name: 'Іван', isSubscribed: false, email: 'ivan@test.com' }];
      expect(notifySubscribers(users, 'Привіт')).toEqual([]);
    });
  });

  describe('1.3: tallyVotes', () => {
    it('підраховує голоси та ігнорує порожні бюлетені', () => {
      const ballots = ['Анна', 'Богдан', '', 'Анна', null, undefined, 'Богдан', 'Анна'];
      const stats = tallyVotes(ballots);
      expect(stats.candidateVotes).toEqual({
        'Анна': 3,
        'Богдан': 2
      });
      expect(stats.totalValidVotes).toBe(5);
    });

    it('повертає 0 для порожнього масиву', () => {
      expect(tallyVotes([])).toEqual({ candidateVotes: {}, totalValidVotes: 0 });
    });
  });
});
