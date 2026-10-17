/**
 * Модуль 3: Операції з масивами (push, unshift, pop, shift, includes, indexOf)
 */

// 3.1 Моделювання стеку LIFO (Last In First Out) через push і pop
export function simulateStack(operations) {
  const stack = [];
  const history = [];
  for (const op of operations) {
    if (op.type === "push") {
      stack.push(op.value);
    } else if (op.type === "pop") {
      history.push(stack.pop());
    }
  }
  return { stack, poppedHistory: history };
}

// 3.2 Моделювання черги FIFO (First In First Out) через push і shift
export function simulateQueue(customers) {
  const queue = [];
  const served = [];
  for (const c of customers) {
    queue.push(c);
  }
  while (queue.length > 0) {
    served.push(queue.shift());
  }
  return served;
}

// 3.3 Пріоритетне додавання на початок черги через unshift
export function addVipClients(regularQueue, vipClients) {
  const queue = [...regularQueue];
  for (let i = vipClients.length - 1; i >= 0; i--) {
    queue.unshift(vipClients[i]);
  }
  return queue;
}

// 3.4 Пошук індексу та перевірка наявності через indexOf та includes
export function checkItemPresence(arr, item) {
  return {
    exists: arr.includes(item),
    index: arr.indexOf(item)
  };
}

// 3.5 Видалення всіх входжень елемента за допомогою indexOf та splice/shift
export function removeAllOccurrences(arr, target) {
  const res = [...arr];
  let idx = res.indexOf(target);
  while (idx !== -1) {
    res.splice(idx, 1);
    idx = res.indexOf(target);
  }
  return res;
}
