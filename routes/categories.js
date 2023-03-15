const express = require('express');

const router = express.Router();

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Category',
  });
});

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

module.exports = router;
