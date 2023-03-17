const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler } = require('./middlewares/errorHandler');

const app = express();
const port = 5000;

app.use(express.json());
routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening in port ${port}`);
});
