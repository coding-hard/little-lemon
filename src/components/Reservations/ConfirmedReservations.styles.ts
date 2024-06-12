import styled from 'styled-components';

export const ConfirmContainer = styled.div`
  padding: 2rem;
  background-color: #e6f7ff;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-height: 36.95vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ConfirmMessage = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ConfirmButton = styled.button`
  padding: 0.75rem 1.5rem;
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

export const ConfirmDetails = styled.div`
  text-align: left;
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;

  p {
    margin: 0.5rem 0;
  }
`;
