import React from 'react';
import Nav from './Nav';
import '../styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src="path-to-logo.jpg" alt="Little Lemon Logo" />
        </div>
        <Nav />
      </div>
    </header>
  );
}
