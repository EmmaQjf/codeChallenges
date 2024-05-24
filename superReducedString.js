function superReducedString(s) {
    let newString = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            i++; // Skip the next character
        } else {
            // Check if the current character is equal to the last character of newString
            if (s[i] !== newString.slice(-1)) {
                newString += s[i];
            } else {
                // Remove the last character from newString
                //assign this new string back to newString,
                newString = newString.slice(0, -1);
            }
        }
    }

    if (newString.length === 0) {
        return 'Empty String';
    } else {
        return newString;
    }
}