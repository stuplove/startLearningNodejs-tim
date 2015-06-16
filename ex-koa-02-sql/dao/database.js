
'use strict';

var Sequelize = require('sequelize');
var sequelize = new Sequelize('db_zsl', 'moremote', 'moremote', {
host: "localhost",
port: 3306
});

sequelize.STRING = Sequelize.STRING;
sequelize.DATE = Sequelize.DATE;


exports = module.exports = sequelize;