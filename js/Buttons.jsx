var React = require('react');
require('../less/Buttons.less')

module.exports = React.createClass({
	reset: function () {
		this.props.reset();
	},
	
	getInitialState: function () {
		return {
			completed: 0
		};
	},

	render: function () {
		return (
			<div className="buttons">
				<a className="button green" onClick={this.reset}>New</a>
				<a className="button yellow" onClick={this.reset}>Solve</a>
				<a className="button red" onClick={this.reset}>Reset</a>
				<div className="filled">
					{this.state.completed}/81
				</div>
			</div>
		);
	}
});

