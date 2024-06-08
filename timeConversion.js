function timeConversion(s) {
    // Write your code here
    // string slice the last two characters, lastTwo, and first two characters firstTwo 
    // if the firstTwo  === 12: if the LastTwo === 'PM', delete PM; IF the LastTwo === 'AM', change firstTWO == 00;
    // if the LastTwo === 'PM': if the firstTwo is between 1 and 11, increase by 12; if the firstTwo is equal to 12, deleteLastTwo;
    //  if the LastTwo === 'AM': if the firstTwo is 12, change firstTwo to 00; else, deleteLastTwo
    
    let lastTwo = s.slice(-2)
    let firstTwo = s.slice(0,2)
    if (lastTwo === 'PM'){
        if (firstTwo === '12'){
            return s.slice(0,-2)
        } else {
           return (parseInt(firstTwo)+12).toString()+s.slice(2,-2)
        }
    }
    if (lastTwo === 'AM'){
        if (firstTwo === '12'){
            return '00' +s.slice(2,-2)
        } else {
           return s.slice(0,-2)
        }
    }
    
}