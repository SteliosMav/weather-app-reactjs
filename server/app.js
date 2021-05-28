const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

/* --- Routers --- */
const indexRouter = require('./routes/index');
const weatherRouter = require('./routes/weather');
const cityWeatherRouter = require('./routes/cityWeather');

const app = express();

// view engine setup
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/weather', weatherRouter);
app.use('/cityWeather', cityWeatherRouter);

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  res.json({
    error,
  });
});

// Safety net
app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server`,
  });
});

const port = 4000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

module.exports = app;
