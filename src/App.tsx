import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
