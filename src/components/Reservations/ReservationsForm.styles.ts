import styled from 'styled-components';

export const ReservationForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ReservationLabel = styled.label`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

export const ReservationInput = styled.input`
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

export const ReservationSelect = styled.select`
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

export const ReservationButton = styled.button`
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
`;
