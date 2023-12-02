import { parseFile } from "../src/parseFile"

describe('parseFile', () => {
    it('should parse the correct numbers called and card array from a correctly formatted file', () => {
        const result = parseFile('./__test__/testDataFiles/bingoData1.txt')
        expect(result.calledNumbers).toEqual([
            7,  4,  9,  5,  11,
            17, 23, 2,  0,  14,
            21, 24, 10, 16, 13,
            6,  15, 25, 12, 22,
            18, 20, 8,  19, 3,
            26, 1
        ])
        expect(result.cardArr).toEqual(
            [
              [
                [ 22, 13, 17, 11, 0 ],
                [ 8, 2, 23, 4, 24 ],
                [ 21, 9, 14, 16, 7 ],
                [ 6, 10, 3, 18, 5 ],
                [ 1, 12, 20, 15, 19 ]
              ]
            ]
        )
    })

    it('should parse the correct numbers called and card array from a correctly formatted multi-card file', () => {
        const result = parseFile('./__test__/testDataFiles/bingoData2.txt')
        expect(result.calledNumbers).toEqual([
            7,  4,  9, 5, 11,
            17, 23, 2, 0, 14,
            21, 24, 10, 16, 13,
            6,  15, 25, 12, 22,
            18, 20, 8, 19, 3,
            26, 1
        ])
        expect(result.cardArr).toEqual(
            [
                [
                  [ 22, 13, 17, 11, 0 ],
                  [ 8, 2, 23, 4, 24 ],
                  [ 21, 9, 14, 16, 7 ],
                  [ 6, 10, 3, 18, 5 ],
                  [ 1, 12, 20, 15, 19 ]
                ],
                [
                  [ 3, 15, 0, 2, 22 ],
                  [ 9, 18, 13, 17, 5 ],
                  [ 19, 8, 7, 25, 23 ],
                  [ 20, 11, 10, 24, 4 ],
                  [ 14, 21, 16, 12, 6 ]
                ],
                [
                  [ 14, 21, 17, 24, 4 ],
                  [ 10, 16, 15, 9, 19 ],
                  [ 18, 8, 23, 26, 20 ],
                  [ 22, 11, 13, 6, 5 ],
                  [ 2, 0, 12, 3, 7 ]
                ]
            ]
        )
    })

    it('should throw an error when given a card with 4 numbers in a row', () => {
      expect(() => {parseFile('./__test__/testDataFiles/bingoBadData1.txt')}).toThrow('Encountered a formatting error - Error: Incorrectly formatted amount of numbers in line 2 - in the card starting with 22,13,17,11,0,8,2,23,4,24: there should be 5 numbers per row')
    })

    it('should throw an error when given a card with only 4 rows', () => {
      expect(() => {parseFile('./__test__/testDataFiles/bingoBadData2.txt')}).toThrow('Encountered a formatting error - Error: Incorrectly formatted amount of numbers in line 2 - in the card starting with 3,15,0,2,22,9,18,13,17,5: there should be 5 numbers per row')
    })

    it('should throw an error when given no cards', () => {
      expect(() => {parseFile('./__test__/testDataFiles/bingoBadData3.txt')}).toThrow("Encountered a formatting error - Error: Encountered a formatting error - can't parse cards from provided data")
    })

    it('should throw an error when given characters other than numbers in the .txt file', () => {
      expect(() => {parseFile('./__test__/testDataFiles/bingoBadData4.txt')}).toThrow("Encountered a formatting error - Error: Encountered a formatting error - can't parse cards from provided data")
    })
})