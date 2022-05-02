import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../navbar';
import Container from '../ui/Container';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
};

export default MainLayout;
