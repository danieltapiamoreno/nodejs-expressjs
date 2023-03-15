const express = require('express');
const { faker } = require('@faker-js/faker');
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

app.get('/products', (req, res) => {
  const products = [];
  const { size: limit = 100 } = req.query;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.imageUrl(),
    });
  }

  res.json(products);
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send("There're no query params");
  }
});

app.listen(port, () => {
  console.log(`Listening in port ${port}`);
});
