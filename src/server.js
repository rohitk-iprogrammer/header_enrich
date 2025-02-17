const express = require('express');
const app = express();

app.get('/api/get-mobile-number', (req, res) => {

  const msisdn = req.headers['x-msisdn'] || req.headers['x-up-calling-line-id'] || req.headers['x-network-info'];
  if (msisdn) {
    res.json({ msisdn });
  } else {
    res.status(400).json({ error: "MSISDN not found in headers. Check carrier settings." });
  }
});


app.listen(3000, () => {
  console.log('Server running on port 3000');
});


