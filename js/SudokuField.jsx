var React = require('react');
var NumberPicker = require('./NumberPicker.jsx');
require('react/addons');
require('../less/SudokuField.less')

module.exports = React.createClass({
	
	getInitialState: function() {
		return {insertNumber:false};
	},
	
	onClick: function () {
		this.props.onClick();
		this.setState({insertNumber: (!this.props.board[this.props.i].predefined && !this.state.insertNumber)});
	},

	render: function () {
		var cx = React.addons.classSet;
		var classes = cx({
			'sudokuField': true,
			'predefined': this.props.board[this.props.i].predefined,
			'insertNumber': this.state.insertNumber
		});
		
		var value;
		if (this.props.board[this.props.i].number != null) {
			value = this.props.board[this.props.i].number+1;
		}
		
		return (
			<div className={classes} onClick={this.onClick} onKeyUp={this.onKeyUp}>
				<div className="fieldContent">
					<NumberPicker onChange={this.props.onChange} board={this.props.board} i={this.props.i} />
					<div className="fieldTable">
						<span className="fieldCell">{value}</span>
					</div>
				</div>
			</div>
		);
	}
});
