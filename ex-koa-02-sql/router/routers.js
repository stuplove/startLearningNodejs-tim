
var router = require('koa-router')();
var userRouter = require('./users');
var imageRouter = require('./image');

router.get('/', function *() {
  console.log("home");
});

userRouter.exportTo(router);
imageRouter.exportTo(router);

exports = module.exports = router;
