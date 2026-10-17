/**
 * Модуль 12: reduce — Агрегація та згортання даних
 * Кастомний поліфіл myReduce, групування покупок за категоріями, генератор рядків URL query, фінансові метрики.
 */

/**
 * Завдання 12.1: Власна реалізація reduce (Кастомний поліфіл)
 * Згорнути масив в акумулятор за допомогою callback(acc, item, index, array) без Array.prototype.reduce.
 * - Підтримувати передане initialValue. Якщо initialValue не задано, першим акумулятором стає array[0], а ітерація починається з індексу 1.
 */
export function myReduce(array, callback, initialValue) {
  // TODO: напишіть вашу реалізацію тут
  return initialValue;
}

/**
 * Завдання 12.2: Групування покупок за категоріями через reduce
 * Згрупувати масив транзакцій за назвою категорії: { [category]: totalSpent } та повернути обʼєкт агрегації.
 * - Підсумувати суми amount для кожної категорії.
 */
export function groupPurchasesByCategory(transactions) {
  // TODO: напишіть вашу реалізацію тут
  return {};
}

/**
 * Завдання 12.3: Генератор рядка URL query-параметрів
 * Перетворити масив параметрів [{ key, value }] на рядок запиту URL виду "key1=val1&key2=val2" за допомогою reduce.
 * - Для порожнього масиву повернути "".
 */
export function generateQueryString(params) {
  // TODO: напишіть вашу реалізацію тут
  return "";
}

/**
 * Завдання 12.4: Обчислення фінансових метрик замовлень
 * Обчислити за один прохід reduce: загальну суму виручки totalRevenue, кількість успішних замовлень completedCount та середній чек averageCheck.
 * - Враховувати лише замовлення зі статусом status === "COMPLETED".
 */
export function computeOrderMetrics(orders) {
  // TODO: напишіть вашу реалізацію тут
  return { totalRevenue: 0, completedCount: 0, averageCheck: 0 };
}

