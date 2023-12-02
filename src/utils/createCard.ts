export const createCard = (arr: string[]) => {
    let card = [];

    for(let loop = 0; loop < 5; loop++) {
        if(arr[loop]) {
            const line = arr[loop].split(' ')
            const numberLine: number[] = []
            line.forEach(num => numberLine.push(Number(num)))
            if(numberLine.length === 5) {
                card.push(numberLine)
            } else {
                throw new Error(`Incorrectly formatted amount of numbers in line ${loop} - in the card starting with ${card}: there should be 5 numbers per row`)
            }
        } else {
            throw new Error(`Incorrectly formatted amount of lines in card: ${card} - there should be 5 lines per card`)
        } 
    }
    return card.length === 5 ? card : []
}