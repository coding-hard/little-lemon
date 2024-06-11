import {
  initializeTimes,
  updateTimes,
} from '../pages/Reservations/Reservations';

// Unit tests

describe('Reservations Utility Functions', () => {
  it('initializeTimes should return the correct array of times', () => {
    const expectedTimes = [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ];
    expect(initializeTimes()).toEqual(expectedTimes);
  });

  it('updateTimes should return the same state when action type is unknown', () => {
    const initialState = {
      times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
      booked: {},
    };
    const action = { type: 'UNKNOWN_ACTION', payload: { date: '2024-12-25' } };

    expect(updateTimes(initialState, action)).toEqual(initialState);
  });

  it('updateTimes should return updated state for UPDATE_TIMES action', () => {
    const initialState = {
      times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
      booked: { '2024-12-25': ['18:00'] },
    };

    const action = { type: 'UPDATE_TIMES', payload: { date: '2024-12-25' } };

    const expectedState = {
      times: ['17:00', '19:00', '20:00', '21:00', '22:00'],
      booked: { '2024-12-25': ['18:00'] },
    };

    expect(updateTimes(initialState, action)).toEqual(expectedState);
  });

  it('updateTimes should return updated state for BOOK_TIME action', () => {
    const initialState = {
      times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
      booked: { '2024-12-25': ['18:00'] },
    };

    const action = {
      type: 'BOOK_TIME',
      payload: { date: '2024-12-25', time: '19:00' },
    };

    const expectedState = {
      times: ['17:00', '20:00', '21:00', '22:00'],
      booked: { '2024-12-25': ['18:00', '19:00'] },
    };

    expect(updateTimes(initialState, action)).toEqual(expectedState);
  });
});
