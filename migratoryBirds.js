// function migratoryBirds(arr) {
//     // Write your code here
//     // frequency counter 
//     let fc={}
//     let maxElement ;
//     let maxCount = 0;
//     for (let i = 0; i < arr.length; i++){
//         let element = arr[i]
//         if(fc[element]){
//             fc[element]  = fc[element] +1 
//         } else {
//             fc[element]  = 1
//         }
//         if (fc[element] > maxCount){
//             maxElement= element;
//             maxCount = fc[element]
//         }
//     }
//     return maxElement

// }


function migratoryBirds(arr) {
    const frequencyCounter = arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});

    let maxCount = 0;
    let maxElements = [];

    for (const bird in frequencyCounter) {
        const count = frequencyCounter[bird];
        if (count > maxCount) {
            maxElements = [bird];
            maxCount = count;
        } else if (count === maxCount) {
            maxElements.push(bird);
        }
    }

    return maxElements[0];
}