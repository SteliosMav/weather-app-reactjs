const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');

/* --- Routers --- */
const indexRouter = require('./routes/index');
const weatherRouter = require('./routes/weather');
const citiesRouter = require('./routes/cities');
const cityWeatherRouter = require('./routes/cityWeather');

const app = express();

//Services
// view engine setup

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/weather', weatherRouter);
app.use('/cities', citiesRouter);
app.use('/cityWeather', cityWeatherRouter);

// error handler
app.use((error, req, res, next) => {
  console.error(error);
  res.json({
    error,
  });
});

const port = 4000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

module.exports = app;
