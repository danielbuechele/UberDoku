var React = require('react');
require('../less/NumberPicker.less')

module.exports = React.createClass({
	onClick: function (e) {
		this.props.onChange(this.props.i, parseInt(e.target.innerHTML)-1);
	},
	
	getPossibleNumbersFor: function () {
		var possibleNumbers = [1,2,3,4,5,6,7,8,9];
		
		//remove same set
		this.props.numbers[this.props.i].forEach(function (n) {
			console.log(n.number);
		});
		
		//remove same row
		
		
		//remove same column
		
		return possibleNumbers;
	},

	render: function () {
		var _self = this;
		return (
			<div className="numberPicker">
				{[1,2,3,4,5,6,7,8,9].map(function (i) {
					return (
						<div className="numberPickerItem" onClick={_self.onClick}>
							<span className="numberPickerItemInner">{i}</span>
						</div>
					);
				})}
			</div>
		);
	}
});

