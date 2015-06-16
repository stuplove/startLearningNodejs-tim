
var koa = require('koa');
var routers = require('./router/routers');
var app = koa();

app.use(require('koa-bodyparser')());

app.use(routers.routes());

app.use(function *(next) {
  yield next;
  // Handle 404 upstream.
  var status = this.status || 404;
  if (status === 404) this.body = 'Page Not Found';
});


app.listen(3000);
