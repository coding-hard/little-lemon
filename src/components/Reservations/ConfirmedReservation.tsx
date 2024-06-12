import React from 'react';
import {
  ConfirmContainer,
  ConfirmMessage,
} from './ConfirmedReservations.styles';

const ConfirmedReservation: React.FC = () => {
  return (
    <ConfirmContainer>
      <ConfirmMessage>Your booking has been confirmed!</ConfirmMessage>
    </ConfirmContainer>
  );
};

export default ConfirmedReservation;
