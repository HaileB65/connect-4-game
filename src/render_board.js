function buildBoardElement(board){
    let boardElement = c("table", null, "board");

    board.forEach((row, i) => {
        const rowElement = c("tr", null,"board-row");
        row.forEach((value, j) => {
            const cell = createCell(value, i, j);
            rowElement.appendChild(cell);
        })
        boardElement.appendChild(rowElement);
    })
    return boardElement;
}

function handleBoardClick(row, col) {
    updateBoard(row, col);
}

function createCell(value, row, col){
    const cell = c("td", value, "cell");
    if (value != 0){
        const img = c("img", null, "piece");
        if (value === 1) {
            img.src = "imgs/black.jpg";
        } else if (value === 2) {
            img.src = "imgs/red.jpg";
        }
        img.height = 40;
        img.width = 40;
        cell.appendChild(img);
    }
    cell.addEventListener("click", e => {
        handleBoardClick(row, col);
    })
    return cell;
}

function refreshBoard() {
    boardElement = buildBoardElement(board);
    root.replaceChildren(boardElement);
}