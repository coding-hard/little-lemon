import React from 'react';
import {
  MoreInfoSection,
  InfoContent,
  InfoTitle,
  InfoParagraph,
  InfoImages,
  InfoImage,
} from './MoreInfo.styles';

const MoreInfo: React.FC = () => {
  return (
    <MoreInfoSection>
      <InfoContent>
        <InfoTitle>About Little Lemon</InfoTitle>
        <br />
        <InfoParagraph>
          Little Lemon is a family-owned Mediterranean restaurant in the heart
          of Chicago. Our mission is to serve authentic, flavorful dishes that
          bring a taste of the Mediterranean to your table.
        </InfoParagraph>
        <br />
        <InfoParagraph>
          Our chefs use the freshest ingredients and traditional recipes to
          create delicious meals that will transport you to the shores of the
          Mediterranean. Whether you're looking for a casual meal or a place to
          celebrate special occasions, Little Lemon is the perfect destination.
        </InfoParagraph>
        <br />
        <InfoParagraph>
          The story of Little Lemon began over 20 years ago when our founder,
          Maria, decided to bring her grandmother's secret recipes from Greece
          to Chicago. With a passion for cooking and a dream to share her
          heritage, she opened the doors to Little Lemon.
        </InfoParagraph>
        <br />
        <InfoParagraph>
          Since then, Little Lemon has grown to become a beloved spot for both
          locals and visitors. Our commitment to quality and authenticity has
          remained unchanged, and we continue to serve dishes that are both
          delicious and true to their Mediterranean roots.
        </InfoParagraph>
      </InfoContent>
      <InfoImages>
        <InfoImage
          src="/icons_assets/restaurant.jpg"
          alt="A view of the restaurant terrace"
        />
      </InfoImages>
    </MoreInfoSection>
  );
};

export default React.memo(MoreInfo);
