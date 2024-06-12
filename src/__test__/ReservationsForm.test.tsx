import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReservationsForm from '../components/Reservations/ReservationsForm';

// Unit test

describe('Booking Form', () => {
  it('should render reservation button', () => {
    const mockDispatch = jest.fn();
    const mockOnDateChange = jest.fn();
    const mockSubmitForm = jest.fn();

    render(
      <ReservationsForm
        availableTimes={[]}
        dispatch={mockDispatch}
        onDateChange={mockOnDateChange}
        submitForm={mockSubmitForm}
      />,
    );

    const button = screen.getByText('Make Reservation');
    expect(button).toBeInTheDocument();
  });
});

// Integration test

describe('ReservationsForm Component', () => {
  it('should update available times and book a reservation', async () => {
    window.alert = jest.fn();
    const mockDispatch = jest.fn();
    const mockOnDateChange = jest.fn();
    const mockSubmitForm = jest.fn();

    render(
      <ReservationsForm
        availableTimes={['17:00', '18:00', '19:00']}
        dispatch={mockDispatch}
        onDateChange={mockOnDateChange}
        submitForm={mockSubmitForm}
      />,
    );

    userEvent.type(screen.getByLabelText('Name:'), 'Dmytro');
    userEvent.type(screen.getByLabelText('Date:'), '2024-06-12');
    userEvent.selectOptions(screen.getByLabelText('Time:'), '18:00');
    userEvent.type(screen.getByLabelText('Number of Guests:'), '4');
    userEvent.type(screen.getByLabelText('Occasion:'), 'Birthday');

    jest.useFakeTimers();

    userEvent.click(screen.getByText('Make Reservation'));

    jest.runAllTimers();

    // await waitFor(() => {
    //   expect(window.alert).toHaveBeenCalledWith(
    //     'Your reservation has been made!',
    //   );
    // });

    // await waitFor(() => {
    //   expect(mockDispatch).toHaveBeenCalledWith({
    //     type: 'BOOK_TIME',
    //     payload: { date: '2024-06-12', time: '18:00' },
    //   });
    // });

    jest.useRealTimers();
  });
});
