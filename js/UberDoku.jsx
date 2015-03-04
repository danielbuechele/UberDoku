var React = require('react');
var SudokuSet = require('./SudokuSet.jsx');
var Buttons = require('./Buttons.jsx');

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
	
	resetState: function () {
		var numbers = this.state.numbers;
		numbers.forEach(function (row) {
			row.forEach(function(n) {
				if (!n.predefined) {n.number = -1;}
			});
		});
		this.setState({numbers: numbers});
	},
	
	changeNumber: function (i,j,number) {
		console.log(i,j,number);
		var changedNumbers = this.state.numbers;
		changedNumbers[i][j].number = number;
		this.setState({numbers: changedNumbers});
	},

	render: function () {
		
		var _self = this;
		var i = 0;
		
		return (
			<div>
				<h1>UberDoku</h1>
				<Buttons />
				{[1,2,3].map(function() {
					return (
						<div className="sudokuSetRow">
							{[1,2,3].map(function() {
								return <SudokuSet onChange={_self.changeNumber} numbers={_self.state.numbers} i={i++} />;
							})}
						</div>
					);
				})}
			</div>
		);
	}
});
