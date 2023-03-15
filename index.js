const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('This is my server in express');
});

app.get('/new-route', (req, res) => {
  res.send("I'm a new route");
});

app.get('/categories/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Category',
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

app.listen(port, () => {
  console.log(`Listening in port ${port}`);
});
