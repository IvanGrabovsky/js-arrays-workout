/**
 * Модуль 9: filter — Фільтрація та селекція
 * Кастомний поліфіл myFilter, валідація промокодів, модерація коментарів від спаму, вільні номери готелю.
 */

/**
 * Завдання 9.1: Власна реалізація filter (Кастомний поліфіл)
 * Реалізувати фільтрацію масиву без використання Array.prototype.filter.
 * - Повернути новий масив, що містить тільки ті елементи, для яких callback повернув truthy значення.
 */
export function myFilter(array, callback) {
  // TODO: напишіть вашу реалізацію тут
  return [];
}

/**
 * Завдання 9.2: Фільтр валідних промокодів акції
 * Відфільтрувати промокоди, які дійсні на дату currentIsoDate (currentIsoDate <= expiryDate), активні (isActive === true) та знижка discountPercent >= minDiscount.
 * - Повернути масив валідних обʼєктів промокодів.
 */
export function filterValidPromoCodes(promos, currentIsoDate, minDiscount) {
  // TODO: напишіть вашу реалізацію тут
  return [];
}

/**
 * Завдання 9.3: Модерація коментарів та фільтрація спаму
 * Відфільтрувати коментарі: виключити ті, які позначені як isSpam, мають рейтинг rating < 1 або містять заборонені слова зі списку stopWords.
 * - Повернути масив схвалених коментарів.
 */
export function moderateComments(comments, stopWords) {
  // TODO: напишіть вашу реалізацію тут
  return [];
}

/**
 * Завдання 9.4: Пошук вільних номерів готелю
 * Відфільтрувати номери, які вміщують щонайменше guestsCount гостей, мають ціну за ніч <= maxPrice та мають статус isAvailable === true.
 * - Повернути масив доступних номерів.
 */
export function findAvailableHotelRooms(rooms, guestsCount, maxPrice) {
  // TODO: напишіть вашу реалізацію тут
  return [];
}

