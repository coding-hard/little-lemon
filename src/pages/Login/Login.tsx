import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  LoginContainer,
  LoginTitle,
  LoginForm,
  LoginLabel,
  LoginInput,
  LoginButton,
  RegisterLink,
  ErrorMessage,
} from './Login.styles';

const strongPasswordRegex =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

const Login: React.FC = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: '',
  });
  const [isRegistering, setIsRegistering] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });

    if (name === 'password') {
      if (!strongPasswordRegex.test(value)) {
        setPasswordError(
          'Password must be at least 6 characters long and contain at least 1 uppercase letter, 1 number, and 1 special character.',
        );
      } else {
        setPasswordError('');
      }
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!strongPasswordRegex.test(loginDetails.password)) {
      alert('Password does not meet the requirements.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    if (users.find((user: any) => user.username === loginDetails.username)) {
      alert('Username already exists');
      return;
    }

    users.push(loginDetails);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful! You can now log in.');
    setIsRegistering(false);
    setLoginDetails({ username: '', password: '' });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (user: any) =>
        user.username === loginDetails.username &&
        user.password === loginDetails.password,
    );

    if (user) {
      login();
      alert('Login successful!');
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <LoginContainer>
      <LoginTitle>{isRegistering ? 'Register' : 'Login'}</LoginTitle>
      <LoginForm onSubmit={isRegistering ? handleRegister : handleLogin}>
        <LoginLabel htmlFor="username">Username:</LoginLabel>
        <LoginInput
          type="text"
          id="username"
          name="username"
          value={loginDetails.username}
          onChange={handleChange}
          minLength={3}
          required
        />
        <LoginLabel htmlFor="password">Password:</LoginLabel>
        <LoginInput
          type="password"
          id="password"
          name="password"
          value={loginDetails.password}
          onChange={handleChange}
          minLength={6}
          required
        />
        {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        <LoginButton data-testid="submit-button" type="submit">
          {isRegistering ? 'Register' : 'Login'}
        </LoginButton>
      </LoginForm>
      <RegisterLink
        data-testid="toggle-register-link"
        onClick={() => setIsRegistering(!isRegistering)}
      >
        {isRegistering
          ? 'Already have an account? Login'
          : "Don't have an account? Register"}
      </RegisterLink>
    </LoginContainer>
  );
};

export default Login;
