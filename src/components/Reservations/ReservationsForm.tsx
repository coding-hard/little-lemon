import React, { useState, Dispatch, useEffect } from 'react';
import {
  ReservationForm,
  ReservationLabel,
  ReservationInput,
  ReservationButton,
  ReservationSelect,
} from './ReservationsForm.styles';
import { ActionType } from '../../pages/Reservations/Reservations';
import { submitAPI } from '../../utils/Api';

interface ReservationsFormProps {
  availableTimes: string[];
  dispatch: Dispatch<ActionType>;
  onDateChange: (date: string) => void;
}

const ReservationsForm: React.FC<ReservationsFormProps> = ({
  availableTimes,
  dispatch,
  onDateChange,
}) => {
  const [reservationDetails, setReservationDetails] = useState({
    name: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
  });

  useEffect(() => {
    if (availableTimes.length > 0) {
      setReservationDetails((details) => ({
        ...details,
        time: availableTimes[0],
      }));
    }
  }, [availableTimes]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setReservationDetails({ ...reservationDetails, [name]: value });
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    onDateChange(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { date, time } = reservationDetails;

    const formData = {
      name: reservationDetails.name,
      date: reservationDetails.date,
      time: reservationDetails.time,
      guests: reservationDetails.guests,
      occasion: reservationDetails.occasion,
    };

    const success = await submitAPI(formData);
    const message = success
      ? 'Your reservation has been made!'
      : 'Failed to make reservation';
    alert(message);

    if (success) {
      dispatch({ type: 'BOOK_TIME', payload: { date, time } });
      setReservationDetails({
        name: '',
        date: reservationDetails.date,
        time: '',
        guests: '',
        occasion: '',
      });
    }
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
        value={reservationDetails.time}
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
