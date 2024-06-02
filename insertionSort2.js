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
   
    let j = i;
    while (j >= 0){
      if (arr[j] >= current){
        arr[j+1] = arr[j];
        arr[j] = current;
        j--;
      } else {
        arr[j+1] = current;
        break
      } 
    }
    console.log(arr.join(' '))
    
}
return arr;
}
