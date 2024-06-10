import React from 'react';
import {
  HeroSection,
  HeroText,
  HeroImage,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  HeroButton,
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
        <HeroButton>Reserve a Table</HeroButton>
      </HeroText>
      <HeroImage src="path-to-hero-image.jpg" alt="Delicious food" />
    </HeroSection>
  );
};

export default Hero;
