import React, { useReducer } from 'react';
import ReservationsForm from '../../components/Reservations/ReservationsForm';
import ReservationsSlot from '../../components/Reservations/ReservationsSlot';
import { ReservationContainer, ReservationTitle } from './Reservations.styles';

export const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

export const updateTimes = (
  state: { times: string[]; booked: { [date: string]: string[] } },
  action: { type: string; payload: { date: string; time?: string } },
) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      const bookedTimesForDate = state.booked[action.payload.date] || [];
      return {
        ...state,
        times: initializeTimes().filter(
          (time) => !bookedTimesForDate.includes(time),
        ),
      };
    case 'BOOK_TIME':
      const { date, time } = action.payload;
      const updatedBooked = {
        ...state.booked,
        [date]: [...(state.booked[date] || []), time!],
      };
      return {
        ...state,
        booked: updatedBooked,
        times: initializeTimes().filter(
          (t) => !updatedBooked[date].includes(t),
        ),
      };
    default:
      return state;
  }
};

const Reservations: React.FC = () => {
  const [state, dispatch] = useReducer(updateTimes, {
    times: initializeTimes(),
    booked: {},
  });

  console.log('Rendering Reservations with times:', state.times);

  return (
    <ReservationContainer>
      <ReservationTitle>Reserve a Table</ReservationTitle>
      <ReservationsForm availableTimes={state.times} dispatch={dispatch} />
      <ReservationsSlot availableTimes={state.times} />
    </ReservationContainer>
  );
};

export default Reservations;
