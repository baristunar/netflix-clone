import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles.css';
import MainLayout from './components/layouts/MainLayout';
import Homepage from './pages/homepage';
import Movies from './pages/movies';
import Series from './pages/series';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" index element={<Homepage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
      </Route>
    </Routes>
  );
};

export default App;
