import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Menu from '../pages/Menu/Menu';
import Reservations from '../pages/Reservations/Reservations';
import Login from '../pages/Login/Login';

const Routes: React.FC = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/login" element={<Login />} />
    </RouterRoutes>
  );
};

export default Routes;
