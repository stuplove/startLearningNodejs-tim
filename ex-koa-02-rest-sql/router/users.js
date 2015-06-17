var users = require('../dao/Users');


exports = module.exports = {};
exports.exportTo = exportTo;


function exportTo(router) {
	//index
	router.get('/users', function *() {
		console.log('get(/users/)');

	  	this.body = yield users.getAll();
	});

	//show
	router.get('/users/:id', function *() {
		console.log('get(/users/:id)');
	  	console.log('id = ' + this.params.id);

	  	this.body = yield users.get(this.params.id);
	});

	//create
	router.post('/users', function *() {
		console.log('post(/users)');
		var requestBody = this.request.body;

	  	console.log('requestBody = ' , requestBody);

	  	var jane = yield users.create({
	  		username: requestBody.username,
	    	birthday: requestBody.birthday
	  	});

	  	this.body = jane.dataValues.username + '/' + jane.dataValues.birthday;
	});

	//remove
	router.delete('/users/:id', function *() {
		console.log('delete(/users/:id)');
		yield users.get(this.params.id).then(function(user) {
			user.destroy();
		});

	  	this.body = 'user destory by id =' + this.params.id;
	});


	router.put('/users/:id', function *() {
		console.log('put(/users/:id), id=' + this.params.id);
		var requestBody = this.request.body;
		var opt = {
			id : this.params.id,
	  		username: requestBody.username,
	    	birthday: requestBody.birthday
	  	};

		this.body = yield users.update(opt);

	});
}



