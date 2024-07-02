function formingMagicSquare(s) {
    // Write your code here
    // s[1][1] must be equal to 5 and sum of the opposite two numbers around s[1][1] must equal to 10;
    // all the number 1 -9 must be used once 
    let directions = [[[0,0],[2,2]],[[0,2],[2,0]],[[0,1],[2,1]],[[1,0],[1,2]]];
    let matrix = Array(3).fill([]).map(([])=>Array(3).fill(''))
    
    let elementA ; let elementB
    let cost = 0;
    if (s[1][1] != 5){
        cost = Math.abs(s[1][1] - 5)
    }
    
    matrix[1][1] = 5;
    for (let i = 0; i<=3; i++){
       let arr = directions[i]
  
        elementA = s[arr[0][0]][arr[0][1]]
        elementB = s[arr[1][0]][arr[1][1]]
        if (elementA + elementB === 10){
            matrix[arr[0][0]][arr[0][1]] = elementA;
            matrix[arr[1][0]][arr[1][1]] = elementB;
        }
    }
    for (let row = 0; row <=2; row ++){
     
        if (s[row][0]+ s[row][1]+s[row][2] === 15){
            matrix[row][0] = s[row][0];
              matrix[row][1] = s[row][1];
                matrix[row][2] = s[row][2];    
        }
    }
    for (let col = 0;col<=2; col ++){

        if (s[0][col]+ s[1][col]+s[2][col] === 15){
            matrix[0][col] = s[0][col];
              matrix[1][col] = s[1][col];
                matrix[2][col] = s[2][col];    
        }
    }
    
    for (let row = 0; row <=2; row ++){
      console.log(matrix[row])
      let falsyCount = 0;
      let sum = 0;
      matrix[row].map((element) =>{
        if (!element){
          falsyCount ++;
        } else{
          sum = sum +element;
        }
      })
      console.log(falsyCount, sum)
      if (falsyCount === 1){
        let idx = matrix[row].indexOf('')
        matrix[row][idx]= 15-sum
        cost = cost + Math.abs(matrix[row][idx] -s[row][idx])
      }
    }
    
    for (let col = 0; col <=2; col ++){
      console.log(matrix[col])
      let colArr = [matrix[0][col],matrix[1][col],matrix[2][col]]
      let falsyCount = 0;
      let sum = 0;
      colArr.map((element) =>{
        if (!element){
          falsyCount ++;
        } else{
          sum = sum +element;
        }
      })
      console.log(falsyCount, sum)
      if (falsyCount === 1){
        let idx = colArr.indexOf('')
        matrix[idx][col]= 15-sum
        cost = cost + Math.abs(matrix[idx][col] -s[idx][col])
      }
    }
    return cost;

}