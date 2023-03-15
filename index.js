const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('This is my server in express');
});

app.get('/new-route', (req, res) => {
  res.send("I'm a new route");
});

app.listen(port, () => {
  console.log(`Listening in port ${port}`);
});
