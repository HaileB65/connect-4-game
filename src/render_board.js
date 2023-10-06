function buildBoardElement(board){
    let boardElement = c("table", null, "board");

    board.forEach((row) => {
        const rowElement = c("tr", null,"board-row");

        row.forEach((value) => {
            const cell = c("td", value, "cell");
            rowElement.append(cell);
        })

        boardElement.append(rowElement);
    })
    return boardElement;
}