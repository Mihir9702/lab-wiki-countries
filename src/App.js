import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App" style={styles}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/countries" element={<CountriesList />} />
        <Route path="/countries/:a3c" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

const styles = {
  height: '100vh',
  width: '100%',
  margin: 'auto',
  boxSizing: 'border-box',
};

export default App;
