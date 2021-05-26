const { query } = require('express');
const express = require('express');
const axios = require('axios');
const router = express.Router();

const WEATHER_API = 'https://www.metaweather.com/api/location/';

router.get('/:value', (req, res, next) => {
  const value = req.params.value;

  const url = `${WEATHER_API}${value}`;
  // console.log(url);
  if (query) {
    axios
      .get(url)
      .then((response) => {
        // handle success
        res.send(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }
});

module.exports = router;
