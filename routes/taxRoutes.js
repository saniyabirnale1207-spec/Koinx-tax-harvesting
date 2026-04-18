const express = require('express');
const router = express.Router();

const { calculateTax } = require('../services/taxService');

router.post('/calculate-tax', (req, res) => {
  const trades = req.body.trades;

  if (!trades || trades.length === 0) {
    return res.status(400).json({ message: "No trades provided" });
  }

  const result = calculateTax(trades);
  res.json(result);
});

module.exports = router;   // 🔥 THIS LINE IS MUST