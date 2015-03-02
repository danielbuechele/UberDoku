var React = require('react');
var SudokuField = require('./SudokuField.jsx');
require('../less/SudokuSet.less')

module.exports = React.createClass({

	getInitialState: function () {
		return {

		};
	},

	render: function () {
		return (
			<div className="sudokuSet">
				<div className="sudokuRow">
					<SudokuField number={this.props.numbers[0]} />
					<SudokuField number={this.props.numbers[1]} />
					<SudokuField number={this.props.numbers[2]} />
				</div>
				<div className="sudokuRow">
					<SudokuField number={this.props.numbers[3]} />
					<SudokuField number={this.props.numbers[4]} />
					<SudokuField number={this.props.numbers[5]} />
				</div>
				<div className="sudokuRow">
					<SudokuField number={this.props.numbers[6]} />
					<SudokuField number={this.props.numbers[7]} />
					<SudokuField number={this.props.numbers[8]} />
				</div>
			</div>
		);
	}
});
