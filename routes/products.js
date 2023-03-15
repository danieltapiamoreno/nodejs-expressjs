const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
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

// specific endpoint before dynamic
router.get('/filter', (req, res) => {
  res.send("I'm a filter");
});

// dynamic enpoint
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product2',
    price: 2000,
  });
});

module.exports = router;
