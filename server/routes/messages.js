const express = require('express');
const router = express.Router();
const { Message } = require('../models');

router.get('/', async (req, res) => {
  const messages = await Message.findAll();
  res.json(messages);
});

router.post('/', async (req, res) => {
  const newMsg = await Message.create(req.body);
  res.json(newMsg);
});

module.exports = router;
