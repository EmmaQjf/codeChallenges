function migratoryBirds(arr) {
    // Write your code here
    // frequency counter 
    let fc={}
    let maxElement ;
    let maxCount = 0;
    for (let i = 0; i < arr.length; i++){
        let element = arr[i]
        if(fc[element]){
            fc[element]  = fc[element] +1 
        } else {
            fc[element]  = 1
        }
        if (fc[element] > maxCount){
            maxElement= element;
            maxCount = fc[element]
        }
    }
    return maxElement

}
