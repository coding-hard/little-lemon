import React, { useState } from 'react';
import {
  ReservationForm,
  ReservationLabel,
  ReservationInput,
  ReservationButton,
  ReservationSelect,
} from './ReservationsForm.styles';

interface ReservationsFormProps {
  availableTimes: string[];
  dispatch: React.Dispatch<{
    type: string;
    payload: { date: string; time?: string };
  }>;
}

const ReservationsForm: React.FC<ReservationsFormProps> = ({
  availableTimes,
  dispatch,
}) => {
  const [reservationDetails, setReservationDetails] = useState({
    name: '',
    date: '',
    time: availableTimes[0] || '', // Pre-select the first available time if available
    guests: '',
    occasion: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setReservationDetails({ ...reservationDetails, [name]: value });
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    console.log('Dispatching UPDATE_TIMES:', { date: e.target.value });
    dispatch({ type: 'UPDATE_TIMES', payload: { date: e.target.value } });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { date, time } = reservationDetails;

    // Mocking a POST request
    const mockPostRequest = new Promise<string>((resolve) => {
      setTimeout(() => {
        console.log('Reservation Details:', reservationDetails);
        resolve('Your reservation has been made!');
      }, 1000);
    });

    const message = await mockPostRequest;
    console.log('Alert message:', message);
    alert(message);
    console.log('Dispatching BOOK_TIME:', { date, time });
    dispatch({ type: 'BOOK_TIME', payload: { date, time } });
    setReservationDetails({
      name: '',
      date: reservationDetails.date,
      time: '',
      guests: '',
      occasion: '',
    });
  };

  return (
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
        onChange={handleDateChange}
        required
      />
      <ReservationLabel htmlFor="time">Time:</ReservationLabel>
      <ReservationSelect
        id="time"
        name="time"
        value={reservationDetails.time} // Ensure the value is set correctly
        onChange={handleChange}
        required
      >
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </ReservationSelect>
      <ReservationLabel htmlFor="guests">Number of Guests:</ReservationLabel>
      <ReservationInput
        type="number"
        id="guests"
        name="guests"
        value={reservationDetails.guests}
        onChange={handleChange}
        required
      />
      <ReservationLabel htmlFor="occasion">Occasion:</ReservationLabel>
      <ReservationInput
        type="text"
        id="occasion"
        name="occasion"
        value={reservationDetails.occasion}
        onChange={handleChange}
      />
      <ReservationButton type="submit">Make Reservation</ReservationButton>
    </ReservationForm>
  );
};

export default ReservationsForm;
