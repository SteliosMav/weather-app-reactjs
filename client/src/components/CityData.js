import React from 'react';
import DayData from './DayData';
import Grid from '@material-ui/core/Grid';

const CityData = ({ cityData = { consolidated_weather: [] } }) => (
  <Grid container justify="center" align="center" spacing={2}>
    {cityData.consolidated_weather.map((dayData) => (
      <DayData key={dayData.id} dayData={dayData} />
    ))}
  </Grid>
);

export default CityData;
