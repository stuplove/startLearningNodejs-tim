
'use strict';

var Sequelize = require('sequelize');
// 最後一個參數可以丟ＤＢ的 host, port 預設就是這個
var sequelize = new Sequelize('db_zsl', 'moremote', 'moremote',
	{
		host: "localhost",
		port: 3306
	});
//上述等同於
//var database = new Sequelize('sequelize_db', 'moremote', 'moremote');

sequelize.STRING = Sequelize.STRING;
sequelize.DATE = Sequelize.DATE;


exports = module.exports = sequelize;