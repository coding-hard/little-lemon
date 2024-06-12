import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReservationsForm from '../components/Reservations/ReservationsForm';

afterEach(() => {
  jest.clearAllMocks();
  localStorage.clear();
});

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
    const mockDispatch = jest.fn();
    const mockOnDateChange = jest.fn();

    const mockSubmitForm = jest.fn(async (formData) => {
      mockDispatch({
        type: 'BOOK_TIME',
        payload: { date: formData.date, time: formData.time },
      });
    });

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

    userEvent.click(screen.getByText('Make Reservation'));

    await waitFor(() => {
      expect(mockSubmitForm).toHaveBeenCalledWith({
        name: 'Dmytro',
        date: '2024-06-12',
        time: '18:00',
        guests: '4',
        occasion: 'Birthday',
      });
    });

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'BOOK_TIME',
        payload: { date: '2024-06-12', time: '18:00' },
      });
    });
  });
});

describe('Writing to Local Storage', () => {
  it('should update local storage with booked times', async () => {
    const mockDispatch = jest.fn();
    const mockOnDateChange = jest.fn();

    const mockSubmitForm = jest.fn(async (formData) => {
      const bookedTimes = JSON.parse(
        localStorage.getItem('bookedTimes') || '{}',
      );
      if (!bookedTimes[formData.date]) {
        bookedTimes[formData.date] = [];
      }
      bookedTimes[formData.date].push(formData.time);
      localStorage.setItem('bookedTimes', JSON.stringify(bookedTimes));
    });

    jest.spyOn(Storage.prototype, 'setItem');

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

    userEvent.click(screen.getByText('Make Reservation'));

    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'bookedTimes',
        JSON.stringify({
          '2024-06-12': ['18:00'],
        }),
      );
    });
  });
});

describe('Reservations Form - Input Validation', () => {
  const mockDispatch = jest.fn();
  const mockOnDateChange = jest.fn();
  const mockSubmitForm = jest.fn();

  it('should allow form submission with valid input', async () => {
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

    userEvent.click(screen.getByText('Make Reservation'));

    await waitFor(() => {
      expect(mockSubmitForm).toHaveBeenCalledWith({
        name: 'Dmytro',
        date: '2024-06-12',
        time: '18:00',
        guests: '4',
        occasion: 'Birthday',
      });
    });
  });

  it('should prevent form submission with empty name', async () => {
    render(
      <ReservationsForm
        availableTimes={['17:00', '18:00', '19:00']}
        dispatch={mockDispatch}
        onDateChange={mockOnDateChange}
        submitForm={mockSubmitForm}
      />,
    );

    userEvent.type(screen.getByLabelText('Date:'), '2024-06-12');
    userEvent.selectOptions(screen.getByLabelText('Time:'), '18:00');
    userEvent.type(screen.getByLabelText('Number of Guests:'), '4');
    userEvent.type(screen.getByLabelText('Occasion:'), 'Birthday');

    const form = screen.getByTestId('reservation-form');
    const handleSubmit = jest.fn((e) => e.preventDefault());
    form.addEventListener('submit', handleSubmit);

    userEvent.click(screen.getByText('Make Reservation'));

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalled();
      expect(handleSubmit.mock.calls[0][0].defaultPrevented).toBe(true);
    });

    const nameInput = screen.getByLabelText('Name:') as HTMLInputElement;
    expect(nameInput.validity.valueMissing).toBe(true);
  });

  it('should prevent form submission with invalid date', async () => {
    render(
      <ReservationsForm
        availableTimes={['17:00', '18:00', '19:00']}
        dispatch={mockDispatch}
        onDateChange={mockOnDateChange}
        submitForm={mockSubmitForm}
      />,
    );

    userEvent.type(screen.getByLabelText('Name:'), 'Dmytro');
    userEvent.type(screen.getByLabelText('Date:'), 'invalid-date');
    userEvent.selectOptions(screen.getByLabelText('Time:'), '18:00');
    userEvent.type(screen.getByLabelText('Number of Guests:'), '4');
    userEvent.type(screen.getByLabelText('Occasion:'), 'Birthday');

    const form = screen.getByTestId('reservation-form');
    const handleSubmit = jest.fn((e) => e.preventDefault());
    form.addEventListener('submit', handleSubmit);

    userEvent.click(screen.getByText('Make Reservation'));

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalled();
      expect(handleSubmit.mock.calls[0][0].defaultPrevented).toBe(true);
    });

    const dateInput = screen.getByLabelText('Date:') as HTMLInputElement;
    expect(dateInput.validity.valueMissing).toBe(true);
  });

  it('should prevent form submission with empty guests number', async () => {
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
    userEvent.type(screen.getByLabelText('Occasion:'), 'Birthday');

    const form = screen.getByTestId('reservation-form');
    const handleSubmit = jest.fn((e) => e.preventDefault());
    form.addEventListener('submit', handleSubmit);

    userEvent.click(screen.getByText('Make Reservation'));

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalled();
      expect(handleSubmit.mock.calls[0][0].defaultPrevented).toBe(true);
    });

    const guestInput = screen.getByLabelText(
      'Number of Guests:',
    ) as HTMLInputElement;
    expect(guestInput.validity.valueMissing).toBe(true);
  });

  it('should prevent form submission with non-numeric guests number', async () => {
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
    userEvent.type(screen.getByLabelText('Number of Guests:'), 'four');
    userEvent.type(screen.getByLabelText('Occasion:'), 'Birthday');

    const form = screen.getByTestId('reservation-form');
    const handleSubmit = jest.fn((e) => e.preventDefault());
    form.addEventListener('submit', handleSubmit);

    userEvent.click(screen.getByText('Make Reservation'));

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalled();
      expect(handleSubmit.mock.calls[0][0].defaultPrevented).toBe(true);
    });

    const guestInput = screen.getByLabelText(
      'Number of Guests:',
    ) as HTMLInputElement;
    expect(guestInput.validity.valueMissing).toBe(true);
  });
});
