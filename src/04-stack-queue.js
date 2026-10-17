/**
 * Модуль 4: Операції стек та черга (push, pop, shift, unshift, includes, indexOf)
 * Додавання в кінець (push) та на початок (unshift), вилучення (pop, shift), перевірка наявності (includes, indexOf, lastIndexOf).
 */

/**
 * Завдання 4.1: Моделювання стека (LIFO) через push та pop
 * Обробити масив команд стеку: { action: "push", item } додає елемент у кінець, { action: "pop" } вилучає останній елемент у масив вилучених history.
 * - Повернути обʼєкт { currentStack, history }.
 */
export function stackPushPop(commands) {
  // TODO: напишіть вашу реалізацію тут
  return { currentStack: [], history: [] };
}

/**
 * Завдання 4.2: Моделювання черги (FIFO) через push та shift
 * Обслужити чергу клієнтів: додати всіх клієнтів із масиву incoming у чергу через push, а потім вилучати по одному з початку через shift у масив servedOrders.
 * - Повернути масив обслугованих клієнтів у порядку черги.
 */
export function queuePushShift(incoming) {
  // TODO: напишіть вашу реалізацію тут
  return [];
}

/**
 * Завдання 4.3: Пріоритетне додавання на початок черги через unshift
 * Додати масив VIP-клієнтів на початок існуючої черги queue так, щоб перший у списку VIP став першим у загальній черзі.
 * - Використати unshift(...vipList).
 * - Повернути новий масив.
 */
export function priorityUnshift(queue, vipList) {
  // TODO: напишіть вашу реалізацію тут
  return [];
}

/**
 * Завдання 4.4: Видалення N останніх елементів через pop()
 * Видалити рівно count останніх елементів із копії масиву arr за допомогою методу pop() у циклі.
 * - Якщо count >= arr.length, масив стає порожнім.
 * - Повернути залишок масиву.
 */
export function removeLastNElements(arr, count) {
  // TODO: напишіть вашу реалізацію тут
  return [];
}

/**
 * Завдання 4.5: Перевірка наявності елемента через includes()
 * Перевірити, чи є заданий елемент value у списку дозволених allowedItems за допомогою методу includes. Повернути boolean.
 * - return allowedItems.includes(value);
 */
export function checkExistence(allowedItems, value) {
  // TODO: напишіть вашу реалізацію тут
  return false;
}

/**
 * Завдання 4.6: Пошук першого індексу через indexOf()
 * Знайти індекс першого знаходження searchItem у масиві arr за допомогою indexOf. Якщо елемент не знайдено, повернути -1.
 * - Повернути числовий індекс.
 */
export function findFirstIndex(arr, searchItem) {
  // TODO: напишіть вашу реалізацію тут
  return -1;
}

/**
 * Завдання 4.7: Пошук останнього входження через lastIndexOf()
 * Знайти індекс останнього входження searchItem у масиві arr за допомогою методу lastIndexOf.
 * - Повернути індекс або -1.
 */
export function findLastIndex(arr, searchItem) {
  // TODO: напишіть вашу реалізацію тут
  return -1;
}

/**
 * Завдання 4.8: Видалення всіх екземплярів через indexOf та splice
 * Видалити всі елементи, рівні targetValue, з масиву arr, знаходячи їхній індекс через indexOf і вирізаючи через splice.
 * - Повернути оновлений масив без цільового значення.
 */
export function removeAllOccurrences(arr, targetValue) {
  // TODO: напишіть вашу реалізацію тут
  return [];
}

/**
 * Завдання 4.9: Симуляція історії браузера (Undo / Redo)
 * Змоделювати навігацію браузера через два стеки: backStack і forwardStack з поточною сторінкою current. Команди: "visit" (додає current у backStack, очищує forwardStack, встановлює новий current), "back" (якщо є сторінка в backStack, поточну в forwardStack, дістає з backStack), "forward" (дістає з forwardStack, поточну в backStack).
 * - Повернути фінальний стан { current, backCount: backStack.length, forwardCount: forwardStack.length }.
 */
export function browserHistoryNavigation(initialPage, actions) {
  // TODO: напишіть вашу реалізацію тут
  return { current: initialPage, backCount: 0, forwardCount: 0 };
}

/**
 * Завдання 4.10: Пакетне додавання елементів через push(...items)
 * Додати всі елементи з масиву newItems у кінець існуючого масиву targetArray за один виклик за допомогою спред-синтаксису targetArray.push(...newItems).
 * - Повернути оновлений масив targetArray.
 */
export function batchPushItems(targetArray, newItems) {
  // TODO: напишіть вашу реалізацію тут
  return targetArray;
}

/**
 * Завдання 4.11: Циклічний зсув масиву вправо на k позицій
 * Зсунути елементи масиву вправо на k позицій: останній елемент стає першим через pop() та unshift().
 * - Якщо масив порожній або k <= 0, повернути копію без змін.
 */
export function rotateArrayRight(arr, k) {
  // TODO: напишіть вашу реалізацію тут
  return [...arr];
}

/**
 * Завдання 4.12: Циклічний зсув масиву вліво на k позицій
 * Зсунути елементи масиву вліво на k позицій: перший елемент стає останнім через shift() та push().
 * - Повернути новий зміщений масив.
 */
export function rotateArrayLeft(arr, k) {
  // TODO: напишіть вашу реалізацію тут
  return [...arr];
}

