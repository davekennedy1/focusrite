import { WinResponse } from "./models/WinResponse";
import { parseFile } from "./parseFile"
import victoryCheck from "./victoryCheck"
import chalk from 'chalk';

const app = () => {
    try {
        console.log(chalk.magenta('Welcome to Bingo Challenge'))
        console.log('Parsing file data...')
        const result = (parseFile(process.argv[2]))

        const numbersToBeCalled = result.calledNumbers
        const cardArr = result.cardArr
        const calledNumbers = []
        let winner: WinResponse = {
            winner: false,
            winMessage: ''
        }

        console.log(chalk.blue('Checking victory conditions'))
        
        for (let loop = 0; loop < numbersToBeCalled.length; loop++) {
            calledNumbers.push(numbersToBeCalled[loop])
            if(loop > 4) {
                winner = victoryCheck(cardArr, calledNumbers)
                if (winner.winner) {
                    console.log(chalk.yellow(`BINGO! Winner winner giant squid dinner!`))
                    console.log(chalk.bgGreen(winner.winMessage))
                    break
                }
            }
        }
        
        if (!winner.winner) {
            console.log(chalk.red('No winning cards here - better luck next time'))
        }
    } catch(err) {
        console.error(chalk.bgRed('It appears we have a data file formatting issue', err))
    }    
}

app()
