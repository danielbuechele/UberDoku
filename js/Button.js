var $ = require('jquery');
require('../less/Button.less');
var template = require('../hbs/Button.hbs');

function Button($el, title, color, onClick) {
	
	this.$el = $(template({
		completed: this.completed,
		title: title,
		color: color
	}));
	
	this.$el.click(onClick);
	$el.append(this.$el);	
	
}

module.exports = Button;
