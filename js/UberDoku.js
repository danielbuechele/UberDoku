var SudokuField = require('./SudokuField.js');
var Button = require('./Button.js');
var Completed = require('./Completed.js');
var sudoku = require('sudoku');

function UberDoku($el) {
	this.$el = $el;
	
	$el.append(require('../hbs/UberDoku.hbs'));
	
	new Button($el.find('.buttons'),"New","green", this.newPuzzle.bind(this));
	new Button($el.find('.buttons'),"Solve","yellow", this.solvePuzzle.bind(this));
	new Button($el.find('.buttons'),"Reset","red", this.resetPuzzle.bind(this));
	
	this.completed = new Completed($el.find('.buttons'));
	
	this.initGame($el);
}

UberDoku.prototype.initGame = function ($el) {
	var puzzle = JSON.parse(localStorage.getItem("board"));
	if (!puzzle) {
		puzzle = sudoku.makepuzzle().map(function (e) {
			return {number: e==null? null : e, predefined: (e!=null)};
		});
		localStorage.setItem("board", JSON.stringify(puzzle));
	}
	
	if (this.sudokuFields) {
		this.sudokuFields.forEach(function (e) {
			e.$el.remove();
		});
	}
	
	this.sudokuFields = [];
	for (var i = 0; i < 81; i++) {
		this.sudokuFields.push(new SudokuField($el, puzzle[i], this.gameUpdated.bind(this)));
	}
	
	this.completed.setCompleted(this.sudokuFields);
};

UberDoku.prototype.solvePuzzle = function () {
	var _self = this;
	var puzzle = sudoku.solvepuzzle(this.sudokuFields.map(function (e) {
		return e.field.number;
	}));
	
	if (!puzzle) {
		alert('Could not solve this puzzle. You might have selected a wrong number.');
	} else {
		puzzle.forEach(function (solution, i) {
			_self.sudokuFields[i].changeNumber(solution+1);
		});
	}
};

UberDoku.prototype.resetPuzzle = function () {
	this.sudokuFields.forEach(function (e) {
		if (!e.field.predefined) {
			e.changeNumber(null);
		}
	});
};

UberDoku.prototype.newPuzzle = function () {
	if (confirm('Are you sure end the current game and start a new one?')) {
		localStorage.removeItem("board");
		this.initGame(this.$el);
	}
};

UberDoku.prototype.gameUpdated = function (i,number) {
	var saveObject = this.sudokuFields.map(function (e) {
		return {number: e.field.number, predefined: e.field.predefined};
	});
	localStorage.setItem("board", JSON.stringify(saveObject));
	this.completed.setCompleted(this.sudokuFields);
};

module.exports = UberDoku;