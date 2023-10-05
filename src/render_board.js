function buildBoardElement(board){

    // Building the board container element.
    let boardElement = c("table", null, "board");

    board.forEach((row) => {

        // Every cell needs to go in a row
        const rowElement = c("tr", null,"board-row");

        row.forEach((value) => {
            const cell = c("td", value, "cell");

            // Adding the cell to the row
            rowElement.append(cell);
        })

        // Adding the row to the board
        boardElement.append(rowElement);
    })
    return boardElement;
}