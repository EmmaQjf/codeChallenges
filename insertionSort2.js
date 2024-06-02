// function insertionSort2(n, arr) {
//     // Write your code here
//     for (let i = 0; i < arr.length - 1; i++) {
//         let current = arr[i + 1];
//         if (arr[i] > current) {
//             for (let j = i; j >= 0; j--) {
//                 if (arr[j] > current) {
//                     let num = arr[j];
//                     arr[j + 1] = num;
//                     arr[j] = current;
//                 } else {
//                     break; // Break out of the inner loop if the element is in its correct position
//                 }
//             }
//         }
//         console.log(arr);
//     }
//     return arr;
// }


// try the while loop
function insertionSort2(n, arr) {
    // Write your code here
     for (let i = 0; i < arr.length - 1; i++){
        let current = arr[i+1]
        console.log(arr[i],current)
        if ( arr[i] <= current){
            console.log(arr)
            
        }
   
    let j = i;
    while (j >= 0){
      if (arr[j] >= current){
         console.log(arr[j])
        arr[j+1] = arr[j];
        j--;
        console.log(arr)
      } else {
        arr[j+1] = current;
        break
      }
    }
    
}
return arr;
}
