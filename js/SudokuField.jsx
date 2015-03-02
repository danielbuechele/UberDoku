var React = require('react');

module.exports = React.createClass({

	getInitialState: function () {
		return {
			number: this.props.number>0 ? this.props.number : '',
		};
	},
	
	onClick: function () {
			
		
	},

	render: function () {
		return (
			<div className="sudokuField" onClick={this.onClick}>
				<div className="fieldContent">
					<div>
						<span>{this.state.number}</span>
					</div>
				</div>
			</div>
		);
	}
});
