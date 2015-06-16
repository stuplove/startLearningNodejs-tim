
exports = module.exports = {};
exports.exportTo = exportTo;


function exportTo(router) {
	router.get('/image', function *() {
		console.log('get(/image/)');
	  	this.body = 'image is good';
	});

	return exports
}



