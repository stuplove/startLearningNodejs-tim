
var koa = require('koa');
var routers = require('./router/routers');
var app = koa();

app.use(require('koa-bodyparser')());

//比較常看到直接宣告在 app.js 裡面, 為了 app.js 乾淨，在拆到 routers
app.use(routers.routes());

app.use(function *(next) {
  yield next;
  // Handle 404 upstream.
  var status = this.status || 404;
  if (status === 404) this.body = 'Page Not Found';
});


app.listen(3000);
