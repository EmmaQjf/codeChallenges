function alternatingCharacters(s) {
    // Write your code here
    // define the prevChar = '' & newStr & deleteCount
    // loop through the s, and check if the currentChar is the same of the previous Char, if yes, do nothing increase the count of deleted Char, if not, add the currentChar to the newStr
     let count = 0;
     let newStr = '';
     let prevChar = '';
     let currChar = ''
     
     for (let i = 0; i < s.length; i++){
         currChar = s[i];
         if(currChar === prevChar){
             count ++
             prevChar = currChar;
         }else {
            prevChar = currChar;
             newStr = newStr+s[i];
         }
     }
     return count;
     

}