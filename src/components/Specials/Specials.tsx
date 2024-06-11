import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleOrderDelivery = () => {
    navigate('/menu', { state: { scrollToOrderOnline: true } });
  };

  return (
    <SpecialsSection>
      <SpecialsHeader>
        <SpecialsTitle>Specials</SpecialsTitle>
        <SpecialsButton onClick={() => (window.location.href = '/menu')}>
          Online Menu
        </SpecialsButton>
      </SpecialsHeader>
      <SpecialsGrid>
        <SpecialItem>
          <SpecialImage src="/icons_assets/greek salad.jpg" alt="Greek Salad" />
          <SpecialTitle>Greek Salad</SpecialTitle>
          <SpecialDescription>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </SpecialDescription>
          <SpecialPrice>$12.99</SpecialPrice>
          <SpecialOrderButton onClick={handleOrderDelivery}>
            Order a delivery
          </SpecialOrderButton>
        </SpecialItem>
        <SpecialItem>
          <SpecialImage src="/icons_assets/bruchetta.svg" alt="Bruschetta" />
          <SpecialTitle>Bruschetta</SpecialTitle>
          <SpecialDescription>
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </SpecialDescription>
          <SpecialPrice>$5.99</SpecialPrice>
          <SpecialOrderButton onClick={handleOrderDelivery}>
            Order a delivery
          </SpecialOrderButton>
        </SpecialItem>
        <SpecialItem>
          <SpecialImage
            src="/icons_assets/lemon dessert.jpg"
            alt="Lemon Dessert"
          />
          <SpecialTitle>Lemon Dessert</SpecialTitle>
          <SpecialDescription>
            This comes straight from grandma’s recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </SpecialDescription>
          <SpecialPrice>$5.00</SpecialPrice>
          <SpecialOrderButton onClick={handleOrderDelivery}>
            Order a delivery
          </SpecialOrderButton>
        </SpecialItem>
      </SpecialsGrid>
    </SpecialsSection>
  );
};

export default Specials;
