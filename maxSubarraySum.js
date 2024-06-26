// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null
let maxSum = -Infinity;
const maxSubarraySum = (array, n) => {
  if (array.length < n) {
    return null;
   } 
  for (let i = 0; i < array.length; i++) {
    let subArray = array.slice(i,i+n);
    let total = 0
    let sum = subArray.reduce((total, num) => total+ num);   
    if (sum > maxSum) {
      maxSum = sum;
      }
  }
  return maxSum;
}
console.log(maxSubarraySum([],4));

console.log(maxSubarraySum([4,2,1,6,2],4));