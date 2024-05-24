function pangrams(s) {
    // Write your code here
    // define the allAlphabets string
    // convert s to lowercase
    // loop through the allAlphabets string and check whether the letter is in the given string. 
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'
    let lowerCaseString = s.split('').map((x) => x.toLowerCase()).join('')
    for (let i = 0; i < alphabets.length; i++){
        let reg = alphabets[i]
        if(!lowerCaseString.match(reg)){
            return 'not pangram'
        }    
    }
    return 'pangram'

}