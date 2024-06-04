function birthday(s, d, m) {
    // Write your code here
    // sliding window 
    // let length = m;
    // let sum = 0
    // loop through the str, and check the consecutive sum equals to the sum
    let length = m;
    let result = 0;
     for (let i = 0; i < s.length ; i++){
         let sum = s.slice(i,i+length).reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0);
          if (sum === d){
              result ++;
          }
     }
     return result;

}