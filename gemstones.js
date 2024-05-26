function gemstones(arr) {
    // Write your code here
    //find the shortest string in the array;
    // loop through the shortest string, and check whether the char is in all th eother 
     let shortest = arr[0].length
     let shortestString = ''
     let array = [];

     for (let element of arr){
         if(element.length <= shortest){
             shortest =element.length;
             shortestString = element
         }
     }
     console.log(shortestString)
     for (let i of shortestString ){
         let count = 0;
         console.log(i)
         console.log(count)
         for (let j = 0; j < arr.length; j++){
             console.log(arr[j].includes(i))
             if(!arr[j].includes(i)){
                 break;
             } else {
                 count ++
             }
             if (count === arr.length && !array.includes(i)){
                 array.push(i)
             }
         }
        
     }
     
     return array.length;
}
