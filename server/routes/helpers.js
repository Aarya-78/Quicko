const express = require('express');
const router = express.Router();
const { Helper } = require('../models');

router.get('/', async (req, res) => {
  const helpers = await Helper.findAll();
  res.json(helpers);
});

router.post('/', async (req, res) => {
  const newHelper = await Helper.create(req.body);
  res.json(newHelper);
});

module.exports = router;
