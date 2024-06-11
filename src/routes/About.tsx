import React from 'react';
import {
  AboutContainer,
  AboutTitle,
  AboutParagraph,
  AboutImage,
} from './About.styles';

const About: React.FC = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Little Lemon</AboutTitle>
      <AboutParagraph>
        Little Lemon is a family-owned Mediterranean restaurant located in the
        heart of Chicago. Established in 1995, we have been serving our
        community with the finest Mediterranean cuisine. Our chefs use
        traditional recipes and the freshest ingredients to create
        mouth-watering dishes that are sure to satisfy your taste buds.
      </AboutParagraph>
      <AboutParagraph>
        Our restaurant has a cozy and welcoming atmosphere, perfect for family
        dinners, romantic dates, or casual lunches with friends. We believe in
        providing not just great food, but a great experience for all our
        guests. Come and join us for a memorable dining experience.
      </AboutParagraph>
      <AboutImage
        src="/icons_assets/restaurant_interior.jpg"
        alt="Restaurant Interior"
      />
    </AboutContainer>
  );
};

export default About;
