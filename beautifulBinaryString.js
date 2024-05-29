function beautifulBinaryString(b) {
    // Write your code here
    //loop through the bstring and check whether s[i],s[i+1],s[i+2] follows the pattern.if yes, count ++; i increases 2
    // if not, continue to i ++
    
    let count = 0;
    for (let i = 0; i<= b.length -3; i++){
        if (b[i] == '0' && b[i+1] == '1'&&b[i+2] == '0'){
            count ++;
            i=i+2
        } 
    }
    return count;
}