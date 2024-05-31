function highestValuePalindrome(s, n, k) {
    let pairs = Math.floor((n + 1) / 2);
    let IsNotPair = 0;
    let result = s.split("");

    // Counting pairs and non-pairs
    for (let i = 0; i < pairs; i++) {
        if (s[i] !== s[n - 1 - i]) {
            IsNotPair++;
        }
    }

    let difference = k - IsNotPair;
    if (difference < 0) {
        return -1;
    } else if (difference === 0) {
        for (let i = 0; i < pairs; i++) {
            result[i] = Math.max(s[i], s[n - 1 - i]);
            result[n - 1 - i] = Math.max(s[i], s[n - 1 - i]);
        }
        return result.join('');
    } else {
        for (let i = 0; i < pairs; i++) {
            if (Math.floor(s[i],s[n - 1 - i]) !== '9' && difference > 0) {
                result[i] = '9';
                result[n - 1 - i] = '9';
                difference--;
            } else {
                result[i] = Math.max(s[i], s[n - 1 - i]);
                result[n - 1 - i] = Math.max(s[i], s[n - 1 - i]);
            }
        }
        return result.join('');
    }
}

console.log(highestValuePalindrome("630922", 6, 3)); // Output: "639936"
