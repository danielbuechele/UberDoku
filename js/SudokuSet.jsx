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
					<SudokuField onChange={this.props.onChange} numbers={this.props.numbers} i={this.props.i} j={0} />
					<SudokuField onChange={this.props.onChange} numbers={this.props.numbers} i={this.props.i} j={1} />
					<SudokuField onChange={this.props.onChange} numbers={this.props.numbers} i={this.props.i} j={2} />
				</div>
				<div className="sudokuRow">
					<SudokuField onChange={this.props.onChange} numbers={this.props.numbers} i={this.props.i} j={3} />
					<SudokuField onChange={this.props.onChange} numbers={this.props.numbers} i={this.props.i} j={4} />
					<SudokuField onChange={this.props.onChange} numbers={this.props.numbers} i={this.props.i} j={5} />
				</div>
				<div className="sudokuRow">
					<SudokuField onChange={this.props.onChange} numbers={this.props.numbers} i={this.props.i} j={6} />
					<SudokuField onChange={this.props.onChange} numbers={this.props.numbers} i={this.props.i} j={7} />
					<SudokuField onChange={this.props.onChange} numbers={this.props.numbers} i={this.props.i} j={8} />
				</div>
			</div>
		);
	}
});
