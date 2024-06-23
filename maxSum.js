// function maximumSum(a, m) {
//     // Write your code here
//     // sliding window 
  
//     let max = 0;
//     for (let n = 0; n<a.length; n++){
//         let i  = 0; 
//         while (i+n < a.length){
//             let sum = a.slice(i,i+n+1).reduce((a,b)=> a+b,0);
          
//              let remainder = parseInt(sum)%m
//              console.log(sum, remainder)
//             if(remainder > max){
//              max = remainder 
//               }
//              i=i+1
//       }
//     }
//     return max;
// }



function maximumSum(a, m) {
    let max = 0;
    let prefixSum = 0; // To store cumulative sum modulo m
    let prefixSumsSet = new Set(); // To store unique prefix sums
    console.log(prefixSumsSet)
    for (let i = 0; i < a.length; i++) {
        prefixSum = (prefixSum + a[i]) % m; // Update the cumulative sum modulo m
       console.log('currrent vallue'+ a[i],prefixSum)
        // To find maximum remainder, iterate through all previous prefix sums
        // and find the maximum remainder with the current prefix sum
        let it = prefixSumsSet.values();
        console.log(it)
        let candidate = it.next().value;
        console.log(candidate)
        while (candidate !== undefined) {
            let remainder = (prefixSum - candidate + m) % m; // Calculate current remainder
             console.log('the remainder'+ remainder)
            if (remainder > max) {
                max = remainder;
            }
            candidate = it.next().value;
        }

        // Add current prefix sum to the set of prefix sums
        prefixSumsSet.add(prefixSum);
        console.log(prefixSumsSet)

        // Consider the remainder when the current element itself is taken as a subarray
        if (prefixSum > max) {
            max = prefixSum;
        }
    }

    return max;
}