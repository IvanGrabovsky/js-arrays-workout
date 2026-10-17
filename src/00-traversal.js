/**
 * Модуль 2: Перебір масивів (for, while, for...of)
 */

// 2.1 Обчислення суми через класичний for (let i = 0; i < arr.length; i++)
export function sumWithForLoop(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// 2.2 Зворотний перебір через цикл while
export function reverseWithWhileLoop(arr) {
  const result = [];
  let i = arr.length - 1;
  while (i >= 0) {
    result.push(arr[i]);
    i--;
  }
  return result;
}

// 2.3 Перебір значень за допомогою for...of
export function countStringsLongerThan(arr, minLength) {
  let count = 0;
  for (const item of arr) {
    if (typeof item === "string" && item.length > minLength) {
      count++;
    }
  }
  return count;
}

// 2.4 Пошук максимального та мінімального значення через перебір
export function findMinMax(arr) {
  if (!arr || arr.length === 0) return { min: null, max: null };
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  return { min, max };
}

// 2.5 Підрахунок середнього арифметичного чисел масиву
export function calculateAverage(arr) {
  if (!arr || arr.length === 0) return 0;
  let sum = 0;
  for (const num of arr) sum += num;
  return Number((sum / arr.length).toFixed(2));
}
