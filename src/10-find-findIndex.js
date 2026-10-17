/**
 * Модуль 10: find та findIndex — Точковий пошук сутності
 * Кастомні поліфіли myFind / myFindIndex, детекція аномалій безпеки в логах, вибір місця в літаку.
 */

/**
 * Завдання 10.1: Кастомні поліфіли myFind та myFindIndex
 * Реалізувати дві функції пошуку: myFind повертає перший знайдений елемент (або undefined), myFindIndex повертає його індекс (або -1).
 * - Повернути обʼєкт { item, index }.
 */
export function myFindAndFindIndex(array, predicate) {
  // TODO: напишіть вашу реалізацію тут
  return { item: undefined, index: -1 };
}

/**
 * Завдання 10.2: Виявлення першої критичної аномалії в логах
 * Знайти в масиві логів сервера перший запис із рівнем level === "CRITICAL" або кодом помилки statusCode >= 500. Повернути { foundLog, logIndex } або null.
 * - Якщо аномалій немає, повернути null.
 */
export function detectSecurityAnomaly(logs) {
  // TODO: напишіть вашу реалізацію тут
  return null;
}

/**
 * Завдання 10.3: Вибір першого підходящого місця в літаку
 * Знайти перше вільне місце (isOccupied === false), яке відповідає вподобанню preferWindow (isWindow === preferWindow) та не знаходиться в аварійному ряду (isEmergencyRow === false).
 * - Повернути знайдений обʼєкт місця або null.
 */
export function selectFirstAvailableSeat(seats, preferWindow) {
  // TODO: напишіть вашу реалізацію тут
  return null;
}

