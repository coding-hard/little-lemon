import React from 'react';
import {
  HeroSection,
  HeroText,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  HeroButton,
  HeroImage,
} from './Hero.styles';

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroText>
        <HeroTitle>Little Lemon</HeroTitle>
        <HeroSubtitle>Chicago</HeroSubtitle>
        <HeroDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </HeroDescription>
        <HeroButton onClick={() => (window.location.href = '/reservations')}>
          Reserve a Table
        </HeroButton>
      </HeroText>
      <HeroImage src="/icons_assets/restauranfood.jpg" alt="Delicious food" />
    </HeroSection>
  );
};

export default Hero;
