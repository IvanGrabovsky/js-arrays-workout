import { describe, it, expect } from 'vitest';
import { myFlat, myFlatMap, extractAllHashtags, flattenCategoryTree } from '../src/07-flat-flatMap.js';

describe('Модуль 7: flat та flatMap — Згладжування та робота з деревами', () => {
  describe('7.1: myFlat та myFlatMap', () => {
    it('myFlat згладжує вкладені масиви до вказаної глибини', () => {
      const arr = [1, [2, [3, [4]]]];
      expect(myFlat(arr, 1)).toEqual([1, 2, [3, [4]]]);
      expect(myFlat(arr, 2)).toEqual([1, 2, 3, [4]]);
      expect(myFlat(arr, 3)).toEqual([1, 2, 3, 4]);
    });

    it('myFlatMap трансформує та згладжує на 1 рівень', () => {
      const phrases = ['js logic', 'array workout'];
      const words = myFlatMap(phrases, (p) => p.split(' '));
      expect(words).toEqual(['js', 'logic', 'array', 'workout']);
    });
  });

  describe('7.2: extractAllHashtags', () => {
    it('витягує унікальні теги з тексту та масивів і сортує їх за алфавітом', () => {
      const posts = [
        { id: 1, text: 'Вивчаємо #javascript та #web!', tags: ['frontend', 'coding'] },
        { id: 2, text: 'Сьогодні пишемо свій #JavaScript поліфіл', tags: ['#frontend'] },
        { id: 3, text: 'Просто текст без тегів' }
      ];

      const tags = extractAllHashtags(posts);
      expect(tags).toEqual(['#coding', '#frontend', '#javascript', '#web']);
    });
  });

  describe('7.3: flattenCategoryTree', () => {
    it('перетворює ієрархічне дерево категорій на плаский список з повним шляхом', () => {
      const tree = [
        {
          id: 1,
          name: 'Гаджети',
          subcategories: [
            {
              id: 11,
              name: 'Смартфони',
              subcategories: [{ id: 111, name: 'Apple' }]
            },
            { id: 12, name: 'Планшети' }
          ]
        },
        {
          id: 2,
          name: 'Одяг'
        }
      ];

      const flat = flattenCategoryTree(tree);
      expect(flat).toEqual([
        { id: 1, name: 'Гаджети', path: 'Гаджети' },
        { id: 11, name: 'Смартфони', path: 'Гаджети > Смартфони' },
        { id: 111, name: 'Apple', path: 'Гаджети > Смартфони > Apple' },
        { id: 12, name: 'Планшети', path: 'Гаджети > Планшети' },
        { id: 2, name: 'Одяг', path: 'Одяг' }
      ]);
    });
  });
});
