import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Waiting from './Waiting';

const CountriesList = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((res) => setData(res.data));
  }, []);

  return (
    <div style={styles.flex}>
      {data ? (
        data.map((country) => (
          <Link
            to={`${country.alpha3Code}`}
            style={styles.link}
            key={country.alpha3Code}
          >
            {country.name.official}
            <hr />
          </Link>
        ))
      ) : (
        <Waiting />
      )}
    </div>
  );
};

const styles = {
  flex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginTop: '10em',
    width: '100%',
  },

  link: {
    textDecoration: 'none',
    color: 'black',
    fontSize: '1.1em',
    marginTop: '2em',
    cursor: 'pointer',
  },
};

export default CountriesList;
