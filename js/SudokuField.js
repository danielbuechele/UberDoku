var NumberPicker = require('./NumberPicker.js');
var $ = require('jquery');
require('../less/SudokuField.less')
var template = require('../hbs/SudokuField.hbs');


function SudokuField($el, field, updateGame) {
	this.field = field;
	this.updateGame = updateGame;
	this.$el = $(template({
		value: field.number!=null ? parseInt(field.number)+1 : '', predefined: field.predefined
	}));
	if (!this.field.predefined) {this.$el.click(this.onClick.bind(this));}
	this.numberPicker = new NumberPicker(this.$el,this.changeNumber.bind(this));
	$el.append(this.$el);
};

SudokuField.prototype.onClick = function () {
	$('.sudokuField').removeClass('insertNumber');
	this.$el.addClass('insertNumber');
};

SudokuField.prototype.changeNumber = function (number) {
	if (number!=null) {
		number--;
		this.$el.find('.fieldCell').text(parseInt(number)+1);
	} else {
		this.$el.find('.fieldCell').text('');
	}
	this.$el.removeClass('insertNumber');
	this.field.number = number;
	this.updateGame();
};

module.exports = SudokuField;