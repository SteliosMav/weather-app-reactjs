const express = require('express');
const router = express.Router();
const cities = require('all-the-cities');

router.get('/', (req, res) => {
  res.send(cities.filter((v,i) => i <= 1000));  
});



module.exports = router;
