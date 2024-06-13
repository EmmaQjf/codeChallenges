function permutationEquation(p) {
    // Write your code here
    // based on the x, find the index ( index)that has the element x,  positionX = index + 1
    // based on the position x, find the positonY
    // define an empty array and push the positionY to the array
    let result = []
    let x = 1;
    while ( x <= p.length){
        let positionX = p.indexOf(x) + 1
        let positionY = p.indexOf(positionX) +1
        x++;
        result.push(positionY)
    }
        
    return result  

}