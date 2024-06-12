import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login/Login';
import { useAuth } from '../context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('../context/AuthContext', () => ({
  useAuth: () => ({
    login: jest.fn(),
  }),
}));

beforeAll(() => {
  window.alert = jest.fn();
});

describe('Login Component - Input Validation', () => {
  afterEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  it('should show an error when username is already taken during registration', async () => {
    const { login } = useAuth();
    const users = [{ username: 'existingUser', password: 'Password1!' }];
    localStorage.setItem('users', JSON.stringify(users));

    render(
      <Router>
        <Login />
      </Router>,
    );

    userEvent.click(screen.getByTestId('toggle-register-link'));

    userEvent.type(screen.getByLabelText('Username:'), 'existingUser');
    userEvent.type(screen.getByLabelText('Password:'), 'Password1!');

    userEvent.click(screen.getByTestId('submit-button'));

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('Username already exists');
    });

    expect(login).not.toHaveBeenCalled();
  });

  it('should show an error when password does not meet strength requirements during registration', async () => {
    const { login } = useAuth();

    render(
      <Router>
        <Login />
      </Router>,
    );

    userEvent.click(screen.getByTestId('toggle-register-link'));

    userEvent.type(screen.getByLabelText('Username:'), 'newUser');
    userEvent.type(screen.getByLabelText('Password:'), 'weakpass');

    userEvent.click(screen.getByTestId('submit-button'));

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        'Password does not meet the requirements.',
      );
    });

    expect(login).not.toHaveBeenCalled();
  });
});
