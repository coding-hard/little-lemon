import React from 'react';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import MoreInfo from './MoreInfo';
import { MainContainer } from './Main.styles';

const Main: React.FC = () => {
  return (
    <MainContainer>
      <Hero />
      <Specials />
      <Testimonials />
      <MoreInfo />
    </MainContainer>
  );
};

export default Main;
