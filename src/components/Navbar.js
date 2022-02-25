import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={styles.container}>
      <h1>WikiCountries</h1>
      <div style={styles.link}>
        <Link to="/">Home</Link>
        <Link to="/countries">Countries</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
  },

  link: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    top: '50%',
    left: '50%',
    height: '100%',
    gap: '2em',
  },
};

export default Navbar;
