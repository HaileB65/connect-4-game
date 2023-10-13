const BOARD_SIZE = 15;
const board = buildBoard(BOARD_SIZE);
let turn = 1;

const LINES = [
    [ // East
        [0, 1], 
        [0, 2], 
        [0, 3], 
    ],
    [ // South-East
        [1, 1], 
        [2, 2], 
        [3, 3], 
    ],
    [ // South
        [1, 0], 
        [2, 0], 
        [3, 0], 
    ],
    [ // South-West
        [1, -1], 
        [2, -2], 
        [3, -3], 
    ],
];

function buildBoard(boardSize) {
    const board = [];
    for(let i=0; i!=boardSize; i++){
        board.push([]);
        for (let j=0; j!=boardSize;j++){
            board[i].push(0);
        }
    }
    return board;
}

function updateTurn() {
    if(turn === 1){
        turn = 2;
    } else if(turn === 2){
        turn = 1;
    }  else {
        throw "Invalid turn value";
    }
}

function updateBoard(row, col) {
    const currentValue = board[row][col];

    if (currentValue === 0) {
        board[row][col] = turn;
    } else {
        alert("invalid move");
        return;
    }

    updateTurn();
    return checkBoardForWinner();
}

function checkBoardForWinner() {
    for (const [i, row] of board.entries()) {
        for (const [j] of row.entries()) {
            const winner = isConnectFour(i, j);
            if (winner !== 0) {
                return winner;
            }
        }
    }
}

function isConnectFour(row, col) {
    for (const line of LINES) {
        const threeNextPositions = line.map((transform) => {
            const newRow = row + transform[0];
            const newCol = col + transform[1];
            if (newRow >= board.length || newRow < 0) return undefined;
            if (newCol >= board[0].length || newCol < 0) return undefined;
            return board[newRow][newCol];
        });

        if (threeNextPositions.some((pos) => pos === undefined)) {
           return 0;
        }

        const positions = [board[row][col], ...threeNextPositions];

        if (positions.every((pos) => pos === 1)) {
            return 1;
        } else if (positions.every((pos) => pos === 2)) {
            return 2;
        }
    }
    return 0;
}