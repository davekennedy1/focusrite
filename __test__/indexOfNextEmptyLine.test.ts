import { indexOfNextEmptyLine } from "../src/utils/indexOfNextEmptyLine"

describe('indexOfNextEmptyLine', () => {
    it('should return the index of the next empty index in the array', () => {
        const arr = [
            '7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1',
            '',
            '22 13 17 11 0',
            '81 2 23 4 24',
            '21 9 141 16 7',
            '61 101 3 18 5',
            '11 12 20 15 19'
          ]
        const result = indexOfNextEmptyLine(arr)
        expect(result).toEqual(1)
    })

    it('should return the index of the next empty index in the array', () => {
        const arr = [
            '22 13 17 11 0',
            '8 2 23 4 24',
            '21 9 14 16 7',
            '6 10 3 18 5',
            '1 12 20 15 19',
            '      ',
            '22 13 17 11 0',
            '8 2 23 4 24',
            '21 9 14 16 7',
            '6 10 3 18 5',
            '1 12 20 15 19'
          ]
        const result = indexOfNextEmptyLine(arr)
        expect(result).toEqual(5)
    })
})