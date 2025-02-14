function isPalindrome(s: string): boolean {
    if (!s.length) return false;
    
    const lowerCaseInput = s.toLowerCase();
    const validCharsExp = /[a-z0-9]/i;

    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        while (!validCharsExp.test(lowerCaseInput[i])) i++;   
        while (!validCharsExp.test(lowerCaseInput[j])) j--;
        if (lowerCaseInput[i] !== lowerCaseInput[j]) return false;
    }
    
    return true;
};