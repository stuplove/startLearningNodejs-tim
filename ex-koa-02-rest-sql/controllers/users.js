var user = require('../controllers/controllersBase')(require('../dao/users'));
user.name = 'user';
exports = module.exports = user;