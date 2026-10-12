/**
 * МОДУЛЬ 4: find та findIndex — Точковий пошук сутності в масиві
 * =============================================================
 */

/**
 * ЗАВДАННЯ 4.1: Власні реалізації myFind та myFindIndex (Кастомні поліфіли)
 * 
 * 🎯 Суть завдання:
 * Реалізувати дві функції без використання вбудованих методів `find` та `findIndex`:
 * 1. `myFind(array, predicate)` — повертає перший знайдений елемент або `undefined`, якщо нічого не знайдено.
 * 2. `myFindIndex(array, predicate)` — повертає числовий індекс першого знайденого елемента або `-1`, якщо елемент відсутній.
 *
 * 📋 Вимоги:
 * - Зупиняти ітерацію циклу (break або return) одразу після першого збігу!
 * - Передавати у predicate: `(element, index, array)`.
 *
 * 💡 Приклад:
 * myFind([10, 20, 30], (x) => x > 15); // => 20
 * myFindIndex([10, 20, 30], (x) => x > 15); // => 1
 */
export function myFind(array, predicate) {
  // TODO: Напиши свій розв'язок
  return undefined;
}

export function myFindIndex(array, predicate) {
  // TODO: Напиши свій розв'язок
  return -1;
}

/**
 * ЗАВДАННЯ 4.2: findSecurityIncident — Пошук критичної аномалії в системних логах
 * 
 * 🎯 Суть завдання:
 * Знайти в масиві серверних запитів перший інцидент інформаційної безпеки, що вимагає негайного реагування чергового інженера.
 *
 * 📋 Вимоги:
 * - Приймає: `serverLogs` (масив об'єктів { timestamp, ip, statusCode, responseTimeMs, endpoint }).
 * - Інцидентом вважається запис, де:
 *   - `statusCode === 500` та час відповіді `responseTimeMs > 2000` (зависання сервера),
 *   - АБО `statusCode === 401` та `endpoint.includes('/admin')` (спроба неавторизованого зламу адмінки),
 *   - АБО `responseTimeMs > 10000` (DoS загроза).
 * - Повернути знайдений об'єкт логу або `null`, якщо жодного інциденту не зафіксовано.
 *
 * 💡 Приклад:
 * findSecurityIncident([
 *   { timestamp: '10:00:00', ip: '1.1.1.1', statusCode: 200, responseTimeMs: 120, endpoint: '/api/feed' },
 *   { timestamp: '10:00:05', ip: '2.2.2.2', statusCode: 401, responseTimeMs: 80, endpoint: '/admin/login' }
 * ])
 * // => { timestamp: '10:00:05', ip: '2.2.2.2', ... }
 */
export function findSecurityIncident(serverLogs) {
  // TODO: Напиши свій розв'язок
  return null;
}

/**
 * ЗАВДАННЯ 4.3: locateFlightSeat — Підбір ідеального місця в літаку
 * 
 * 🎯 Суть завдання:
 * Пасажир бронює квиток на рейс. Знайдіть індекс першого доступного місця, яке точно відповідає його вподобанням.
 *
 * 📋 Вимоги:
 * - Приймає: `seatsMap` (масив об'єктів { seat: '12A', class: 'economy'|'business', isAvailable: boolean, isWindow: boolean, extraLegroom: boolean }),
 *   `preferences` (об'єкт { seatClass: 'economy'|'business', needsWindow: boolean, needsLegroom: boolean }).
 * - Місце підходить, якщо:
 *   1. `isAvailable === true`
 *   2. `class === preferences.seatClass`
 *   3. Якщо `preferences.needsWindow === true`, то `isWindow === true`.
 *   4. Якщо `preferences.needsLegroom === true`, то `extraLegroom === true`.
 * - Повернути об'єкт: `{ seatIndex: number, seatCode: string }` або `{ seatIndex: -1, seatCode: null }`, якщо нічого не підійшло.
 *
 * 💡 Приклад:
 * const seats = [
 *   { seat: '1A', class: 'business', isAvailable: false, isWindow: true, extraLegroom: true },
 *   { seat: '1B', class: 'business', isAvailable: true, isWindow: false, extraLegroom: true },
 *   { seat: '12F', class: 'economy', isAvailable: true, isWindow: true, extraLegroom: false }
 * ];
 * locateFlightSeat(seats, { seatClass: 'economy', needsWindow: true, needsLegroom: false })
 * // => { seatIndex: 2, seatCode: '12F' }
 */
export function locateFlightSeat(seatsMap, preferences) {
  // TODO: Напиши свій розв'язок
  return { seatIndex: -1, seatCode: null };
}
