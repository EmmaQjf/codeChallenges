function countingValleys(steps, path) {
    // Write your code here
    // map through and replace all the U with 1 and D with -1
    let pathNum = path.split('').map((x) => {
        if (x == 'U'){
           return x=1
        }else if(x=='D'){
           return  x=-1
        }
    })
  console.log(pathNum)
  let sum = 0;
  let pathSum =[]
  let vallyCount = 0;
  for(let i = 0; i < pathNum.length; i++){
     sum = sum + pathNum[i]
     pathSum.push(sum)
     if(sum === 0 && pathSum[i-1] == '-1'){
       vallyCount++
     }
    
  }
  // let pathSum = pathNum.map((x)=>sum + parseInt(x))
 return vallyCount
}
