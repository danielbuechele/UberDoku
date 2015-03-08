# UberDoku
by Daniel Büchele

This is an implementation of a web-based Soduku game.

## Setup
```
npm install
npm install webpack -g
webpack
```
Then open `index.html` in your browser.

## Technologies used
The game uses the [sudoku-generator](https://github.com/dachev/sudoku) by *dachev* to generate and solve the puzzles. The state of the game is saved in the browser's local storage, so it persists a reload. All JavaScript, templates and LESS-files are compiled using `webpack`.

* `UberDoku` is the main game that saves the game state and creates the components of the game
* `SudokuField` 82 instances of this class are created representing the fields of the puzzle
* `Button` the buttons above the puzzle to create a new game, solve the game or reset it
* `NumberPicker` is instantiated inside every SudokuField, this is the UI to select the number for the field
* `Completed` is the counter of how many fields of the puzzle are filled out

## Improvements
There are a couple of idea I have about improving this game:

* only let the user pick numbers that observe the game's rules
* hint the user which numbers are wrong
* saving the game's state on the server side to share with others