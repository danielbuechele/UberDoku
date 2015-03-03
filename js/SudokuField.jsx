var React = require('react');
require('react/addons');

module.exports = React.createClass({
	
	onClick: function () {
		if (!this.props.numbers[this.props.i][this.props.j].predefined) {
			this.props.onChange(this.props.i,this.props.j,'-');
		}
	},

	render: function () {
		var cx = React.addons.classSet;
		var classes = cx({
			'sudokuField': true,
			'predefined': this.props.numbers[this.props.i][this.props.j].predefined,
		});
		
		var value = this.props.numbers[this.props.i][this.props.j].number>0 ? this.props.numbers[this.props.i][this.props.j].number : '';
		
		return (
			<div className={classes} onClick={this.onClick}>
				<div className="fieldContent">
					<div>
						<span>{value}</span>
					</div>
				</div>
			</div>
		);
	}
});
