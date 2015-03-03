var React = require('react');
var SudokuSet = require('./SudokuSet.jsx');

module.exports = React.createClass({

	getInitialState: function () {
		return {
			numbers: [
				[
					{predefined: true, number: -1},
					{predefined: false, number: 2},
					{predefined: true, number: 3},
					{predefined: false, number: 4},
					{predefined: false, number: 5},
					{predefined: false, number: 6},
					{predefined: true, number: 7},
					{predefined: false, number: 8},
					{predefined: true, number: 9}
					
				],[
					{predefined: true, number: -1},
					{predefined: false, number: 2},
					{predefined: true, number: 3},
					{predefined: false, number: 4},
					{predefined: false, number: 5},
					{predefined: false, number: 6},
					{predefined: true, number: 7},
					{predefined: false, number: 8},
					{predefined: true, number: 9}
				],[
					{predefined: true, number: -1},
					{predefined: false, number: 2},
					{predefined: true, number: 3},
					{predefined: false, number: 4},
					{predefined: false, number: 5},
					{predefined: false, number: 6},
					{predefined: true, number: 7},
					{predefined: false, number: 8},
					{predefined: true, number: 9}
				],[
					{predefined: true, number: -1},
					{predefined: false, number: 2},
					{predefined: true, number: 3},
					{predefined: false, number: 4},
					{predefined: false, number: 5},
					{predefined: false, number: 6},
					{predefined: true, number: 7},
					{predefined: false, number: 8},
					{predefined: true, number: 9}
				],[
					{predefined: true, number: -1},
					{predefined: false, number: 2},
					{predefined: true, number: 3},
					{predefined: false, number: 4},
					{predefined: false, number: 5},
					{predefined: false, number: 6},
					{predefined: true, number: 7},
					{predefined: false, number: 8},
					{predefined: true, number: 9}
				],[
					{predefined: true, number: -1},
					{predefined: false, number: 2},
					{predefined: true, number: 3},
					{predefined: false, number: 4},
					{predefined: false, number: 5},
					{predefined: false, number: 6},
					{predefined: true, number: 7},
					{predefined: false, number: 8},
					{predefined: true, number: 9}
				],[
					{predefined: true, number: -1},
					{predefined: false, number: 2},
					{predefined: true, number: 3},
					{predefined: false, number: 4},
					{predefined: false, number: 5},
					{predefined: false, number: 6},
					{predefined: true, number: 7},
					{predefined: false, number: 8},
					{predefined: true, number: 9}
				],[
					{predefined: true, number: -1},
					{predefined: false, number: 2},
					{predefined: true, number: 3},
					{predefined: false, number: 4},
					{predefined: false, number: 5},
					{predefined: false, number: 6},
					{predefined: true, number: 7},
					{predefined: false, number: 8},
					{predefined: true, number: 9}
				],[
					{predefined: true, number: -1},
					{predefined: false, number: 2},
					{predefined: true, number: 3},
					{predefined: false, number: 4},
					{predefined: false, number: 5},
					{predefined: false, number: 6},
					{predefined: true, number: 7},
					{predefined: false, number: 8},
					{predefined: true, number: 9}
				]
			]
		};
	},
	
	changeNumber: function (i,j,number) {
		console.log(i,j,number);
		var changedNumbers = this.state.numbers;
		changedNumbers[i][j].number = number;
		this.setState({numbers: changedNumbers});
	},

	render: function () {
		return (
			<div>
				<h1>UberDoku</h1>
				<div className="sudokuSetRow">
					<SudokuSet onChange={this.changeNumber} numbers={this.state.numbers} i={0} />
					<SudokuSet onChange={this.changeNumber} numbers={this.state.numbers} i={1} />
					<SudokuSet onChange={this.changeNumber} numbers={this.state.numbers} i={2} />
				</div>
				<div className="sudokuSetRow">
					<SudokuSet onChange={this.changeNumber} numbers={this.state.numbers} i={3} />
					<SudokuSet onChange={this.changeNumber} numbers={this.state.numbers} i={4} />
					<SudokuSet onChange={this.changeNumber} numbers={this.state.numbers} i={5} />
				</div>
				<div className="sudokuSetRow">
					<SudokuSet onChange={this.changeNumber} numbers={this.state.numbers} i={6} />
					<SudokuSet onChange={this.changeNumber} numbers={this.state.numbers} i={7} />
					<SudokuSet onChange={this.changeNumber} numbers={this.state.numbers} i={8} />
				</div>
			</div>
		);
	}
});
