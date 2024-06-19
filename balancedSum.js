function balancedSums(arr) {
    // Write your code here
    // use two pointer
    // define leftPointer= middlePointer -1 and rightPointer = middlePointer + 1, middlePointer = Math.floor(arr.length/2)
    // while leftPointer >= 0 and rightPointer <=arr.length -1 , iterate and compare the sum of the lefthalf and sum of the right half.
    // if leftHalf is bigger, middlePointer -1;
    // if rightHalf is bigger, middlePointer +1;
    // return NO out of loop 
    
    
    // define 

    if (arr.length === 1) {
        return 'YES'; // Single element array is always balanced
    }
    let middlePointer = Math.floor(arr.length/2)
  
    let leftPointer = middlePointer;
    let rightPointer = middlePointer + 1
    let leftSum = arr.slice(0,middlePointer).reduce((a, b) => a + b, 0);
    let rightSum = arr.slice(rightPointer).reduce((a, b) => a + b, 0);
    while (middlePointer >=  0 && middlePointer <= arr.length -1){
        if (leftSum == rightSum){
            return 'YES'
        } else if (leftSum < rightSum){
              middlePointer ++;
            
             leftSum = leftSum +arr[leftPointer]
            rightSum = rightSum - arr[rightPointer]
             leftPointer = middlePointer;
             rightPointer = middlePointer + 1
             
            
        
        } else {
            middlePointer --;
            leftSum = leftSum - arr[leftPointer -1]
            rightSum = rightSum + arr[leftPointer]
            leftPointer = middlePointer;
             rightPointer = middlePointer + 1
              console.log(leftSum, rightSum)
        }
    }
    
    return 'NO'

}
