
function bigSorting(unsorted) {
    if (unsorted.length <= 1) {
        return unsorted;
    }
    
    const pivot = unsorted[0];
    const left = [];
    const right = [];

    for (let i = 1; i < unsorted.length; i++) {
        if (BigInt(unsorted[i]) <= BigInt(pivot)) {
            left.push(unsorted[i]);
        } else {
            right.push(unsorted[i]);
        }
    }

    return bigSorting(left).concat(pivot, bigSorting(right));
}