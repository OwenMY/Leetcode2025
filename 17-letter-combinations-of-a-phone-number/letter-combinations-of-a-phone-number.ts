function letterCombinations(digits: string): string[] {
    if (!digits.length) return [];

    const result: string[] = [];
    const digitsToChar = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    };

    const dfs = (start_index: number, combo: string): void => {
        if (start_index === digits.length) {
            result.push(combo.substring(0));
            return;
        }

        const digit = digits[start_index];
        const chars = digitsToChar[digit];

        for (const char of chars) dfs(start_index + 1, combo + char);
    };

    dfs(0, "");

    return result;
};