import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes'; // Import the Routes component
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
};

export default App;
