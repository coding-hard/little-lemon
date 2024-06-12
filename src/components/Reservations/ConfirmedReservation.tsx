import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ConfirmContainer,
  ConfirmMessage,
  ConfirmButton,
  ConfirmDetails,
} from './ConfirmedReservations.styles';

const ConfirmedReservation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { reservationDetails } = location.state || {};

  const handleNewReservation = () => {
    navigate('/reservations');
  };

  if (!reservationDetails) {
    return (
      <ConfirmContainer>
        <ConfirmMessage>No reservation details found.</ConfirmMessage>
      </ConfirmContainer>
    );
  }

  return (
    <ConfirmContainer>
      <div>
        <ConfirmMessage>Your booking has been confirmed!</ConfirmMessage>
        <ConfirmDetails>
          <p>
            <strong>Name:</strong> {reservationDetails.name}
          </p>
          <p>
            <strong>Date:</strong> {reservationDetails.date}
          </p>
          <p>
            <strong>Time:</strong> {reservationDetails.time}
          </p>
          <p>
            <strong>Guests:</strong> {reservationDetails.guests}
          </p>
          <p>
            <strong>Occasion:</strong> {reservationDetails.occasion}
          </p>
        </ConfirmDetails>
        <ConfirmButton onClick={handleNewReservation}>
          Make Another Reservation
        </ConfirmButton>
      </div>
    </ConfirmContainer>
  );
};

export default ConfirmedReservation;
