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
        The story of Little Lemon begins with Mario and Adrian, a pair of
        passionate chefs who immigrated from Italy to the United States in the
        early 1990s. They brought with them a love for cooking and a dream to
        share the flavors of their homeland with the people of Chicago. With
        hard work and dedication, they opened the doors to Little Lemon in a
        small, cozy location downtown.
      </AboutParagraph>
      <AboutParagraph>
        From the very beginning, Mario and Adrian were committed to creating a
        warm and welcoming atmosphere for their guests. Mario handled the
        kitchen, crafting delicious dishes using his grandmother`s recipes,
        while Adrian managed the front of the house, greeting customers with a
        friendly smile and making them feel at home.
      </AboutParagraph>
      <AboutImage
        src="/icons_assets/Mario and Adrian b.jpg"
        alt="Mario and Adrian, Owners of Little Lemon"
      />
      <AboutParagraph>
        Over the years, Little Lemon gained a reputation for its authentic
        Mediterranean cuisine and exceptional customer service. The restaurant
        became a favorite spot for family dinners, romantic dates, and casual
        lunches with friends. People from all over Chicago came to enjoy Mario`s
        famous Greek salad, lamb souvlaki, and baklava.
      </AboutParagraph>
      <AboutParagraph>
        As the restaurant`s popularity grew, so did the need for a larger space.
        In 2005, Mario and Adrian moved Little Lemon to its current location, a
        beautiful, spacious venue with a charming outdoor patio. The new
        location allowed them to expand their menu and offer even more delicious
        dishes to their customers.
      </AboutParagraph>
      <AboutParagraph>
        Despite the challenges that came with running a restaurant, Mario and
        Adrian never lost their passion for what they do. They believe that food
        is more than just sustenance; it is a way to bring people together and
        create lasting memories. This philosophy is evident in every aspect of
        Little Lemon, from the carefully prepared dishes to the warm and
        inviting atmosphere.
      </AboutParagraph>

      <AboutParagraph>
        Today, Little Lemon continues to be a beloved fixture in the Chicago
        dining scene. Mario and Adrian`s children, Elena and Nikos, have joined
        the family business, bringing fresh ideas and a new generation`s
        perspective. They have introduced innovative dishes and modernized the
        restaurant`s operations, all while staying true to the traditions and
        values that Mario and Adrian established.
      </AboutParagraph>
      <AboutParagraph>
        Little Lemon`s success is a testament to the hard work and dedication of
        the entire family. They have built a restaurant that not only serves
        incredible food but also creates a sense of community and belonging.
        Whether you are a longtime customer or visiting for the first time, you
        are always welcomed with open arms and treated like family.
      </AboutParagraph>
      <AboutParagraph>
        We invite you to come and experience Little Lemon for yourself. Enjoy a
        meal prepared with love, savor the flavors of the Mediterranean, and
        become a part of our story. Thank you for being a part of our journey,
        and we look forward to serving you for many years to come.
      </AboutParagraph>
    </AboutContainer>
  );
};

export default About;
