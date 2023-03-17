const express = require('express');
const ProductsService = require('../services/products');
const { StatusCodes } = require('http-status-codes');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

// specific endpoint before dynamic
router.get('/filter', (req, res) => {
  res.send("I'm a filter");
});

// dynamic enpoint
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.status(StatusCodes.OK).json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  const product = service.create(body);
  res.status(StatusCodes.CREATED).json(product);
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
  const product = service.update(id, body);
  res.json(product);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const response = service.delete(id);
  res.status(StatusCodes.OK).json(response);
});

module.exports = router;
