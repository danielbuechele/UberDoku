var React = require('react');
var SudokuField = require('./SudokuField.jsx');
var Buttons = require('./Buttons.jsx');
var sudoku = require('sudoku');

module.exports = React.createClass({

	getInitialState: function () {
		var puzzle = sudoku.makepuzzle();
		return {
			board: puzzle.map(function (e) {
				return {number: e==null? null : e, predefined: (e!=null)};
			})
		};
	},
	
	resetPuzzle: function () {
		this.state.board.forEach(function (e) {
			if (!e.predefined) {
				e.number = null;
			}
		});
		this.setState({board: this.state.board});
	},
	
	solvePuzzle: function () {
		var _self = this;
		var puzzle = sudoku.solvepuzzle(this.state.board.map(function (e) {
			return e.number;
		}));
		
		if (!puzzle) {
			alert('Could not solve this puzzle. You might have selected a wrong number.');
		} else {
			puzzle.forEach(function (solution, i) {
				_self.state.board[i].number = solution;
			});
			this.setState({board: this.state.board});
		}
	},
	
	newPuzzle: function () {
		this.setState(this.getInitialState());
	},

	
	changeNumber: function (i,number) {
		var changedNumbers = this.state.board;
		changedNumbers[i].number = number;
		this.setState({board: changedNumbers});
	},
	
	onClick: function () {
		for(var e in this.refs) {
			this.refs[e].setState(this.refs[e].getInitialState());
		}
	},

	render: function () {
		var _self = this;
		return (
			<div>
				<h1>UberDoku</h1>
				<Buttons newPuzzle={this.newPuzzle} solvePuzzle={this.solvePuzzle} resetPuzzle={this.resetPuzzle} board={this.state.board} />
				{
					this.state.board.map(function (e,i) {
						return (
						<SudokuField
							onClick={_self.onClick}
							onChange={_self.changeNumber}
							board={_self.state.board}
							i={i}
							ref={i} />
						);
					})
				}
			</div>
		);
	}
});
