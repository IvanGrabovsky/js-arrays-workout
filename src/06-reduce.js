/**
 * МОДУЛЬ 6: reduce — Агрегація, згортання та трансформація даних
 * =============================================================
 */

/**
 * ЗАВДАННЯ 6.1: Власна реалізація myReduce (Кастомний поліфіл)
 * 
 * 🎯 Суть завдання:
 * Реалізувати функцію `myReduce` без використання вбудованого `array.reduce`.
 *
 * 📋 Вимоги:
 * - Якщо `initialValue` передано:
 *   - Акумулятор починається з `initialValue`, цикл стартує з індексу `0`.
 * - Якщо `initialValue` НЕ передано (`arguments.length < 3` або `initialValue === undefined`):
 *   - Перший елемент масиву стає початковим значенням акумулятора, а цикл стартує з індексу `1`.
 *   - Якщо масив порожній і `initialValue` немає — викинути помилку `TypeError('Reduce of empty array with no initial value')`.
 * - У callback передавати 4 аргументи: `(accumulator, currentValue, index, array)`.
 *
 * 💡 Приклад:
 * myReduce([1, 2, 3, 4], (acc, x) => acc + x, 0); // => 10
 * myReduce(['a', 'b', 'c'], (acc, x) => acc + x); // => 'abc'
 */
export function myReduce(array, callback, initialValue) {
  // TODO: Напиши свій розв'язок
}

/**
 * ЗАВДАННЯ 6.2: groupByCategory — Групування масиву об'єктів за ключем
 * 
 * 🎯 Суть завдання:
 * Перетворити плаский масив товарів або статей у згруповану мапу (об'єкт), де кожна категорія містить масив відповідних елементів.
 *
 * 📋 Вимоги:
 * - Приймає: `items` (масив об'єктів) та рядок `key` (наприклад, 'category').
 * - Якщо в об'єкта немає такого поля або воно порожнє — групувати під категорію `'uncategorized'`.
 * - Використати `reduce`.
 * - Повернути об'єкт: `{ [categoryName]: Item[] }`.
 *
 * 💡 Приклад:
 * groupByCategory([
 *   { title: 'MacBook', category: 'tech' },
 *   { title: 'Футболка', category: 'clothes' },
 *   { title: 'iPhone', category: 'tech' }
 * ], 'category')
 * // => {
 * //   tech: [{ title: 'MacBook', ... }, { title: 'iPhone', ... }],
 * //   clothes: [{ title: 'Футболка', ... }]
 * // }
 */
export function groupByCategory(items, key = 'category') {
  // TODO: Напиши свій розв'язок
  return {};
}

/**
 * ЗАВДАННЯ 6.3: calculateOrderMetrics — Зведена аналітика фінансових замовлень
 * 
 * 🎯 Суть завдання:
 * За один прохід масиву за допомогою `reduce` розрахувати фінансові метрики для бізнес-дашборду.
 *
 * 📋 Вимоги:
 * - Приймає: `orders` (масив { id, totalAmount, status: 'completed'|'cancelled'|'pending', itemsCount }).
 * - Враховувати у фінансовий оборот ТІЛЬКИ замовлення зі статусом `'completed'`.
 * - Повернути об'єкт метрик:
 *   {
 *     totalRevenue: number,      // загальна сума виручки завершених замовлень
 *     completedCount: number,    // кількість успішних замовлень
 *     cancelledCount: number,    // кількість скасованих замовлень
 *     averageCheck: number,      // середній чек (totalRevenue / completedCount, округлений до 2 знаків, або 0 якщо 0 успішних)
 *     totalItemsSold: number     // сумарна кількість проданих товарів у завершених замовленнях
 *   }
 */
export function calculateOrderMetrics(orders) {
  // TODO: Напиши свій розв'язок
  return {
    totalRevenue: 0,
    completedCount: 0,
    cancelledCount: 0,
    averageCheck: 0,
    totalItemsSold: 0
  };
}

/**
 * ЗАВДАННЯ 6.4: flattenQueryString — Генератор параметрів URL-рядка
 * 
 * 🎯 Суть завдання:
 * Зібрати URL-query рядок пошуку з масиву фільтрів за допомогою `reduce`.
 *
 * 📋 Вимоги:
 * - Приймає: `params` (масив пар { key: string, value: any }).
 * - Пропускати параметри, у яких `value` дорівнює `null`, `undefined` або порожньому рядку `""`.
 * - Значення та ключі кодувати через `encodeURIComponent`.
 * - З'єднувати через символ `&`.
 * - Якщо результат непорожній, починати з символу `?`, інакше повернути порожній рядок `""`.
 *
 * 💡 Приклад:
 * flattenQueryString([
 *   { key: 'page', value: 1 },
 *   { key: 'sort', value: 'price desc' },
 *   { key: 'category', value: null }
 * ])
 * // => '?page=1&sort=price%20desc'
 */
export function flattenQueryString(params) {
  // TODO: Напиши свій розв'язок
  return '';
}
