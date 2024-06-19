function pairs(k, arr) {
    let count = 0;
    
    // Sorting the array to handle the edge case where [a, b] and [b, a] are considered different pairs
    arr.sort((a, b) => a - b);

    // Using two pointers technique
    let i = 0;
    let j = 1;
    
    while (j < arr.length) {
        let diff = arr[j] - arr[i];
        
        if (diff === k) {
            count++;
            j++; 
            i++;
            // Move j forward to find the next potential pair
        } else if (diff < k) {
            j++; // If difference is less than k, increase j to increase the difference
        } else { // diff > k
            i++; // If difference is greater than k, increase i to decrease the difference
            if (i === j) {
                j++; // Avoid i and j being the same which doesn't make a valid pair
            }
        }
    }
    
    return count;
}