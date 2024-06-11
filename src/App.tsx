import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './routes/Home';
import About from './routes/About';
import Menu from './routes/Menu';
import Reservations from './routes/Reservations';
import Login from './routes/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
