import React, { useState, useEffect, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const ErrorMessage = styled.h1`
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

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error: Event) => {
      setHasError(true);
      console.error('Error caught by ErrorBoundary:', error);
    };

    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('error', handleError);
      setHasError(false);
    };
  }, []);

  if (hasError) {
    return (
      <ErrorContainer>
        <ErrorMessage>Oops...something went wrong!</ErrorMessage>
        <HomeButton to="/">Return to Homepage</HomeButton>
      </ErrorContainer>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;
