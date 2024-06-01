function bigSorting(unsorted) {
    if (unsorted.length <= 1) {
        return unsorted;
    }
    
    let middlePoint = Math.floor(unsorted.length / 2);
    // let arr1 = unsorted.slice(0, middlePoint);
    // let arr2 = unsorted.slice(middlePoint);
    
    return merge(bigSorting(unsorted.slice(0, middlePoint)), bigSorting(unsorted.slice( middlePoint)))
}

// HELPER FUNCTION: merge two sorted arrays
// function merge(arr1, arr2) {
//     var result = [];

//     while (arr1.length && arr2.length) {
//         if (BigInt(arr1[0])  <= BigInt(arr2[0])) {
//             result.push(arr1.shift());
//         } else {
//             result.push(arr2.shift());
//         }
//     }
//     // add arr1 and arr2 to the result array
//     return result.concat(arr1, arr2);
// }


// two pointer
function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        // BigInt to deal with very large numbers
        if (BigInt(arr1[i]) <= BigInt(arr2[j])) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}