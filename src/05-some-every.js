/**
 * МОДУЛЬ 5: some та every — Предикатна валідація та перевірка умов
 * ===============================================================
 */

/**
 * ЗАВДАННЯ 5.1: Власні реалізації mySome та myEvery (Кастомні поліфіли)
 * 
 * 🎯 Суть завдання:
 * Реалізувати дві функції без використання нативних `some` та `every`:
 * 1. `mySome(array, predicate)` — повертає `true`, якщо ХОЧА Б ОДИН елемент задовольняє предикат.
 *    - Якщо знайдено — негайно зупиняти цикл (short-circuiting).
 *    - Для порожнього масиву повертає `false`.
 * 2. `myEvery(array, predicate)` — повертає `true`, якщо ВСІ елементи задовольняють предикат.
 *    - Якщо хоча б один не підходить — негайно зупиняти цикл і повертати `false`.
 *    - Для порожнього масиву повертає `true` (вакуумна істина).
 *
 * 💡 Приклад:
 * mySome([1, 2, 3], (x) => x > 2); // => true
 * myEvery([2, 4, 6], (x) => x % 2 === 0); // => true
 */
export function mySome(array, predicate) {
  // TODO: Напиши свій розв'язок
  return false;
}

export function myEvery(array, predicate) {
  // TODO: Напиши свій розв'язок
  return true;
}

/**
 * ЗАВДАННЯ 5.2: validateRegistrationForm — Валідація всієї форми реєстрації
 * 
 * 🎯 Суть завдання:
 * Перевірити, чи всі поля форми введені коректно та відповідають правилам.
 *
 * 📋 Вимоги:
 * - Приймає: `fields` (масив об'єктів { name: string, value: string, required: boolean, minLength?: number, pattern?: RegExp }).
 * - Форма є повністю валідною (`isValid: true`), якщо для КОЖНОГО обов'язкового поля виконуються правила:
 *   1. Якщо `required === true`: значення `value.trim().length > 0`.
 *   2. Якщо вказано `minLength`: довжина `value.length >= minLength`.
 *   3. Якщо вказано `pattern`: регулярний вираз `pattern.test(value) === true`.
 * - Використайте метод `every` для перевірки всіх полів або `some` для пошуку помилки.
 * - Повернути `{ isValid: boolean, invalidFieldNames: string[] }`.
 *
 * 💡 Приклад:
 * validateRegistrationForm([
 *   { name: 'email', value: 'test@io.com', required: true },
 *   { name: 'password', value: '123', required: true, minLength: 6 }
 * ])
 * // => { isValid: false, invalidFieldNames: ['password'] }
 */
export function validateRegistrationForm(fields) {
  // TODO: Напиши свій розв'язок
  return { isValid: false, invalidFieldNames: [] };
}

/**
 * ЗАВДАННЯ 5.3: hasVipAccess — Перевірка корпоративного доступу
 * 
 * 🎯 Суть завдання:
 * Дозволити команді вхід у VIP-зону конференції, якщо серед учасників є хоча б один лідер зі спец-пропуском або списком VIP-ролей.
 *
 * 📋 Вимоги:
 * - Приймає: `teamMembers` (масив { name: string, role: string, badges: string[] }), `vipRoles` (масив рядків, наприклад ['speaker', 'sponsor', 'organizer']).
 * - Доступ дозволено (`hasAccess: true`), якщо ХОЧА Б ОДИН учасник команди:
 *   - Має роль, що входить до `vipRoles`,
 *   - АБО має бейдж `'VIP_PASS'` у своєму масиві `badges`.
 * - Повернути `{ hasAccess: boolean, authorizedBy: string | null }` (ім'я першого знайденого VIP-учасника або null).
 *
 * 💡 Приклад:
 * hasVipAccess([
 *   { name: 'Олексій', role: 'attendee', badges: [] },
 *   { name: 'Дарина', role: 'speaker', badges: ['TALK_LEAD'] }
 * ], ['speaker', 'sponsor'])
 * // => { hasAccess: true, authorizedBy: 'Дарина' }
 */
export function hasVipAccess(teamMembers, vipRoles = ['speaker', 'sponsor']) {
  // TODO: Напиши свій розв'язок
  return { hasAccess: false, authorizedBy: null };
}

/**
 * ЗАВДАННЯ 5.4: canAffordCart — Перевірка кредитного ліміту та балансу покупця
 * 
 * 🎯 Суть завдання:
 * Перевірити, чи зможе покупець оплатити кошик, та чи всі товари є дозволеними до покупки за один раз.
 *
 * 📋 Вимоги:
 * - Приймає: `cartItems` (масив { title, price, quantity, maxPerOrder }), `wallet` (об'єкт { balance: number, creditLimit: number }).
 * - Умови:
 *   1. Для КОЖНОГО товару (`every`): `quantity <= maxPerOrder`.
 *   2. Жоден товар (`!some`): не повинен мати ціну `<= 0`.
 *   3. Загальна сума кошика (price * quantity) не повинна перевищувати сумарну платоспроможність: `balance + creditLimit`.
 * - Повернути `{ canCheckout: boolean, reason: string | null }`:
 *   - Якщо перевищено ліміт кількості: `reason: 'EXCEEDED_QUANTITY_LIMIT'`
 *   - Якщо є товар із некоректною ціною: `reason: 'INVALID_ITEM_PRICE'`
 *   - Якщо бракує коштів: `reason: 'INSUFFICIENT_FUNDS'`
 *   - Якщо все добре: `canCheckout: true, reason: null`.
 */
export function canAffordCart(cartItems, wallet) {
  // TODO: Напиши свій розв'язок
  return { canCheckout: false, reason: null };
}
