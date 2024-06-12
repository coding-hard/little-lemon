import React from 'react';
import { HeaderContainer, Logo } from './Header.styles';
import Nav from '../Nav/Nav';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo
        src="/icons_assets/Logo.svg"
        alt="Little Lemon Logo"
        aria-label="Little Lemon Logo"
      />
      <Nav />
    </HeaderContainer>
  );
};

export default Header;
