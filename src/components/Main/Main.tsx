import React from 'react';
import Hero from '../Hero/Hero';
import Specials from '../Specials/Specials';
import Testimonials from '../Testimonials/Testimonials';
import MoreInfo from '../MoreInfo/MoreInfo';
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
