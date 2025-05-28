const getNeighbors = (word: string, remainingWords: Set<string>): string[] => {
    const neighbors: string[] = [];
    const remaining = Array.from(remainingWords);

    for (const w of remaining) {
        let differences = 0;

        for (let i = 0; i < word.length; i++) {
            if (w[i] !== word[i]) {
                differences++;
                if (differences > 1) break;
            }
        }

        if (differences > 1) continue;
        neighbors.push(w);
        remainingWords.delete(w);
    }

    return neighbors;
};

function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    let steps = 0;
    const remaining = new Set(wordList);

    const queue = [beginWord];
    remaining.delete(beginWord);

    while(queue.length > 0) {
        const end = queue.length;

        for (let i = 0; i < end; i++) {
            const word = queue.shift();

            if (word === endWord) return steps + 1;

            const neighbors = getNeighbors(word, remaining);
            if (!neighbors.length) continue;

            queue.push(...neighbors);
        }
        steps++;
    }

    return 0;
};
