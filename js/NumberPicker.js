var $ = require('jquery');
require('../less/NumberPicker.less');
var template = require('../hbs/NumberPicker.hbs');

function NumberPicker($el, changeNumber) {
	this.changeNumber = changeNumber;
	this.$el = $(template({numbers: [1,2,3,4,5,6,7,8,9]}));
	this.$el.find('.numberPickerItem').click(this.onClick.bind(this));
	$el.append(this.$el);
}

NumberPicker.prototype.onClick = function (e) {
	e.stopPropagation();
	this.changeNumber(e.target.innerHTML);
};

module.exports = NumberPicker;

