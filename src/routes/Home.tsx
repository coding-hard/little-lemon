import React from 'react';
import Hero from '../components/Hero/Hero';
import Specials from '../components/Specials/Specials';
import Testimonials from '../components/Testimonials/Testimonials';
import MoreInfo from '../components/MoreInfo/MoreInfo';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <MoreInfo />
    </main>
  );
};

export default Home;
