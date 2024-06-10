import React from 'react';
import {
  SpecialsSection,
  SpecialsHeader,
  SpecialsTitle,
  SpecialsButton,
  SpecialsGrid,
  SpecialItem,
  SpecialImage,
  SpecialTitle,
  SpecialDescription,
  SpecialPrice,
  SpecialOrderButton,
} from './Specials.styles';

const Specials: React.FC = () => {
  return (
    <SpecialsSection>
      <SpecialsHeader>
        <SpecialsTitle>Specials</SpecialsTitle>
        <SpecialsButton>Online Menu</SpecialsButton>
      </SpecialsHeader>
      <SpecialsGrid>
        <SpecialItem>
          <SpecialImage src="path-to-special-image1.jpg" alt="Greek Salad" />
          <SpecialTitle>Greek Salad</SpecialTitle>
          <SpecialDescription>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </SpecialDescription>
          <SpecialPrice>$12.99</SpecialPrice>
          <SpecialOrderButton>Order a delivery</SpecialOrderButton>
        </SpecialItem>
        <SpecialItem>
          <SpecialImage src="path-to-special-image2.jpg" alt="Bruschetta" />
          <SpecialTitle>Bruschetta</SpecialTitle>
          <SpecialDescription>
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </SpecialDescription>
          <SpecialPrice>$5.99</SpecialPrice>
          <SpecialOrderButton>Order a delivery</SpecialOrderButton>
        </SpecialItem>
        <SpecialItem>
          <SpecialImage src="path-to-special-image3.jpg" alt="Lemon Dessert" />
          <SpecialTitle>Lemon Dessert</SpecialTitle>
          <SpecialDescription>
            This comes straight from grandma’s recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </SpecialDescription>
          <SpecialPrice>$5.00</SpecialPrice>
          <SpecialOrderButton>Order a delivery</SpecialOrderButton>
        </SpecialItem>
      </SpecialsGrid>
    </SpecialsSection>
  );
};

export default Specials;
