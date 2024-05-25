
function weightedUniformStrings(s, queries) {
    // Write your code here
    // letters appear in orders ?
    // define an object of letter and its value
    // define a string of alphabets, check the value with indexof(alphabets)
    //frequency counter , check how many letters are continous. push the value of letters in an empty array 
    
    //let fc = {}
    let array = []
    let prevChar = '';
    let value = 0;
    for (let i = 0; i<s.length; i++){
        if(s[i] !== prevChar){
            value = s[i].charCodeAt(0) - 96
            prevChar = s[i]
        }else {
            value += s[i].charCodeAt(0) - 96

        }
        if(!array.includes(value)){
                    array.push(value)
                }

    }


    
    // for (let i = 0; i<s.length; i++){
    //     let letter = s[i]
    //     let value = letter.charCodeAt(0) - 96
    //     let count = fc[letter]
    //     if (fc[letter]){
    //         fc[letter]++;
    //         value = value *fc[letter]
    //     }else{
    //         fc[letter] = 1;
    //         value = value *fc[letter]
    //     }
    //     if(!array.includes(value)){
    //         array.push(value)
    //     } 
    // }
    let result = []
    // for (let i = 0; i<queries.length; i++){
    //     if(array.includes(queries[i])){
    //         result.push('Yes')
    //     } else {
    //         result.push('No')
    //     }
    // }
    for (let query of queries) {
        result.push(array.includes(query) ? 'Yes' : 'No');
    }
    return result;

}