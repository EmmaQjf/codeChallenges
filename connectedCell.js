function connectedCell(matrix) {
    // Write your code here
    let maxRegion = 0;
    let rows = matrix.length;
    let cols = matrix[0].length;
    
    //
     const visited = new Array(rows).fill([]).map(()=> (new Array(rows).fill(false)));
    
    // within the matrix boundry 
      function isValid(x, y) {
        return x >= 0 && x < rows && y >= 0 && y < cols;
    }
    // define directions
     const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1],   
        [-1, -1], [-1, 1], [1, -1], [1, 1] 
    ];
    function dfs(row,col){
        const stack = [[row,col]];
       visited[row][col] = true;
       let region= 0;
       while (stack.length > 0) {
         const [x, y] = stack.pop();
         region ++;
         for (let dir of directions){
                let newX = x + dir[0];
                let newY= y + dir[1];
                if(isValid(newX,newY) && matrix[newX][newY] === 1 && !visited[newX][newY]){
                  visited[newX][newY] = true;
                    stack.push([newX,newY]);
            }
         }
        
       }
        return region
    }
           

    let y = 0;
    for (let x = 0; x < rows; x++){
        while (y < cols){
            if (matrix[x][y] === 1 && !visited[x][y]) {
                const currentRegion = dfs(x, y);
                maxRegion = Math.max(maxRegion, currentRegion);
            }
            
            y++;
            }
        }
       
    
   return maxRegion
}