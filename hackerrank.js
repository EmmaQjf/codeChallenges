function hackerrankInString(s) {
    // Write your code here
    // regular expression /(b.*?ar)
    let reg = /.*?h.*?a.*?c.*?k.*?e.*?r.*?r.*?a.*?n.*?k.*?/
    if (s.match(reg)){
        return 'YES'
    } else {
        return 'NO'
    }

}
