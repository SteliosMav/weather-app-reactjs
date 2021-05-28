import React from 'react';
import { HeaderAppBar } from '../styles/headerStyles';
import { Toolbar, makeStyles } from '@material-ui/core';
import SearchBar from './SearchBar';

const useStyles = makeStyles(() => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80px',
  },
}));

const Header = ({ setCityData, setStatus }) => {
  const { toolbar } = useStyles();

  return (
    <HeaderAppBar position="sticky">
      <Toolbar className={toolbar}>
        <SearchBar setCityData={setCityData} setStatus={setStatus} />
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
