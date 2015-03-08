var $ = require('jquery');
var template = require('../hbs/Completed.hbs');
require('../less/Completed.less')

function Completed($el) {
	this.$el = $(template({completed: 0}));
	$el.append(this.$el);
}

Completed.prototype.setCompleted = function (sudokuFields) {
	var completed = 0;
	sudokuFields.forEach(function (e) {
		if (e.field.number != null) {
			completed++;
		}
	});
	this.$el.html($(template({completed: completed})));
};

module.exports = Completed;
