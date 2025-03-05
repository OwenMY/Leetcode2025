function longestPalindrome(s: string): string {
    if (s.length === 1 || !s.length) return s;

    let result = "";
    let longestPalindromeLength = 0;

    for (let i = 0; i < s.length; i++) {
        let leftIndex = i - 1;
        let rightIndex = i + 1;

        let left = s[leftIndex];
        let right = s[rightIndex];
        let substring = s[i];

        while (left === s[i]) {
            substring = left + substring;
            leftIndex--;
            left = s[leftIndex];
        }

        while (right === s[i]) {
            substring+= right;
            rightIndex++;
            right = s[rightIndex];
        }

        while (left === right && left && right) {
            substring = left + substring + right;

            leftIndex--;
            rightIndex++;

            left = s[leftIndex];
            right = s[rightIndex];
        }

        if (substring.length > longestPalindromeLength) {
            longestPalindromeLength = substring.length;
            result = substring;
        }
    }

    return result;
};
