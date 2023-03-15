const express = require('express');
const { faker } = require('@faker-js/faker');
const { StatusCodes, ReasonPhrases } = require('http-status-codes');

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
  if (id === String(999)) {
    res.status(StatusCodes.NOT_FOUND).json({
      error: ReasonPhrases.NOT_FOUND,
    });
  } else {
    res.status(StatusCodes.OK).json({
      id,
      name: 'Product2',
      price: 2000,
    });
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(StatusCodes.CREATED).json({
    message: ReasonPhrases.CREATED,
    data: body,
  });
});

router.put('/:id', (req, res) => {
  const body = req.body;
  const { id } = req.params;
  res.json({
    message: 'updated',
    data: body,
    id,
  });
});

router.patch('/:id', (req, res) => {
  const body = req.body;
  const { id } = req.params;
  res.json({
    message: 'updated',
    id,
    data: body,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
