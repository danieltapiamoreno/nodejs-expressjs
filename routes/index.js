const productsRouter = require('./products');
const categoriesRouter = require('./categories');
const usersRouter = require('./users');
const rootRouter = require('./root');

function routerApi(app) {
  app.use('/products', productsRouter);
  app.use('/categories', categoriesRouter);
  app.use('/users', usersRouter);
  app.use('', rootRouter);
}

module.exports = routerApi;
