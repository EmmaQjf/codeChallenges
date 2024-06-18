function knightlOnAChessboard(n) {
    // Write your code here
    // define the current position of the Knight, x, y
    // find the smaller number c between a and b KnightL(a,b) and define d as the bigger number
    // loop through the axisX , if increase the x= x +c , if x < n-1 and y +d < n-1; currentPosition is the new X(x=x+c) and new Y(y+d)
    // if x < n-1 and y +d > n-1; x = x+c and y = y-n
    // 
    // create a result board 
    let board = new Array(n - 1); 
    for (let i = 0; i < n - 1; i++) {
        board[i] = new Array(n - 1).fill(0);
    }

    // Function to check if a position (x, y) is inside the board
    function isInBounds(x, y) {
        return x >= 0 && x < n && y >= 0 && y < n;
    }
    

}