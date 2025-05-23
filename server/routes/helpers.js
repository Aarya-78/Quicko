const express = require('express');
const router = express.Router();
const { Helper } = require('../models');

// Get all helpers
router.get('/', async (req, res) => {
  try {
    const helpers = await Helper.findAll();
    res.json(helpers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve helpers' });
  }
});

// Create a new helper
router.post('/', async (req, res) => {
  try {
    const newHelper = await Helper.create(req.body);
    res.json(newHelper);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Failed to create helper' });
  }
});

module.exports = router;