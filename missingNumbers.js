function missingNumbers(arr, brr) {
    // Step 1: Create frequency counters for both arrays
    let fqA = {};
    let fqB = {};

    for (let num of arr) {
        fqA[num] = (fqA[num] || 0) + 1;
    }

    for (let num of brr) {
        fqB[num] = (fqB[num] || 0) + 1;
    }

    // Step 2: Compare frequencies to find missing numbers
    let result = [];

    // Iterate through all keys in fqB (since missing numbers could be in brr but not in arr)
    for (let key in fqB) {
        if (fqB.hasOwnProperty(key)) {
            // If key exists in fqA, calculate the difference in counts
            if (fqA.hasOwnProperty(key)) {
                let difference = fqB[key] - fqA[key];
                if (difference > 0) {
                    result.push(...Array(difference).fill(parseInt(key))); // Fill result with missing numbers
                }
            } else {
                // If key does not exist in fqA, push all occurrences from fqB to result
                result.push(...Array(fqB[key]).fill(parseInt(key)));
            }
        }
    }

    return result;
}