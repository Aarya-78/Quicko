const express = require('express');
const router = express.Router();
const { Seeker } = require('../models');

router.get('/', async (req, res) => {
  const seekers = await Seeker.findAll();
  res.json(seekers);
});

router.post('/', async (req, res) => {
  const newSeeker = await Seeker.create(req.body);
  res.json(newSeeker);
});

module.exports = router;
