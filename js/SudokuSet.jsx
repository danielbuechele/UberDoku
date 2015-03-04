var React = require('react');
var SudokuField = require('./SudokuField.jsx');
require('../less/SudokuSet.less')

module.exports = React.createClass({

	getInitialState: function () {
		return {

		};
	},

	render: function () {
		var _self = this;
		var j = 0;
		
		return (
			<div className="sudokuSet">
				{[1,2,3].map(function() {
					return (
						<div className="sudokuRow">
							{[1,2,3].map(function() {
								return <SudokuField onChange={_self.props.onChange} numbers={_self.props.numbers} i={_self.props.i} j={j++} />
							})}
						</div>
					);
				})}
			</div>
		);
	}
});
