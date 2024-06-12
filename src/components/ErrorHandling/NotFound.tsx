import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const NotFoundMessage = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
`;

const HomeButton = styled(Link)`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #ff6347;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #ff4500;
  }
`;

const NotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <NotFoundMessage>Oops... Page not found!</NotFoundMessage>
      <HomeButton to="/">Return to Homepage</HomeButton>
    </NotFoundContainer>
  );
};

export default NotFound;
