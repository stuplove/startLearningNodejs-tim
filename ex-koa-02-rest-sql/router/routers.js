
var router = require('koa-router')();

exports = module.exports = router;

router.get('/', function *() {
  console.log("home");
});


var user = require('../controllers/users');
var image = require('../controllers/images');

router.delete('/users/:id', user.remove);
router.put('/users/:id', user.update);
router.get('/users', user.all);
router.get('/users/:id', user.get);
router.post('/users', user.create);

router.delete('/images/:id', image.remove);
router.put('/images/:id', image.update);
router.get('/images', image.all);
router.get('/images/:id', image.get);
router.post('/images', image.create);



//如果 API 太多，也可以考慮把 router 分資源切開的宣告
// require('./images').exportTo(router);
// require('./users').exportTo(router);


// var usersRouter = require('./users');
// var imageRouter = require('./images');
// usersRouter.exportTo(router);
// imageRouter.exportTo(router);


