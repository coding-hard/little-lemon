import styled from 'styled-components';

export const LoginContainer = styled.div`
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  margin: 2rem auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const LoginTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LoginLabel = styled.label`
  font-size: 1rem;
  color: #777;
  margin-bottom: 0.5rem;
`;

export const LoginInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    border-color: #ff6347;
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 99, 71, 0.25);
  }
`;

export const LoginButton = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  background-color: #ff6347;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #ff4500;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 99, 71, 0.5);
  }
`;

export const RegisterLink = styled.a`
  color: #007bff;
  cursor: pointer;
  text-align: center;
  margin-top: 1rem;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: none;
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
`;
