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
        // handle success
        setCities(response.data);
      })
      .catch((error) => {
        // handle error
        // console.log(error);
      })
      .then(() => {
        // always executed
      });
  };

  const fetchCountryData = (woeid) => {
    setStatus('fetching');

    axios
      .get(`/cityWeather/${woeid}`)
      .then((response) => {
        // handle success
        setCityData(response.data);
        setStatus('done');
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  };

  return (
    <Autocomplete
      id="country-select-demo"
      onChange={(event, value) =>
        event.target.value !== '' && fetchCountryData(value.woeid)
      }
      style={{ width: 300, background: 'white' }}
      options={cities}
      autoHighlight
      getOptionLabel={(option) => option.title}
      renderOption={(city) => <React.Fragment>{city.title}</React.Fragment>}
      renderInput={(params) => (
        <TextField
          style={{
            '& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button':
              {
                display: 'none',
              },
          }}
          {...params}
          onChange={(event) =>
            event.target.value !== '' && fetchCountries(event.target.value)
          }
          label="Choose a city"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
};

export default SearchBar;

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
