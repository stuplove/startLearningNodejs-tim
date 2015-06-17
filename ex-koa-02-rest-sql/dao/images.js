'use strict';


var database = require('./database');

exports = module.exports = {};

exports.create = create;
exports.get = get;
exports.getAll = getAll;
exports.update = update;
exports.name = 'images';

var Image = database.define('Image', {
  image: database.STRING,
});

var getDef = {plain: true};

function create(opt) {
	return	database.sync().then(function() {
		console.log('image create = ' , opt);
  		return Image.create(opt);
	});
}

function get(id) {
	return database.sync().then(function() {
		return Image.findById(id);
	});
}

function getAll() {
	return database.sync().then(function() {
		return Image.findAll();
	});
}

function update(opt) {
	return	database.sync()
	.then(function() {
  		return Image.findById(opt.id);
	})
	.then(function(data) {
  		return data.updateAttributes(opt);
	});
}

// function printLog(jane) {
// 	console.log('printLog ' , jane.get(getDef));
// 	return text;
// }
