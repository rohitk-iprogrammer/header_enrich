const express = require('express');
const app = express();

app.get('/api/get-mobile-number', (req, res) => {
  console.log("@@@@@@@@@@@@@@@@@@@@@@2222222222222",res)
  console.log("Request Headers:", req.headers);
console.log("$$$$$$$$$$$$$$$$$$$$$$",req.headers['x-msisdn'])
console.log("$$$$$$$$$$$$$$$$$$$$$$1111111",req.headers['x-up-calling-line-id'])
console.log("$$$$$$$$$$$$$$$$$$$$$$222222222222",req.headers['x-network-info'])

  const msisdn = req.headers['x-msisdn'] || req.headers['x-up-calling-line-id'] || req.headers['x-network-info'];
  console.log("@@@@@@@@@@@@@@@@@@@@@@11111",msisdn)
  if (msisdn) {
    res.json({ msisdn });
  } else {
    res.status(400).json({ error: "MSISDN not found in headers. Check carrier settings." });
  }
});


app.listen(3000, () => {
  console.log('Server running on port 3000');
});


