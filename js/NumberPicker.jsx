var React = require('react');
require('../less/NumberPicker.less')

module.exports = React.createClass({
	onClick: function () {
		
	},

	render: function () {
		return (
			<div className="numberPicker">
				{[1,2,3,4,5,6,7,8,9].map(function (i) {
					return (
						<div onClick={this.onClick} className="numberPickerItem">
							<span className="numberPickerItemInner">{i}</span>
						</div>
					);
				})}
			</div>
		);
	}
});

