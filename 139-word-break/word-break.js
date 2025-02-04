/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, words) {
    if (!words.length) return false;

    const memo = {};

    const dfs = (start_index) => {
        if (start_index === s.length) return true;

        const startString = s.substring(0, start_index);
        if (memo[startString] === false) return false;

        const endString = s.substring(start_index);
        for (let word of words) {
            if (!endString.startsWith(word)) continue;
            const result = dfs(start_index + word.length);

            if (result) return true;
        }

        memo[startString] = false;

        return false;
    };

    return dfs(0);
};
