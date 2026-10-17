/**
 * Модуль 5: Робота з підмасивами (slice, splice, concat)
 * Немутуюче копіювання slice, мутуюча вставка/заміна/видалення splice, обʼєднання кількох масивів через concat.
 */

/**
 * Завдання 5.1: Пагінація за допомогою slice(start, end)
 * Отримати елементи сторінки pageNumber при розмірі pageSize за допомогою методу slice(). Індексація сторінок з 1.
 * - start = (pageNumber - 1) * pageSize, end = start + pageSize.
 * - Повернути новий підмасив.
 */
export function paginateDataSlice(items, pageNumber, pageSize) {
  // TODO: напишіть вашу реалізацію тут
  return [];
}

/**
 * Завдання 5.2: Вилучення центральної частини без зміни оригіналу
 * Вирізати підмасив без першого та останнього елементів за допомогою slice(1, -1).
 * - Для масивів довжиною <= 2 повернути [].
 */
export function extractMiddleSubarray(arr) {
  // TODO: напишіть вашу реалізацію тут
  return [];
}

/**
 * Завдання 5.3: Видалення елементів за індексом через splice()
 * Видалити deleteCount елементів, починаючи з індексу startIndex, з копії масиву arr за допомогою splice.
 * - Повернути обʼєкт { updatedArray, removedItems }.
 */
export function spliceRemoveAt(arr, startIndex, deleteCount) {
  // TODO: напишіть вашу реалізацію тут
  return { updatedArray: [], removedItems: [] };
}

/**
 * Завдання 5.4: Вставка елементів у довільну позицію без видалення
 * Вставити нові елементи newItems у масив arr на позицію insertIndex за допомогою splice(insertIndex, 0, ...newItems).
 * - Повернути новий модифікований масив.
 */
export function spliceInsertAt(arr, insertIndex, newItems) {
  // TODO: напишіть вашу реалізацію тут
  return [];
}

/**
 * Завдання 5.5: Заміна діапазону елементів через splice()
 * Замінити count елементів, починаючи з startIndex, на нові replacementItems.
 * - Повернути оновлений масив.
 */
export function spliceReplaceRange(arr, startIndex, count, replacementItems) {
  // TODO: напишіть вашу реалізацію тут
  return [];
}

/**
 * Завдання 5.6: Обʼєднання кількох масивів через concat()
 * Обʼєднати три масиви a, b та c в один результуючий масив за допомогою методу a.concat(b, c).
 * - Повернути єдиний плаский масив.
 */
export function concatMultipleArrays(a, b, c) {
  // TODO: напишіть вашу реалізацію тут
  return [];
}

/**
 * Завдання 5.7: Отримання N останніх елементів через slice(-n)
 * Отримати рівно n останніх елементів масиву arr без зміни оригіналу за допомогою slice(-n).
 * - Для n <= 0 повернути [].
 */
export function tailSlice(arr, n) {
  // TODO: напишіть вашу реалізацію тут
  return [];
}

/**
 * Завдання 5.8: Розбиття масиву на чанки фіксованого розміру
 * Розбити вхідний масив arr на двовимірний масив чанків фіксованого розміру chunkSize за допомогою slice у циклі.
 * - Останній чанк може мати меншу довжину.
 */
export function splitArrayIntoChunks(arr, chunkSize) {
  // TODO: напишіть вашу реалізацію тут
  return [];
}

/**
 * Завдання 5.9: Вставка числа у відсортований масив на потрібне місце
 * Знайти індекс, де значення num має знаходитись у відсортованому за зростанням масиві sortedArr, і вставити його за допомогою splice.
 * - Повернути новий відсортований масив.
 */
export function insertSorted(sortedArr, num) {
  // TODO: напишіть вашу реалізацію тут
  return [];
}

/**
 * Завдання 5.10: Обʼєднання списків інвентаря з усуненням дублікатів
 * Обʼєднати основний інвентар base, додатковий extra та бонусний bonus через concat, а потім повернути масив унікальних назв предметів (без повторів).
 * - Порядок появи першого екземпляра кожного предмета.
 */
export function mergeInventoriesWithBonus(base, extra, bonus) {
  // TODO: напишіть вашу реалізацію тут
  return [];
}

/**
 * Завдання 5.11: Вилучення діапазону із поверненням залишку та вилучених
 * Вилучити з масиву елементи від start до end індексів (не включно end) і повернути обʼєкт `{ remaining, extracted }`.
 * - Оригінальний масив не повинен зазнавати побічних ефектів.
 */
export function removeRangeAndReturnBoth(arr, start, end) {
  // TODO: напишіть вашу реалізацію тут
  return { remaining: [], extracted: [] };
}

/**
 * Завдання 5.12: Клонування масиву за допомогою slice(0)
 * Створити повну неглибоку копію масиву arr за допомогою виклику arr.slice(0) та перевірити, що зміна копії не впливає на arr.
 * - Повернути обʼєкт { clone, isDistinctReference: clone !== arr }.
 */
export function cloneViaSlice(arr) {
  // TODO: напишіть вашу реалізацію тут
  return { clone: [], isDistinctReference: false };
}

