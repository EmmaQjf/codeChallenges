function palindromeIndex(s) {
    // Write your code here
    // define array = s.split('')
    // loop through the string and check whether it is palindrome
    // if yes, return -1; 
    // loop through the string again, check whether the s[i] === s[s.length - 1-i]
    // if yes, i ++'
    // if not, check the value of s[s.length -1 -i-1], if true, remove s[s.length -1 -i-1]; if not true, remove s[i]
    // after looping, check whether array is a palindrome
    
    let array = s.split('');
    let i = 0;
    let j = s.length - 1;
    let isPalindrome = true;
    // while (i < s.length){
    //     if (s[i] !== s[j]){
    //         isPalindrome = false
    //         break;
    //     }
    //       i ++;
    //       j--;
    // }
    for(let i = 0; i<s.length; i++){
         if(s[i] !== s[s.length - 1-i]){
             isPalindrome = false
              break;
         }
         
     }
     console.log('check whether the given string is palindrome'+isPalindrome)
     if (isPalindrome){
         return -1; 
     }
     let removedIndex = 0;
     for (let i = 0; i<= j ; i ++){
         if (s[i] !== s[s.length - 1-i]){
             if (s[i] !== s[s.length - 1-i -1]){
                 array[i] = ""
                 removedIndex = i;
                 console.log('the removedIndex is '+removedIndex)
             } else if (s[i] === s[s.length - 1-i -1]){
                 array[s.length - 1-i] = ""
                 removedIndex = s.length - 1-i
                  console.log('the removedIndex is '+removedIndex)
             } 
             break;
         }
     }
     console.log(array)
     
     let result = array.join('').replaceAll(' ','');
     if (result.length == 0){
         return -1;
     }
     console.log(result)
     // the result can be empty then no loop can be done and it would be undefined. That is why all the value returns to be -1;
    for(let i = 0; i<result.length/2; i++){
      if(result[i] !== result[result.length - 1-i]){
    console.log('the compared values are'+result[i]+result[s.length - 1-i])
            return -1;
      }}
   
    
      return removedIndex
    
     console.log(removedIndex)
     

}