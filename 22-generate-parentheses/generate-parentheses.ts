function generateParenthesis(n: number): string[] {
    if (n === 0) return [""];

    const result: string[] = [];
    const count = {"(": 0, ")": 0} ;
    const parens = "()";

    const dfs = (combo) => {
        if (combo.length === n * 2) {
            result.push(combo.substring(0));
            return;
        }

        for (const paren of parens) {
            count[paren]++;
            if (count["("] <= n && count[")"] <= count["("]) {
                dfs(combo + paren);
            }

            
            count[paren]--;
        }
    };

    dfs("");

    return result;
};