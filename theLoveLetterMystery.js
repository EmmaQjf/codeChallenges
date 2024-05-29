function theLoveLetterMystery(s) {
    // Write your code here
    // define the length of the s; length = s.length -1 
    // define the minumum numbers of operation, minOperations = 0;
    // loop through the s, i<= Math.floor(length/2)
    // comparee the charCodeAt() of s[i] and s[length -i], add the difference to the minOperation
    
    let length = s.length -1;
    let  minOperations = 0
    for (let i = 0;  i<= Math.floor(length/2); i++){
        if (s[i] !==s[length -i]){
            let difference = Math.abs(s[i].charCodeAt(0)- s[length -i].charCodeAt(0))
            minOperations += difference
        }
    }
    return minOperations

}