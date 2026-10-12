/**
 * МОДУЛЬ 3: filter — Фільтрація та селекція елементів
 * ==================================================
 */

/**
 * ЗАВДАННЯ 3.1: Власна реалізація myFilter (Кастомний поліфіл)
 * 
 * 🎯 Суть завдання:
 * Реалізувати функцію `myFilter`, яка створює новий масив з усіма елементами, що пройшли перевірку предикатом.
 *
 * 📋 Вимоги:
 * - НЕ використовувати нативний метод `array.filter`!
 * - Додавати елемент у вихідний масив тільки якщо `predicate(element, index, array) === true` (або повертає truthy значення).
 * - Якщо жоден елемент не підходить — повертати порожній масив `[]`.
 * - Оригінальний масив не змінювати.
 *
 * 💡 Приклад:
 * myFilter([1, 2, 3, 4, 5], (n) => n % 2 === 0); // => [2, 4]
 */
export function myFilter(array, predicate) {
  // TODO: Напиши свій розв'язок
  return [];
}

/**
 * ЗАВДАННЯ 3.2: filterActiveDiscounts — Фільтр діючих промокодів
 * 
 * 🎯 Суть завдання:
 * Відфільтрувати список промокодів інтернет-магазину за актуальністю та мінімальним відсотком знижки.
 *
 * 📋 Вимоги:
 * - Приймає: `coupons` (масив { code, discountPercent, expiresAt, isActive }), `minDiscount` (число, за замовчуванням 10), `currentDate` (Date об'єкт або рядок ISO, за замовчуванням поточний час).
 * - Купон є дійсним, якщо:
 *   1. `coupon.isActive === true`
 *   2. `coupon.discountPercent >= minDiscount`
 *   3. Дата закінчення дії `new Date(coupon.expiresAt)` суворо більша за `currentDate`.
 * - Повернути масив валідних купонів.
 *
 * 💡 Приклад:
 * const coupons = [
 *   { code: 'SAVE20', discountPercent: 20, expiresAt: '2026-12-31', isActive: true },
 *   { code: 'EXPIRED', discountPercent: 50, expiresAt: '2020-01-01', isActive: true },
 *   { code: 'TINY5', discountPercent: 5, expiresAt: '2026-12-31', isActive: true }
 * ];
 * filterActiveDiscounts(coupons, 15, new Date('2026-06-01'))
 * // => [{ code: 'SAVE20', ... }]
 */
export function filterActiveDiscounts(coupons, minDiscount = 10, currentDate = new Date()) {
  // TODO: Напиши свій розв'язок
  return [];
}

/**
 * ЗАВДАННЯ 3.3: sanitizeComments — Модерація коментарів від спаму та образ
 * 
 * 🎯 Суть завдання:
 * Залишити в публікації тільки коректні коментарі, видаливши ті, що містять заборонені слова або є явним спамом.
 *
 * 📋 Вимоги:
 * - Приймає: `comments` (масив об'єктів { id, author, text, reportsCount }), `bannedWords` (масив слів у нижньому регістрі).
 * - Відфільтрувати (видалити) коментар, якщо:
 *   1. Кількість скарг `reportsCount >= 3`.
 *   2. Або текст коментаря містить хоча б одне слово зі списку `bannedWords` (порівняння нечутливе до регістру: case-insensitive).
 *   3. Або текст коментаря після `.trim()` коротший за 3 символи.
 * - Повернути масив схвалених коментарів.
 *
 * 💡 Приклад:
 * sanitizeComments([
 *   { id: 1, text: 'Чудовий урок!', reportsCount: 0 },
 *   { id: 2, text: 'Купуйте криптовалюту тут http://...', reportsCount: 5 },
 *   { id: 3, text: 'ok', reportsCount: 0 }
 * ], ['криптовалют'])
 * // => [{ id: 1, text: 'Чудовий урок!', reportsCount: 0 }]
 */
export function sanitizeComments(comments, bannedWords = []) {
  // TODO: Напиши свій розв'язок
  return [];
}

/**
 * ЗАВДАННЯ 3.4: getAvailableRooms — Бронювання готельних номерів
 * 
 * 🎯 Суть завдання:
 * Знайти всі доступні номери у готелі, які не мають перетину з уже існуючими бронюваннями на запитуваний діапазон дат.
 *
 * 📋 Вимоги:
 * - Приймає: `rooms` (масив об'єктів { id, roomNumber, type, bookings: [{ from: string, to: string }] }),
 *   `targetCheckIn` (рядок 'YYYY-MM-DD'), `targetCheckOut` (рядок 'YYYY-MM-DD').
 * - Перетин дат: бронювання [from, to] перетинається з [targetCheckIn, targetCheckOut], якщо:
 *   `from < targetCheckOut && to > targetCheckIn` (дати у форматі рядків ISO можна безпечно порівнювати лексикографічно або через `new Date()`).
 * - Якщо номер не має ЖОДНОГО перетину з існуючими бронюваннями — він вважається вільним.
 * - Повернути масив вільних номерів.
 *
 * 💡 Приклад:
 * const rooms = [
 *   { id: 101, roomNumber: '101', bookings: [{ from: '2026-07-10', to: '2026-07-15' }] },
 *   { id: 102, roomNumber: '102', bookings: [] }
 * ];
 * getAvailableRooms(rooms, '2026-07-16', '2026-07-20')
 * // => [rooms[0], rooms[1]] (обидва вільні)
 */
export function getAvailableRooms(rooms, targetCheckIn, targetCheckOut) {
  // TODO: Напиши свій розв'язок
  return [];
}
