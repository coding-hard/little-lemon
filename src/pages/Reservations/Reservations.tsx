import React, { useReducer, useEffect } from 'react';
import ReservationsForm from '../../components/Reservations/ReservationsForm';
import ReservationsSlot from '../../components/Reservations/ReservationsSlot';
import { ReservationContainer, ReservationTitle } from './Reservations.styles';
import { fetchAPI } from '../../utils/Api';

type InitializeTimesType = {
  type: 'INITIALIZE_TIMES';
  payload: {
    times: string[];
  };
};

type UpdateTimesType = {
  type: 'UPDATE_TIMES';
  payload: {
    date: string;
    times?: string[];
  };
};

type BookTimeType = {
  type: 'BOOK_TIME';
  payload: {
    date: string;
    time: string;
  };
};

export type ActionType = InitializeTimesType | UpdateTimesType | BookTimeType;

export const initializeTimes = async () => {
  const today = new Date().toISOString().split('T')[0];
  const availableTimes = await fetchAPI(today);
  return availableTimes;
};

export const updateTimes = (
  state: { times: string[]; booked: { [date: string]: string[] } },
  action: ActionType,
) => {
  switch (action.type) {
    case 'INITIALIZE_TIMES':
      return {
        ...state,
        times: action.payload.times || [],
      };
    case 'UPDATE_TIMES':
      const bookedTimesForDate = state.booked[action.payload.date] || [];
      return {
        ...state,
        times: (action.payload.times || []).filter(
          (time) => !bookedTimesForDate.includes(time),
        ),
      };
    case 'BOOK_TIME':
      const { date, time } = action.payload;
      if (!date || !time) {
        return state;
      }
      const updatedBooked = {
        ...state.booked,
        [date]: [...(state.booked[date] || []), time],
      };
      return {
        ...state,
        booked: updatedBooked,
        times: state.times.filter((t) => t !== time),
      };
    default:
      return state;
  }
};

const Reservations: React.FC = () => {
  const [state, dispatch] = useReducer(updateTimes, {
    times: [],
    booked: {},
  });

  useEffect(() => {
    const fetchInitialTimes = async () => {
      const times = await initializeTimes();
      dispatch({ type: 'INITIALIZE_TIMES', payload: { times } });
    };

    fetchInitialTimes();
  }, []);

  const handleDateChange = async (date: string) => {
    const times = await fetchAPI(date);
    dispatch({ type: 'UPDATE_TIMES', payload: { date, times } });
  };

  console.log('Rendering Reservations with times:', state.times);

  return (
    <ReservationContainer>
      <ReservationTitle>Reserve a Table</ReservationTitle>
      <ReservationsForm
        availableTimes={state.times}
        dispatch={dispatch}
        onDateChange={handleDateChange}
      />
      <ReservationsSlot availableTimes={state.times} />
    </ReservationContainer>
  );
};

export default Reservations;
