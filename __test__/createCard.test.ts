import { createCard } from "../src/utils/createCard"

describe('CreateCard', () => {
    it('should create a card from a given valid input', () => {
        const calledNumbers = [
            '22 13 17 11 0', 
            '8 2 23 4 24',
            '21 9 14 16 7',  
            '6 10 3 18 5',
            '1 12 20 15 19', 
          ]
        const result = createCard(calledNumbers)
        expect(result).toEqual([
            [ 22, 13, 17, 11, 0 ],
            [ 8, 2, 23, 4, 24 ],
            [ 21, 9, 14, 16, 7 ],
            [ 6, 10, 3, 18, 5 ],
            [ 1, 12, 20, 15, 19 ]
          ])
    })

    it('should throw an error from a row being too long', () => {
        const calledNumbers = [
            '22 13 17 11 0 52', 
            '8 2 23 4 24',
            '21 9 14 16 7',  
            '6 10 3 18 5',
            '1 12 20 15 19', 
          ]
        expect(() => {createCard(calledNumbers)}).toThrow('Incorrectly formatted amount of numbers in line 0 - in the card starting with : there should be 5 numbers per row')
    })

    it('should throw an error from a row being too short', () => {
      const calledNumbers = [
          '22 13 17 11 0', 
          '8 2 23 4 24',
          '21 9 14 16',  
          '6 10 3 18 5',
          '1 12 20 15 19', 
        ]
      expect(() => {createCard(calledNumbers)}).toThrow('Incorrectly formatted amount of numbers in line 2 - in the card starting with 22,13,17,11,0,8,2,23,4,24: there should be 5 numbers per row')
    })

    it('should throw an error from a card being too short in length', () => {
      const calledNumbers = [
          '22 13 17 11 0', 
          '8 2 23 4 24',
          '6 10 3 18 5',
          '1 12 20 15 19', 
        ]
      expect(() => {createCard(calledNumbers)}).toThrow('Incorrectly formatted amount of lines in card: 22,13,17,11,0,8,2,23,4,24,6,10,3,18,5,1,12,20,15,19 - there should be 5 lines per card')
    })

    it('should create a 5 row card from 6 row input ditching the last row', () => {
      const calledNumbers = [
          '22 13 17 11 0', 
          '8 2 23 4 24',
          '21 9 14 16 7',
          '6 10 3 18 5',
          '1 12 20 15 19',
          '21 9 14 16 7', 
        ]
        const result = createCard(calledNumbers)

        expect(result).toEqual([
          [ 22, 13, 17, 11, 0 ],
          [ 8, 2, 23, 4, 24 ],
          [ 21, 9, 14, 16, 7 ],
          [ 6, 10, 3, 18, 5 ],
          [ 1, 12, 20, 15, 19 ]
        ])
    })
})