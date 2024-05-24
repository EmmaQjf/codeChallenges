function marsExploration(s) {
    // Write your code here
    //check how many sos messages are sent,n =  s.length/3
    // loop through , i = i++
    
    let n = s.length/3
    let change = 0;
    for (let i = 0; i < n; i++){
        if(s[i*3] !== 'S'){
            change ++;
        }   
         if(s[i*3 + 1] !== 'O'){
            change ++;
        }   
         if(s[i*3 +2] !== 'S'){
            change ++;
        }   
    }
    return change
}