import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
