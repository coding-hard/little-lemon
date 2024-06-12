import { waitFor, screen, render } from '@testing-library/react';
import {
  initializeTimes,
  updateTimes,
} from '../pages/Reservations/Reservations';
import { ActionType } from '../pages/Reservations/Reservations';
import Reservations from '../pages/Reservations/Reservations';
import * as Api from '../utils/Api';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';

// Unit tests

describe('Reservations Utility Functions', () => {
  beforeEach(() => {
    jest
      .spyOn(Api, 'fetchAPI')
      .mockResolvedValue([
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
      ]);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('initializeTimes should return the correct array of times', async () => {
    const expectedTimes = [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ];
    const result = await initializeTimes();
    expect(result).toEqual(expectedTimes);
  });

  it('updateTimes should return the same state when action type is unknown', () => {
    const initialState = {
      times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
      booked: {},
    };
    const action = {
      type: 'UNKNOWN_ACTION',
      payload: {
        date: '2024-12-25',
        times: ['17:00', '19:00', '20:00', '21:00', '22:00'],
      },
    };

    expect(updateTimes(initialState, action as any)).toEqual(initialState);
  });

  it('updateTimes should return updated state for UPDATE_TIMES action', async () => {
    jest
      .spyOn(Api, 'fetchAPI')
      .mockResolvedValueOnce(['17:00', '19:00', '20:00', '21:00', '22:00']);

    const initialState = {
      times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
      booked: { '2024-12-25': ['18:00'] },
    };

    const action: ActionType = {
      type: 'UPDATE_TIMES',
      payload: { date: '2024-12-25', times: await Api.fetchAPI('2024-12-25') },
    };

    const expectedState = {
      times: ['17:00', '19:00', '20:00', '21:00', '22:00'],
      booked: { '2024-12-25': ['18:00'] },
    };

    const result = updateTimes(initialState, action);
    expect(result).toEqual(expectedState);
  });

  it('updateTimes should return updated state for BOOK_TIME action', async () => {
    jest
      .spyOn(Api, 'fetchAPI')
      .mockResolvedValueOnce(['17:00', '20:00', '21:00', '22:00']);

    const initialState = {
      times: ['17:00', '19:00', '20:00', '21:00', '22:00'],
      booked: { '2024-12-25': ['18:00'] },
    };

    const action: ActionType = {
      type: 'BOOK_TIME',
      payload: { date: '2024-12-25', time: '19:00' },
    };

    const expectedBooked = {
      '2024-12-25': ['18:00', '19:00'],
    };

    const expectedTimes = ['17:00', '20:00', '21:00', '22:00'];

    const result = updateTimes(initialState, action);
    expect(result.booked).toEqual(expectedBooked);
    expect(result.times).toEqual(expectedTimes);
  });
});

// Integration test

describe('Reading from Local Storage', () => {
  it('should initialize state with booked times from local storage', async () => {
    const bookedTimes = {
      '2024-06-12': ['18:00'],
    };
    localStorage.setItem('bookedTimes', JSON.stringify(bookedTimes));

    jest.spyOn(Api, 'fetchAPI').mockResolvedValue(['17:00', '18:00', '19:00']);

    render(
      <MemoryRouter>
        <AuthProvider>
          <Reservations />
        </AuthProvider>
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.queryByText('18:00')).not.toBeInTheDocument();
    });
  });
});
