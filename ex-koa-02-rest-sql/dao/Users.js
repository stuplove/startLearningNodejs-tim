'use strict';


var database = require('./database');

exports = module.exports = {};

exports.create = create;
exports.get = get;
exports.getAll = getAll;
exports.update = update;

var User = database.define('User', {
  username: database.STRING,
  birthday: database.DATE
});

var getDef = {plain: true};

function create(opt) {
	return	database.sync().then(function() {
  		return User.create(opt);
	});
}

function get(id) {
	return database.sync().then(function() {
		return User.findById(id);
	});
}

function getAll() {
	return database.sync().then(function() {
		return User.findAll();
	});
}

function update(opt) {
	return	database.sync()
	.then(function() {
  		return User.findById(opt.id);
	})
	.then(function(data) {
  		return data.updateAttributes(opt);
	});
}

// function printLog(jane) {
// 	console.log('printLog ' , jane.get(getDef));
// 	return text;
// }
