const express = require('express');
const router = express.Router();
const { Message } = require('../models');

// Get all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.findAll();
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve messages' });
  }
});

// Create a new message
router.post('/', async (req, res) => {
  try {
    const newMessage = await Message.create(req.body);
    res.json(newMessage);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Failed to create message' });
  }
});

module.exports = router;