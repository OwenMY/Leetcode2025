const get_neighbors = (board: string[][], row: number, col: number): number[][] => {
    const row_modifiers = [-1, 0, 1, 0];
    const col_modifiers = [0, 1, 0, -1];

    const neighbors: number[][] = [];

    for (let i = 0; i < row_modifiers.length; i++) {
        const new_row = row + row_modifiers[i];
        const new_col = col + col_modifiers[i];

        if (
            0 <= new_row && new_row < board.length &&
            0 <= new_col && new_col < board[0].length && 
            board[new_row][new_col] !== " "
        ) neighbors.push([new_row, new_col]);
    }

    return neighbors;
}

const dfs = (board: string[][], word: string, row: number, col: number, path: string): boolean => {
    if (path === word) return true;

    const neighbors = get_neighbors(board, row, col);

    for (const [neighbor_row, neighbor_col] of neighbors) {
        const char = board[neighbor_row][neighbor_col];

        if (word.startsWith(path + char)) {
            board[neighbor_row][neighbor_col] = " ";

            const result = dfs(board, word, neighbor_row, neighbor_col, path + char);
            if (result) return true;

            board[neighbor_row][neighbor_col] = char;
        }
    }

    return false;
}

function exist(board: string[][], word: string): boolean {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            const char = board[row][col];

            if (word.startsWith(char)) {
                board[row][col] = " ";

                const result = dfs(board, word, row, col, char);
                if (result) return result;

                board[row][col] = char;
            }
        }
    }

    return false;
};