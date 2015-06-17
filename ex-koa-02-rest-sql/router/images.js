

var image = require('../controllers/images');

console.log('image ->' + image.name);

exports = module.exports = {};
exports.exportTo = exportTo;


function exportTo(router) {
	console.log('image ' + image.name + ' router exportTo');
	router.delete('/images/:id', image.remove);
	router.put('/images/:id', image.update);
	router.get('/images', image.all);
	router.get('/images/:id', image.get);
	router.post('/images', image.create);
	console.log(image.name + ' router exportTo end');
	return exports
}



