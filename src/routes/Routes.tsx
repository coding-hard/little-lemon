import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Menu from '../pages/Menu/Menu';
import Reservations from '../pages/Reservations/Reservations';
import ConfirmedReservation from '../components/Reservations/ConfirmedReservation';
import Login from '../pages/Login/Login';
import NotFound from '../components/ErrorHandling/NotFound';

const Routes: React.FC = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/confirmation" element={<ConfirmedReservation />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  );
};

export default Routes;
