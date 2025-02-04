function wordBreak(target: string, words: string[]): string[] {
    if (!words.length) return [""];

    const result: string[] = [];
    const path: string[] = [];

    const dfs = (start_index: number): void => {
        if (start_index === target.length) {
            result.push(path.join(" "));
            return;
        }

        const startSubString = target.substring(0, start_index);
        if (start_index > target.length) return;

        for (const word of words) {
            if (!target.startsWith(word, start_index)) continue;

            path.push(word);
            dfs(start_index + word.length);
            path.pop();
        }

        return;
    }

    dfs(0);

    return result;
};