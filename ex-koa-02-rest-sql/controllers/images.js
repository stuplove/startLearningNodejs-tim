var image = require('../controllers/controllersBase')(require('../dao/images'));

// remove base function
image.all = function *all(next) {
	console.log('remove image base function');
	yield next;
};
image.name = 'image';
exports = module.exports = image;