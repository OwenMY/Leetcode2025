/*

visited Map memo

if visited, we want to return the results of what the visited node can give us

key: coords
value: results yielded from those coords]


dfs(): results

    create results at 0

    iterating
        if memo already has coords,
            get result of coords
            increment path by result
            return result

        get result of dfs
        increment result


    add to memo

    return result
*/

function uniquePaths(m: number, n: number): number {
    if (!m && !n) return 0;

    let paths = 0;

    const getNextSteps = (row: number, col: number): number[][] => {
        const row_modifier = [0, 1];
        const col_modifier = [1, 0];
        const nextSteps = [];

        for (let i = 0; i < row_modifier.length; i++) {
            const newRow = row + row_modifier[i];
            const newCol = col + col_modifier[i];

            if (newRow < m && newCol < n) nextSteps.push([newRow, newCol]);
        }

        return nextSteps;
    }

    const visited: Map<string, number> = new Map();

    const dfs = (row: number, col: number): number => {
        if (row === m - 1 && col === n - 1) {
            paths++;
            return 1;
        }

        let result = 0;
        const coords = `${row}, ${col}`;

        if (visited.has(coords)) {
            result+= visited.get(coords);
            paths+= result;
            return result;
        }

        const nextSteps: number[][] = getNextSteps(row, col);
        for (const [nextRow, nextCol] of nextSteps) {
            result+= dfs(nextRow, nextCol);
        }

        visited.set(coords, result);
        return result;
    }

    dfs(0, 0);

    return paths;
};