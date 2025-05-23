const express = require('express');
const router = express.Router();
const { Seeker } = require('../models');

// Get all seekers
router.get('/', async (req, res) => {
  try {
    const seekers = await Seeker.findAll();
    res.json(seekers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve seekers' });
  }
});

// Create a new seeker
router.post('/', async (req, res) => {
  try {
    const newSeeker = await Seeker.create(req.body);
    res.json(newSeeker);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Failed to create seeker' });
  }
});

module.exports = router;