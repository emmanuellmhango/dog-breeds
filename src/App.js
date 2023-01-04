import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import fetchBreeds from './redux/FetchBreeds';

import Home from './pages/Home';
import Details from './pages/Details';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBreeds());
  }, [dispatch]);
  return (
    <div className="App">
      <div className="contents">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
