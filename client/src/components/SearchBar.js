import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';

const SearchBar = ({ setCityData, setStatus }) => {
  const [cities, setCities] = useState([]);

  const fetchCountries = (query) => {
    axios
      .get(`/weather/${query}`)
      .then((response) => {
        setCities(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchCountryData = (woeid) => {
    setStatus('fetching');

    axios
      .get(`/cityWeather/${woeid}`)
      .then((response) => {
        setCityData(response.data);
        setStatus('done');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Autocomplete
      id="country-select-demo"
      onChange={(event, value) => {
        if (event.target.value !== '' && event.target.value !== undefined) {
          fetchCountryData(value.woeid);
        }
      }}
      style={{ width: 300, background: 'white' }}
      autoHighlight
      options={cities}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={(event) => {
            if (event.target.value !== '' && event.target.value !== undefined)
              fetchCountries(event.target.value);
          }}
          label="Choose a city"
          variant="outlined"
          color="secondary"
        />
      )}
    />
  );
};

export default SearchBar;
