var users = require('../dao/Users');


exports = module.exports = {};
exports.exportTo = exportTo;


function exportTo(router) {
	router.get('/users', function *() {
		console.log('get(/users/)');
	  	this.body = users.getAll().then(printLog);
	});

	router.get('/users/:id', function *() {
		console.log('get(/users/:id)');
		var id = this.params.id;
	  console.log('id = ' + id);

	  this.body = users.get(id).then(printLog);
	});

	router.post('/users', function *() {
		console.log('post(/users)');
		var requestBody = this.request.body;

	  	console.log('requestBody = \n' , requestBody);

	  	var jane = yield users.create({
	  		username: requestBody.username,
	    	birthday: requestBody.birthday
	  	});

	  	this.body = jane.dataValues.username + '/' + jane.dataValues.birthday;
	});
}



