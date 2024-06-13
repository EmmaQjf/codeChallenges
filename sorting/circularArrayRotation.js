function circularArrayRotation(a, k, queries) {
    // Write your code here
    // check the remainder of k%a.length;
    // define an array with the a.length of 0, newArr= new Array(len).fill(0);
    // loop through array, and change element in newArr
    
    let remainder = k%a.length;
    let newArr= new Array(a.length).fill(0);
     console.log(newArr)
    for (let i =0; i< a.length; i++){
        if(i+remainder < a.length){
            newArr[i+remainder] = a[i]
        } else{
            newArr[i+remainder -a.length] = a[i]
        }
    }
    let result = []
    for (let i of queries){
        result.push(newArr[i])
    }
    
    console.log(newArr)
    return result

}