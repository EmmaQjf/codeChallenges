function funnyString(s) {
    // Write your code here
    // use charCodeAt(0) to find the ordinals
    // define variables curr and next;
    // define the array of asbolute difference && check whether the array is palindrome
    let array = []
    for (let i = 0; i < s.length - 1; i++ ){
        let curr = s[i].charCodeAt(0)
        let next = s[i+1].charCodeAt(0)
        array.push(Math.abs(next-curr))
    }
    console.log(array)
    console.log(array.reverse())
    console.log(array===array.reverse())
  
    for (let i = 0; i < array.length; i++ ){
        if(array[i] != array[array.length -1 - i]){
               return 'Not Funny'
        }
    }
    return 'Funny'
}