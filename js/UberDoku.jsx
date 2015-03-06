var React = require('react');
var SudokuField = require('./SudokuField.jsx');
var Buttons = require('./Buttons.jsx');
var sudoku = require('sudoku');

module.exports = React.createClass({

	getInitialState: function () {
		var board = sudoku.makepuzzle().map(function(e, i) {
			return {number: e, predefined: (e!=null)};
		})
		return {
			board: board
		};
	},
	
	resetState: function () {
		var numbers = this.state.numbers;
		numbers.forEach(function (row) {
			row.forEach(function(n) {
				if (!n.predefined) {n.number = -1;}
			});
		});
		this.setState({board: numbers});
	},
	
	changeNumber: function (i,number) {
		console.log(i,number);
		var changedNumbers = this.state.numbers;
		changedNumbers[i].number = number;
		this.setState({numbers: changedNumbers});
	},

	render: function () {
		var _self = this;
		console.log(this.state.board);
		return (
			<div>
				<h1>UberDoku</h1>
				<Buttons reset={this.resetState} numbers={this.state.board} />
				{
					this.state.board.map(function (e,i) {
						return <SudokuField onChange={_self.changeNumber} board={_self.state.board} i={i} />;
					})
				}
			</div>
		);
	}
});
