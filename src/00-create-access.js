/**
 * Модуль 1: Створення масивів, індекси з 0, доступ та довжина (.length)
 * Теорія:
 * - Що таке масив: впорядкована колекція даних у пам'яті.
 * - Організація в пам'яті: неперервний блок, індекси починаються з 0.
 * - Створення: літерал [] або конструктор new Array().
 * - Мутабельність: зміна значень arr[i] = val.
 */

// 1.1 Створення масиву за допомогою літерала []
export function createWithLiteral(a, b, c) {
  return [a, b, c];
}

// 1.2 Створення масиву через конструктор Array
export function createWithConstructor(length, fillValue) {
  return new Array(length).fill(fillValue);
}

// 1.3 Отримання першого та останнього елемента через індекси та length
export function getFirstAndLast(arr) {
  if (!arr || arr.length === 0) return { first: undefined, last: undefined, length: 0 };
  return {
    first: arr[0],
    last: arr[arr.length - 1],
    length: arr.length
  };
}

// 1.4 Зміна елемента за індексом
export function updateElementAtIndex(arr, index, newValue) {
  const copy = [...arr];
  if (index >= 0 && index < copy.length) {
    copy[index] = newValue;
  }
  return copy;
}

// 1.5 Обрізання або розширення масиву через властивість length
export function setArrayLength(arr, newLength) {
  const copy = [...arr];
  copy.length = newLength;
  return copy;
}

// 1.6 Безпечний доступ до негативних індексів (емуляція at)
export function getAtOffset(arr, offset) {
  if (offset >= 0) return arr[offset];
  return arr[arr.length + offset];
}
