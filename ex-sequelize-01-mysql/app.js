
//database init
//p1, or
// var database = require('./database');

//p2
var Sequelize = require('sequelize');

// 最後一個參數可以丟ＤＢ的 host, port 預設就是這個
// var database = new Sequelize('db_zsl', 'moremote', 'moremote', {
// 	host: "localhost",
// 	port: 3306
// });

var database = new Sequelize('sequelize_db', 'moremote', 'moremote');
//database init end


//宣告ＤＢ
var User = database.define('User', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
  // Date 的輸入會依據電腦時區做偏移，存到ＤＢ的時間都會是 +0 時區
});

// database.sync() -> CREATE TABLE IF NOT EXISTS
// 新增
database.sync().then(function() {
  	return User.create({
  		username: 'Roth',
  		birthday: '12-20-1982'
  	});

// 查詢
}).then(function() {
  	return User.findAll();

}).then(function(list) {
  	console.log('find all = ' + list.length);
  	for (var i = 0; i < list.length; i++) {
  		console.log(list[i].dataValues);
  	}

}).then(function() {
  	return User.findOne();

//修改
}).then(function(data) {
  	console.log('findOne = ' + data);
  	console.log(data.dataValues);
  	data.updateAttributes({username : 'TimUpdate'});
  	return data;

//刪除
}).then(function(data) {
  	console.log('findOne = ' + data);
  	console.log(data.dataValues);
  	// User.destroy({where : {
  	// 	id: data.dataValues.id
  	// }});
	data.destroy();

//全部刪除（或者刪除多筆也可以用這個方法）
}).then(function() {
  	return User.destroy({truncate: true});
});



