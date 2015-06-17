
//database init
var database = require('./database');

//宣告 table
var User = database.define('User', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
  // Date 的輸入會依據電腦時區做偏移，存到ＤＢ的時間都會是 +0 時區
});

// database.sync() -> CREATE TABLE IF NOT EXISTS
// 新增
database.sync().then(function() {
  console.log('*insert ');
  return User.create({
		username: 'Roth',
		birthday: '12-20-1982'
	});


}).then(function() {
// 查詢所有
  return User.findAll();

}).then(function(list) {
  	console.log('*find all = ' + list.length);
  	for (var i = 0; i < list.length; i++) {
  		console.log(list[i].dataValues);
  	}

}).then(function() {
// 查詢一筆（最新一筆）
  	return User.findOne();

}).then(function(data) {
  	console.log('*findOne = ' + data);
  	console.log(data.dataValues);

//修改
  	data.updateAttributes({username : 'TimUpdate'});
  	return data;


}).then(function(data) {
  	console.log('*updateAttributes after = ' + data);
  	console.log(data.dataValues);

//刪除
    data.destroy();

//全部刪除（或者刪除多筆也可以用這個方法）
}).then(function() {
  	return User.destroy({truncate: true});
});



