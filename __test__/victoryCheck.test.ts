import victoryCheck from "../src/victoryCheck"
type WinResponse = {
    winner: boolean,
    winMessage: string
}
let calledNumbers: number[] = []
let winResponse: WinResponse
const singleCardArr = [
    [
        [1, 66, 45, 56, 81],
        [6, 54, 48, 74, 5],
        [13, 22, 83, 14, 9],
        [51, 32, 31, 47, 59],
        [99, 34, 20, 61, 58],
    ]
]

const multiCardArr = [
    [
        [22, 13, 17, 11, 0],
        [8, 2, 23, 4, 24],
        [21, 9, 14, 16, 7],
        [6, 10, 3, 18, 5],
        [1, 12, 20, 15, 19],
    ],
    [
        [3, 15, 0, 2, 22],
        [9, 18, 13, 17, 5],
        [19, 8, 7, 25, 23],
        [20, 11, 10, 24, 4],
        [14, 21, 16, 12, 6],
    ],
    [
        [14, 21, 17, 24, 4],
        [10, 16, 15, 4, 19],
        [18, 8, 23, 26, 20],
        [22, 11, 13, 6, 5],
        [2, 0, 12, 3, 7],
    ],
]

describe('VictoryCheck', () => {
    beforeEach(() => {
        calledNumbers = []
        winResponse = {
            winner: false,
            winMessage: ''
        }
    })

    it('should find a winning row', () => {
        const numbersToBeCalled = [13,48,22,32,31,83,51,47,59,14,9] 
        for (let loop = 0; loop < numbersToBeCalled.length; loop++) {
            calledNumbers.push(numbersToBeCalled[loop])
            if(loop > 4) {
                winResponse = victoryCheck(singleCardArr, calledNumbers)
                if (winResponse.winner) {
                    break
                }
            }
        }   

        expect(winResponse.winner).toBeTruthy()
        expect(winResponse.winMessage).toBe('Earliest win: card 1 row 4')
    })

    it('should find a winning column before a winning row', () => {
        const numbersToBeCalled = [13,45,22,48,31,83,20,47,59,14,9]

        for (let loop = 0; loop < numbersToBeCalled.length; loop++) {
            calledNumbers.push(numbersToBeCalled[loop])
            if(loop > 4) {
                winResponse = victoryCheck(singleCardArr, calledNumbers)
                if (winResponse.winner) {
                    break
                }
            }
        }   

        expect(winResponse.winner).toBeTruthy()
        expect(winResponse.winMessage).toBe('Earliest win: card 1 column 3')
    })

    it('should find a winning column and a winning row at the same time', () => {
        const numbersToBeCalled = [13,45,22,48,31,14,20,9,83,14,99]

        for (let loop = 0; loop < numbersToBeCalled.length; loop++) {
            calledNumbers.push(numbersToBeCalled[loop])
            if(loop > 4) {
                winResponse = victoryCheck(singleCardArr, calledNumbers)
                if (winResponse.winner) {
                    break
                }
            }
        }  

        expect(winResponse.winner).toBeTruthy()
        expect(winResponse.winMessage).toBe('Earliest win: card 1 either column 3 or row 3')
    })

    it('should not find a winning card', () => {
        const numbersToBeCalled = [99,98,97,96,95,94,93,92,91,90,89]
        
        for (let loop = 0; loop < numbersToBeCalled.length; loop++) {
            calledNumbers.push(numbersToBeCalled[loop])
            if(loop > 4) {
                winResponse = victoryCheck(singleCardArr, calledNumbers)
                if (winResponse.winner) {
                    break
                }
            }
        }   

        expect(winResponse.winner).toBeFalsy()
        expect(winResponse.winMessage).toBe('No winning card present, our tentacled friend gets the better of you and your submarine!')
    })

    it('should find the first winning row in multi-card mode', () => {
        const numbersToBeCalled = [7,4,9,5,11,17,23,2,0,14,21,24] 
        for (let loop = 0; loop < numbersToBeCalled.length; loop++) {
            calledNumbers.push(numbersToBeCalled[loop])
            if(loop > 4) {
                winResponse = victoryCheck(multiCardArr, calledNumbers)
                if (winResponse.winner) {
                    break
                }
            }
        }   

        expect(winResponse.winner).toBeTruthy()
        expect(winResponse.winMessage).toBe('Earliest win: card 3 row 1')
    })

    it('should find the first winning column ahead of the first winning row in multi-card mode', () => {
        const numbersToBeCalled = [7,4,9,5,11,17,23,2,0,13,21,10,16,14]
        for (let loop = 0; loop < numbersToBeCalled.length; loop++) {
            calledNumbers.push(numbersToBeCalled[loop])
            if(loop > 4) {
                winResponse = victoryCheck(multiCardArr, calledNumbers)
                if (winResponse.winner) {
                    break
                }
            }
        }   

        expect(winResponse.winner).toBeTruthy()
        expect(winResponse.winMessage).toBe('Earliest win: card 2 column 3')
    })

    it('should not find a winning card in multi-card mode', () => {
        const numbersToBeCalled = [99,98,97,96,95,94,93,92,91,90,89]
        
        for (let loop = 0; loop < numbersToBeCalled.length; loop++) {
            calledNumbers.push(numbersToBeCalled[loop])
            if(loop > 4) {
                winResponse = victoryCheck(multiCardArr, calledNumbers)
                if (winResponse.winner) {
                    break
                }
            }
        }   

        expect(winResponse.winner).toBeFalsy()
        expect(winResponse.winMessage).toBe('No winning card present, our tentacled friend gets the better of you and your submarine!')
    })
})