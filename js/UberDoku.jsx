var React = require('react');
var SudokuSet = require('./SudokuSet.jsx');

module.exports = React.createClass({

	getInitialState: function () {
		return {
			numbers: [
				[
					-1,2,3,4,5,6,7,8,9
				],[
					-1,2,3,4,5,6,7,8,9
				],[
					-1,2,3,4,5,6,7,8,9
				],[
					-1,2,3,4,5,6,7,8,9
				],[
					-1,2,3,4,5,6,7,8,9
				],[
					-1,2,3,4,5,6,7,8,9
				],[
					-1,2,3,4,5,6,7,8,9
				],[
					-1,2,3,4,5,6,7,8,9
				],[
					-1,2,3,4,5,6,7,8,9
				]
			]
		};
	},

	render: function () {
		return (
			<div>
				<h1>UberDoku</h1>
				<div className="sudokuSetRow">
					<SudokuSet numbers={this.state.numbers[0]} />
					<SudokuSet numbers={this.state.numbers[1]} />
					<SudokuSet numbers={this.state.numbers[2]} />
				</div>
				<div className="sudokuSetRow">
					<SudokuSet numbers={this.state.numbers[3]} />
					<SudokuSet numbers={this.state.numbers[4]} />
					<SudokuSet numbers={this.state.numbers[5]} />
				</div>
				<div className="sudokuSetRow">
					<SudokuSet numbers={this.state.numbers[6]} />
					<SudokuSet numbers={this.state.numbers[7]} />
					<SudokuSet numbers={this.state.numbers[8]} />
				</div>
			</div>
		);
	}
});
