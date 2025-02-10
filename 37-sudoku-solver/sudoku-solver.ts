/**
 Do not return anything, modify board in-place instead.
 */

const pruneNumsFromRow = (board: string[][], row: number, remainingNums: Set<string>) => {
  for (let cell of board[row]) {
    if (cell !== ".") remainingNums.delete(cell);
  }
  return remainingNums;
};

const pruneNumsFromCol = (board: string[][], col: number, remainingNums: Set<string>) => {
  for (let row = 0; row < 9; row++) {
    const cell = board[row][col];
    if (cell !== ".") remainingNums.delete(cell);
  }
  return remainingNums;
};

const pruneNumsFrom3x3 = (
  board: string[][],
  row: number,
  col: number,
  remainingNums: Set<string>
) => {
  // Find the top-left of the 3×3 sub-box
  const boxRowStart = Math.floor(row / 3) * 3;
  const boxColStart = Math.floor(col / 3) * 3;

  for (let r = boxRowStart; r < boxRowStart + 3; r++) {
    for (let c = boxColStart; c < boxColStart + 3; c++) {
      const cell = board[r][c];
      if (cell !== ".") {
        remainingNums.delete(cell);
      }
    }
  }

  return remainingNums;
};

const getPossibleNums = (board: string[][], row: number, col: number): string[] => {
  const remainingNums = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);

  pruneNumsFromRow(board, row, remainingNums);
  pruneNumsFromCol(board, col, remainingNums);
  pruneNumsFrom3x3(board, row, col, remainingNums);

  return Array.from(remainingNums);
};

function solveSudoku(board: string[][]): void {
  let isSolved = false;

  const dfs = (start_row: number, start_col: number) => {
    let foundEmptyCell = false;
    let row = start_row;
    let col = start_col;

    // Find the next empty cell (or determine if we're done)
    while (!foundEmptyCell) {
      if (board[row][col] === ".") {
        foundEmptyCell = true;
        break;
      }

      // If we're at the last cell and it's not empty, puzzle is solved
      if (row === 8 && col === 8) {
        isSolved = true;
        return;
      }

      // Move to the next cell
      if (col === 8) {
        row++;
        col = 0;
      } else {
        col++;
      }
    }

    // Try all possible numbers in this empty cell
    const possibleNums = getPossibleNums(board, row, col);

    for (const num of possibleNums) {
      board[row][col] = num;        // Place the number
      dfs(row, col);                // Recurse
      if (isSolved) return;         // If solved in recursion, bubble up
      board[row][col] = ".";        // Otherwise reset
    }
  };

  dfs(0, 0);
}
