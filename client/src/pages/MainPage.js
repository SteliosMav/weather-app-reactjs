import { CircularProgress, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import CityData from '../components/CityData';
import Header from '../components/Header';

const MainPage = () => {
  const [cityData, setCityData] = useState();
  const [status, setStatus] = useState('idle');

  return (
    <div>
      <Header
        cityData={cityData}
        setCityData={setCityData}
        setStatus={setStatus}
      />
      <div className="container">
        {status === 'done' && <CityData cityData={cityData} />}
        {status === 'fetching' && (
          <div className="space">
            <Typography color="white">Fetching data</Typography>
            <CircularProgress style={{ marginLeft: '16px' }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
