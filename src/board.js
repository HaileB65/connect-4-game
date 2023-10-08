const BOARD_SIZE = 15;
const board = buildBoard(BOARD_SIZE);
let turn = 1;

function buildBoard(boardSize) {
    board = [];

    for(let i=0; i!=boardSize; i++){
        board.push([]);
        for (let j=0; j!=boardSize;j++){
            board[i].push(0);
        }
    }

    return board;
}

function updateTurn(turn) {
    if(turn = 1){
        turn = 2;
    }
    if(turn = 2){
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
}