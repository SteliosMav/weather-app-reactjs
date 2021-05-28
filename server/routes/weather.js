const express = require('express');
const axios = require('axios');
const router = express.Router();

const WEATHER_API = 'https://www.metaweather.com/api/location/search/?query=';

router.get('/:country', (req, res, next) => {
  const country = req.params.country;

  const url = `${WEATHER_API}${country}`;
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
});

module.exports = router;
