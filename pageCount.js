
function pageCount(n, p) {
    // Write your code here
    let turnCount = Math.floor(n/2)
    if(p<=turnCount){
        return Math.floor(p/2)
    }else {
        if(n%2 === 1){
            return Math.floor((n-p)/2)  
        } else {
            return Math.floor((n+1-p)/2 )  
        }
        
    }
}