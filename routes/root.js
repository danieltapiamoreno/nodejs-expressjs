const express = require('express');
const router = express.Router();

router.get('/new-route', (req, res) => {
  res.send("I'm a new route");
});

router.get('', (req, res) => {
  res.send('This is my server in express js');
});


module.exports = router;
