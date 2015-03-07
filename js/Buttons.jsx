var React = require('react');
require('../less/Buttons.less')

module.exports = React.createClass({
	reset: function () {
		this.props.reset();
	},

	render: function () {
		var completed = 0;
		this.props.board.forEach(function (e) {
			if (e.number != null) completed++;
		});

		return (
			<div className="buttons">
				<a className="button green" onClick={this.props.newPuzzle}>New</a>
				<a className="button yellow" onClick={this.props.solvePuzzle}>Solve</a>
				<a className="button red" onClick={this.props.resetPuzzle}>Reset</a>
				<div className="filled">
					{completed}/{this.props.board.length}
				</div>
			</div>
		);
	}
});

