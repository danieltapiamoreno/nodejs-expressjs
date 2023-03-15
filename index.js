const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 5000;

routerApi(app);

app.listen(port, () => {
  console.log(`Listening in port ${port}`);
});
