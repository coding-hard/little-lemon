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
  const handleReserveClick = () => {
    window.location.href = '/reservations';
  };

  return (
    <HeroSection>
      <HeroText>
        <HeroTitle>Little Lemon</HeroTitle>
        <HeroSubtitle>Chicago</HeroSubtitle>
        <HeroDescription>
          Welcome to Little Lemon, a cozy family-owned Mediterranean restaurant
          in the heart of Chicago. We bring you the authentic flavors of the
          Mediterranean with fresh, locally sourced ingredients.
        </HeroDescription>
        <HeroButton onClick={handleReserveClick}>Reserve a Table</HeroButton>
      </HeroText>
      <HeroImage src="/icons_assets/restauranfood.jpg" alt="Delicious food" />
    </HeroSection>
  );
};

export default React.memo(Hero);
