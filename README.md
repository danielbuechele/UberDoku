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
The interface is implemented using [react.js](http://facebook.github.io/react/). The game uses the [sudoku-generator](https://github.com/dachev/sudoku) by *dachev* to generate and solve the puzzles. The state of the game is saved in the browser's local storage, so it persists a reload.

## Improvements
There are a couple of idea I have about improving this game:

* only let the user pick numbers that observe the game's rules
* hint the user which numbers are wrong
* saving the game's state on the server side to share with others