import React, { useState } from 'react';
import {
  ReservationContainer,
  ReservationTitle,
  ReservationForm,
  ReservationLabel,
  ReservationInput,
  ReservationButton,
} from './Reservations.styles';

const Reservations: React.FC = () => {
  const [reservationDetails, setReservationDetails] = useState({
    name: '',
    date: '',
    time: '',
    guests: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReservationDetails({ ...reservationDetails, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mocking a POST request
    const mockPostRequest = new Promise((resolve) => {
      setTimeout(() => {
        console.log('Reservation Details:', reservationDetails);
        resolve('Your reservation has been made!');
      }, 1000);
    });

    mockPostRequest.then((message) => {
      alert(message);
      setReservationDetails({
        name: '',
        date: '',
        time: '',
        guests: '',
      });
    });
  };

  return (
    <ReservationContainer>
      <ReservationTitle>Reserve a Table</ReservationTitle>
      <ReservationForm onSubmit={handleSubmit}>
        <ReservationLabel htmlFor="name">Name:</ReservationLabel>
        <ReservationInput
          type="text"
          id="name"
          name="name"
          value={reservationDetails.name}
          onChange={handleChange}
          required
        />
        <ReservationLabel htmlFor="date">Date:</ReservationLabel>
        <ReservationInput
          type="date"
          id="date"
          name="date"
          value={reservationDetails.date}
          onChange={handleChange}
          required
        />
        <ReservationLabel htmlFor="time">Time:</ReservationLabel>
        <ReservationInput
          type="time"
          id="time"
          name="time"
          value={reservationDetails.time}
          onChange={handleChange}
          required
        />
        <ReservationLabel htmlFor="guests">Number of Guests:</ReservationLabel>
        <ReservationInput
          type="number"
          id="guests"
          name="guests"
          value={reservationDetails.guests}
          onChange={handleChange}
          required
        />
        <ReservationButton type="submit">Make Reservation</ReservationButton>
      </ReservationForm>
    </ReservationContainer>
  );
};

export default Reservations;
