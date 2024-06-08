function miniMaxSum(arr) {
    let assortedArr = arr.sort((a, b) => a - b);
    let maximum = assortedArr.slice(1).reduce((cur, sum) => cur + sum, 0);
    let minimum = assortedArr.slice(0, 4).reduce((cur, sum) => cur + sum, 0);
    console.log(minimum, maximum);
}