/**
 * Модуль 11: some та every — Предикатна валідація
 * Кастомні поліфіли mySome / myEvery, валідація полів форми, перевірка бюджету кошика, VIP статус.
 */

/**
 * Завдання 11.1: Власні поліфіли mySome та myEvery
 * Реалізувати кастомні версії методів some (хоча б один задовольняє) та every (усі задовольняють) без використання вбудованих методів.
 * - Повернути { someResult, everyResult }.
 */
export function mySomeAndEvery(array, predicate) {
  // TODO: напишіть вашу реалізацію тут
  return { someResult: false, everyResult: false };
}

/**
 * Завдання 11.2: Валідація обовʼязкових полів форми
 * Перевірити масив полів форми: isValidForm = every(поле валідне), hasErrors = some(поле містить помилку).
 * - Повернути { isValidForm, hasErrors }.
 */
export function validateFormFields(fields) {
  // TODO: напишіть вашу реалізацію тут
  return { isValidForm: false, hasErrors: true };
}

/**
 * Завдання 11.3: Перевірка платоспроможності кошика покупок
 * Визначити: canAffordAll (чи вистачає budget на кожен товар окремо) та hasLuxuryItem (чи є хоча б один товар дорожчий за luxuryThreshold).
 * - canAffordAll = items.every(i => i.price <= budget); hasLuxuryItem = items.some(i => i.price >= luxuryThreshold);
 */
export function checkCartAffordability(items, budget, luxuryThreshold) {
  // TODO: напишіть вашу реалізацію тут
  return { canAffordAll: false, hasLuxuryItem: false };
}

/**
 * Завдання 11.4: Перевірка статусу VIP у команді
 * Повернути true, якщо всі члени команди мають статус isVip === true або хоча б капітан команди isCaptain має VIP-статус.
 * - Використати every та find/some.
 */
export function verifyTeamVipStatus(team) {
  // TODO: напишіть вашу реалізацію тут
  return false;
}

