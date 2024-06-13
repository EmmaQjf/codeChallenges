function isValid(s) {
    // Write your code here
    // frequency counter 
    // get all the values of the object and make it an array
    //  loop though the array and create a new frequency counter fc2
    // fc2.length >2, false; fc2.length ==1, true; fc2.length == 2, one elmenet 's value equals 1, true
    
    let letterFC = {}
    let numberFC = {}
    for (let i of s){
        letterFC[i] = (letterFC[i] || 0) + 1
    }
    
    for (let i in letterFC){
        numberFC[letterFC[i]] = (numberFC[letterFC[i]] || 0) + 1
    }
    let keys = Object.keys(numberFC)
    if (keys.length === 1){
        return 'YES'
    } 
    // else if(keys.length > 2){
    //     return 'NO'
    // } else if ( keys.length === 2  && numberFC[keys[0]] === 1 && numberFC[keys[1]] >1) { return 'YES'     
    // }else if ( keys.length === 2 && numberFC[keys[1]] === 1 && numberFC[keys[0]] >1) { return 'YES'     
    // } else if (keys.length === 2 && numberFC[keys[0]] >= 2|| numberFC[keys[1]] >=2){
    //     return 'NO'
    // } else {
    //     return 'NO'
    // }
    if (keys.length === 2) {
        const [count1, count2] = keys;
        if ((numberFC[count1] === 1 && (Math.abs(count1 - count2) === 1 || count1 === 1)) ||
            (numberFC[count2] === 1 && (Math.abs(count1 - count2) === 1 || count2 === 1))) {
            return "YES";
        }
    }

    return "NO";

}