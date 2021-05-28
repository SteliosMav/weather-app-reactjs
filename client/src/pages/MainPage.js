import { CircularProgress, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import CityData from '../components/CityData';
import Header from '../components/Header';
import { MainContainer, Space, WrapperContainer } from '../styles/mainStyles';

const MainPage = () => {
  const [cityData, setCityData] = useState();
  const [status, setStatus] = useState('idle');

  return (
    <WrapperContainer>
      <Header setCityData={setCityData} setStatus={setStatus} />
      <MainContainer>
        {status === 'done' && <CityData cityData={cityData} />}
        {status === 'fetching' && (
          <Space>
            <Typography color="secondary">Fetching data</Typography>
            <CircularProgress />
          </Space>
        )}
      </MainContainer>
    </WrapperContainer>
  );
};

export default MainPage;
