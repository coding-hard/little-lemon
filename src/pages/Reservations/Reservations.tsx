import React, { useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import ReservationsForm from '../../components/Reservations/ReservationsForm';
import ReservationsSlot from '../../components/Reservations/ReservationsSlot';
import { ReservationContainer, ReservationTitle } from './Reservations.styles';
import { fetchAPI, submitAPI } from '../../utils/Api';

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

const LOCAL_STORAGE_KEY = 'bookedTimes';

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
    booked: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}'),
  });

  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchInitialTimes = async () => {
      const times = await initializeTimes();
      dispatch({ type: 'INITIALIZE_TIMES', payload: { times } });

      // Log the initial booked times
      console.log(
        'Initial booked times from local storage:',
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}'),
      );
    };

    fetchInitialTimes();
  }, []);

  const handleDateChange = async (date: string) => {
    const times = await fetchAPI(date);
    dispatch({ type: 'UPDATE_TIMES', payload: { date, times } });
  };

  const submitForm = async (formData: {
    name: string;
    date: string;
    time: string;
    guests: string;
    occasion: string;
  }) => {
    if (!isAuthenticated) {
      alert('You must be logged in to make a reservation.');
      navigate('/login');
      return;
    }

    const success = await submitAPI(formData);
    if (success) {
      // Save the booked time to local storage directly
      const bookedTimes = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEY) || '{}',
      );
      if (!bookedTimes[formData.date]) {
        bookedTimes[formData.date] = [];
      }
      bookedTimes[formData.date].push(formData.time);

      // Log the updated booked times
      console.log('Updating local storage with booked times:', bookedTimes);

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bookedTimes));

      // Dispatch the action to update the state
      dispatch({
        type: 'BOOK_TIME',
        payload: { date: formData.date, time: formData.time },
      });
      console.log('Form submitted successfully:', formData);
      navigate('/confirmation');
    } else {
      alert('Failed to make reservation');
    }
  };

  console.log('Rendering Reservations with times:', state.times);

  return (
    <ReservationContainer>
      <ReservationTitle>Reserve a Table</ReservationTitle>
      <ReservationsForm
        availableTimes={state.times}
        dispatch={dispatch}
        onDateChange={handleDateChange}
        submitForm={submitForm}
      />
      <ReservationsSlot availableTimes={state.times} />
    </ReservationContainer>
  );
};

export default Reservations;
