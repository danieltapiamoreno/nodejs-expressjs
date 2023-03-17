const express = require('express');
const ProductsService = require('../services/products');
const { StatusCodes } = require('http-status-codes');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

// specific endpoint before dynamic
router.get('/filter', (req, res) => {
  res.send("I'm a filter");
});

// dynamic enpoint
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.status(StatusCodes.OK).json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const product = await service.create(body);
  res.status(StatusCodes.CREATED).json(product);
});

router.patch('/:id', async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json({
      message: error.message
    })
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const response = await service.delete(id);
  res.status(StatusCodes.OK).json(response);
});

module.exports = router;
