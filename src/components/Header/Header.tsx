import React from 'react';
import Nav from './Nav';
import { HeaderContainer, HeaderContent, Logo } from './Header.styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo src="path-to-logo.jpg" alt="Little Lemon Logo" />
        <Nav />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
