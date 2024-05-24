function camelcase(s) {
    // Write your code here
    //use regular expression 
    // use filter function
    let wordsArray = s.split('')
    let result = wordsArray.filter((word) => word === word.toUpperCase());
    return result.length + 1

}