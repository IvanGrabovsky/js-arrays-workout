/**
 * Модуль 5: Багатовимірні масиви (двовимірні матриці, сітки, таблиці)
 */

// 5.1 Створення прямокутної матриці rows x cols, заповненої initValue
export function createMatrix(rows, cols, initValue) {
  const matrix = [];
  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
      row.push(initValue);
    }
    matrix.push(row);
  }
  return matrix;
}

// 5.2 Доступ до елемента матриці matrix[row][col] з безпечною перевіркою
export function getMatrixCell(matrix, row, col) {
  if (row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length) {
    return matrix[row][col];
  }
  return undefined;
}

// 5.3 Підрахунок суми кожного рядка матриці
export function calculateRowSums(matrix) {
  const sums = [];
  for (let r = 0; r < matrix.length; r++) {
    let rowSum = 0;
    for (let c = 0; c < matrix[r].length; c++) {
      rowSum += matrix[r][c];
    }
    sums.push(rowSum);
  }
  return sums;
}

// 5.4 Транспонування квадратної або прямокутної матриці (рядки стають стовпчиками)
export function transposeMatrix(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return [];
  const rows = matrix.length;
  const cols = matrix[0].length;
  const res = [];
  for (let c = 0; c < cols; c++) {
    const newRow = [];
    for (let r = 0; r < rows; r++) {
      newRow.push(matrix[r][c]);
    }
    res.push(newRow);
  }
  return res;
}

// 5.5 Перевірка переможця на полі Хрестики-Нулики 3x3
export function checkTicTacToeWinner(board) {
  // Перевірка рядків
  for (let r = 0; r < 3; r++) {
    if (board[r][0] && board[r][0] === board[r][1] && board[r][1] === board[r][2]) {
      return board[r][0];
    }
  }
  // Перевірка стовпчиків
  for (let c = 0; c < 3; c++) {
    if (board[0][c] && board[0][c] === board[1][c] && board[1][c] === board[2][c]) {
      return board[0][c];
    }
  }
  // Головна діагональ
  if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return board[0][0];
  }
  // Побічна діагональ
  if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return board[0][2];
  }
  return null;
}
