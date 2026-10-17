/**
 * Модуль 4: Робота з підмасивами (slice, splice, concat)
 */

// 4.1 Пагінація масиву за допомогою slice (немутуюча вибірка)
export function paginateArray(arr, pageNumber, pageSize) {
  const start = (pageNumber - 1) * pageSize;
  const end = start + pageSize;
  return arr.slice(start, end);
}

// 4.2 Вставка нових елементів у довільну позицію за допомогою splice
export function insertAt(arr, index, ...newItems) {
  const copy = [...arr];
  copy.splice(index, 0, ...newItems);
  return copy;
}

// 4.3 Заміна діапазону елементів через splice
export function replaceRange(arr, startIndex, deleteCount, ...replacement) {
  const copy = [...arr];
  const removed = copy.splice(startIndex, deleteCount, ...replacement);
  return { updated: copy, removed };
}

// 4.4 Обʼєднання масивів за допомогою concat та spread-оператора
export function mergeInventories(inv1, inv2, bonusItems) {
  return inv1.concat(inv2, bonusItems);
}

// 4.5 Отримання N останніх елементів без зміни оригіналу через slice(-n)
export function getLastNElements(arr, n) {
  if (n <= 0) return [];
  return arr.slice(-n);
}
