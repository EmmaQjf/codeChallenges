function insertionSort1(n, arr) {
    const e = arr[n - 1];

    for (let i = n - 1; i >= 0; i--) {
        if (arr[i - 1] >= e) {
            arr[i] = arr[i - 1];
        } else {
            arr[i] = e;
            break;
        }

        console.log(arr.join(" "));
    }

    console.log(arr.join(" "));
}
