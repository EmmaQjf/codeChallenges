function birthdayCakeCandles(candles) {
    // Write your code here
    // frequecy counter
    let maximum = 0;
    let count = 0;
    let fc = {}
    
    for (let element of candles){
        fc[element] = (fc[element] || 0) + 1;
         if (element >= maximum){
             maximum = element;
             count = fc[element]
         }
    }
    return count

}