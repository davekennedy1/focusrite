# Focusrite Bingo Game
Bingo game tech test for Focusrite written in node Typescript

Welcome to the Bingo Challenge. As the captain of a submarine stopped by a giant squid, you'll need to win a bingo game to continue your
journey.

## Data set file formatting
It is understood the data set will adhere to the following rules:
1. The drawn numbers must appear first in the file and be separated from the cards by a line break
2. The drawn numbers for the game must have commas between each number.
3. The drawn numbers must appear first in the file and be separated from the cards by a line break
4. Card numbers must be separated by a space
5. Each card row must have 5 numbers and end with a line break
6. Each card must have 5 rows
7. Only numbers should appear in the data set file

## Running the app

install node packages
```
npm i
```

Either move the .txt file you want to test to the root folder of the app or use either of the two provided .txt files
start the game using your desired .txt file
```
npm start filename.txt 
```

simply replace 'filename' with the desired filename eg 
```
npm start bingoGame1.txt
```

For ease of use three data sets are already provided in the root folder called `bingoGame1.txt`, `bingoGame2.txt` and a losing data set in `bingoGame3.txt`

## Testing 
The app uses jest testing library

Tests can be ran by
```
npm test
```
