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
    console.log(`updating row ${row} and column ${col}`)
}

function createCell(value, row, col){
    cell = c("td", value, "cell");
    cell.addEventListener("click", e => {
        handleBoardClick(row, col);
    })
    return cell;
}