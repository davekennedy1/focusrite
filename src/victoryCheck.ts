const victoryCheck = (cardArr: number[][][], numbersCalled: number[]) => {
    let winner = false;
    let winMessage = 'No winning card present, our tentacled friend gets the better of you and your submarine!';
    const checkRow = (row: number[]) => {
        let result = false;
        for(let loop = 0; loop < row.length; loop++) {
            result = numbersCalled.includes(Number(row[loop]))
            // if early index has not been called don't check the rest of the row
            if (!result) {
                break
            }
        }
        return result
    }

    const createAndCheckColumns = (card: number[][]) => {
        let winningColumn = null;
        let column = [];
        for(let columnNum = 0; columnNum < 5; columnNum++) {
            for(let lineLoop = 0; lineLoop < 5; lineLoop++) {
                column.push(card[lineLoop][columnNum])
            }
            winningColumn = checkColumn(column, columnNum)
            if (winningColumn === null) {
                column = [];
            } else {
                break;
            }
        }
        return winningColumn
    }

    const checkColumn = (column: number[], columnNum: number) => {
        let winningColumn = null;
        let result = false;
        for(let columnLoop = 0; columnLoop < 5; columnLoop++) {
            result = numbersCalled.includes(column[columnLoop])
            if (!result) {
                winningColumn = null
                break
            }
            if (result && columnLoop === 4) {
                winningColumn = columnNum;
            }
        }
        return winningColumn
    }

    const checkEarliestWin = (row: number, column: number, cardNumber: number) => {
        let winningMessage = ''
        if(row > 0 && column > 0) {
            if (row < column && row > 0) {
                winningMessage = `Earliest win: card ${cardNumber} row ${row}`
            } else if (row > column && column > 0) {
                winningMessage = `Earliest win: card ${cardNumber} column ${column}`
            } else if(row > 0 && column > 0) {
                winningMessage = `Earliest win: card ${cardNumber} either column ${column} or row ${row}`
            }
        } else {
            if(row > 0) {
                winningMessage = `Earliest win: card ${cardNumber} row ${row}`
            } else {
                winningMessage = `Earliest win: card ${cardNumber} column ${column}`
            }
        }
        return winningMessage
    }

    for(let cardLoop = 0; cardLoop < cardArr.length; cardLoop++) {
        winner = false
        
        let earliestWinningRow = 0;
        let earliestWinningColumn = 0;

        for(let loop = 0; loop < cardArr[cardLoop].length; loop++) {
            if (checkRow(cardArr[cardLoop][loop])) {
                earliestWinningRow = loop + 1
                winner = true
                break;
            }
        }
        const columnResult = createAndCheckColumns(cardArr[cardLoop])
        for(let loop = 0; loop < cardArr[cardLoop].length; loop++) {
            if (columnResult !== null) {
                earliestWinningColumn = Number(columnResult) + 1
                winner = true
                break;
            }
        }
        if (winner){
             winMessage = checkEarliestWin(earliestWinningRow, earliestWinningColumn, cardLoop + 1)
             break;
        } 
    }
    return {winner, winMessage}
}

export default victoryCheck