import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Specials from '../../components/Specials/Specials';
import OrderOnline from '../../components/OrderOnline/OrderOnline';
import { MenuContainer, MenuTitle } from './Menu.styles';

const Menu: React.FC = () => {
  const orderOnlineRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToOrderOnline && orderOnlineRef.current) {
      orderOnlineRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <MenuContainer>
      <MenuTitle>Our Menu</MenuTitle>
      <Specials />
      <div ref={orderOnlineRef}>
        <OrderOnline />
      </div>
    </MenuContainer>
  );
};

export default Menu;
