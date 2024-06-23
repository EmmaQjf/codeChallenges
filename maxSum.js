function maximumSum(a, m) {
    // Write your code here
    // sliding window 
  
    let max = 0;
    for (let n = 0; n<a.length; n++){
        let i  = 0; 
        while (i+n < a.length){
            let sum = a.slice(i,i+n+1).reduce((a,b)=> a+b,0);
          
             let remainder = parseInt(sum)%m
             console.log(sum, remainder)
            if(remainder > max){
             max = remainder 
              }
             i=i+1
      }
    }
    return max;
}

