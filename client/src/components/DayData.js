import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { SpaceImage, Space } from '../styles/mainStyles';

const DayData = ({ dayData }) => (
  <Grid item>
    <Paper elevation={2} style={{ padding: '30px' }}>
      <Grid container spacing={1} direction="column" align="start">
        <Grid item>
          <Typography variant="h6" color="primary">
            {dayData.applicable_date}
          </Typography>
        </Grid>
        <Grid item>
          <Space>
            <SpaceImage
              alt="weather"
              width="32"
              height="32"
              src={`https://www.metaweather.com/static/img/weather/png/${dayData.weather_state_abbr}.png`}
            />
            <Typography>{dayData.weather_state_name}</Typography>
          </Space>
        </Grid>

        <Grid item>
          <Typography>Min: {dayData.min_temp.toFixed()}°C</Typography>
        </Grid>
        <Grid item>
          <Typography>Max: {dayData.max_temp.toFixed()}°C</Typography>
        </Grid>
        <Grid item></Grid>
        <Typography>
          <ArrowUpwardIcon
            style={{
              transform: `rotate(${dayData.wind_direction.toFixed()}deg)`,
            }}
          />
          {dayData.wind_speed.toFixed()} mph
        </Typography>
      </Grid>
    </Paper>
  </Grid>
);

export default DayData;
