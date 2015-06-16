
exports = module.exports = {};
exports.exportTo = exportTo;


function exportTo(router) {
	router.get('/users', function *() {
		console.log('get(/users/)');
	  	this.body = 'get(/users)';
	});

	router.get('/users/:id', function *() {
		console.log('get(/users/:id)');
	  this.body = 'get(/users/:id)';
	});

	router.post('/users', function *() {
		console.log('post(/users)');
		var requestBody = this.request.body;
	  	console.log('requestBody = \n' , requestBody);
	  	this.body = 'post(/users)' + requestBody;
	});
}



