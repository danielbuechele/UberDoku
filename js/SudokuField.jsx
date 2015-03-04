var React = require('react');
var NumberPicker = require('./NumberPicker.jsx');
require('react/addons');
require('../less/SudokuField.less')

module.exports = React.createClass({
	
	getPossibleNumbersFor: function (i, j) {
		var possibleNumbers = [1,2,3,4,5,6,7,8,9];
		
		//remove same set
		this.props.numbers[this.props.i].forEach(function (n) {
			console.log(n.number);
		});
		
		//remove same row
		
		
		//remove same column
		
		return possibleNumbers;
	},
	
	getInitialState: function() {
		return {'insertNumber':false};
	},
	
	onClick: function () {
		if (!this.props.numbers[this.props.i][this.props.j].predefined) {
			this.setState({'insertNumber': true});
			this.props.onChange(this.props.i,this.props.j,'-');
		}
	},
	
	onKeyUp: function (e) {
		this.setState({'insertNumber': false});
		console.log(e);
	},

	render: function () {
		var cx = React.addons.classSet;
		var classes = cx({
			'sudokuField': true,
			'predefined': this.props.numbers[this.props.i][this.props.j].predefined,
			'insertNumber': this.state.insertNumber
		});
		
		var value = this.props.numbers[this.props.i][this.props.j].number>0 ? this.props.numbers[this.props.i][this.props.j].number : '';
		
		return (
			<div className={classes} onClick={this.onClick} onKeyUp={this.onKeyUp}>
				<div className="fieldContent">
					<NumberPicker />
					<div className="innerContent">
						<span className="innerContentCentered">{value}</span>
					</div>
				</div>
			</div>
		);
	}
});
