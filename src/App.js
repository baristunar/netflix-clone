import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles.css';
import MainLayout from './components/layouts/MainLayout';
import Homepage from './pages/homepage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" index element={<Homepage />} />
      </Route>
    </Routes>
  );
};

export default App;
