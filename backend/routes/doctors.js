const express = require('express');
const router = express.Router();
const doctors = require('../data/doctors');

// GET /api/v1/doctors
router.get('/', (req, res) => {
  res.status(200).json(doctors);
});

module.exports = router;