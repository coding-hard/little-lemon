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
        <InfoTitle>Little Lemon</InfoTitle>
        <InfoParagraph>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </InfoParagraph>
        <InfoParagraph>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </InfoParagraph>
      </InfoContent>
      <InfoImages>
        <InfoImage
          src="/icons_assets/restaurant.jpg"
          alt="Restaurant Terrace"
        />
      </InfoImages>
    </MoreInfoSection>
  );
};

export default MoreInfo;
