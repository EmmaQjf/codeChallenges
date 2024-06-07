function divisibleSumPairs(n, k, ar) {
    // Write your code here
    // loop through the ar, define the current element and rest of the array as subArray: subArray =array.slice(i)
    // define the pairs =0
    //map through the subArray and check whether the element and current element can be divided by k; if so, create a pairArray and caculate the length and add the length to the pairs variable.
    
    let pairs = 0;
    for (let i = 0; i < n  ; i++){
        let current = ar[i];
       
        let subArray = ar.slice(i+1)
         console.log(current,subArray)
        let pairsArray = subArray.filter(x=> (x+current)%k === 0)
        console.log(pairsArray)
        if (pairsArray){
            pairs = pairs +pairsArray.length;
        }
    }
    
    return pairs
    

}
