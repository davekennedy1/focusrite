import fs from "fs"
import { indexOfNextEmptyLine } from "./utils/indexOfNextEmptyLine"
import { createCard } from "./utils/createCard"

export const parseFile = (fileLocation: string) => {
    const callData: string[] = []
    const calledNumbers: number[] = []
    const cardArr = []
    const result = fs.readFileSync(`./${fileLocation}`, {encoding: 'utf8', flag: 'r'})
    
    const resultArr = result.split('\n')

    // create numbersCalled
    callData.push(...resultArr[0].split(','))
    callData.forEach(num => calledNumbers.push(Number(num)))
    resultArr.splice(0, indexOfNextEmptyLine(resultArr) + 1)

    // create cards
    try {
        while (indexOfNextEmptyLine(resultArr) > 0) {
            cardArr.push(createCard(resultArr))
            resultArr.splice(0, indexOfNextEmptyLine(resultArr) + 1)
        }
        if(cardArr.length === 0) {
            throw new Error("Encountered a formatting error - can't parse cards from provided data")
        }
        return {calledNumbers, cardArr}
    } catch (err) {
        throw new Error(`Encountered a formatting error - ${err}`)
    }
}