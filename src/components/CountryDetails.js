import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Waiting from './Waiting';

const CountryDetails = () => {
  const { a3c } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${a3c}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [a3c]);

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.name.common}</h1>
          <h3>Capital: {data.capital}</h3>
          <h3>
            Area: {data.area}km<sup>2</sup>
          </h3>
          <h4>
            {data.name.common} borders
            {data.borders.map((border) => (
              <Link
                key={data.alpha3Code}
                to={`/countries/${border}`}
                style={styles}
              >
                {border}
              </Link>
            ))}
          </h4>
        </div>
      ) : (
        <Waiting />
      )}
    </div>
  );
};

const styles = {
  display: 'flex',
  flexDirection: 'center',
  justifyContent: 'center',
  alignItems: 'center',
};

export default CountryDetails;
