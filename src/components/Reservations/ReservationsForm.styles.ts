import styled from 'styled-components';

export const ReservationForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ReservationLabel = styled.label`
  font-size: 1rem;
  color: #777;
  margin-bottom: 0.5rem;
`;

export const ReservationInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ReservationSelect = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
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
