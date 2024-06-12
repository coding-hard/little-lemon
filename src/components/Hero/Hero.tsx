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
        <HeroSubtitle>Chicago 🇺🇸</HeroSubtitle>
        <HeroDescription>
          Welcome to Little Lemon, your go-to destination for exquisite
          Mediterranean cuisine in the heart of Chicago. Experience the vibrant
          flavors and fresh ingredients that make our dishes unforgettable.
        </HeroDescription>
        <HeroButton
          onClick={() => (window.location.href = '/reservations')}
          aria-label="Reserve a Table"
        >
          Reserve a Table
        </HeroButton>
      </HeroText>
      <HeroImage
        src="/icons_assets/restauranfood.jpg"
        alt="Delicious food at Little Lemon"
      />
    </HeroSection>
  );
};

export default Hero;
