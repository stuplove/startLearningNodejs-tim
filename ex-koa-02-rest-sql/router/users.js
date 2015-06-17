var user = require('../controllers/users');

console.log('require user = ' + user.name);

exports = module.exports = {};
exports.exportTo = exportTo;


function exportTo(router) {

	router.delete('/users/:id', user.remove);
	router.put('/users/:id', user.update);
	router.get('/users', user.all);
	router.get('/users/:id', user.get);
	router.post('/users', user.create);

}
